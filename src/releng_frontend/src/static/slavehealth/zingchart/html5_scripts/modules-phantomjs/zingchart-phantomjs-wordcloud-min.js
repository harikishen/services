/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.130812
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1O.3b("2u");(1o(){j.2q=1o(){w.1b=9;w.19=2T;w.1F=2;w.1A=2n;w.28=25;w.1H=10;w.1R=1x;w.1J="2e";w.1T=[];w.1l="";w.1y=[];w.1p=G;w.12="1G";w.1W="22";w.1U="#2H";w.1K=["#2z","#2D","#3d","#39","#3e","#3i"];w.29=1o(){7 a=(30.22()*2Z+1<<0).2W(16);23(a.13<6){a="0"+a}1s"#"+a};w.2i=1o(){7 c={};5(w.1l!=""){5(w.1J=="2e"){7 e=w.1l.1Z(/\\W+/g," ");7 d=e.36(" ")}17{5(w.1J=="35"){w.1F=0;7 d=[];1c(7 b=0;b<w.1l.13;b++){5(w.1l[b]!=" "){d.1I(w.1l[b])}}}}1c(7 b=0;b<d.13;b++){5(d[b].13>=w.1F&&j.3k(w.1T,d[b])==-1){5(c[d[b]]==G){c[d[b]]=0}c[d[b]]++}}}5(w.1y.13>0){w.1p={};1c(7 b=0;b<w.1y.13;b++){7 a=w.1y[b];5(a.18!=G){w.1p[a.18]=a;c[a.18]=a.1g||0}}}1s c};w.2r=1o(b,a){1s!(a.1B>b.1B+b.I||a.1B+a.I<b.1B||a.1C>b.1C+b.F||a.1C+a.F<b.1C)}};1O.2X(G,"38",1o(R,1k){7 t;7 q=1O.3g(R.3f);1c(7 1m=0,V=1k[j.1e[16]].13;1m<V;1m++){5(1k[j.1e[16]][1m]["1Q"]&&1k[j.1e[16]][1m]["1Q"]=="2u"){7 A=1k[j.1e[16]][1m]["1Q"];7 k=1k[j.1e[16]][1m];7 u={};5(k.24){u=k.24[A]||k.24}j.2Q(u,1d,["2s"]);k[j.1e[10]]=k[j.1e[10]]||[];1c(7 1h=k[j.1e[10]].13-1;1h>=0;1h--){5(k[j.1e[10]][1h]["2d"]){k[j.1e[10]].2j(1h,1)}}7 s=2k j.2q();5((t=u.18)!=G){s.1l=t}5((t=u.2s)!=G){s.1y=t}5((t=u.31)!=G){s.12=t}5((t=u.34)!=G){s.1T=t}5((t=u.2Y)!=G){s.1J=t}5((t=u["2f-13"])!=G){s.1F=j.15(t)}5((t=u["2f-1V-21"])!=G){s.1b=j.15(t)}5((t=u["2m-1V-21"])!=G){s.19=j.15(t)}5((t=u["2m-2U"])!=G){s.1A=j.15(t)}5((t=u["1u-1Q"])!=G){s.1W=t}5((t=u.1u)!=G){s.1U=j.2C.2G(t)}5((t=u.2b)!=G){s.1K=t}5((t=u["1S-2c"])!=G){s.28=j.15(t)}5((t=u["1S-2l"])!=G){s.1H=j.15(t)}5((t=u.2v)!=G){s.1R=j.2I(t)}7 D={};5((t=u.1t)!=G){j.1r(t,D)}7 X=2k j.2O(q);X.2J(D);X.2L();s.1b=j.1M(4,s.1b);s.19=j.1M(4,s.19);5(s.1b>=s.19){s.19=s.1b+2}7 B=1O.3h(q,1k,1m);7 H=[];7 e=B.11.x+B.11.1j/2,b=B.11.y+B.11.1n/2;7 J=1;5(s.12=="1G"){J=0.6}17{5(s.12=="1f-1w"||s.12=="1f-1D"){J=0.8}}7 Z=B.11.1j*B.11.1n*J;7 1P=s.2i();7 E=[],Y=0,C=-2h.2g,v=2h.2g;1c(7 W 2M 1P){E.1I({18:W,1g:1P[W],1Y:1P[W]})}E.2K(1o(i,c){5(i.1g<c.1g){1s 1}17{5(i.1g>c.1g){1s-1}}1s 0});5(s.1A!=-1){E.2j(s.1A,E.13-s.1A)}1c(7 o=0;o<E.13;o++){C=j.1M(E[o].1g,C);v=j.2S(E[o].1g,v)}1c(7 o=0;o<E.13;o++){E[o].1g=(C==v)?2R:(10+1N*(E[o].1g-v)/(C-v))}1o N(){1c(7 c=0;c<E.13;c++){E[c].1E=j.15(s.1b+(E[c].1g/2n)*(s.19-s.1b));E[c].1j=j.L.2x(q.N,E[c].18,X.27,E[c].1E,X.2w)+X.2A+X.2B;E[c].1n=E[c].1E*1.1+X.2F+X.2E}}N();7 Q=1x;23(!Q){Q=1d;7 S=0;1c(7 o=0;o<E.13;o++){S+=E[o].1j*E[o].1n}5(S>Z){Q=1x;s.19--;5(s.19==s.1b){Q=1d}17{N()}}}5(u["1S-2l"]==G){s.1H=(s.19-s.1b+0.25*s.1b*s.1F+1)/10}7 d=0,O=0;7 h=s.19/2,g=s.19/2;7 K=[],z=3a;1c(7 o=0,p=E.13;o<p;o++){7 1i=1d;7 1a=e,14=b;7 M=s.1U;3j(s.1W){2a"22":M=s.29();1v;2a"2b":M=s.1K[o%s.1K.13];1v}7 l=s.1R?((o%4==0||o%4==3)?0:1N):0;7 x=1x;7 1q=E[o].18;7 P={2t:0,2d:1d};j.1r(D,P);j.1r({2c:l,"1V-21":E[o].1E,18:1q,1u:M},P);5(u.1t!=G&&(t=u.1t["1X-20"])!=G){P["1X-20"]={};j.1r(t,P["1X-20"])}7 y=1q;P.1z={32:1x,"3c-1u":"#2V",1u:"#2y","2o-1j":1,"2o-1u":"#33",2t:10,18:y};5(u.1t!=G&&(t=u.1t["1z"])!=G){j.1r(t,P.1z)}P.1z["18"]=P.1z["18"].1Z("%18",1q).1Z("%1Y",E[o].1Y);5(s.1p&&s.1p[1q]!=G){j.1r(s.1p[1q],P);j.1r(s.1p[1q]["1t"],P)}7 U=0,1L=0,T=0,a=s.1b/2;5(s.12=="1f-1w"){T=1}17{5(s.12=="1f-1D"){T=(o%2==0)?1:-1}}K[o]=0;23(1i){7 n=E[o].1j;7 r=E[o].1n;5(s.12=="1G"){1a=e+(o==0?0:h)*j.2P(d)-n/2;14=b+(o==0?0:g)*j.2N(d)-r/2}17{5(s.12=="1f-1D"){5(o==0){1a=e-n/2}17{1a=B.11.x+U}14=b-r/2+1L}17{5(s.12=="1f-1w"){5(o==0){1a=e-n/2}17{1a=B.11.x+U}14=B.11.y+1L}}}5(l==1N&&s.12=="1f-1w"){14=j.1M(14,B.11.y+r)}P.x=j.15(1a);P.y=j.15(14);1i=1x;5(l==1N){7 f=n;1a=j.15(1a+n/2-r/2);14=j.15(14+r/2-n/2);n=r;r=f}5(1a<B.11.x||1a+n>B.11.x+B.11.1j||14<B.11.y||14+r>B.11.y+B.11.1n){5(s.12=="1G"){5(K[o]<z){K[o]++;1i=1d}17{x=1d;1v}}17{5(s.12=="1f-1w"||s.12=="1f-1D"){5(1a+n>B.11.x+B.11.1j){1i=1d;U=-a;1L+=T*a}5(14+r>B.11.y+B.11.1n){x=1d;1v}5(14<B.11.y){x=1d;1v}}}}7 L={1B:1a,1C:14,I:n,F:r,37:E[o].1E,1l:E[o].18,27:X.27};5(!1i){1c(7 1h=0,m=H.13;1h<m;1h++){5(s.2r(H[1h],L)){U+=H[1h].I;1i=1d;1v}}}5(s.12=="1G"){5(1i){d+=s.28;5(d>O+26){h+=s.1H;g+=s.1H*(B.11.1n/B.11.1j);d=O=j.15(j.2p(0,26))}}17{h=g=s.19/2;d=O=j.15(j.2p(0,26))}}17{5(s.12=="1f-1w"||s.12=="1f-1D"){5(1i){U+=a}}}}5(!x){H.1I(L);k[j.1e[10]].1I(P)}}}}1s 1k})}());',62,207,'|||||if||var||||||||||||ZC|||||ag||||||||this||||||||aa||null|||||||||||||||||||||plotarea|CH|length|ac|_i_||else|text|A9B|ad|A8Y|for|true|_|flow|count|af|ab|width|ae|AN|ai|height|function|oWordsMap|aj|_cp_|return|style|color|break|top|false|aWords|tooltip|G7|iX|iY|center|fontSize|A8O|spiral|A8A|push|FI|B1|ah|BT|90|zingchart|ak|type|A86|step|A6S|BO|font|A8S|hover|hits|replace|state|size|random|while|options||360|HI|A89|A8W|case|palette|angle|dataWordCloud|word|min|MAX_VALUE|Number|KV|splice|new|radius|max|100|border|_r_|A8X|intersectRect|words|padding|wordcloud|rotate|MQ|A70|333|6a921f|EL|FA|AQ|007fa3|G4|FO|GD|000|_b_|append|sort|parse|in|DD|D2|DG|_todash_|50|DI|99|items|fff|toString|bind|token|16777215|Math|aspect|visible|999|ignore|character|split|EY|dataparse|b79007|500|setModule|background|a62b02|563d02|id|getLoader|getGraphInfo|0b32a0|switch|AG'.split('|'),0,{}))