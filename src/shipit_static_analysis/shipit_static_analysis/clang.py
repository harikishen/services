# -*- coding: utf-8 -*-
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

import multiprocessing
import subprocess
import threading
import queue
import json
import os
import re

from cli_common.log import get_logger

logger = get_logger(__name__)

REGEX_HEADER = re.compile(r'^(.+):(\d+):(\d+): (warning|error|note): ([\w\s\.\'\"^_,-<=>\(\)]+)(?: \[([\.\w-]+)\])?\n', re.MULTILINE)

ISSUE_MARKDOWN = '''
## {type}
**Message**: {message}
**Location**: {location}
**Clang check**: {check}
```
{body}
```
{notes}
'''

ISSUE_NOTE_MARKDOWN = '''
**Note**: {message}
**Location**: {location}
```
{body}
```
'''


class ClangTidy(object):
    '''
    Clang Tidy Parallel runner
    Inspired by run-clang-tidy.py
    '''
    db_path = 'compile_commands.json'

    def __init__(self, work_dir, build_dir, workers=0):
        assert os.path.isdir(work_dir)

        self.work_dir = work_dir
        self.build_dir = os.path.join(work_dir, build_dir)

        # Load the database and extract all files.
        database = json.load(open(os.path.join(self.build_dir, self.db_path)))
        self.database_files = [entry['file'] for entry in database]

        # Build workers queue
        if workers == 0:
            workers = multiprocessing.cpu_count()
        else:
            assert 0 < workers <= 32
        self.workers = workers
        logger.info('Clang tidy will spawn workers', nb=workers)
        self.queue_workers = queue.Queue(self.workers)

        # Build issues queue to get results
        self.queue_issues = queue.Queue()

    def run(self, checks, files):
        '''
        Run modified files with specified checks through clang-tidy
        using threaded workers (communicate through queues)
        Output a list of ClangIssue
        '''
        # Build up a big regexy filter from all modified files
        file_name_re = re.compile('(' + ')|('.join(files) + ')')

        issues = []
        try:
            # Spin up a bunch of tidy-launching threads.
            for _ in range(self.workers):
                t = threading.Thread(
                    target=self.run_clang_tidy,
                    args=(checks, )
                )
                t.daemon = True
                t.start()

            # Fill the queue with files.
            for name in self.database_files:
                if file_name_re.search(name):
                    self.queue_workers.put(name)

            # Wait for all threads to be done.
            self.queue_workers.join()

            # Now read all issues from queue
            while not self.queue_issues.empty():
                issue = self.queue_issues.get()
                issues.append(issue)
                self.queue_issues.task_done()

        except KeyboardInterrupt:
            # This is a sad hack. Unfortunately subprocess goes
            # bonkers with ctrl-c and we start forking merrily.
            logger.warn('Ctrl-C detected, exiting...')
            os.kill(0, 9)

        return issues

    def run_clang_tidy(self, checks):
        '''
        The actual clang-tidy worker, working on the queue
        '''
        while True:
            # Get new filename to work on
            filename = self.queue_workers.get()

            # Build command line for a filename
            cmd = [
                'clang-tidy',  # use from $PATH
                # Show warnings in all in-project headers by default.
                '-header-filter=^{}/.*'.format(os.path.basename(self.build_dir)),
                '-checks={}'.format(','.join(checks)),
                '-p={}'.format(self.build_dir),
                filename,
            ]
            logger.info('Running clang-tidy', cmd=' '.join(cmd))

            # Run command
            clang_output = subprocess.check_output(cmd, cwd=self.work_dir)

            # Push output
            for issue in self.parse_issues(clang_output.decode('utf-8')):
                self.queue_issues.put(issue)

            # Mark current task as done
            self.queue_workers.task_done()

    def parse_issues(self, clang_output):
        '''
        Parse clang-tidy output into structured issues
        '''

        # Limit clang output parsing to 'Enabled checks:'
        end = re.search(r'^Enabled checks:\n', clang_output, re.MULTILINE)
        if end is not None:
            clang_output = clang_output[:end.start()-1]

        # Sort headers by positions
        headers = sorted(
            REGEX_HEADER.finditer(clang_output),
            key=lambda h: h.start()
        )

        issues = []
        for i, header in enumerate(headers):
            issue = ClangIssue(header.groups(), self.work_dir)

            # Get next header
            if i+1 < len(headers):
                next_header = headers[i+1]
                issue.body = clang_output[header.end():next_header.start() - 1]
            else:
                issue.body = clang_output[header.end():]

            if issue.is_problem():
                # Save problem to append notes
                # Skip diagnostic errors
                if issue.check == 'clang-diagnostic-error':
                    logger.info('Skipping clang-diagnostic-error: {}'.format(issue))
                else:
                    issues.append(issue)
                    logger.info('Found code issue {}'.format(issue))

            elif issues:
                # Link notes to last problem
                issues[-1].notes.append(issue)

        return issues


class ClangIssue(object):
    '''
    An issue reported by clang-tidy
    '''
    def __init__(self, header_data, work_dir):
        assert isinstance(header_data, tuple)
        assert len(header_data) == 6
        self.path, self.line, self.char, self.type, self.message, self.check = header_data  # noqa
        if self.path.startswith(work_dir):
            self.path = self.path[len(work_dir):]
        self.line = int(self.line)
        self.char = int(self.char)
        self.body = None
        self.notes = []

    def __str__(self):
        return '[{}] {} {}:{}'.format(self.type, self.path, self.line, self.char)

    def is_problem(self):
        return self.type in ('warning', 'error')

    def as_markdown(self):
        return ISSUE_MARKDOWN.format(
            type=self.type,
            message=self.message,
            location='{}:{}:{}'.format(self.path, self.line, self.char),
            body=self.body,
            check=self.check,
            notes='\n'.join([
                ISSUE_NOTE_MARKDOWN.format(
                    message=n.message,
                    location='{}:{}:{}'.format(n.path, n.line, n.char),
                    body=n.body,
                ) for n in self.notes
            ]),
        )
