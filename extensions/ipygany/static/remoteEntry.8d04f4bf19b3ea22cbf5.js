var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).ipygany=(()=>{"use strict";var e,r,t,n,a,o,i,l,u,s,f,d,c,p,h,b,v,g,y,m,w={2215:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(893),t.e(367),t.e(568)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(893),t.e(367),t.e(480)]).then((()=>()=>t(4480)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>a,init:()=>o})}},P={};function S(e){if(P[e])return P[e].exports;var r=P[e]={id:e,exports:{}};return w[e].call(r.exports,r,r.exports,S),r.exports}return S.m=w,S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>e+"."+{153:"731cf064a717b2eec68e",212:"690d496fa9aec8e06518",272:"0fad1645beca2ed49f5e",367:"2d66e682401e2340a8d4",480:"fd8a269df5f1e8d47180",538:"8e2e0aa259f6ec4bb255",539:"f99c703890c957d631ec",568:"2dac415045ba52492f12",738:"c8f3abc82001001bcecc",893:"9c5bdc297a6af80c44e6"}[e]+".js",S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ipygany:",S.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var o=S.S[t],i="ipygany",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];switch(t){case"default":l("binary-search-tree","0.2.6",(()=>Promise.all([S.e(153),S.e(538)]).then((()=>()=>S(7153))))),l("ganyjs","0.7.1",(()=>Promise.all([S.e(212),S.e(272),S.e(893),S.e(738)]).then((()=>()=>S(3272))))),l("ipygany","0.5.0",(()=>Promise.all([S.e(893),S.e(367),S.e(568)]).then((()=>()=>S(1568))))),l("three","0.118.3",(()=>S.e(212).then((()=>()=>S(2212))))),l("util","0.12.3",(()=>S.e(539).then((()=>()=>S(9539)))))}return e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;S.g.importScripts&&(e=S.g.location+"");var r=S.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),S.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,r+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!u||("u"==d?l>n&&!a:""==d!=a);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||f<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+a(t)+")",f=(e,r,t,n)=>{var a=u(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,a,n)),c(e[t][a])},d=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},c=e=>(e.loaded=1,e.get()),h=(p=e=>function(r,t,n,a){var o=S.I(r);return o&&o.then?o.then(e.bind(e,r,S.S[r],t,n,a)):e(r,S.S[r],t,n,a)})(((e,r,t,n)=>r&&S.o(r,t)?c(l(r,t)):n())),b=p(((e,r,t,n)=>(i(e,t),f(r,0,t,n)))),v=p(((e,r,t,n,a)=>{var o=r&&S.o(r,t)&&d(r,t,n);return o?c(o):a()})),g={},y={2893:()=>v("default","three",[2,0,118,0],(()=>S.e(212).then((()=>()=>S(2212))))),2064:()=>v("default","ganyjs",[2,0,7,1],(()=>Promise.all([S.e(212),S.e(272),S.e(738)]).then((()=>()=>S(3272))))),4217:()=>b("default","@jupyter-widgets/base",[,[1,4,0,0],[1,3],[1,2],[1,1,1,10],1,1,1]),8538:()=>h("default","util",(()=>S.e(539).then((()=>()=>S(9539))))),4738:()=>v("default","binary-search-tree",[2,0,2,6],(()=>Promise.all([S.e(153),S.e(538)]).then((()=>()=>S(7153)))))},m={367:[2064,4217],538:[8538],738:[4738],893:[2893]},S.f.consumes=(e,r)=>{S.o(m,e)&&m[e].forEach((e=>{if(S.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,w[e]=t=>{delete P[e],t.exports=r()}},n=r=>{delete g[e],w[e]=t=>{throw delete P[e],r}};try{var a=y[e]();a.then?r.push(g[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={639:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^([57]38|893)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=S.p+S.u(r),i=new Error;S.l(o,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var n,a,[o,i,l]=t,u=0,s=[];u<o.length;u++)a=o[u],S.o(e,a)&&e[a]&&s.push(e[a][0]),e[a]=0;for(n in i)S.o(i,n)&&(S.m[n]=i[n]);for(l&&l(S),r&&r(t);s.length;)s.shift()()},t=self.webpackChunkipygany=self.webpackChunkipygany||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),S(2215)})();