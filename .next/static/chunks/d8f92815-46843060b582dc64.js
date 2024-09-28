"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9573],{31031:function(e,t,r){r.d(t,{$j:function(){return t0},Ct:function(){return tY},EK:function(){return ro},F2:function(){return o0},Fg:function(){return eO},J2:function(){return r7},Jh:function(){return tP},Kq:function(){return oc},Kx:function(){return o$},Lg:function(){return v},Lt:function(){return z},NM:function(){return rj},OK:function(){return nS},Od:function(){return nj},Of:function(){return S},Oo:function(){return o3},Ph:function(){return od},Q5:function(){return C},Qr:function(){return nE},R:function(){return ng},RE:function(){return rL},Re:function(){return r_},SV:function(){return rM},Tu:function(){return ni},VW:function(){return nq},Vq:function(){return nn},W2:function(){return ra},X6:function(){return rc},XL:function(){return ez},XZ:function(){return re},Xp:function(){return rZ},Y8:function(){return ot},Zb:function(){return t9},__:function(){return tS},bg:function(){return rH},d2:function(){return eL},eb:function(){return eF},f6:function(){return eT},fo:function(){return rP},gF:function(){return rp},h4:function(){return ek},hO:function(){return k},h_:function(){return rJ},iX:function(){return rT},j2:function(){return nb},kC:function(){return tU},kS:function(){return nx},li:function(){return rV},m4:function(){return m},mh:function(){return rX},oi:function(){return oN},p2:function(){return tI},p8:function(){return nd},pm:function(){return nX},qE:function(){return t_},qh:function(){return ej},rj:function(){return rd},rs:function(){return om},sJ:function(){return rN},sN:function(){return nw},sz:function(){return rC},td:function(){return nF},u:function(){return oP},uE:function(){return oQ},ue:function(){return e_},v2:function(){return nh},vI:function(){return rU},x4:function(){return nO},xu:function(){return tV},xv:function(){return tX},zx:function(){return t4}});var o=r(72979),n=r(87325),i=r(57437),a=r(2265),l=r(12659),d=r(89183),s=r(76931),u=r(29271),c=r(85621),f=r(94674),p=r(66345),h=r(95127),b=r(54887),g=r(62607);let m=o.m4,v=(0,o.fi)(),x=[],w={},y="--motion-content-opacity",$={initial:{opacity:.5,[y]:0,scale:.97,willChange:"transform"},animate:{opacity:[null,1,1],[y]:[null,null,1],scale:1},exit:{opacity:[null,null,0],[y]:[null,0,0],scale:.97},transition:{duration:.4,type:"spring"}};function k(e){return 0===e?0:`${e/16}rem`}function z(e,t,r){return(t?.map(r)||[]).map((t,r)=>0===r?t:{[`@media screen and (min-width: ${e[r-1]}px)`]:t})}function j(e,t,r=x){if(!Array.isArray(r))throw Error("the property must be array of numbers");if(0===r.length)return null;let{media:o,space:i}=(0,n.aQ)(e);return z(o,r,e=>{var r;return r=k(i[e]),t.reduce((e,t)=>(e[t]=r,e),{})})}function R(e,t){let{$size:r,$weight:o}=t,{font:i,media:a}=(0,n.aQ)(t.theme),{family:l,sizes:d,weights:s}=i[e],u=o&&s[o]||s.regular,c=d[2],f={position:"relative",fontFamily:l,fontWeight:u,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return r?[f,...z(a,r,e=>(function(e){let{ascenderHeight:t,descenderHeight:r,fontSize:o,iconSize:n,letterSpacing:i,lineHeight:a}=e,l=t+r,d=a-l,s=2*Math.floor(1.125*o/2)+1;return{fontSize:k(o),lineHeight:`calc(${a} / ${o})`,letterSpacing:k(i),transform:`translateY(${k(r)})`,"&:before":{marginTop:`calc(${k(0-l)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:k((d-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:k((d-n)/2)}}})(d[e]||c))]:(R.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:r,props:t,base:f}),R.warned=!0),[f])}function E(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$align,e=>({textAlign:e}))}function C(e,t){let r=(0,a.useMemo)(()=>JSON.stringify(e??t),[t,e]);return(0,a.useMemo)(()=>void 0===e?t||x:Array.isArray(e)?e:[e],[r])}function S(e,t=()=>x,r){let o=(0,g.i)(o=>{if(!e)return;let n=o.target;if(!(n instanceof Node))return;let i=r?.();if(!i||i.contains(n)){for(let e of t().flat())if(e&&(n===e||e.contains(n)))return;e(o)}}),n=!!e;(0,a.useEffect)(()=>{if(!n)return;let e=e=>o(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[n,o]),(0,a.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function T(e,t){(0,a.useEffect)(()=>{e.current?.setCustomValidity(t||"")},[t,e])}var M,F=[],O="ResizeObserver loop completed with undelivered notifications.",N=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:O}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=O),window.dispatchEvent(e)};(A=M||(M={})).BORDER_BOX="border-box",A.CONTENT_BOX="content-box",A.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var A,L,_=function(e){return Object.freeze(e)},B=function(e,t){this.inlineSize=e,this.blockSize=t,_(this)},I=function(){function e(e,t,r,o){return this.x=e,this.y=t,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,_(this)}return e.prototype.toJSON=function(){var e=this.x,t=this.y,r=this.top,o=this.right,n=this.bottom;return{x:e,y:t,top:r,right:o,bottom:n,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Q=function(e){return e instanceof SVGElement&&"getBBox"in e},D=function(e){if(Q(e)){var t=e.getBBox(),r=t.width,o=t.height;return!r&&!o}var n=e.offsetWidth,i=e.offsetHeight;return!(n||i||e.getClientRects().length)},P=function(e){if(e instanceof Element)return!0;var t,r=null===(t=e?.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},H=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},V="u">typeof window?window:{},W=new WeakMap,q=/auto|scroll/,X=/^tb|vertical/,G=/msie|trident/i.test(V.navigator&&V.navigator.userAgent),Y=function(e){return parseFloat(e||"0")},K=function(e,t,r){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=!1),new B((r?t:e)||0,(r?e:t)||0)},U=_({devicePixelContentBoxSize:K(),borderBoxSize:K(),contentBoxSize:K(),contentRect:new I(0,0,0,0)}),J=function(e,t){if(void 0===t&&(t=!1),W.has(e)&&!t)return W.get(e);if(D(e))return W.set(e,U),U;var r=getComputedStyle(e),o=Q(e)&&e.ownerSVGElement&&e.getBBox(),n=!G&&"border-box"===r.boxSizing,i=X.test(r.writingMode||""),a=!o&&q.test(r.overflowY||""),l=!o&&q.test(r.overflowX||""),d=o?0:Y(r.paddingTop),s=o?0:Y(r.paddingRight),u=o?0:Y(r.paddingBottom),c=o?0:Y(r.paddingLeft),f=o?0:Y(r.borderTopWidth),p=o?0:Y(r.borderRightWidth),h=o?0:Y(r.borderBottomWidth),b=o?0:Y(r.borderLeftWidth),g=c+s,m=d+u,v=b+p,x=f+h,w=l?e.offsetHeight-x-e.clientHeight:0,y=a?e.offsetWidth-v-e.clientWidth:0,$=o?o.width:Y(r.width)-(n?g+v:0)-y,k=o?o.height:Y(r.height)-(n?m+x:0)-w,z=$+g+y+v,j=k+m+w+x,R=_({devicePixelContentBoxSize:K(Math.round($*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:K(z,j,i),contentBoxSize:K($,k,i),contentRect:new I(c,d,$,k)});return W.set(e,R),R},Z=function(e,t,r){var o=J(e,r),n=o.borderBoxSize,i=o.contentBoxSize,a=o.devicePixelContentBoxSize;switch(t){case M.DEVICE_PIXEL_CONTENT_BOX:return a;case M.BORDER_BOX:return n;default:return i}},ee=function(e){var t=J(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=_([t.borderBoxSize]),this.contentBoxSize=_([t.contentBoxSize]),this.devicePixelContentBoxSize=_([t.devicePixelContentBoxSize])},et=function(e){if(D(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},er=function(){var e=1/0,t=[];F.forEach(function(r){if(0!==r.activeTargets.length){var o=[];r.activeTargets.forEach(function(t){var r=new ee(t.target),n=et(t.target);o.push(r),t.lastReportedSize=Z(t.target,t.observedBox),n<e&&(e=n)}),t.push(function(){r.callback.call(r.observer,o,r.observer)}),r.activeTargets.splice(0,r.activeTargets.length)}});for(var r=0;r<t.length;r++)(0,t[r])();return e},eo=function(e){F.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(r){r.isActive()&&(et(r.target)>e?t.activeTargets.push(r):t.skippedTargets.push(r))})})},en=function(){var e=0;for(eo(0);F.some(function(e){return e.activeTargets.length>0});)eo(e=er());return F.some(function(e){return e.skippedTargets.length>0})&&N(),e>0},ei=[],ea=function(e){if(!L){var t=0,r=document.createTextNode("");new MutationObserver(function(){return ei.splice(0).forEach(function(e){return e()})}).observe(r,{characterData:!0}),L=function(){r.textContent="".concat(t?t--:t++)}}ei.push(e),L()},el=function(e){ea(function(){requestAnimationFrame(e)})},ed=0,es={attributes:!0,characterData:!0,childList:!0,subtree:!0},eu=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ec=function(e){return void 0===e&&(e=0),Date.now()+e},ef=!1,ep=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!ef){ef=!0;var r=ec(e);el(function(){var o=!1;try{o=en()}finally{if(ef=!1,e=r-ec(),!ed)return;o?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,es)};document.body?t():V.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),eu.forEach(function(t){return V.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),eu.forEach(function(t){return V.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),eh=function(e){!ed&&e>0&&ep.start(),(ed+=e)||ep.stop()},eb=function(){function e(e,t){this.target=e,this.observedBox=t||M.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=Z(this.target,this.observedBox,!0);return Q(e=this.target)||H(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),eg=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},em=new WeakMap,ev=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return -1},ex=function(){function e(){}return e.connect=function(e,t){var r=new eg(e,t);em.set(e,r)},e.observe=function(e,t,r){var o=em.get(e),n=0===o.observationTargets.length;0>ev(o.observationTargets,t)&&(n&&F.push(o),o.observationTargets.push(new eb(t,r&&r.box)),eh(1),ep.schedule())},e.unobserve=function(e,t){var r=em.get(e),o=ev(r.observationTargets,t),n=1===r.observationTargets.length;o>=0&&(n&&F.splice(F.indexOf(r),1),r.observationTargets.splice(o,1),eh(-1))},e.disconnect=function(e){var t=this,r=em.get(e);r.observationTargets.slice().forEach(function(r){return t.unobserve(e,r.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),ew=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ex.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!P(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ex.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!P(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ex.unobserve(this,e)},e.prototype.disconnect=function(){ex.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let ey="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:ew,e$=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(r,o){let n=t.get(r)||[],i=e.get(r);return t.has(r)||(t.set(r,n),i=({subscribe(e,t){let r=new ey(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return r.observe(e),()=>{r.unobserve(e),r.disconnect()}}}).subscribe(r,e=>{for(let t of n)t(e)})),n.push(o),()=>{let e=n.indexOf(o);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function ek(e){let[t,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{if(e)return e$.subscribe(e,r)},[e]),t}function ez(e){return ek(e)?._contentRect||null}function ej(e){return(0,a.useEffect)(()=>(addEventListener("keydown",e),()=>removeEventListener("keydown",e)),[e])}function eR(e,t){let{subscribe:r,getSnapshot:o}=(0,a.useMemo)(()=>{let t;let r=()=>(t||(t=window.matchMedia(e)),t);return{subscribe:e=>{let t=r();return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},getSnapshot:()=>r().matches}},[e]);return(0,a.useDebugValue)(e),(0,a.useSyncExternalStore)(r,o,t)}let eE=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function eC(e,t){let r=Symbol.for(e);return typeof document>"u"?(0,a.createContext)(t):(eE[r]=eE[r]||(0,a.createContext)(t),eE[r])}let eS=eC("@sanity/ui/context/theme",null);function eT(e){let t=(0,a.useContext)(eS),{children:r,scheme:n=t?.scheme||"light",theme:l=t?.theme||null,tone:s=t?.tone||"default"}=e,u=(0,a.useMemo)(()=>l?{version:0,theme:l,scheme:n,tone:s}:null,[l,n,s]),c=(0,a.useMemo)(()=>l?(0,o.BA)(l,n,s):null,[n,l,s]);return c?(0,i.jsx)(eS.Provider,{value:u,children:(0,i.jsx)(d.f6,{theme:c,children:r})}):(0,i.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'})}function eM(){let e=(0,a.useContext)(eS);if(!e)throw Error("useRootTheme(): missing context value");return e}function eF(e){let{children:t,scheme:r,tone:o}=e,n=eM();return(0,i.jsx)(eT,{scheme:r||n.scheme,theme:n.theme,tone:o,children:t})}function eO(){return(0,d.Fg)()}function eN(){return(0,n.aQ)((0,d.Fg)())}function eA(){return 0}function eL(){let{media:e}=eN(),t=(0,a.useMemo)(()=>(function(e){let t;let r=e.length,o=()=>{if(!t){t=[];for(let n=r;n>-1;n-=1){var o;let r=0===(o=n)?`screen and (max-width: ${e[o]-1}px)`:o===e.length?`screen and (min-width: ${e[o-1]}px)`:`screen and (min-width: ${e[o-1]}px) and (max-width: ${e[o]-1}px)`;t.push({index:n,mq:window.matchMedia(r)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of o())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:r}of o()){let o=()=>{r.matches&&e()};r.addEventListener("change",o),t.push(()=>r.removeEventListener("change",o))}return()=>{for(let e of t)e()}}}})(e),[e]);return(0,a.useSyncExternalStore)(t.subscribe,t.getSnapshot,eA)}function e_(e=()=>!1){return eR("(prefers-color-scheme: dark)",e)}function eB(e=()=>!1){return eR("(prefers-reduced-motion: reduce)",e)}function eI(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return z(r,e.$border,e=>e?{"&&":{border:o}}:{"&&":{border:0}})}function eQ(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return z(r,e.$borderTop,e=>e?{"&&":{borderTop:o}}:{"&&":{borderTop:0}})}function eD(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return z(r,e.$borderRight,e=>e?{"&&":{borderRight:o}}:{"&&":{borderRight:0}})}function eP(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return z(r,e.$borderBottom,e=>e?{"&&":{borderBottom:o}}:{"&&":{borderBottom:0}})}function eH(e){let{card:t,media:r}=(0,n.aQ)(e.theme),o=`${t.border?.width??1}px solid var(--card-border-color)`;return z(r,e.$borderLeft,e=>e?{"&&":{borderLeft:o}}:{"&&":{borderLeft:0}})}eT.displayName="ThemeProvider",eF.displayName="ThemeColorProvider";let eV={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eW={content:"content-box",border:"border-box"},eq={stretch:"stretch",fill:"100%"};function eX(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function eG(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$sizing,e=>({boxSizing:eW[e]}))}function eY(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$height,e=>({height:eq[e]}))}function eK(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$overflow,e=>({overflow:e}))}let eU={"&&:not([hidden])":{display:"flex"}};function eJ(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$align,e=>({alignItems:e}))}function eZ(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return z(t,e.$gap,e=>({gap:e?k(r[e]):void 0}))}function e0(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$wrap,e=>({flexWrap:e}))}function e1(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$justify,e=>({justifyContent:e}))}function e2(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$direction,e=>({flexDirection:e}))}let e3={minWidth:0,minHeight:0};function e5(){return[e3,e4]}function e4(e){let{media:t}=(0,n.aQ)(e.theme);return e.$flex?z(t,e.$flex,e=>({flex:e})):x}function e6(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function e9(e){let{base:t,border:r,focusRing:o}=e,n=o.offset+o.width,i=0-o.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,r&&e6(r),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let e7={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},e8={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},te={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function tt(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function tr(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$autoRows,e=>({gridAutoRows:e&&te[e]}))}function to(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$autoCols,e=>({gridAutoColumns:e&&e8[e]}))}function tn(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function ti(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function ta(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return z(t,e.$gap,e=>({gridGap:e?k(r[e]):void 0}))}function tl(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return z(t,e.$gapX,e=>({columnGap:e?k(r[e]):void 0}))}function td(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return z(t,e.$gapY,e=>({rowGap:e?k(r[e]):void 0}))}let ts={auto:"auto",full:"1 / -1"},tu={auto:"auto",full:"1 / -1"};function tc(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:ts[e]})}function tf(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$rowStart,e=>({gridRowStart:e}))}function tp(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$rowEnd,e=>({gridRowEnd:e}))}function th(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:tu[e]})}function tb(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$columnStart,e=>({gridColumnStart:e}))}function tg(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$columnEnd,e=>({gridColumnEnd:e}))}function tm(e){let{$fontSize:t,$iconLeft:r,$iconRight:o,$padding:i,$space:a}=e,{font:l,media:d,space:s}=(0,n.aQ)(e.theme),u=Math.max(i.length,a.length,t.length),c=[],f=[],p=[];for(let e=0;e<u;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],c[e]=void 0===i[e]?c[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return z(d,c,(e,t)=>{let n=l.text.sizes[p[t]]||l.text.sizes[2],i=n.lineHeight-n.ascenderHeight-n.descenderHeight,a=s[c[t]],d=s[f[t]],u={paddingTop:k(a-n.ascenderHeight),paddingRight:k(a),paddingBottom:k(a-n.descenderHeight),paddingLeft:k(a)};return o&&(u.paddingRight=k(a+i+d)),r&&(u.paddingLeft=k(a+i+d)),u})}function tv(e){return tm({...e,$iconRight:!0})}let tx=(0,d.iv)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function tw(){return tx}function ty(e){let{$scheme:t,$tone:r,$weight:o}=e,{color:i,font:a}=(0,n.aQ)(e.theme);return(0,d.iv)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${o&&a.text.weights[o]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${r}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function t$(e){let{font:t,media:r}=(0,n.aQ)(e.theme);return z(r,e.$fontSize,e=>{let r=t.text.sizes[e]||t.text.sizes[2];return{fontSize:k(r.fontSize),lineHeight:r.lineHeight/r.fontSize}})}function tk(e){let{$hasPrefix:t,$hasSuffix:r,$scheme:o,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:s}=(0,n.aQ)(e.theme);return(0,d.iv)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${r?0:void 0};
    border-bottom-right-radius: ${r?0:void 0};

    &[data-scheme='${o}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${e6({color:l.input.default.enabled.border,width:s.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${e6({color:l.input.invalid.enabled.border,width:s.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:e9({border:{color:l.input.default.enabled.border,width:s.border.width},focusRing:s.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:e9({focusRing:s.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${e6({color:l.input.default.disabled.border,width:s.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${e6({color:l.input.invalid.disabled.border,width:s.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${e6({color:l.input.default.hovered.border,width:s.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${e6({color:l.input.invalid.hovered.border,width:s.border.width})};
        }
      }
    }
  `}function tz(e){let{theme:t}=e;return[j(t,["padding"],e.$padding),j(t,["paddingLeft","paddingRight"],e.$paddingX),j(t,["paddingTop","paddingBottom"],e.$paddingY),j(t,["paddingTop"],e.$paddingTop),j(t,["paddingRight"],e.$paddingRight),j(t,["paddingBottom"],e.$paddingBottom),j(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function tj(e){let{media:t,radius:r}=(0,n.aQ)(e.theme);return z(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=k(r[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function tR(e,t){return`${e.map(k).join(" ")} ${t}`}let tE=d.zo.div(function(e){return R("label",e)},E,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return(0,d.iv)`
    text-transform: uppercase;

    ${t&&(0,d.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,d.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),tC=d.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,tS=(0,a.forwardRef)(function(e,t){let{accent:r,align:o,children:n,muted:a=!1,size:l=2,textOverflow:d,weight:s,...u}=e,c=n;return c="ellipsis"===d?(0,i.jsx)(tC,{children:c}):(0,i.jsx)("span",{children:c}),(0,i.jsx)(tE,{"data-ui":"Label",...u,$accent:r,$align:C(o),$muted:a,$size:C(l),$weight:s,ref:t,children:c})});tS.displayName="ForwardRef(Label)";let tT=d.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return z(r,e.$size,e=>{let r=t.sizes[e]||t.sizes[0];return{width:k(r.size),height:k(r.size),borderRadius:k(r.size/2),"&>svg":{width:k(r.size),height:k(r.size),borderRadius:k(r.size/2)}}})},function(e){let{$color:t}=e,{avatar:r}=(0,n.aQ)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:e9({focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}),tM=d.zo.div(function(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}}),tF=d.zo.ellipse(function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}),tO=d.zo.ellipse(function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}),tN=d.zo.div(function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}),tA=(0,d.zo)(tS)({color:"inherit"}),tL=d.zo.svg(function(){return{position:"relative"}}),t_=(0,a.forwardRef)(function(e,t){let{__unstable_hideInnerStroke:r,as:o,color:n="gray",src:d,title:s,initials:u,onImageLoadError:c,arrowPosition:f,animateArrowFrom:p,status:h="online",size:b=1,...g}=e,{avatar:m}=eN(),v=l.isValidElementType(o)?o:"div",x=C(b),w=(m.sizes[x[0]]||m.sizes[0]).size,y=w/2,$=(0,a.useId)(),[k,z]=(0,a.useState)(p||f||"inside"),[j,R]=(0,a.useState)(!1),E=`avatar-image-${$}`;(0,a.useEffect)(()=>{if(k===f)return;let e=requestAnimationFrame(()=>z(f));return()=>cancelAnimationFrame(e)},[k,f]),(0,a.useEffect)(()=>{d&&R(!1)},[d]);let S=(0,a.useCallback)(()=>{R(!0),c&&c(Error("Avatar: the image failed to load"))},[c]),T=(0,a.useMemo)(()=>x.map(e=>1===e?1:2===e?3:3===e?5:0),[x]);return(0,i.jsxs)(tT,{as:v,"data-as":"string"==typeof v?v:void 0,"data-ui":"Avatar",...g,$color:n,$size:x,"aria-label":s,"data-arrow-position":k,"data-status":h,ref:t,title:s,children:[(0,i.jsx)(tM,{children:(0,i.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,i.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:n})})}),!j&&d&&(0,i.jsxs)(tL,{viewBox:`0 0 ${w} ${w}`,fill:"none",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:E,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,i.jsx)("image",{href:d,width:"1",height:"1",onError:S})})}),(0,i.jsx)("circle",{cx:y,cy:y,r:y,fill:`url(#${E})`}),!r&&(0,i.jsx)(tF,{cx:y,cy:y,rx:y,ry:y,vectorEffect:"non-scaling-stroke"}),(0,i.jsx)(tO,{cx:y,cy:y,rx:y,ry:y,vectorEffect:"non-scaling-stroke"})]}),(j||!d)&&u&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(tN,{children:(0,i.jsx)(tA,{forwardedAs:"span",size:T,weight:"medium",children:u})})})]})});t_.displayName="ForwardRef(Avatar)";let tB=d.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return z(r,e.$size,e=>{let r=t.sizes[e];return r?{borderRadius:k(r.size/2),minWidth:k(r.size),height:k(r.size)}:w})},function(e){let{space:t}=(0,n.aQ)(e.theme);return(0,d.iv)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${k(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),tI=(0,a.forwardRef)(function(e,t){let{count:r,size:o=1}=e,n=C(o),l=(0,a.useMemo)(()=>n.map(e=>1===e?1:2===e?3:3===e?5:0),[n]);return(0,i.jsx)(tB,{$size:n,"data-ui":"AvatarCounter",ref:t,children:(0,i.jsx)(tS,{as:"span",size:l,weight:"medium",children:r})})});tI.displayName="ForwardRef(AvatarCounter)";let tQ=(0,d.iv)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tD=d.zo.div(function(e){let{avatar:t,media:r}=(0,n.aQ)(e.theme);return z(r,e.$size,e=>{let r=t.sizes[e];return r?{"& > div + div":{marginLeft:k(r.distance)}}:w})},function(){return tQ}),tP=(0,a.forwardRef)(function(e,t){let{children:r,maxLength:o=4,size:n=1,...l}=e,d=(0,a.useMemo)(()=>a.Children.toArray(r).filter(a.isValidElement),[r]),s=C(n),u=d.length,c=u-(Math.max(o,0)-1),f=c>1?d.slice(c,u):d;return(0,i.jsxs)(tD,{"data-ui":"AvatarStack",...l,ref:t,$size:s,children:[0===u&&(0,i.jsx)("div",{children:(0,i.jsx)(tI,{count:u,size:s})}),0!==u&&c>1&&(0,i.jsx)("div",{children:(0,i.jsx)(tI,{count:c,size:s})}),f.map((e,t)=>(0,i.jsx)("div",{children:(0,a.cloneElement)(e,{size:s})},String(t)))]})});tP.displayName="ForwardRef(AvatarStack)";let tH=d.zo.div(function(){return eV},e5,function(){return[eG,eY,eK,eX]},function(){return[tc,tf,tp,th,tb,tg]},function(e){let{theme:t}=e;return[j(t,["margin"],e.$margin),j(t,["marginLeft","marginRight"],e.$marginX),j(t,["marginTop","marginBottom"],e.$marginY),j(t,["marginTop"],e.$marginTop),j(t,["marginRight"],e.$marginRight),j(t,["marginBottom"],e.$marginBottom),j(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},tz),tV=(0,a.forwardRef)(function(e,t){let{as:r="div",column:o,columnStart:n,columnEnd:a,display:l="block",flex:d,height:s,margin:u=0,marginX:c,marginY:f,marginTop:p,marginRight:h,marginBottom:b,marginLeft:g,overflow:m,padding:v=0,paddingX:x,paddingY:w,paddingTop:y,paddingRight:$,paddingBottom:k,paddingLeft:z,row:j,rowStart:R,rowEnd:E,sizing:S,...T}=e;return(0,i.jsx)(tH,{"data-as":"string"==typeof r?r:void 0,"data-ui":"Box",...T,$column:C(o),$columnStart:C(n),$columnEnd:C(a),$display:C(l),$flex:C(d),$height:C(s),$margin:C(u),$marginX:C(c),$marginY:C(f),$marginTop:C(p),$marginRight:C(h),$marginBottom:C(b),$marginLeft:C(g),$overflow:C(m),$padding:C(v),$paddingX:C(x),$paddingY:C(w),$paddingTop:C(y),$paddingRight:C($),$paddingBottom:C(k),$paddingLeft:C(z),$row:C(j),$rowStart:C(R),$rowEnd:C(E),$sizing:C(S),as:r,ref:t,children:e.children})});tV.displayName="ForwardRef(Box)";let tW=d.zo.div(function(e){return R("text",e)},E,function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return(0,d.iv)`
    color: var(--card-fg-color);

    ${t&&(0,d.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,d.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),tq=d.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,tX=(0,a.forwardRef)(function(e,t){let{accent:r=!1,align:o,children:n,muted:a=!1,size:l=2,textOverflow:d,weight:s,...u}=e,c=n;return"ellipsis"===d&&(c=(0,i.jsx)(tq,{children:c})),(0,i.jsx)(tW,{"data-ui":"Text",...u,$accent:r,$align:C(o),$muted:a,ref:t,$size:C(l),$weight:s,children:(0,i.jsx)("span",{children:c})})});tX.displayName="ForwardRef(Text)";let tG=(0,d.zo)(tV)(tj,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),tY=(0,a.forwardRef)(function(e,t){let{children:r,fontSize:o=1,mode:n,padding:a=1,radius:l="full",tone:d="default",...s}=e;return(0,i.jsx)(tG,{"data-ui":"Badge",...s,$tone:d,$radius:C(l),padding:C(a),ref:t,children:(0,i.jsx)(tX,{size:o,children:r})})});tY.displayName="ForwardRef(Badge)";let tK=(0,d.zo)(tV)(e5,function(){return[eU,eJ,eZ,e0,e1,e2]}),tU=(0,a.forwardRef)(function(e,t){let{align:r,as:o,direction:n="row",gap:a,justify:l,wrap:d,...s}=e;return(0,i.jsx)(tK,{"data-ui":"Flex",...s,$align:C(r),$direction:C(n),$gap:C(a),$justify:C(l),$wrap:C(d),forwardedAs:o,ref:t})});tU.displayName="ForwardRef(Flex)";let tJ=(0,d.F4)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,tZ=(0,d.zo)(tX)`
  & > span > svg {
    animation: ${tJ} 500ms linear infinite;
  }
`,t0=(0,a.forwardRef)(function(e,t){return(0,i.jsx)(tZ,{"data-ui":"Spinner",...e,ref:t,children:(0,i.jsx)(s.L4p,{})})});function t1(e,t,r=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":r?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function t2(...e){return e.filter(Boolean).join(",")}t0.displayName="ForwardRef(Spinner)";let t3=d.zo.button(tj,function(e){let{$width:t}=e,{style:r}=(0,n.aQ)(e.theme);return(0,d.iv)`
    ${r?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,d.iv)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:r,color:o,style:i}=(0,n.aQ)(e.theme),a="ghost"===e.$mode,l=o.button[t]||o.button.default,d=l[e.$tone]||l.default,s={width:r.border.width,color:"var(--card-border-color)"},u=void 0;return[t1(o,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:e6(s),'&:disabled, &[data-disabled="true"]':t1(o,d.disabled),"&:not([data-disabled='true'])":{boxShadow:t2(e6(s),a?u:void 0),"&:focus":{boxShadow:e9({base:o,border:{width:2,color:o.bg},focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:t2(e6(s),a?u:void 0)},"@media (hover: hover)":{"&:hover":t1(o,d.hovered),"&:active":t1(o,d.pressed),"&[data-hovered]":t1(o,d.hovered)},"&[data-selected]":t1(o,d.pressed)}},i?.button?.root].filter(Boolean)}),t5=d.zo.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg-color);
  border-radius: inherit;
  z-index: 1;
  box-shadow: inherit;
`,t4=(0,a.forwardRef)(function(e,t){let{children:r,disabled:o,fontSize:n=1,icon:d,iconRight:s,justify:u="center",loading:c,mode:f="default",padding:p=3,paddingX:h,paddingY:b,paddingTop:g,paddingBottom:m,paddingLeft:v,paddingRight:x,radius:w=2,selected:y,space:$=3,text:k,textAlign:z,tone:j="default",type:R="button",muted:E=!1,width:S,...T}=e,{button:M}=eN(),F=C(u),O=C(p),N=C(h),A=C(b),L=C(g),_=C(m),B=C(v),I=C(x),Q=C(w),D=C($),P=(0,a.useMemo)(()=>({padding:O,paddingX:N,paddingY:A,paddingTop:L,paddingBottom:_,paddingLeft:B,paddingRight:I}),[O,N,A,L,_,B,I]);return(0,i.jsxs)(t3,{"data-ui":"Button",...T,$mode:f,$radius:Q,$tone:j,"data-disabled":!!(c||o),"data-selected":y?"":void 0,disabled:!!(c||o),ref:t,type:R,$width:S,children:[!!c&&(0,i.jsx)(t5,{children:(0,i.jsx)(t0,{})}),(d||k||s)&&(0,i.jsx)(tV,{as:"span",...P,children:(0,i.jsxs)(tU,{as:"span",justify:F,gap:D,children:[d&&(0,i.jsxs)(tX,{size:n,children:[(0,a.isValidElement)(d)&&d,(0,l.isValidElementType)(d)&&(0,i.jsx)(d,{})]}),k&&(0,i.jsx)(tX,{muted:E,align:z,size:n,textOverflow:"ellipsis",weight:M.textWeight,children:k}),s&&(0,i.jsxs)(tX,{size:n,children:[(0,a.isValidElement)(s)&&s,(0,l.isValidElementType)(s)&&(0,i.jsx)(s,{})]})]})}),r&&(0,i.jsx)(tV,{as:"span",...P,children:r})]})});t4.displayName="ForwardRef(Button)";let t6=(0,d.zo)(tV)(function(){return[eI,eQ,eD,eP,eH]},tj,function(e){let{card:t,media:r,shadow:o}=(0,n.aQ)(e.theme);return z(r,e.$shadow,e=>(function(e,t=1){if(!e)return w;let r=`0 0 0 ${k(t)} var(--card-shadow-outline-color)`,o=tR(e.umbra,"var(--card-shadow-umbra-color)"),n=tR(e.penumbra,"var(--card-shadow-penumbra-color)"),i=tR(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${r}, ${o}, ${n}, ${i}`}})(o[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:r}=(0,n.aQ)(e.theme);return(0,d.iv)`
    ${t&&(0,d.iv)`
      background-size: ${r[3]}px ${r[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:r,$muted:o}=e,{card:i,color:a,style:l}=(0,n.aQ)(e.theme),s={width:i.border.width,color:"var(--card-border-color)"};return(0,d.iv)`
    color-scheme: ${a._dark?"dark":"light"};

    ${t1(a,a,t)}

    background-color: ${o?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${t1(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${t1(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t1(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t1(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t1(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?e9({base:a,border:s,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${t1(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t1(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t1(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t1(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t1(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${r?e9({base:a,border:s,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),t9=(0,a.forwardRef)(function(e,t){let{__unstable_checkered:r=!1,__unstable_focusRing:o=!1,as:n,border:a,borderTop:d,borderRight:s,borderBottom:u,borderLeft:c,muted:f,pressed:p,radius:h=0,scheme:b,selected:g,shadow:m,tone:v="default",...x}=e,w=(0,l.isValidElementType)(n)?n:"div",y=eM(),$="inherit"===v?y.tone:v;return(0,i.jsx)(eF,{scheme:b,tone:$,children:(0,i.jsx)(t6,{"data-as":"string"==typeof w?w:void 0,"data-scheme":y.scheme,"data-ui":"Card","data-tone":$,...x,$border:C(a),$borderTop:C(d),$borderRight:C(s),$borderBottom:C(u),$borderLeft:C(c),$checkered:r,$focusRing:o,$muted:f,$radius:C(h),$shadow:C(m),$tone:$,"data-checkered":r?"":void 0,"data-pressed":p?"":void 0,"data-selected":g?"":void 0,forwardedAs:w,ref:t,selected:g})})});t9.displayName="ForwardRef(Card)";let t7=d.zo.div(function(){return(0,d.iv)`
    position: relative;
    display: inline-block;
  `}),t8=d.zo.input(function(e){let{color:t,input:r,radius:o}=(0,n.aQ)(e.theme),{focusRing:i}=r.checkbox;return(0,d.iv)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${k(r.checkbox.size)};
      width: ${k(r.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${e6({color:t.input.default.enabled.border,width:r.border.width})};
      border-radius: ${k(o[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${e6({color:t.input.default.enabled.fg,width:r.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${e9({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${e9({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${e6({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${e9({border:{width:r.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${e6({width:r.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${e6({width:r.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),re=(0,a.forwardRef)(function(e,t){let{checked:r,className:o,disabled:n,indeterminate:l,customValidity:d,readOnly:u,style:c,...f}=e,p=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,()=>p.current),(0,a.useEffect)(()=>{p.current&&(p.current.indeterminate=l||!1)},[l]),T(p,d),(0,i.jsxs)(t7,{className:o,"data-ui":"Checkbox",style:c,children:[(0,i.jsx)(t8,{"data-read-only":!n&&u?"":void 0,"data-error":d?"":void 0,...f,checked:r,disabled:n||u,type:"checkbox",readOnly:u,ref:p}),(0,i.jsxs)("span",{children:[(0,i.jsx)(s.KML,{}),(0,i.jsx)(s.HFL,{})]})]})});function rt({theme:e}){let{color:{syntax:t}}=(0,n.aQ)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}re.displayName="ForwardRef(Checkbox)";let rr=d.zo.pre(function(){return(0,d.iv)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${rt}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return R("code",e)}),ro=(0,a.forwardRef)(function(e,t){let{children:r,language:o,size:n=2,weight:a,...l}=e,d="string"==typeof o?o:void 0,s=!!d&&u.hasLanguage(d);return(0,i.jsxs)(rr,{"data-ui":"Code",...l,$size:C(n),$weight:a,ref:t,children:[!(d&&s)&&(0,i.jsx)("code",{children:r}),d&&s&&(0,i.jsx)(u,{inline:!0,language:d,value:String(r)})]})});ro.displayName="ForwardRef(Code)";let rn={width:"100%",margin:"0 auto"},ri=(0,d.zo)(tV)(function(){return rn},function(e){let{container:t,media:r}=(0,n.aQ)(e.theme);return z(r,e.$width,e=>({maxWidth:"auto"===e?"none":k(t[e])}))}),ra=(0,a.forwardRef)(function(e,t){let{as:r,width:o=2,...n}=e;return(0,i.jsx)(ri,{"data-ui":"Container",...n,$width:C(o),forwardedAs:r,ref:t})});ra.displayName="ForwardRef(Container)";let rl=(0,d.zo)(tV)(function(){return[e7,tt,tr,to,tn,ti,ta,tl,td]}),rd=(0,a.forwardRef)(function(e,t){let{as:r,autoRows:o,autoCols:n,autoFlow:a,columns:l,gap:d,gapX:s,gapY:u,rows:c,children:f,...p}=e;return(0,i.jsx)(rl,{"data-as":"string"==typeof r?r:void 0,"data-ui":"Grid",...p,$autoRows:C(o),$autoCols:C(n),$autoFlow:C(a),$columns:C(l),$gap:C(d),$gapX:C(s),$gapY:C(u),$rows:C(c),forwardedAs:r,ref:t,children:f})});rd.displayName="ForwardRef(Grid)";let rs=d.zo.div(function(e){let{$accent:t,$muted:r}=e,{font:o}=(0,n.aQ)(e.theme);return(0,d.iv)`
    ${t&&(0,d.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${r&&(0,d.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${o.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${o.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},E,function(e){return R("heading",e)}),ru=d.zo.span`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`,rc=(0,a.forwardRef)(function(e,t){let{accent:r=!1,align:o,children:n,muted:a=!1,size:l=2,textOverflow:d,weight:s,...u}=e,c=n;return"ellipsis"===d&&(c=(0,i.jsx)(ru,{children:c})),(0,i.jsx)(rs,{"data-ui":"Heading",...u,$accent:r,$align:C(o),$muted:a,$size:C(l),$weight:s,ref:t,children:(0,i.jsx)("span",{children:c})})});rc.displayName="ForwardRef(Heading)";let rf=(0,d.zo)(tV)(function(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return z(t,e.$space,e=>{let t=k(.5===e?r[1]/2:r[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),rp=(0,a.forwardRef)(function(e,t){let{as:r,children:o,space:n,...l}=e,d=(0,a.useMemo)(()=>a.Children.map(o,e=>e&&(0,i.jsx)("div",{children:e})),[o]);return(0,i.jsx)(rf,{"data-ui":"Inline",...l,$space:C(n),forwardedAs:r,ref:t,children:d})});rp.displayName="ForwardRef(Inline)";let rh=d.zo.kbd(tj,function(){return(0,d.iv)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),rb=(0,a.forwardRef)(function(e,t){let{children:r,fontSize:o=0,padding:n=1,radius:a=2,...l}=e;return(0,i.jsx)(rh,{"data-ui":"KBD",...l,$radius:C(a),ref:t,children:(0,i.jsx)(tV,{as:"span",padding:n,children:(0,i.jsx)(tX,{as:"span",size:o,weight:"semibold",children:r})})})});rb.displayName="ForwardRef(KBD)";let rg={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:r}){let[o]=t.split("-"),n=r.floating.width,i=r.floating.height,a=e.shift?.x||0,l=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:d,originY:s}=["bottom","top"].includes(o)?{originX:rm(.5-a/n,0,1),originY:"bottom"===o?0:1}:{originX:"left"===o?1:0,originY:rm(.5-l/i,0,1)};return{data:{originX:d,originY:s}}}};function rm(e,t,r){return Math.min(Math.max(e,t),r)}function rv(e,t,r){let o=t.x-e.x,n=t.y-e.y;return rx(e,t,Math.min(1,r/Math.sqrt(o*o+n*n)))}function rx(e,t,r){return{x:e.x+(t.x-e.x)*r,y:e.y+(t.y-e.y)*r}}let rw=d.zo.div(({$w:e})=>(0,d.iv)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),ry=d.zo.path`
  stroke: var(--card-shadow-outline-color);
`,r$=d.zo.path`
  fill: var(--card-bg-color);
`,rk=(0,a.forwardRef)(function(e,t){let{width:r,height:o,radius:n=0,...a}=e,{card:l}=eN(),d=l.shadow.outline,s=(function(e){let t=e.length,r=[];for(let o=0;o<t;o+=1){let t=e[o],n=e[o-1],i=e[o+1];if(n&&t.radius){let e=rv(t,n,t.radius),o=rv(t,i,t.radius),a=rx(e,t,.5),l=rx(t,o,.5);r.push({type:"point",...e}),r.push({type:"curve",curveEnd:o,startControl:a,endControl:l})}else r.push({type:"point",...t})}return r})([{x:0,y:0},{x:n,y:0,radius:n},{x:r/2,y:o-1,radius:n},{x:r-n,y:0,radius:n},{x:r,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),u=`${s}`,c=`${s} M ${r} -1 M 0 -1 Z`;return(0,i.jsx)(rw,{...a,$w:r,ref:t,children:(0,i.jsxs)("svg",{width:r,height:r,viewBox:`0 0 ${r} ${r}`,children:[(0,i.jsx)("mask",{id:"stroke-mask",children:(0,i.jsx)("rect",{x:0,y:d,width:r,height:r,fill:"white"})}),(0,i.jsx)(ry,{d:u,mask:"url(#stroke-mask)",strokeWidth:2*d}),(0,i.jsx)(r$,{d:c})]})})});rk.displayName="ForwardRef(Arrow)";let rz=eC("@sanity/ui/context/boundaryElement",null);function rj(e){let{children:t,element:r}=e,o=(0,a.useMemo)(()=>({version:0,element:r}),[r]);return(0,i.jsx)(rz.Provider,{value:o,children:t})}function rR(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}rj.displayName="BoundaryElementProvider";let rE={version:0,element:null};function rC(){let e=(0,a.useContext)(rz);if(e&&(!rR(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||rE}function rS({children:e,condition:t,wrapper:r}){return t?r(e):e}rS.displayName="ConditionalWrapper";let rT=(0,a.forwardRef)(function(e,t){let r=eN(),{children:o,media:n=r.media,...l}=e,d=(0,a.useRef)(null),[s,u]=(0,a.useState)(null),c=ek(s),f=(0,a.useMemo)(()=>c?.border.width??window.innerWidth,[c]),p=(0,a.useMemo)(()=>(function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]>t&&r.push(o);return r})(n,f),[n,f]),h=(0,a.useMemo)(()=>(function(e,t){let r=[];for(let o=0;o<e.length;o+=1)e[o]<=t&&r.push(o);return r})(n,f),[n,f]);(0,a.useImperativeHandle)(t,()=>d.current);let b=(0,a.useCallback)(e=>{d.current=e,u(e)},[]);return(0,i.jsx)("div",{"data-ui":"ElementQuery",...l,"data-eq-max":p.length?p.join(" "):void 0,"data-eq-min":h.length?h.join(" "):void 0,ref:b,children:o})});rT.displayName="ForwardRef(ElementQuery)";class rM extends a.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onCatch({error:e,info:t})}render(){let{error:e}=this.state;if(e){let t="string"==typeof e?.message?e.message:"Error";return(0,i.jsx)(ro,{children:t})}return this.props.children}}function rF(e){if(!rR(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}let rO=eC("@sanity/ui/context/layer",null);function rN(){let e=(0,a.useContext)(rO);if(!e)throw Error("useLayer(): missing context value");try{return rF(e)}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}function rA(e){let t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}}function rL(e){let t=null,r=rA(()=>{t=rA(e)});return()=>{t&&t(),r()}}function r_(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function rB(e){return r_(e)&&"A"===e.nodeName}function rI(e){return r_(e)&&"BUTTON"===e.nodeName}function rQ(e,t){return e.contains(t)||e===t}function rD(e){if(!(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex")||(rB(e)?!!e.href&&"ignore"!==e.rel:r_(e)&&"INPUT"===e.nodeName?"hidden"!==e.type&&"file"!==e.type&&!e.disabled:!!(rI(e)||r_(e)&&"SELECT"===e.nodeName||r_(e)&&"TEXTAREA"===e.nodeName)&&!e.disabled)))return!1;try{e.focus()}catch{}return document.activeElement===e}function rP(e){for(let t=0;t<e.childNodes.length;t++){let r=e.childNodes[t];if(r_(r)&&(rD(r)||rP(r)))return!0}return!1}function rH(e){for(let t=e.childNodes.length-1;t>=0;t--){let r=e.childNodes[t];if(r_(r)&&(rD(r)||rH(r)))return!0}return!1}function rV(e){let{children:t,zOffset:r=0}=e,o=(0,a.useContext)(rO),n=o&&rF(o),l=n?.registerChild,d=(n?.level??0)+1,s=C(r),u=s.length-1,c=Math.min(eL(),u),f=n?n.zIndex+s[c]:s[c],[,p]=(0,a.useState)({}),[h,b]=(0,a.useState)(0),g=0===h,m=(0,a.useCallback)(e=>{let t=l?.(e);return void 0!==e?p(t=>{let r=t[e]??0,o={...t,[e]:r+1};return b(Object.keys(o).length),o}):b(e=>e+1),()=>{void 0!==e?p(t=>{let r={...t};return 1===r[e]?(delete r[e],b(Object.keys(r).length)):r[e]-=1,r}):b(e=>e-1),t?.()}},[l]);(0,a.useEffect)(()=>l?.(d),[d,l]);let v=(0,a.useMemo)(()=>({version:0,isTopLayer:g,level:d,registerChild:m,size:h,zIndex:f}),[g,d,m,h,f]);return(0,i.jsx)(rO.Provider,{value:v,children:t})}rV.displayName="LayerProvider";let rW=d.zo.div({position:"relative"}),rq=(0,a.forwardRef)(function(e,t){let{children:r,onActivate:o,onFocus:n,style:l=w,...d}=e,{zIndex:s,isTopLayer:u}=rN(),c=(0,a.useRef)(null),f=(0,a.useRef)(null),p=(0,a.useRef)(u);(0,a.useImperativeHandle)(t,()=>f.current),(0,a.useEffect)(()=>{p.current!==u&&u&&o?.({activeElement:c.current}),p.current=u},[u,o]);let h=(0,a.useCallback)(e=>{n?.(e);let t=f.current,r=document.activeElement;!u||!t||!r||r_(r)&&rQ(t,r)&&(c.current=r)},[u,n]);return(0,i.jsx)(rW,{...d,"data-ui":"Layer",onFocus:h,ref:f,style:{...l,zIndex:s},children:r})}),rX=(0,a.forwardRef)(function(e,t){let{children:r,zOffset:o=1,...n}=e;return(0,i.jsx)(rV,{zOffset:o,children:(0,i.jsx)(rq,{...n,ref:t,children:r})})});rX.displayName="ForwardRef(Layer)";let rG="@sanity/ui/context/portal",rY=Symbol.for(`${rG}/element`);eE[rY]=null;let rK=eC(rG,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(eE[rY]||(eE[rY]=document.createElement("div"),eE[rY].setAttribute("data-portal",""),document.body.appendChild(eE[rY])),eE[rY])}});function rU(){let e=(0,a.useContext)(rK);if(!e)throw Error("usePortal(): missing context value");if(!rR(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function rJ(e){let{children:t,__unstable_name:r}=e,o=rU(),n=(r?o.elements&&o.elements[r]:o.element)||o.elements?.default;return n?(0,b.createPortal)(t,n):null}function rZ(e){let{boundaryElement:t,children:r,element:o,__unstable_elements:n}=e,l=function(e){let t=(0,a.useRef)(e);return function(e,t){if(!e||!t)return e===t;let r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(r=>e[r]===t[r])}(t.current,e)||(t.current=e),t.current}(n),d=(0,a.useSyncExternalStore)(r0,()=>document.body,()=>null),s=(0,a.useMemo)(()=>({version:0,boundaryElement:t||null,element:o||d,elements:l}),[t,o,l,d]);return(0,i.jsx)(rK.Provider,{value:s,children:r})}rJ.displayName="Portal",rZ.displayName="PortalProvider";let r0=()=>()=>{},r1=d.zo.div`
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  overflow: clip;
`;(0,a.forwardRef)(function(e,t){let{as:r,children:o}=e;return(0,i.jsx)(r1,{"aria-hidden":!0,as:r,"data-ui":"SrOnly",ref:t,children:o})}).displayName="ForwardRef(SrOnly)";let r2=d.zo.div`
  position: relative;
`,r3=d.zo.div`
  position: absolute;
  left: 0;
  right: 0;
`;(0,a.forwardRef)(function(e,t){let{as:r="div",gap:o=0,getItemKey:n,items:l=[],onChange:d,renderItem:s,...u}=e,{space:c}=eN(),f=(0,a.useRef)(null),p=(0,a.useRef)(null),[h,b]=(0,a.useState)(0),[g,m]=(0,a.useState)(0),[v,x]=(0,a.useState)(-1);(0,a.useImperativeHandle)(t,()=>f.current),(0,a.useEffect)(()=>{if(!p.current)return;let e=p.current.firstChild;e instanceof HTMLElement&&x(e.offsetHeight)},[s]),(0,a.useEffect)(()=>{if(!f.current)return;let e=f.current.parentNode;for(;e&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(e);)e=e.parentNode;if(e){let t=e;if(!(t instanceof HTMLElement))return;let r=()=>{b(t.scrollTop)};t.addEventListener("scroll",r,{passive:!0});let o=new ey(e=>{m(e[0].contentRect.height)});return o.observe(t),r(),()=>{t.removeEventListener("scroll",r),o.unobserve(t),o.disconnect()}}let t=()=>{b(window.scrollY)},r=()=>{m(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",r),m(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",r)}},[]);let w=l.length,y=v?w*(v+c[o])-c[o]:0,$=y?Math.max(Math.floor(h/y*w)-2,0):0,k=y?Math.ceil((h+g)/y*w)+1:0;(0,a.useEffect)(()=>{d&&d({fromIndex:$,gap:c[o],itemHeight:v,scrollHeight:g,scrollTop:h,toIndex:k})},[$,o,v,d,g,h,c,k]);let z=(0,a.useMemo)(()=>s&&0!==l.length?-1===v?[(0,i.jsx)(r3,{children:s(l[0])},0)]:l.slice($,k).map((e,t)=>{let r=$+t,a=s(e),l=n?n(e,r):r;return(0,i.jsx)(r3,{style:{top:r*(v+c[o])},children:a},l)}):null,[$,o,n,v,l,s,c,k]),j=(0,a.useMemo)(()=>({height:y}),[y]);return(0,i.jsx)(r2,{as:r,"data-ui":"VirtualList",...u,ref:f,children:(0,i.jsx)("div",{ref:p,style:j,children:z})})}).displayName="ForwardRef(VirtualList)";let r5=[0,0,0,0],r4={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},r6=(0,d.zo)((0,p.E)(t9))`
  &:not([hidden]) {
    display: flex;
  }
  flex-direction: column;
  width: max-content;
  min-width: min-content;
  & > * {
    opacity: var(${y}, 1);
    will-change: opacity;
  }
`,r9=(0,a.memo)((0,a.forwardRef)(function(e,t){let{__unstable_margins:r,animate:o,arrow:n,arrowRef:l,arrowX:d,arrowY:s,children:u,padding:c,placement:f,originX:p,originY:h,overflow:b,radius:g,scheme:m,shadow:v,strategy:x,style:w,tone:y,width:k,x:z,y:j,...R}=e,{zIndex:E}=rN(),C=(0,a.useMemo)(()=>r||r5,[r]),S=(z??0)+C[3],T=(j??0)+C[0],M=(0,a.useMemo)(()=>({left:S,originX:p,originY:h,position:x,top:T,width:k,zIndex:E,willChange:o?"transform":void 0,...w}),[o,p,h,x,w,k,S,T,E]),F=(0,a.useMemo)(()=>({left:null!==d?d:void 0,top:null!==s?s:void 0,right:void 0,bottom:void 0}),[d,s]);return(0,i.jsxs)(r6,{"data-ui":"Popover",...R,"data-placement":f,radius:g,ref:t,scheme:m,shadow:v,sizing:"border",style:M,tone:y,...o?$:{},children:[(0,i.jsx)(tU,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:b,children:(0,i.jsx)(tU,{direction:"column",flex:1,padding:c,children:u})}),n&&(0,i.jsx)(rk,{ref:l,style:F,width:19,height:8,radius:2})]})}));r9.displayName="Memo(ForwardRef(PopoverCard))";let r7=(0,a.memo)((0,a.forwardRef)(function(e,t){let{container:r,layer:o}=eN(),n=rC(),{__unstable_margins:l=r5,animate:d=!1,arrow:s=!1,boundaryElement:u=n.element,children:p,constrainSize:b=!1,content:g,disabled:m,fallbackPlacements:v=e.fallbackPlacements??r4[e.placement??"bottom"],matchReferenceWidth:x,floatingBoundary:w=e.boundaryElement??n.element,onActivate:y,open:$,overflow:k="hidden",padding:z,placement:j="bottom",portal:R,preventOverflow:E=!0,radius:S=3,referenceBoundary:T=e.boundaryElement??n.element,referenceElement:M,scheme:F,shadow:O=3,tone:N="inherit",width:A="auto",zOffset:L=o.popover.zOffset,updateRef:_,...B}=e,I=!eB()&&d,Q=ek(u)?.border,D=C(z),P=C(S),H=C(O),V=C(A),W=C(L),q=(0,a.useRef)(null),X=(0,a.useRef)(null),G="viewport";(0,a.useImperativeHandle)(t,()=>q.current);let Y=eL(),K=b||E?Q?.width:void 0,U=function(e){let{container:t,mediaIndex:r,width:o}=e,n=o[r],i=void 0===n?o[o.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:r,mediaIndex:Y,width:V}),J=(0,a.useRef)(U);(0,a.useEffect)(()=>{J.current=U},[U]);let Z=function(e){let{boundaryWidth:t,currentWidth:r}=e;if(!(void 0===r&&void 0===t))return Math.min(r??1/0,(t||1/0)-8)}({boundaryWidth:K,currentWidth:U}),ee=(0,a.useRef)(Z);(0,a.useEffect)(()=>{ee.current=Z},[Z]);let et=(0,a.useRef)();(0,a.useEffect)(()=>{let e=q.current;if(!$||!e)return;let t=et.current;x?void 0!==t&&(e.style.width=`${t}px`):void 0!==U&&(e.style.width=`${U}px`),"number"==typeof Z&&(e.style.maxWidth=`${Z}px`)},[U,x,Z,$]);let er=(0,a.useMemo)(()=>{let e=[];return(b||E)&&e.push((0,f.RR)({boundary:w||void 0,fallbackPlacements:v,padding:4,rootBoundary:G})),e.push((0,f.cv)({mainAxis:4})),(b||x)&&e.push(function(e){let{apply:t,margins:r,padding:o=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:l,rects:d}=n,{floating:s,reference:u}=d,f=await (0,c.US)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:o,rootBoundary:"viewport"}),p=1/0,h=1/0,b=s.width,g=s.height;a.includes("top")&&(p=b-(f.left+f.right),h=g-f.top),a.includes("right")&&(p=b-f.right,h=g-(f.top+f.bottom)),a.includes("bottom")&&(p=b-(f.left+f.right),h=g-f.bottom),a.includes("left")&&(p=b-f.left,h=g-(f.top+f.bottom)),t({availableWidth:p-r[1]-r[3],availableHeight:h-r[0]-r[2],elements:i,referenceWidth:u.width-r[1]-r[3]});let m=await l.getDimensions(i.floating),v=m.height;return b!==m.width||g!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:r,referenceWidth:o}){et.current=o;let n=J.current,i=ee.current;x?r.floating.style.width=`${o}px`:void 0!==n&&(r.floating.style.width=`${n}px`),b&&(r.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,r.floating.style.maxHeight=`${t}px`)},boundaryElement:w||void 0,constrainSize:b,margins:l,matchReferenceWidth:x,padding:4})),E&&e.push((0,f.uY)({boundary:w||void 0,rootBoundary:G,padding:4})),s&&e.push((0,f.x7)({element:X,padding:4})),I&&e.push(rg),e.push((0,f.Cp)({boundary:T||void 0,padding:4,strategy:"referenceHidden"})),e},[I,s,b,v,w,l,x,E,T]),{x:eo,y:en,middlewareData:ei,placement:ea,refs:el,strategy:ed,update:es}=(0,f.YF)({middleware:er,placement:j,whileElementsMounted:c.Me}),eu=ei.hide?.referenceHidden,ec=ei.arrow?.x,ef=ei.arrow?.y,ep=ei["@sanity/ui/origin"]?.originX,eh=ei["@sanity/ui/origin"]?.originY,eb=(0,a.useCallback)(e=>{X.current=e},[]),eg=(0,a.useCallback)(e=>{q.current=e,el.setFloating(e)},[el]),em=(0,a.useCallback)(e=>{el.setReference(e);let t=p?.ref;"function"==typeof t?t(e):t&&(t.current=e)},[p,el]),ev=(0,a.useMemo)(()=>!p||M?null:(0,a.cloneElement)(p,{ref:em}),[p,M,em]);if((0,a.useEffect)(()=>{_&&("function"==typeof _?_(es):_&&(_.current=es))},[es,_]),(0,a.useEffect)(()=>{ev||el.setReference(M||null)},[M,el,ev]),m)return p||(0,i.jsx)(i.Fragment,{});let ex=(0,i.jsx)(rV,{zOffset:W,children:(0,i.jsx)(r9,{...B,__unstable_margins:l,animate:I,arrow:s,arrowRef:eb,arrowX:ec,arrowY:ef,hidden:eu,overflow:k,padding:D,placement:ea,radius:P,ref:eg,scheme:F,shadow:H,originX:ep,originY:eh,strategy:ed,tone:N,width:x?et.current:U,x:eo,y:en,children:g})});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(rS,{condition:I,wrapper:e=>(0,i.jsx)(h.M,{children:e}),children:$&&(0,i.jsx)(rS,{condition:!!R,wrapper:e=>(0,i.jsx)(rJ,{__unstable_name:"string"==typeof R?R:void 0,children:e}),children:ex})}),ev]})}));r7.displayName="Memo(ForwardRef(Popover))";let r8=d.zo.div(function(){return(0,d.iv)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),oe=d.zo.input(function(e){let{color:t,input:r}=(0,n.aQ)(e.theme),o=(r.radio.size-r.radio.markSize)/2;return(0,d.iv)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${k(r.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${k(r.radio.size)};
      width: ${k(r.radio.size)};
      border-radius: ${k(r.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${e6({color:t.input.default.enabled.border,width:r.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${k(o)};
        left: ${k(o)};
        height: ${k(r.radio.markSize)};
        width: ${k(r.radio.markSize)};
        border-radius: ${k(r.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${e9({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${e6({color:t.input.default.enabled.border,width:r.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${e6({width:r.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),ot=(0,a.forwardRef)(function(e,t){let{className:r,disabled:o,style:n,customValidity:l,readOnly:d,...s}=e,u=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,()=>u.current),T(u,l),(0,i.jsxs)(r8,{className:r,"data-ui":"Radio",style:n,children:[(0,i.jsx)(oe,{"data-read-only":!o&&d?"":void 0,"data-error":l?"":void 0,...s,disabled:o||d,readOnly:d,ref:u,type:"radio"}),(0,i.jsx)("span",{})]})});function or(e){let{font:t}=(0,n.aQ)(e.theme);return(0,d.iv)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function oo(e){let{color:t,input:r}=(0,n.aQ)(e.theme);return(0,d.iv)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${e6({color:t.input.default.enabled.border,width:r.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${e6({color:t.input.default.hovered.border,width:r.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${e9({border:{width:r.border.width,color:t.input.default.enabled.border},focusRing:r.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${e6({color:t.input.default.readOnly.border,width:r.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${e6({color:t.input.default.disabled.border,width:r.border.width})};
    }
  `}function on(e){let{$fontSize:t}=e,{font:r,media:o}=(0,n.aQ)(e.theme);return z(o,t,e=>{var t;return{fontSize:k((t=r.text.sizes[e]||r.text.sizes[2]).fontSize),lineHeight:k(t.lineHeight)}})}ot.displayName="ForwardRef(Radio)";let oi=d.zo.div(function(){return(0,d.iv)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),oa=d.zo.select(function(){return[tj,or,oo,on,tv]}),ol=(0,d.zo)(tV)(function(e){let{color:t}=(0,n.aQ)(e.theme);return(0,d.iv)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}),od=(0,a.forwardRef)(function(e,t){let{children:r,customValidity:o,disabled:n,fontSize:l=2,padding:d=3,radius:u=2,readOnly:c,space:f=3,...p}=e,h=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,()=>h.current),T(h,o),(0,i.jsxs)(oi,{"data-ui":"Select",children:[(0,i.jsx)(oa,{"data-read-only":!n&&c?"":void 0,"data-ui":"Select",...p,$fontSize:C(l),$padding:C(d),$radius:C(u),$space:C(f),disabled:n||c,ref:h,children:r}),(0,i.jsx)(ol,{padding:d,children:(0,i.jsx)(tX,{size:l,children:(0,i.jsx)(s.v4q,{})})})]})});od.displayName="ForwardRef(Select)";let os={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},ou=(0,d.zo)(tV)(function(){return os},function(e){let{media:t,space:r}=(0,n.aQ)(e.theme);return z(t,e.$space,e=>({gridGap:k(r[e])}))}),oc=(0,a.forwardRef)(function(e,t){let{as:r,space:o,...n}=e;return(0,i.jsx)(ou,{"data-as":"string"==typeof r?r:void 0,"data-ui":"Stack",...n,$space:C(o),forwardedAs:r,ref:t})});oc.displayName="ForwardRef(Stack)";let of=d.zo.span(function(){return(0,d.iv)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),op=d.zo.input(function(){return(0,d.iv)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oh=d.zo.span(function(e){let{color:t,input:r}=(0,n.aQ)(e.theme);return(0,d.iv)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${k(r.switch.width)};
    height: ${k(r.switch.height)};
    border-radius: ${k(r.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${e9({focusRing:r.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),ob=d.zo.span(function(e){let{input:t}=(0,n.aQ)(e.theme);return(0,d.iv)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${k(t.switch.width)};
    height: ${k(t.switch.height)};
    border-radius: ${k(t.switch.height/2)};
  `}),og=d.zo.span(function(e){let{$indeterminate:t}=e,{input:r}=(0,n.aQ)(e.theme),o=r.switch.width,i=r.switch.height,a=r.switch.padding,l=i-2*r.switch.padding,s=o-2*a-l,u=o/2-l/2-a,c=!0!==t&&!0===e.$checked;return(0,d.iv)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${k(a)};
    top: ${k(a)};
    height: ${k(l)};
    width: ${k(l)};
    border-radius: ${k(l/2)};
    transition-property: transform;
    transition-duration: ${r.switch.transitionDurationMs}ms;
    transition-timing-function: ${r.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${c&&(0,d.iv)`
      transform: translate3d(${s}px, 0, 0);
    `}

    ${t&&(0,d.iv)`
      transform: translate3d(${u}px, 0, 0);
    `}
  `}),om=(0,a.forwardRef)(function(e,t){let{checked:r,className:o,disabled:n,indeterminate:l,readOnly:d,style:s,...u}=e,c=(0,a.useRef)(null);return(0,a.useImperativeHandle)(t,()=>c.current),(0,a.useEffect)(()=>{c.current&&(c.current.indeterminate=l||!1)},[l]),(0,i.jsxs)(of,{className:o,"data-ui":"Switch",style:s,children:[(0,i.jsx)(op,{"data-read-only":!n&&d?"":void 0,...u,checked:!0!==l&&r,disabled:n||d,type:"checkbox",ref:c}),(0,i.jsxs)(oh,{"aria-hidden":!0,"data-name":"representation",children:[(0,i.jsx)(ob,{}),(0,i.jsx)(og,{$checked:r,$indeterminate:l})]})]})});om.displayName="ForwardRef(Switch)";let ov=d.zo.span(tw),ox=d.zo.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,ow=d.zo.textarea(tm,ty,t$),oy=d.zo.div(tj,tk),o$=(0,a.forwardRef)(function(e,t){let{border:r=!0,customValidity:o,disabled:n=!1,fontSize:l=2,padding:d=3,radius:s=2,weight:u,__unstable_disableFocusRing:c,...f}=e,p=(0,a.useRef)(null),h=eM();return(0,a.useImperativeHandle)(t,()=>p.current),T(p,o),(0,i.jsx)(ov,{"data-ui":"TextArea",children:(0,i.jsxs)(ox,{children:[(0,i.jsx)(ow,{"data-as":"textarea","data-scheme":h.scheme,"data-tone":h.tone,...f,$fontSize:C(l),$padding:C(d),$scheme:h.scheme,$space:C(0),$tone:h.tone,$weight:u,disabled:n,ref:p}),(0,i.jsx)(oy,{$radius:C(s),$unstableDisableFocusRing:c,$scheme:h.scheme,$tone:h.tone,"data-border":r?"":void 0,"data-scheme":h.scheme,"data-tone":h.tone})]})})});o$.displayName="ForwardRef(TextArea)";let ok={zIndex:2},oz=(0,d.zo)(t9).attrs({forwardedAs:"span"})(tw),oj=d.zo.span`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`,oR=(0,d.zo)(t9).attrs({forwardedAs:"span"})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oE=(0,d.zo)(t9).attrs({forwardedAs:"span"})`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`,oC=d.zo.input(tm,ty,t$),oS=d.zo.span(tj,tk),oT=(0,d.zo)(tV)`
  position: absolute;
  top: 0;
  left: 0;
`,oM=(0,d.zo)(tV)`
  position: absolute;
  top: 0;
  right: 0;
`,oF=(0,d.zo)(t9)`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
`,oO=(0,d.zo)(t4)({"&:not([hidden])":{display:"block"}}),oN=(0,a.forwardRef)(function(e,t){let{__unstable_disableFocusRing:r,border:o=!0,clearButton:n,disabled:d=!1,fontSize:u=2,icon:c,iconRight:f,onClear:p,padding:h=3,prefix:b,radius:g=2,readOnly:m,space:v=3,suffix:x,customValidity:y,type:$="text",weight:k,...z}=e,j=(0,a.useRef)(null),R=eM(),E=C(u),S=C(h),M=C(g),F=C(v),O=!!n,N=!!c,A=!!f,L=!!x,_=!!b;(0,a.useImperativeHandle)(t,()=>j.current),T(j,y);let B=(0,a.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),I=(0,a.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),p&&p(),j.current?.focus()},[p,j]),Q=(0,a.useMemo)(()=>b&&(0,i.jsx)(oR,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:M,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:b})}),[b,M]),D=(0,a.useMemo)(()=>(0,i.jsxs)(oS,{$hasPrefix:_,$unstableDisableFocusRing:r,$hasSuffix:L,$radius:M,$scheme:R.scheme,$tone:R.tone,"data-border":o?"":void 0,"data-scheme":R.scheme,"data-tone":R.tone,children:[c&&(0,i.jsx)(oT,{padding:S,children:(0,i.jsxs)(tX,{size:E,children:[(0,a.isValidElement)(c)&&c,(0,l.isValidElementType)(c)&&(0,i.jsx)(c,{})]})}),!O&&f&&(0,i.jsx)(oM,{padding:S,children:(0,i.jsxs)(tX,{size:E,children:[(0,a.isValidElement)(f)&&f,(0,l.isValidElementType)(f)&&(0,i.jsx)(f,{})]})})]}),[r,o,E,c,f,S,M,R,O,_,L]),P=(0,a.useMemo)(()=>S.map(e=>0===e?0:1===e||2===e?1:e-2),[S]),H=(0,a.useMemo)(()=>S.map(e=>0===e||1===e?0:2===e?1:e-1),[S]),V=(0,a.useMemo)(()=>"object"==typeof n?n:w,[n]),W=(0,a.useMemo)(()=>!d&&!m&&n&&(0,i.jsx)(oF,{forwardedAs:"span",padding:P,style:ok,tone:y?"critical":"inherit",children:(0,i.jsx)(oO,{"aria-label":"Clear","data-qa":"clear-button",fontSize:E,icon:s.Two,mode:"bleed",padding:H,radius:M,...V,onClick:I,onMouseDown:B})}),[n,P,H,V,y,d,E,I,B,M,m]),q=(0,a.useMemo)(()=>x&&(0,i.jsx)(oE,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:M,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:x})}),[M,x]);return(0,i.jsxs)(oz,{"data-ui":"TextInput",tone:R.tone,children:[Q,(0,i.jsxs)(oj,{children:[(0,i.jsx)(oC,{"data-as":"input","data-scheme":R.scheme,"data-tone":R.tone,...z,$fontSize:E,$iconLeft:N,$iconRight:A||O,$padding:S,$scheme:R.scheme,$space:F,$tone:R.tone,$weight:k,disabled:d,readOnly:m,ref:j,type:$}),D,W]}),q]})});function oA(e){let[t,r]=(0,a.useState)(e),o=(0,a.useRef)();return[t,(0,a.useCallback)((e,t)=>{let n=()=>{r(e)};if(o.current&&(clearTimeout(o.current),o.current=void 0),!t)return n();o.current=setTimeout(n,t)},[])]}oN.displayName="ForwardRef(TextInput)";let oL={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},o_=(0,d.zo)((0,p.E)(t9))`
  & > * {
    opacity: var(${y}, 1);
    will-change: opacity;
  }
`,oB=(0,a.memo)((0,a.forwardRef)(function(e,t){let{animate:r,arrow:o,arrowRef:n,arrowX:l,arrowY:d,children:s,originX:u,originY:c,padding:f,placement:p,radius:h,scheme:b,shadow:g,style:m,...v}=e,x=(0,a.useMemo)(()=>({originX:u,originY:c,willChange:r?"transform":void 0,...m}),[r,u,c,m]),w=(0,a.useMemo)(()=>({left:null!==l?l:void 0,top:null!==d?d:void 0,right:void 0,bottom:void 0}),[l,d]);return(0,i.jsxs)(o_,{"data-ui":"Tooltip__card",...v,"data-placement":p,padding:f,radius:h,ref:t,scheme:b,shadow:g,style:x,...r?$:{},children:[s,o&&(0,i.jsx)(rk,{ref:n,style:w,width:15,height:6,radius:2})]})}));oB.displayName="Memo(ForwardRef(TooltipCard))";let oI=eC("@sanity/ui/context/tooltipDelayGroup",null);function oQ(e){let{children:t,delay:r}=e,[o,n]=oA(!1),[l,d]=oA(null),s="number"==typeof r?r:r?.open||0,u="number"==typeof r?r:r?.close||0,c=(0,a.useMemo)(()=>({isGroupActive:o,setIsGroupActive:n,openTooltipId:l,setOpenTooltipId:d,openDelay:o?1:s,closeDelay:u}),[u,o,s,l,n,d]);return(0,i.jsx)(oI.Provider,{value:c,children:t})}oQ.displayName="TooltipDelayGroupProvider";let oD=(0,d.zo)(rX)`
  pointer-events: none;
`,oP=(0,a.forwardRef)(function(e,t){let r=rC(),{layer:o}=eN(),{animate:n=!1,arrow:l=!1,boundaryElement:d=r?.element,children:s,content:u,disabled:p,fallbackPlacements:b=e.fallbackPlacements??oL[e.placement??"bottom"],padding:m=2,placement:v="bottom",portal:x,radius:w=2,scheme:y,shadow:$=2,zOffset:k=o.tooltip.zOffset,delay:z,...j}=e,R=!eB()&&n,E=C(b),S=(0,a.useRef)(null),[T,M]=(0,a.useState)(null),F=(0,a.useRef)(null),O="viewport",[N,A]=(0,a.useState)(0);(0,a.useImperativeHandle)(t,()=>S.current);let L=rU(),_="string"==typeof x?L.elements?.[x]||null:L.element,B=(0,a.useMemo)(()=>{let e=[];return e.push((0,f.RR)({boundary:d||void 0,fallbackPlacements:E,padding:4,rootBoundary:O})),e.push((0,f.cv)({mainAxis:4})),e.push((0,f.uY)({boundary:d||void 0,rootBoundary:O,padding:4})),l&&e.push((0,f.x7)({element:F,padding:4})),R&&e.push(rg),e},[R,l,d,E]),{floatingStyles:I,placement:Q,middlewareData:D,refs:P,update:H}=(0,f.YF)({middleware:B,placement:v,whileElementsMounted:c.Me}),V=D.arrow?.x,W=D.arrow?.y,q=D["@sanity/ui/origin"]?.originX,X=D["@sanity/ui/origin"]?.originY,G=(0,a.useId)(),[Y,K]=oA(!1),U=(0,a.useContext)(oI),J=Y||U?.openTooltipId===G,Z=null!==U,ee="number"==typeof z?z:z?.open||0,et="number"==typeof z?z:z?.close||0,er=Z?U.openDelay:ee,eo=Z?U.closeDelay:et,en=(0,a.useCallback)((e,t)=>{if(Z){if(e){let r=t?0:er;U.setIsGroupActive(e,r),U.setOpenTooltipId(G,r)}else{let r=eo>200?eo:200;U.setIsGroupActive(e,r),U.setOpenTooltipId(null,t?0:eo)}}else K(e,t?0:e?er:eo)},[Z,U,er,G,eo,K]),ei=(0,a.useCallback)(e=>{en(!1),s?.props?.onBlur?.(e)},[s?.props,en]),ea=(0,a.useCallback)(e=>{en(!1,!0),s?.props.onClick?.(e)},[s?.props,en]),el=(0,a.useCallback)(e=>{en(!1,!0),s?.props.onContextMenu?.(e)},[s?.props,en]),ed=(0,a.useCallback)(e=>{en(!0),s?.props?.onFocus?.(e)},[s?.props,en]),es=(0,a.useCallback)(e=>{en(!0),s?.props?.onMouseEnter?.(e)},[s?.props,en]),eu=(0,a.useCallback)(e=>{en(!1),s?.props?.onMouseLeave?.(e)},[s?.props,en]);(function({handleIsOpenChange:e,referenceElement:t,showTooltip:r}){let o=(0,g.i)((r,o)=>{t&&(t===r||r instanceof Node&&t.contains(r)||(e(!1),o()))});(0,a.useEffect)(()=>{if(!r)return;let e=t=>{o(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[o,r])})({handleIsOpenChange:en,referenceElement:T,showTooltip:J}),(0,a.useEffect)(()=>{p&&J&&en(!1)},[p,en,J]),(0,a.useEffect)(()=>{!u&&J&&en(!1)},[u,en,J]),(0,a.useEffect)(()=>P.setReference(T),[T,P]),(0,a.useEffect)(()=>{if(J)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&en(!1,!0)}},[en,J]),(0,a.useLayoutEffect)(()=>{A(Math.min(...d?[d.offsetWidth]:[],_?.offsetWidth||document.body.offsetWidth)-8)},[d,_]);let ec=(0,a.useCallback)(e=>{F.current=e,H()},[H]),ef=(0,a.useCallback)(e=>{S.current=e,P.setFloating(e)},[P]),ep=(0,a.useRef)(null);(0,a.useImperativeHandle)(s?.ref,()=>ep.current);let eh=(0,a.useMemo)(()=>s?(0,a.cloneElement)(s,{onBlur:ei,onFocus:ed,onMouseEnter:es,onMouseLeave:eu,onClick:ea,onContextMenu:el,ref:ep}):null,[s,ei,ea,el,ed,es,eu]);if((0,a.useEffect)(()=>{if(eh)return M(ep.current),()=>M(null)},[eh]),!eh)return(0,i.jsx)(i.Fragment,{});if(p)return eh;let eb=(0,i.jsx)(oD,{"data-ui":"Tooltip",...j,ref:ef,style:{...I,maxWidth:N>0?`${N}px`:void 0},zOffset:k,children:(0,i.jsx)(oB,{...j,animate:R,arrow:l,arrowRef:ec,arrowX:V,arrowY:W,originX:q,originY:X,padding:m,placement:Q,radius:w,ref:ef,scheme:y,shadow:$,children:u})});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(rS,{condition:R,wrapper:e=>(0,i.jsx)(h.M,{children:e}),children:J&&(0,i.jsx)(rS,{condition:!!x,wrapper:e=>(0,i.jsx)(rJ,{__unstable_name:"string"==typeof x?x:void 0,children:e}),children:eb})}),eh]})});oP.displayName="ForwardRef(Tooltip)";let oH=d.zo.div`
  line-height: 0;
`,oV=(0,d.zo)(tV)`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`,oW=(0,d.F4)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,oq=(0,d.zo)(s.L4p)`
  animation: ${oW} 500ms linear infinite;
`;function oX(e){let{children:t,id:r,onSelect:o,selected:n,value:l}=e,d=(0,a.useCallback)(()=>{setTimeout(()=>{o(l)},0)},[o,l]),s=(0,a.useCallback)(e=>{var t;"Enter"!==e.key||rB(t=e.currentTarget)||rI(t)||d()},[d]);return(0,i.jsx)("li",{"aria-selected":n,"data-ui":"AutocompleteOption",id:r,role:"option",onClick:d,onKeyDown:s,children:t})}function oG(e,t){return"input/change"===t.type?{...e,activeValue:null,focused:!0,query:t.query}:"input/focus"===t.type?{...e,focused:!0}:"root/blur"===t.type?{...e,focused:!1,query:null}:"root/clear"===t.type?{...e,activeValue:null,query:null,value:null}:"root/escape"===t.type?{...e,focused:!1,query:null}:"root/open"===t.type?{...e,query:e.query||t.query}:"root/setActiveValue"===t.type?{...e,activeValue:t.value,listFocused:t.listFocused||e.listFocused}:"root/setListFocused"===t.type?{...e,listFocused:t.listFocused}:"value/change"===t.type?{...e,activeValue:t.value,query:null,value:t.value}:e}let oY=["Control","Shift","Alt","Enter","Home","End","PageUp","PageDown","Meta","Tab","CapsLock"],oK=["bottom-start","top-start"],oU=(e,t)=>t?t.value:e,oJ=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>-1,oZ=(0,a.forwardRef)(function(e,t){let{border:r=!0,customValidity:o,disabled:n,filterOption:l,fontSize:d=2,icon:u,id:c,listBox:f=w,loading:p,onBlur:h,onChange:b,onFocus:g,onQueryChange:m,onSelect:v,openButton:y,openOnFocus:$,options:k,padding:z=3,popover:j=w,prefix:R,radius:E=2,readOnly:S,relatedElements:T,renderOption:M,renderPopover:F,renderValue:O=oU,suffix:N,value:A,...L}=e,[_,B]=(0,a.useReducer)(oG,{activeValue:A||null,focused:!1,listFocused:!1,query:null,value:A||null}),{activeValue:I,focused:Q,listFocused:D,query:P,value:H}=_,V=(0,a.useCallback)(({value:e})=>(0,i.jsx)(t9,{"data-as":"button",padding:z,radius:2,tone:"inherit",children:(0,i.jsx)(tX,{size:d,textOverflow:"ellipsis",children:e})}),[d,z]),W="function"==typeof M?M:V,q="function"==typeof l?l:oJ,X=(0,a.useRef)(null),G=(0,a.useRef)(null),Y=(0,a.useRef)(null),K=(0,a.useRef)(null),U=(0,a.useRef)(!1),J=(0,a.useRef)(H),Z=(0,a.useRef)(A),ee=(0,a.useRef)(!1);(0,a.useImperativeHandle)(t,()=>Y.current);let et=`${c}-listbox`,er=Array.isArray(k)?k:x,eo=C(z),en=(0,a.useMemo)(()=>null!==H?er.find(e=>e.value===H):void 0,[er,H]),ei=(0,a.useMemo)(()=>er.filter(e=>!P||q(P,e)),[q,er,P]),ea=ei.length,el=I?`${c}-option-${I}`:void 0,ed=null!==P&&p||Q&&null!==P,es=(0,a.useCallback)(e=>{setTimeout(()=>{if(ee.current)return;let t=(T||[]).concat(X.current?[X.current]:[],G.current?[G.current]:[]),r=!1;if(document.activeElement){for(let e of t)if(e===document.activeElement||e.contains(document.activeElement)){r=!0;break}}!1===r&&(B({type:"root/blur"}),ee.current=!1,m&&m(null),h&&h(e))},0)},[h,m,T]),eu=(0,a.useCallback)(e=>{let t=K.current,r=e.target instanceof HTMLElement?e.target:null,o=t?.contains(r)||!1;o!==U.current&&(U.current=o,B({type:"root/setListFocused",listFocused:o}))},[]),ec=(0,a.useCallback)(e=>{B({type:"value/change",value:e}),ee.current=!1,v&&v(e),J.current=e,b&&b(e),m&&m(null),Y.current?.focus()},[b,v,m]),ef=(0,a.useCallback)(e=>{if("ArrowDown"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===I),r=t?ei.indexOf(t):-1,o=ei[(r+1)%ea];o&&B({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("ArrowUp"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===I),r=t?ei.indexOf(t):-1,o=ei[-1===r?ea-1:(ea+r-1)%ea];o&&B({type:"root/setActiveValue",value:o.value,listFocused:!0});return}if("Escape"===e.key){B({type:"root/escape"}),ee.current=!1,m&&m(null),Y.current?.focus();return}let t=e.target,r=K.current;if((r===t||r?.contains(t))&&!oY.includes(e.key)){Y.current?.focus();return}},[I,ei,ea,m]),ep=(0,a.useCallback)(e=>{let t=e.currentTarget.value;B({type:"input/change",query:t}),m&&m(t)},[m]),eh=(0,a.useCallback)(()=>{B({type:"root/open",query:H?O(H,en):""})},[en,O,H]),eb=(0,a.useCallback)(e=>{Q||(B({type:"input/focus"}),g&&g(e),$&&eh())},[Q,g,$,eh]),eg=(0,a.useCallback)(()=>{ee.current=!0},[]),em=(0,a.useCallback)(()=>{ee.current=!1},[]),ev=(0,a.useCallback)(()=>{B({type:"root/clear"}),J.current="",b&&b(""),m&&m(null),Y.current?.focus()},[b,m]),ex=(0,a.useCallback)(()=>{B({type:"input/focus"})},[]);(0,a.useEffect)(()=>{if(A!==Z.current){Z.current=A,void 0!==A&&(B({type:"value/change",value:A}),J.current=A);return}A!==J.current&&(J.current=A||null,B({type:"value/change",value:A||null}))},[A]),(0,a.useEffect)(()=>{!Q&&J.current&&B({type:"root/setActiveValue",value:J.current})},[Q]),(0,a.useEffect)(()=>{let e=K.current;if(!e)return;let t=ei.find(e=>e.value===I);if(t){let r=ei.indexOf(t),o=e.childNodes[r];if(o){if(document.activeElement&&o.contains(document.activeElement))return;rP(o)}}},[I,ei]);let ew=(0,a.useMemo)(()=>{if(!p&&!n&&H)return{"aria-label":"Clear",onFocus:ex}},[n,ex,p,H]),ey=(0,a.useMemo)(()=>eo.map(e=>0===e?0:1===e||2===e?1:e-2),[eo]),e$=(0,a.useMemo)(()=>eo.map(e=>Math.max(e-1,0)),[eo]),ek=(0,a.useMemo)(()=>"object"==typeof y?y:w,[y]),ez=(0,a.useCallback)(e=>{eh(),ek.onClick&&ek.onClick(e),rA(()=>Y.current?.focus())},[ek,eh]),ej=(0,a.useMemo)(()=>n||S||!y?void 0:(0,i.jsx)(tV,{"aria-hidden":ed,padding:ey,children:(0,i.jsx)(t4,{"aria-label":"Open",disabled:ed,fontSize:d,icon:s.v4q,mode:"bleed",padding:e$,...ek,onClick:ez})}),[n,ed,d,ez,y,ey,e$,ek,S]),eR=(0,a.useMemo)(()=>null===P?null!==H?O(H,en):"":P,[en,P,O,H]),eE=(0,i.jsx)(oN,{...L,"aria-activedescendant":el,"aria-autocomplete":"list","aria-expanded":ed,"aria-owns":et,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",border:r,clearButton:ew,customValidity:o,disabled:n,fontSize:d,icon:u,iconRight:p&&oq,id:c,inputMode:"search",onChange:ep,onClear:ev,onFocus:eb,padding:eo,prefix:R,radius:E,readOnly:S,ref:Y,role:"combobox",spellCheck:!1,suffix:N||ej,value:eR}),eC=(0,a.useCallback)(e=>{"Tab"===e.key&&D&&Y.current?.focus()},[D]),eS=(0,a.useMemo)(()=>0===ei.length?null:(0,i.jsx)(oV,{"data-ui":"AutoComplete__results",onKeyDown:eC,padding:1,...f,tabIndex:-1,children:(0,i.jsx)(oc,{as:"ul","aria-multiselectable":!1,"data-ui":"AutoComplete__resultsList",id:et,ref:K,role:"listbox",space:1,children:ei.map(e=>{let t=null!==I?e.value===I:en===e;return(0,i.jsx)(oX,{id:`${c}-option-${e.value}`,onSelect:ec,selected:t,value:e.value,children:(0,a.cloneElement)(W(e),{disabled:p,selected:t,tabIndex:D&&t?0:-1})},e.value)})})}),[I,en,ei,ec,eC,c,f,et,D,p,W]),eT=(0,a.useMemo)(()=>F?F({content:eS,hidden:!ed,inputElement:Y.current,onMouseEnter:eg,onMouseLeave:em},G):0===ea?null:(0,i.jsx)(r7,{arrow:!1,constrainSize:!0,content:eS,fallbackPlacements:oK,matchReferenceWidth:!0,onMouseEnter:eg,onMouseLeave:em,open:ed,overflow:"auto",placement:"bottom-start",portal:!0,radius:E,ref:G,referenceElement:Y.current,...j}),[eS,ed,ea,eg,em,j,E,F]);return(0,i.jsxs)(oH,{"data-ui":"Autocomplete",onBlur:es,onFocus:eu,onKeyDown:ef,ref:X,children:[eE,eT]})});oZ.displayName="ForwardRef(Autocomplete)";let o0=oZ,o1=d.zo.ol`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  white-space: nowrap;
  line-height: 0;
`,o2=(0,d.zo)(t4)`
  appearance: none;
  margin: -4px;
`,o3=(0,a.forwardRef)(function(e,t){let{children:r,maxLength:o,separator:n,space:l=2,...d}=e,s=C(l),[u,c]=(0,a.useState)(!1),f=(0,a.useRef)(null),p=(0,a.useRef)(null),h=(0,a.useCallback)(()=>c(!1),[]),b=(0,a.useCallback)(()=>c(!0),[]);S(h,()=>[f.current,p.current]);let g=(0,a.useMemo)(()=>a.Children.toArray(r).filter(a.isValidElement),[r]),m=(0,a.useMemo)(()=>{let e=g.length;if(o&&e>o){let t=Math.ceil(o/2),r=Math.floor(o/2);return[...g.slice(0,t-1),(0,i.jsx)(r7,{constrainSize:!0,content:(0,i.jsx)(oc,{as:"ol",overflow:"auto",padding:s,space:s,children:g.slice(t-1,e-r)}),open:u,placement:"top",portal:!0,ref:p,children:(0,i.jsx)(o2,{fontSize:1,mode:"bleed",onClick:u?h:b,padding:1,ref:f,selected:u,text:"…"})},"button"),...g.slice(e-r)]}return g},[h,b,o,u,g,s]);return(0,i.jsx)(o1,{"data-ui":"Breadcrumbs",...d,ref:t,children:m.map((e,t)=>(0,i.jsxs)(a.Fragment,{children:[t>0&&(0,i.jsx)(tV,{"aria-hidden":!0,as:"li",paddingX:s,children:n||(0,i.jsx)(tX,{muted:!0,children:"/"})}),(0,i.jsx)(tV,{as:"li",children:e})]},t))})});o3.displayName="ForwardRef(Breadcrumbs)";let o5=eC("@sanity/ui/context/dialog",{version:0});function o4(e,t,r){return!e||!t||rQ(e,r)||rQ(t,r)}let o6=(0,d.zo)(rX)(tz,function({theme:e}){let{color:t}=(0,n.aQ)(e);return{"&:not([hidden])":{display:"flex"},top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",outline:"none",background:t.backdrop}},function(e){let{media:t}=(0,n.aQ)(e.theme);return z(t,e.$position,e=>({"&&":{position:e}}))},function(e){return e.$animate?(0,d.iv)`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  `:(0,d.iv)``}),o9=(0,d.zo)(ra)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,o7=(0,d.zo)(t9)`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
  overflow: clip;
`,o8=(0,d.zo)(tU)`
  flex: 1;
  min-height: 0;
  width: 100%;
`,ne=(0,d.zo)(tV)`
  position: relative;
  z-index: 2;
`,nt=(0,d.zo)(tV)`
  position: relative;
  z-index: 1;
  overflow: auto;
  outline: none;
`,nr=(0,d.zo)(tV)`
  position: relative;
  z-index: 3;
`,no=(0,a.forwardRef)(function(e,t){let{__unstable_autoFocus:r,__unstable_hideCloseButton:o,children:n,contentRef:l,footer:d,header:u,id:c,onClickOutside:f,onClose:p,portal:h,radius:b,scheme:g,shadow:m,width:v}=e,x=rU(),w=h?x.elements?.[h]||null:x.element,y=rC().element,$=C(b),k=C(m),z=C(v),j=(0,a.useRef)(null),R=(0,a.useRef)(null),{isTopLayer:E}=rN(),T=`${c}_label`,M=!!p&&!1===o,F=!!u||M;return(0,a.useImperativeHandle)(t,()=>j.current),(0,a.useImperativeHandle)(l,()=>R.current),(0,a.useEffect)(()=>{r&&j.current&&rP(j.current)},[r,j]),ej((0,a.useCallback)(e=>{if(!E||!p)return;let t=document.activeElement;t&&!o4(y,w,t)||"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),p())},[y,E,p,w])),S(E&&f&&(e=>{let t=e.target;t&&!o4(y,w,t)||f()}),()=>[j.current]),(0,i.jsx)(o9,{"data-ui":"DialogCard",width:z,children:(0,i.jsx)(o7,{radius:$,ref:j,scheme:g,shadow:k,children:(0,i.jsxs)(o8,{direction:"column",children:[F&&(0,i.jsx)(ne,{children:(0,i.jsxs)(tU,{align:"center",padding:3,children:[(0,i.jsx)(tV,{flex:1,padding:2,children:u&&(0,i.jsx)(tX,{id:T,size:1,weight:"semibold",children:u})}),M&&(0,i.jsx)(tV,{flex:"none",children:(0,i.jsx)(t4,{"aria-label":"Close dialog",disabled:!p,icon:s.Two,mode:"bleed",onClick:p,padding:2})})]})}),(0,i.jsx)(nt,{flex:1,ref:R,tabIndex:-1,children:n}),d&&(0,i.jsx)(nr,{children:d})]})})})});no.displayName="ForwardRef(DialogCard)";let nn=(0,a.forwardRef)(function(e,t){let r=(0,a.useContext)(o5),{layer:o}=eN(),{__unstable_autoFocus:n=!0,__unstable_hideCloseButton:l=!1,cardRadius:d=4,cardShadow:s=3,children:u,contentRef:c,footer:f,header:p,id:h,onActivate:b,onClickOutside:g,onClose:m,onFocus:v,padding:x=3,portal:w,position:y=r.position||"fixed",scheme:$,width:k=0,zOffset:z=r.zOffset||o.dialog.zOffset,animate:j=!1,...R}=e,E=!eB()&&j,S=rU(),T=w?S.elements?.[w]||null:S.element,M=rC().element,F=C(d),O=C(x),N=C(y),A=C(k),L=C(z),_=(0,a.useRef)(null),B=(0,a.useRef)(null),I=(0,a.useRef)(null),Q=(0,a.useRef)(null),D=(0,a.useCallback)(e=>{v?.(e);let t=e.target,r=I.current;if(r&&t===_.current){rH(r);return}if(r&&t===B.current){rP(r);return}r_(e.target)&&(Q.current=e.target)},[v]),P=`${h}_label`,H=(0,a.useRef)(),V=(0,a.useCallback)(()=>{H.current&&clearTimeout(H.current),H.current=setTimeout(()=>{let e=document.activeElement;if(e&&!o4(M,T,e)){let e=Q.current;if(!e||!document.body.contains(e)){let e=I.current;e&&rP(e);return}e.focus()}},0)},[M,T]);return(0,i.jsx)(rJ,{__unstable_name:w,children:(0,i.jsxs)(o6,{...R,$animate:E,$padding:O,$position:N,"aria-labelledby":P,"aria-modal":!0,"data-ui":"Dialog",id:h,onActivate:b,onClick:V,onFocus:D,ref:t,role:"dialog",zOffset:L,children:[(0,i.jsx)("div",{ref:_,tabIndex:0}),(0,i.jsx)(no,{__unstable_autoFocus:n,__unstable_hideCloseButton:l,contentRef:c,footer:f,header:p,id:h,onClickOutside:g,onClose:m,portal:w,radius:F,ref:I,scheme:$,shadow:s,width:A,children:u}),(0,i.jsx)("div",{ref:B,tabIndex:0})]})})});function ni(e){let{children:t,position:r,zOffset:o}=e,n=(0,a.useMemo)(()=>({version:0,position:r,zOffset:o}),[r,o]);return(0,i.jsx)(o5.Provider,{value:n,children:t})}nn.displayName="ForwardRef(Dialog)",ni.displayName="DialogProvider";let na=d.zo.kbd`
  font: inherit;
  padding: 1px;

  &:not([hidden]) {
    display: block;
  }
`,nl=(0,d.zo)(rb)`
  &:not([hidden]) {
    display: block;
  }
`,nd=(0,a.forwardRef)(function(e,t){let{fontSize:r,keys:o,padding:n,radius:a,space:l=.5,...d}=e,s=C(l);return o&&0!==o.length?(0,i.jsx)(na,{"data-ui":"Hotkeys",...d,ref:t,children:(0,i.jsx)(rp,{as:"span",space:s,children:o.map((e,t)=>(0,i.jsx)(nl,{fontSize:r,padding:n,radius:a,children:e},t))})}):(0,i.jsx)(i.Fragment,{})});nd.displayName="ForwardRef(Hotkeys)";let ns=eC("@sanity/ui/context/menu",null);function nu(e){return rB(e)&&"true"!==e.getAttribute("data-disabled")||rI(e)&&!e.disabled}function nc(e){return e.filter(nu)}let nf=[],np=(0,d.zo)(tV)`
  outline: none;
  overflow: auto;
`,nh=(0,a.forwardRef)(function(e,t){let{children:r,focusFirst:o,focusLast:n,onClickOutside:l,onEscape:d,onItemClick:s,onItemSelect:u,onKeyDown:c,originElement:f,padding:p=1,registerElement:h,shouldFocus:b=e.focusFirst&&"first"||e.focusLast&&"last"||null,space:g=1,...m}=e,v=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,()=>v.current);let{isTopLayer:x}=rN(),{activeElement:w,activeIndex:y,handleItemMouseEnter:$,handleItemMouseLeave:k,handleKeyDown:z,mount:j}=function(e){let{onKeyDown:t,originElement:r,shouldFocus:o,rootElementRef:n}=e,i=(0,a.useRef)([]),[l,d]=(0,a.useState)(-1),s=(0,a.useRef)(l),u=(0,a.useMemo)(()=>i.current[l]||null,[l]),c=!!n.current,f=(0,a.useCallback)(e=>{d(e),s.current=e},[]),p=(0,a.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let r=new WeakMap;for(let o of t)r.set(o,function(e,t){let r=[],o=t;for(;o!==e;){let t=o.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(o);if(r.unshift(n),t===e)break;o=t}return r}(e,o));t.sort((e,t)=>{let o=r.get(e)||nf,n=r.get(t)||nf,i=Math.max(o.length,n.length);for(let e=0;e<i;e+=1){let t=o[e]||-1,r=n[e]||-1;if(t!==r)return t-r}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,a.useCallback)(e=>{if("Tab"===e.key){r&&r.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=nc(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=nc(i.current),r=t[t.length-1];if(!r)return;f(i.current.indexOf(r));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=nc(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n-1+r)%r];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=nc(i.current),r=t.length;if(0===r)return;let o=i.current[s.current],n=t.indexOf(o),a=t[n=(n+1)%r];f(i.current.indexOf(a));return}t&&t(e)},[t,r,f]),b=(0,a.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),g=(0,a.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,a.useEffect)(()=>{if(!c)return;let e=requestAnimationFrame(()=>{if(-1===l){if("first"===o){let e=nc(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===o){let e=nc(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[l]||null)?.focus()});return()=>cancelAnimationFrame(e)},[l,c,f,o]),{activeElement:u,activeIndex:l,handleItemMouseEnter:b,handleItemMouseLeave:g,handleKeyDown:h,mount:p}}({onKeyDown:c,originElement:f,shouldFocus:b,rootElementRef:v}),R=(0,a.useRef)(null),E=(0,a.useCallback)(e=>{R.current&&(R.current(),R.current=null),v.current=e,v.current&&h&&(R.current=h(v.current))},[h]);(0,a.useEffect)(()=>{u&&u(y)},[y,u]),S(x&&l,()=>[v.current]),ej((0,a.useCallback)(e=>{x&&"Escape"===e.key&&(e.stopPropagation(),d&&d())},[x,d]));let C=(0,a.useMemo)(()=>({version:0,activeElement:w,activeIndex:y,mount:j,onClickOutside:l,onEscape:d,onItemClick:s,onItemMouseEnter:$,onItemMouseLeave:k,registerElement:h,onMouseEnter:$,onMouseLeave:k}),[w,y,j,$,k,l,d,s,h]);return(0,i.jsx)(ns.Provider,{value:C,children:(0,i.jsx)(np,{"data-ui":"Menu",...m,onKeyDown:z,padding:p,ref:E,role:"menu",tabIndex:-1,children:(0,i.jsx)(oc,{space:g,children:r})})})});nh.displayName="ForwardRef(Menu)";let nb=(0,a.forwardRef)(function(e,t){let{__unstable_disableRestoreFocusOnClose:r=!1,boundaryElement:o,button:n,id:l,menu:d,onClose:s,onOpen:u,placement:c,popoverScheme:f,portal:p=!0,popover:h,popoverRadius:b,preventOverflow:g}=e,[m,v]=(0,a.useState)(!1),[x,w]=(0,a.useState)(null),[y,$]=(0,a.useState)(null),[k,z]=(0,a.useState)([]),j=(0,a.useRef)(m);(0,a.useEffect)(()=>{u&&m&&!j.current&&u()},[u,m]),(0,a.useEffect)(()=>{s&&!m&&j.current&&s()},[s,m]),(0,a.useEffect)(()=>{j.current=m},[m]);let R=(0,a.useCallback)(()=>{v(e=>!e),w(null)},[]),E=(0,a.useCallback)(e=>{m&&e.preventDefault()},[m]),C=(0,a.useCallback)(e=>{if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key){e.preventDefault(),v(!0),w("first");return}if("ArrowUp"===e.key){e.preventDefault(),v(!0),w("last");return}},[]),S=(0,a.useCallback)(e=>{let t=e.target;if(t instanceof Node&&!(y&&(t===y||y.contains(t)))){for(let e of k)if(t===e||e.contains(t))return;v(!1)}},[y,k]),T=(0,a.useCallback)(()=>{v(!1),!r&&y&&y.focus()},[y,r]),M=(0,a.useCallback)(e=>{let t=e.relatedTarget;if(t instanceof Node){for(let e of k)if(e===t||e.contains(t))return;v(!1)}},[k]),F=(0,a.useCallback)(()=>{v(!1),!r&&y&&y.focus()},[y,r]),O=(0,a.useCallback)(e=>(z(t=>t.concat([e])),()=>z(t=>t.filter(t=>t!==e))),[]),N=(0,a.useMemo)(()=>({"aria-labelledby":l,onBlurCapture:M,onClickOutside:S,onEscape:T,onItemClick:F,originElement:y,registerElement:O,shouldFocus:x}),[y,S,T,F,l,M,O,x]),A=d&&(0,a.cloneElement)(d,N),L=(0,a.useRef)(null),_=(0,a.useMemo)(()=>n&&(0,a.cloneElement)(n,{"data-ui":"MenuButton",id:l,onClick:R,onKeyDown:C,onMouseDown:E,"aria-haspopup":!0,"aria-expanded":m,ref:L,selected:n.props.selected??m}),[n,R,C,E,l,m]);(0,a.useImperativeHandle)(t,()=>L.current),(0,a.useEffect)(()=>{if(_)return $(L.current),()=>$(null)},[_]);let B=(0,a.useMemo)(()=>({boundaryElement:o,overflow:"auto",placement:c,portal:p,preventOverflow:g,radius:b,scheme:f,...h||{}}),[o,c,b,f,p,g,h]);return(0,i.jsx)(r7,{"data-ui":"MenuButton__popover",...B,content:A,open:m,children:_||(0,i.jsx)(i.Fragment,{})})});nb.displayName="ForwardRef(MenuButton)";let ng=d.zo.hr`
  height: 1px;
  border: 0;
  background: var(--card-hairline-soft-color);
  margin: 0;
`;ng.displayName="MenuDivider";let nm=(0,d.zo)(tV)(tj,function(){return(0,d.iv)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:r,style:o}=(0,n.aQ)(e.theme),i=r.selectable[t];return(0,d.iv)`
    ${t1(r,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${t1(r,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${t1(r,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${t1(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t1(r,i.hovered)}
            }

            &:active {
              ${t1(r,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${t1(r,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t1(r,i.pressed)}
        }

        &[data-selected] {
          ${t1(r,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t1(r,i.hovered)}
            }
            &:active {
              ${t1(r,i.pressed)}
            }
          }
        }
      }
    }

    ${o?.card?.root}
  `});function nv(){let e=(0,a.useContext)(ns);if(!e)throw Error("useMenu(): missing context value");if(!rR(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function nx(e){let{as:t="button",children:r,fontSize:o=1,icon:n,onClick:d,padding:u=3,popover:c,radius:f=2,space:p=3,text:h,tone:b="default",...g}=e,m=nv(),{scheme:v}=eM(),{activeElement:x,mount:w,onClickOutside:y,onEscape:$,onItemClick:k,onItemMouseEnter:z=m.onMouseEnter,registerElement:j}=m,[R,E]=(0,a.useState)(null),[S,T]=(0,a.useState)(!1),[M,F]=(0,a.useState)(null),O=!!x&&x===R,[N,A]=(0,a.useState)(!1),L=(0,a.useCallback)(e=>{A(!1),z(e),T(!0)},[z]),_=(0,a.useCallback)(e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),T(!1),requestAnimationFrame(()=>{R?.focus()}))},[R]),B=(0,a.useCallback)(e=>{d?.(e),F("first"),T(!0)},[d]),I=(0,a.useCallback)(()=>{T(!1),k?.()},[k]),Q=(0,a.useCallback)(()=>A(!0),[]);(0,a.useEffect)(()=>w(R),[w,R]),(0,a.useEffect)(()=>{O||T(!1)},[O]),(0,a.useEffect)(()=>{S||A(!1)},[S]),(0,a.useEffect)(()=>{if(!M)return;let e=requestAnimationFrame(()=>F(null));return()=>cancelAnimationFrame(e)},[M]);let D=(0,i.jsx)(nh,{onClickOutside:y,onEscape:$,onItemClick:I,onKeyDown:_,onMouseEnter:Q,registerElement:j,shouldFocus:M,children:r}),P=(0,a.useCallback)(e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){F("first"),T(!0),A(!0);return}},[]);return(0,i.jsx)(r7,{...c,content:D,"data-ui":"MenuGroup__popover",open:S,children:(0,i.jsx)(nm,{"data-as":t,"data-ui":"MenuGroup",forwardedAs:t,...g,"aria-pressed":"button"===t?N:void 0,"data-pressed":"button"!==t?N:void 0,"data-selected":!N&&O?"":void 0,$radius:C(f),$tone:b,$scheme:v,onClick:B,onKeyDown:P,onMouseEnter:L,ref:E,tabIndex:-1,type:"button"===t?"button":void 0,children:(0,i.jsxs)(tU,{gap:p,padding:u,children:[n&&(0,i.jsxs)(tX,{size:o,children:[(0,a.isValidElement)(n)&&n,(0,l.isValidElementType)(n)&&(0,i.jsx)(n,{})]}),(0,i.jsx)(tV,{flex:1,children:(0,i.jsx)(tX,{size:o,textOverflow:"ellipsis",weight:"medium",children:h})}),(0,i.jsx)(tX,{size:o,children:(0,i.jsx)(s.XCv,{})})]})})})}nm.displayName="Selectable",nx.displayName="MenuGroup";let nw=(0,a.forwardRef)(function(e,t){let{as:r="button",children:o,disabled:n,fontSize:d=1,hotkeys:s,icon:u,iconRight:c,onClick:f,padding:p=3,paddingX:h,paddingY:b,paddingTop:g,paddingRight:m,paddingBottom:v,paddingLeft:x,pressed:w,radius:y=2,selected:$,space:k=3,text:z,tone:j="default",...R}=e,{scheme:E}=eM(),S=nv(),{activeElement:T,mount:M,onItemClick:F,onItemMouseEnter:O=S.onMouseEnter,onItemMouseLeave:N=S.onMouseLeave}=S,[A,L]=(0,a.useState)(null),_=!!T&&T===A,B=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,()=>B.current),(0,a.useEffect)(()=>M(A,$),[M,A,$]);let I=(0,a.useCallback)(e=>{n||(f&&f(e),F&&F())},[n,f,F]),Q=(0,a.useMemo)(()=>({padding:p,paddingX:h,paddingY:b,paddingTop:g,paddingRight:m,paddingBottom:v,paddingLeft:x}),[p,h,b,g,m,v,x]),D=C(d).map(e=>e-1),P=(0,a.useCallback)(e=>{B.current=e,L(e)},[]);return(0,i.jsxs)(nm,{"data-ui":"MenuItem",...R,"aria-pressed":"button"===r&&w,"data-pressed":"button"!==r&&w?"":void 0,"data-selected":_?"":void 0,"data-disabled":n?"":void 0,forwardedAs:r,$radius:C(y),$padding:C(0),$tone:n?"default":j,$scheme:E,disabled:n,onClick:I,onMouseEnter:O,onMouseLeave:N,ref:P,role:"menuitem",tabIndex:-1,type:"button"===r?"button":void 0,children:[(u||z||c)&&(0,i.jsxs)(tU,{as:"span",gap:k,align:"center",...Q,children:[u&&(0,i.jsxs)(tX,{size:d,children:[(0,a.isValidElement)(u)&&u,(0,l.isValidElementType)(u)&&(0,i.jsx)(u,{})]}),z&&(0,i.jsx)(tV,{flex:1,children:(0,i.jsx)(tX,{size:d,textOverflow:"ellipsis",weight:"medium",children:z})}),s&&(0,i.jsx)(nd,{fontSize:D,keys:s,style:{marginTop:-4,marginBottom:-4}}),c&&(0,i.jsxs)(tX,{size:d,children:[(0,a.isValidElement)(c)&&c,(0,l.isValidElementType)(c)&&(0,i.jsx)(c,{})]})]}),o&&(0,i.jsx)(tV,{as:"span",...Q,children:o})]})});nw.displayName="ForwardRef(MenuItem)";let ny=(0,d.F4)`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`,n$=(0,d.iv)`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: ${ny};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`,nk=(0,d.iv)`
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({$animated:e})=>e?n$:(0,d.iv)`
            background-color: var(--card-skeleton-color-from);
          `}
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`,nz=(0,d.zo)(tV)(tj,nk),nj=(0,a.forwardRef)(function(e,t){let{animated:r=!1,delay:o,radius:n,...l}=e,[d,s]=(0,a.useState)(!o);return(0,a.useEffect)(()=>{if(!o)return s(!0);let e=setTimeout(()=>{s(!0)},o);return()=>{clearTimeout(e)}},[o]),(0,i.jsx)(nz,{...l,$animated:r,$radius:C(n),$visible:d,ref:t})});nj.displayName="ForwardRef(Skeleton)";let nR=(0,d.zo)(nj)(e=>{let{$size:t,$style:r}=e,{font:o,media:i}=(0,n.aQ)(e.theme),a=o[r];return z(i,t,e=>{let t=a.sizes[e];return{height:t.lineHeight-t.ascenderHeight-t.descenderHeight}})}),nE=(0,a.forwardRef)(function(e,t){let{size:r=2,...o}=e,n=C(r);return(0,i.jsx)(nR,{...o,$size:n,ref:t,$style:"text"})});nE.displayName="ForwardRef(TextSkeleton)",(0,a.forwardRef)(function(e,t){let{size:r=2,...o}=e,n=C(r);return(0,i.jsx)(nR,{...o,$size:n,ref:t,$style:"label"})}).displayName="ForwardRef(LabelSkeleton)",(0,a.forwardRef)(function(e,t){let{size:r=2,...o}=e,n=C(r);return(0,i.jsx)(nR,{...o,$size:n,ref:t,$style:"heading"})}).displayName="ForwardRef(HeadingSkeleton)",(0,a.forwardRef)(function(e,t){let{size:r=2,...o}=e,n=C(r);return(0,i.jsx)(nR,{...o,$size:n,ref:t,$style:"code"})}).displayName="ForwardRef(CodeSkeleton)";let nC=(0,d.zo)(t4)`
  max-width: 100%;
`,nS=(0,a.forwardRef)(function(e,t){let{icon:r,id:o,focused:n,fontSize:l=1,label:d,onClick:s,onFocus:u,padding:c=2,selected:f,...p}=e,h=(0,a.useRef)(null),b=(0,a.useRef)(!1);(0,a.useImperativeHandle)(t,()=>h.current);let g=(0,a.useCallback)(()=>{b.current=!1},[]),m=(0,a.useCallback)(e=>{b.current=!0,u&&u(e)},[u]);return(0,a.useEffect)(()=>{n&&!b.current&&(h.current&&h.current.focus(),b.current=!0)},[n]),(0,i.jsx)(nC,{"data-ui":"Tab",...p,"aria-selected":f?"true":"false",fontSize:l,icon:r,id:o,mode:"bleed",onClick:s,onBlur:g,onFocus:m,padding:c,ref:h,role:"tab",selected:f,tabIndex:f?0:-1,text:d,type:"button"})});function nT(e){return!!e}nS.displayName="ForwardRef(Tab)";let nM=(0,d.zo)(rp)`
  & > div {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }
`,nF=(0,a.forwardRef)(function(e,t){let{children:r,...o}=e,[n,l]=(0,a.useState)(-1),d=(0,a.useMemo)(()=>r.filter(nT),[r]).map((e,t)=>(0,a.cloneElement)(e,{focused:n===t,key:t,onFocus:()=>u(t)})),s=d.length,u=(0,a.useCallback)(e=>{l(e)},[]),c=(0,a.useCallback)(e=>{"ArrowLeft"===e.key&&l(e=>(e+s-1)%s),"ArrowRight"===e.key&&l(e=>(e+1)%s)},[s]);return(0,i.jsx)(nM,{"data-ui":"TabList",...o,onKeyDown:c,ref:t,role:"tablist",children:d})});nF.displayName="ForwardRef(TabList)";let nO=(0,a.forwardRef)(function(e,t){let{flex:r,...o}=e;return(0,i.jsx)(tV,{"data-ui":"TabPanel",...o,flex:r,ref:t,role:"tabpanel",tabIndex:void 0===e.tabIndex?0:e.tabIndex,children:e.children})});nO.displayName="ForwardRef(TabPanel)";let nN=(0,d.zo)(tU)`
  overflow-x: auto;
`,nA=(0,d.F4)`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`,nL={error:"critical",warning:"caution",success:"positive",info:"primary"},n_={error:"critical",warning:"caution",success:"positive",info:"primary"},nB={error:"alert",warning:"alert",success:"alert",info:"alert"},nI=(0,d.zo)(t9)(function(e){let{color:t}=(0,n.aQ)(e.theme),r=t.button.default[e.tone].enabled.bg;return e.$duration?(0,d.iv)`
    pointer-events: all;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow: clip;
    padding-bottom: ${2}px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: ${2}px;
      background: ${r};
      animation-name: ${nA};
      animation-duration: ${e.$duration}ms;
      animation-fill-mode: both;
    }

    & > * {
      opacity: var(${y}, 1);
      will-change: opacity;
    }
  `:(0,d.iv)`
      pointer-events: all;
      & > * {
        opacity: var(${y}, 1);
        will-change: opacity;
      }
    `});function nQ(e){let{closable:t,description:r,duration:o,onClose:n,radius:a=3,title:l,status:d,...u}=e,c=d?nL[d]:"default",f=d?n_[d]:"default",p=d?nB[d]:"status";return(0,i.jsx)(nI,{"data-ui":"Toast",role:p,...u,marginTop:3,radius:a,shadow:2,tone:c,$duration:o,children:(0,i.jsxs)(tU,{align:"flex-start",children:[(0,i.jsx)(nN,{flex:1,padding:3,children:(0,i.jsxs)(oc,{space:3,children:[l&&(0,i.jsx)(tX,{size:1,weight:"medium",children:l}),r&&(0,i.jsx)(tX,{muted:!0,size:1,children:r})]})}),t&&(0,i.jsx)(tV,{padding:1,children:(0,i.jsx)(t4,{as:"button",icon:s.Two,mode:"bleed",padding:2,tone:f,onClick:n,style:{verticalAlign:"top"}})})]})})}nQ.displayName="Toast";let nD=()=>()=>{},nP=eC("@sanity/ui/context/toast",null),nH=(0,d.zo)(rX)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`,nV=d.zo.div`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 420px;
  width: 100%;
`,nW=0;function nq(e){let{children:t,padding:r=4,paddingX:o,paddingY:n,zOffset:l}=e,[d,s]=(0,a.useState)([]),u=(0,a.useRef)({}),c=(0,a.useSyncExternalStore)(nD,()=>!0,()=>!1),f=eB(),b=(0,a.useMemo)(()=>({initial:{opacity:0,[y]:0,y:32,scale:.25,willChange:"transform"},animate:{opacity:[0,1,1],[y]:[0,0,1],y:0,scale:1},exit:{opacity:[1,1,0],[y]:[1,0,0],scale:.5,transition:f?{duration:0}:{duration:.2}}}),[f]),g=(0,a.useMemo)(()=>({version:0,push:e=>{let t=e=>(0,a.startTransition)(()=>s(e)),r=e.id||String(nW++),o=e.duration||5e3,n=()=>{let e=u.current[r]?.timeoutId;t(e=>{let t=e.findIndex(e=>e.id===r);if(t>-1){let r=e.slice(0);return r.splice(t,1),r}return e}),void 0!==e&&(clearTimeout(e),delete u.current[r])};return t(t=>t.filter(e=>e.id!==r).concat([{dismiss:n,id:r,params:{...e,duration:o}}])),u.current[r]&&(clearTimeout(u.current[r].timeoutId),delete u.current[r]),u.current[r]={timeoutId:setTimeout(n,o)},r}}),[]);return(0,a.useEffect)(()=>()=>{for(let{timeoutId:e}of Object.values(u.current))clearTimeout(e);u.current={}},[]),(0,i.jsxs)(nP.Provider,{value:g,children:[t,c&&(0,i.jsx)(nH,{"data-ui":"ToastProvider",zOffset:l,children:(0,i.jsx)(nV,{children:(0,i.jsx)(tV,{padding:r,paddingX:o,paddingY:n,children:(0,i.jsx)(h.M,{initial:!1,children:d.map(({dismiss:e,id:t,params:r})=>(0,i.jsx)(p.E.div,{layout:"position",initial:"initial",animate:"animate",exit:"exit",variants:b,transition:f?{duration:0}:{type:"spring",damping:30,stiffness:400},children:(0,i.jsx)(nQ,{closable:r.closable,description:r.description,onClose:e,status:r.status,title:r.title,duration:r.duration})},t))})})})})]})}function nX(){let e=(0,a.useContext)(nP);if(!e)throw Error("useToast(): missing context value");if(!rR(e)||0!==e.version)throw Error("useToast(): the context value is not compatible");return e}function nG(e){if("treeitem"===e.getAttribute("role")&&e.focus(),"none"===e.getAttribute("role")){let t=e.firstChild;t&&t instanceof HTMLElement&&t.focus()}}nq.displayName="ToastProvider";let nY=eC("@sanity/ui/context/tree",null);function nK(){let e=(0,a.useContext)(nY);if(!e)throw Error("Tree: missing context value");return e}(0,a.memo)((0,a.forwardRef)(function(e,t){let{children:r,space:o=1,onFocus:n,...l}=e,d=(0,a.useRef)(null),[s,u]=(0,a.useState)(null),c=(0,a.useRef)(s),f=(0,a.useMemo)(()=>[],[]),[p,h]=(0,a.useState)([]),[b,g]=(0,a.useState)({}),m=(0,a.useRef)(b);(0,a.useImperativeHandle)(t,()=>d.current),(0,a.useEffect)(()=>{c.current=s},[s]),(0,a.useEffect)(()=>{m.current=b},[b]);let v=(0,a.useCallback)((e,t,r,o)=>(g(o=>({...o,[t]:{element:e,expanded:r}})),o&&u(e),()=>{g(e=>{let r={...e};return delete r[t],r})}),[]),x=(0,a.useCallback)((e,t)=>{g(r=>{let o=r[e];return o?{...r,[e]:{...o,expanded:t}}:r})},[]),w=(0,a.useMemo)(()=>({version:0,focusedElement:s||p[0]||null,level:0,path:f,registerItem:v,setExpanded:x,setFocusedElement:u,space:o,state:b}),[s,p,f,v,x,o,b]),y=(0,a.useCallback)(e=>{if(c.current){if("ArrowDown"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(o),i=t.length;for(let t=1;t<i;t+=1){if(!n[t])continue;let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(m.current,p,c.current);t&&(nG(t),u(t));return}if("ArrowUp"===e.key){e.preventDefault();let t=function(e,t,r){let o=t.indexOf(r),n=t.slice(0,o),i=n.length;for(let t=i-1;t>=0;t-=1){let r=n[t].getAttribute("data-tree-key");if(!r)continue;let o=r.split("/");o.pop();let i=[],a=!0;for(let t=0;t<o.length;t+=1){i.push(o[t]);let r=i.join("/");if(!e[r]?.expanded){a=!1;break}}if(a)return n[t]}return null}(m.current,p,c.current);t&&(nG(t),u(t));return}if("ArrowLeft"===e.key){e.preventDefault();let t=c.current.getAttribute("data-tree-key");if(!t)return;let r=m.current[t];if(!r)return;if(r.expanded)g(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!1}}:e});else{let e=t.split("/");e.pop();let r=e.join("/"),o=r&&m.current[r];o&&(o.element.focus(),u(o.element))}return}if("ArrowRight"===e.key){e.preventDefault();let t=c.current.getAttribute("data-tree-key");if(!t)return;m.current[t]?.expanded||g(e=>{let r=e[t];return r?{...e,[t]:{...r,expanded:!0}}:e});return}}},[p]),$=(0,a.useCallback)(e=>{u(e.target),n?.(e)},[n]);return(0,a.useEffect)(()=>{d.current&&h(Array.from(d.current.querySelectorAll('[data-ui="TreeItem"]')))},[r]),(0,i.jsx)(nY.Provider,{value:w,children:(0,i.jsx)(oc,{as:"ul","data-ui":"Tree",...l,onFocus:$,onKeyDown:y,ref:d,role:"tree",space:o,children:r})})})).displayName="Memo(ForwardRef(Tree))";let nU=(0,a.memo)(function(e){let{children:t,expanded:r=!1,...o}=e,n=nK();return(0,i.jsx)(oc,{as:"ul","data-ui":"TreeGroup",...o,hidden:!r,marginTop:n.space,role:"group",space:n.space,children:t})}),nJ=(0,a.memo)(d.zo.li(function(){return(0,d.iv)`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `},function(e){let{color:t}=(0,n.aQ)(e.theme),r=t.selectable.default;return(0,d.iv)`
    &[role='none'] {
      & > [role='treeitem'] {
        ${t1(t,r.enabled)}
      }

      &[data-selected] > [role='treeitem'] {
        ${t1(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          ${t1(t,r.hovered)}
        }

        & > [role='treeitem']:focus {
          ${t1(t,r.selected)}
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        ${t1(t,r.enabled)}
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        ${t1(t,r.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          ${t1(t,r.hovered)}
        }

        &:focus > [data-ui='TreeItem__box'] {
          ${t1(t,r.selected)}
        }
      }
    }
  `})),nZ=(0,d.zo)(tV).attrs({forwardedAs:"a"})(function(e){let{$level:t}=e,{space:r}=(0,n.aQ)(e.theme);return(0,d.iv)`
    padding-left: ${k(r[2]*t)};

    &[data-as='a'] {
      text-decoration: none;
    }
  `}),n0=(0,d.zo)(tX)`
  & > svg {
    transition: transform 100ms;
  }
`;(0,a.memo)(function(e){let{children:t,expanded:r=!1,fontSize:o=1,href:n,icon:l,id:d,linkAs:u,muted:c,onClick:f,padding:p=2,selected:h=!1,space:b=2,text:g,weight:m,...v}=e,x=(0,a.useRef)(null),w=(0,a.useRef)(null),y=nK(),{path:$,registerItem:k,setExpanded:z,setFocusedElement:j}=y,R=(0,a.useId)(),E=d||R,C=(0,a.useMemo)(()=>$.concat([E||""]),[E,$]),S=C.join("/"),T=y.state[S],M=y.focusedElement===x.current,F=T?.expanded===void 0?r:T?.expanded||!1,O=y.focusedElement&&y.focusedElement===x.current?0:-1,N=(0,a.useMemo)(()=>({...y,level:y.level+1,path:C}),[C,y]),A=(0,a.useCallback)(e=>{f&&f(e);let t=e.target;t instanceof HTMLElement&&("TreeItem"===t.getAttribute("data-ui")||t.closest('[data-ui="TreeItem__box"]'))&&(e.stopPropagation(),z(S,!F),j(x.current))},[F,S,f,z,j]),L=(0,a.useCallback)(e=>{M&&"Enter"===e.key&&(w.current||x.current)?.click()},[M]);(0,a.useEffect)(()=>{if(x.current)return k(x.current,C.join("/"),F,h)},[F,C,k,h]);let _=(0,i.jsxs)(tU,{padding:p,children:[(0,i.jsxs)(tV,{marginRight:b,style:{visibility:l||t?"visible":"hidden",pointerEvents:"none"},children:[l&&(0,i.jsx)(tX,{muted:c,size:o,weight:m,children:(0,i.jsx)(l,{})}),!l&&(0,i.jsx)(n0,{muted:c,size:o,weight:m,children:(0,i.jsx)(s.tgp,{style:{transform:F?"rotate(90deg)":void 0}})})]}),(0,i.jsx)(tV,{flex:1,children:(0,i.jsx)(tX,{muted:c,size:o,textOverflow:"ellipsis",weight:m,children:g})})]});return n?(0,i.jsxs)(nJ,{"data-selected":h?"":void 0,"data-tree-id":E,"data-tree-key":S,"data-ui":"TreeItem",...v,onClick:A,ref:x,role:"none",children:[(0,i.jsx)(nZ,{$level:y.level,"aria-expanded":F,as:u,"data-ui":"TreeItem__box",href:n,ref:w,role:"treeitem",tabIndex:O,children:_}),(0,i.jsx)(nY.Provider,{value:N,children:t&&(0,i.jsx)(nU,{hidden:!F,children:t})})]}):(0,i.jsxs)(nJ,{"data-selected":h?"":void 0,"data-ui":"TreeItem","data-tree-id":E,"data-tree-key":S,...v,"aria-expanded":F,onClick:A,onKeyDown:L,ref:x,role:"treeitem",tabIndex:O,children:[(0,i.jsx)(nZ,{$level:y.level,as:"div","data-ui":"TreeItem__box",children:_}),(0,i.jsx)(nY.Provider,{value:N,children:t&&(0,i.jsx)(nU,{expanded:F,children:t})})]})}).displayName="Memo(TreeItem)"}}]);