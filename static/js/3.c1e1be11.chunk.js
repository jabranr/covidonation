(this.webpackJsonpcovidonation=this.webpackJsonpcovidonation||[]).push([[3],{350:function(t,e,n){!function(e,n){var i=function(t,e,n){"use strict";var i,a;if(function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in a=t.lazySizesConfig||t.lazysizesConfig||{},n)e in a||(a[e]=n[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var r=e.documentElement,s=t.HTMLPictureElement,o=t.addEventListener.bind(t),l=t.setTimeout,c=t.requestAnimationFrame||l,u=t.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},h=Array.prototype.forEach,v=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},m=function(t,e){v(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},y=function(t,e){var n;(n=v(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(n," "))},z=function t(e,n,i){var a=i?"addEventListener":"removeEventListener";i&&t(e,n),f.forEach((function(t){e[a](t,n)}))},p=function(t,n,a,r,s){var o=e.createEvent("Event");return a||(a={}),a.instance=i,o.initEvent(n,!r,!s),o.detail=a,t.dispatchEvent(o),o},b=function(e,n){var i;!s&&(i=t.picturefill||a.pf)?(n&&n.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[e]})):n&&n.src&&(e.src=n.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,n){for(n=n||t.offsetWidth;n<a.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},E=function(){var t,n,i=[],a=[],r=i,s=function(){var e=r;for(r=i.length?a:i,t=!0,n=!1;e.length;)e.shift()();t=!1},o=function(i,a){t&&!a?i.apply(this,arguments):(r.push(i),n||(n=!0,(e.hidden?l:c)(s)))};return o._lsFlush=s,o}(),_=function(t,e){return e?function(){E(t)}:function(){var e=this,n=arguments;E((function(){t.apply(e,n)}))}},w=function(t){var e,i,a=function(){e=null,t()},r=function t(){var e=n.now()-i;e<99?l(t,99-e):(u||a)(a)};return function(){i=n.now(),e||(e=l(r,99))}},N=function(){var s,f,g,C,N,L,x,W,S,B,T,F,R=/^img$/i,k=/^iframe$/i,D="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),H=0,O=0,P=-1,$=function(t){O--,(!t||O<0||!t.target)&&(O=0)},q=function(t){return null==F&&(F="hidden"==A(e.body,"visibility")),F||!("hidden"==A(t.parentNode,"visibility")&&"hidden"==A(t,"visibility"))},I=function(t,n){var i,a=t,s=q(t);for(W-=n,T+=n,S-=n,B+=n;s&&(a=a.offsetParent)&&a!=e.body&&a!=r;)(s=(A(a,"opacity")||1)>0)&&"visible"!=A(a,"overflow")&&(i=a.getBoundingClientRect(),s=B>i.left&&S<i.right&&T>i.top-1&&W<i.bottom+1);return s},J=function(){var t,n,o,l,c,u,d,g,h,v,m,y,z=i.elements;if((C=a.loadMode)&&O<8&&(t=z.length)){for(n=0,P++;n<t;n++)if(z[n]&&!z[n]._lazyRace)if(!D||i.prematureUnveil&&i.prematureUnveil(z[n]))X(z[n]);else if((g=z[n].getAttribute("data-expand"))&&(u=1*g)||(u=H),v||(v=!a.expand||a.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:a.expand,i._defEx=v,m=v*a.expFactor,y=a.hFac,F=null,H<m&&O<1&&P>2&&C>2&&!e.hidden?(H=m,P=0):H=C>1&&P>1&&O<6?v:0),h!==u&&(L=innerWidth+u*y,x=innerHeight+u,d=-1*u,h=u),o=z[n].getBoundingClientRect(),(T=o.bottom)>=d&&(W=o.top)<=x&&(B=o.right)>=d*y&&(S=o.left)<=L&&(T||B||S||W)&&(a.loadHidden||q(z[n]))&&(f&&O<3&&!g&&(C<3||P<4)||I(z[n],u))){if(X(z[n]),c=!0,O>9)break}else!c&&f&&!l&&O<4&&P<4&&C>2&&(s[0]||a.preloadAfterLoad)&&(s[0]||!g&&(T||B||S||W||"auto"!=z[n].getAttribute(a.sizesAttr)))&&(l=s[0]||z[n]);l&&!c&&X(l)}},U=function(t){var e,i=0,r=a.throttleDelay,s=a.ricTimeout,o=function(){e=!1,i=n.now(),t()},c=u&&s>49?function(){u(o,{timeout:s}),s!==a.ricTimeout&&(s=a.ricTimeout)}:_((function(){l(o)}),!0);return function(t){var a;(t=!0===t)&&(s=33),e||(e=!0,(a=r-(n.now()-i))<0&&(a=0),t||a<9?c():l(c,a))}}(J),j=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:($(t),m(e,a.loadedClass),y(e,a.loadingClass),z(e,K),p(e,"lazyloaded"))},G=_(j),K=function(t){G({target:t.target})},Q=function(t){var e,n=t.getAttribute(a.srcsetAttr);(e=a.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},V=_((function(t,e,n,i,r){var s,o,c,u,f,v;(f=p(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(n?m(t,a.autosizesClass):t.setAttribute("sizes",i)),o=t.getAttribute(a.srcsetAttr),s=t.getAttribute(a.srcAttr),r&&(u=(c=t.parentNode)&&d.test(c.nodeName||"")),v=e.firesLoad||"src"in t&&(o||s||u),f={target:t},m(t,a.loadingClass),v&&(clearTimeout(g),g=l($,2500),z(t,K,!0)),u&&h.call(c.getElementsByTagName("source"),Q),o?t.setAttribute("srcset",o):s&&!u&&(k.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}}(t,s):t.src=s),r&&(o||u)&&b(t,{src:s})),t._lazyRace&&delete t._lazyRace,y(t,a.lazyClass),E((function(){var e=t.complete&&t.naturalWidth>1;v&&!e||(e&&m(t,"ls-is-cached"),j(f),t._lazyCache=!0,l((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&O--}),!0)})),X=function(t){if(!t._lazyRace){var e,n=R.test(t.nodeName),i=n&&(t.getAttribute(a.sizesAttr)||t.getAttribute("sizes")),r="auto"==i;(!r&&f||!n||!t.getAttribute("src")&&!t.srcset||t.complete||v(t,a.errorClass)||!v(t,a.lazyClass))&&(e=p(t,"lazyunveilread").detail,r&&M.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,O++,V(t,e,r,i,n))}},Y=w((function(){a.loadMode=3,U()})),Z=function(){3==a.loadMode&&(a.loadMode=2),Y()},tt=function t(){f||(n.now()-N<999?l(t,999):(f=!0,a.loadMode=3,U(),o("scroll",Z,!0)))};return{_:function(){N=n.now(),i.elements=e.getElementsByClassName(a.lazyClass),s=e.getElementsByClassName(a.lazyClass+" "+a.preloadClass),o("scroll",U,!0),o("resize",U,!0),o("pageshow",(function(t){if(t.persisted){var n=e.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&c((function(){n.forEach((function(t){t.complete&&X(t)}))}))}})),t.MutationObserver?new MutationObserver(U).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",U,!0),r.addEventListener("DOMAttrModified",U,!0),setInterval(U,999)),o("hashchange",U,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e.addEventListener(t,U,!0)})),/d$|^c/.test(e.readyState)?tt():(o("load",tt),e.addEventListener("DOMContentLoaded",U),l(tt,2e4)),i.elements.length?(J(),E._lsFlush()):U()},checkElems:U,unveil:X,_aLSL:Z}}(),M=function(){var t,n=_((function(t,e,n,i){var a,r,s;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),d.test(e.nodeName||""))for(r=0,s=(a=e.getElementsByTagName("source")).length;r<s;r++)a[r].setAttribute("sizes",i);n.detail.dataAttr||b(t,n.detail)})),i=function(t,e,i){var a,r=t.parentNode;r&&(i=C(t,r,i),(a=p(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=a.detail.width)&&i!==t._lazysizesWidth&&n(t,r,a,i))},r=w((function(){var e,n=t.length;if(n)for(e=0;e<n;e++)i(t[e])}));return{_:function(){t=e.getElementsByClassName(a.autosizesClass),o("resize",r)},checkElems:r,updateElem:i}}(),L=function t(){!t.i&&e.getElementsByClassName&&(t.i=!0,M._(),N._())};return l((function(){a.init&&L()})),i={cfg:a,autoSizer:M,loader:N,init:L,uP:b,aC:m,rC:y,hC:v,fire:p,gW:C,rAF:E}}(e,e.document,Date);e.lazySizes=i,t.exports&&(t.exports=i)}("undefined"!=typeof window?window:{})}}]);
//# sourceMappingURL=3.c1e1be11.chunk.js.map