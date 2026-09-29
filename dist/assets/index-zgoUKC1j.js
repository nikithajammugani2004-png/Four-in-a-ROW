var wg=Object.defineProperty;var Tg=(x,o,d)=>o in x?wg(x,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):x[o]=d;var te=(x,o,d)=>Tg(x,typeof o!="symbol"?o+"":o,d);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))s(N);new MutationObserver(N=>{for(const O of N)if(O.type==="childList")for(const z of O.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&s(z)}).observe(document,{childList:!0,subtree:!0});function d(N){const O={};return N.integrity&&(O.integrity=N.integrity),N.referrerPolicy&&(O.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?O.credentials="include":N.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function s(N){if(N.ep)return;N.ep=!0;const O=d(N);fetch(N.href,O)}})();function Nh(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var As={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function Ng(){if(rh)return gi;rh=1;var x=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(s,N,O){var z=null;if(O!==void 0&&(z=""+O),N.key!==void 0&&(z=""+N.key),"key"in N){O={};for(var A in N)A!=="key"&&(O[A]=N[A])}else O=N;return N=O.ref,{$$typeof:x,type:s,key:z,ref:N!==void 0?N:null,props:O}}return gi.Fragment=o,gi.jsx=d,gi.jsxs=d,gi}var sh;function Eg(){return sh||(sh=1,As.exports=Ng()),As.exports}var c=Eg(),_s={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function jg(){if(oh)return st;oh=1;var x=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),z=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),Q=Symbol.iterator;function ot(h){return h===null||typeof h!="object"?null:(h=Q&&h[Q]||h["@@iterator"],typeof h=="function"?h:null)}var ct={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,L={};function tt(h,M,B){this.props=h,this.context=M,this.refs=L,this.updater=B||ct}tt.prototype.isReactComponent={},tt.prototype.setState=function(h,M){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,M,"setState")},tt.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function Nt(){}Nt.prototype=tt.prototype;function zt(h,M,B){this.props=h,this.context=M,this.refs=L,this.updater=B||ct}var Lt=zt.prototype=new Nt;Lt.constructor=zt,Y(Lt,tt.prototype),Lt.isPureReactComponent=!0;var vt=Array.isArray;function Z(){}var ht={H:null,A:null,T:null,S:null},Mt=Object.prototype.hasOwnProperty;function Yt(h,M,B){var H=B.ref;return{$$typeof:x,type:h,key:M,ref:H!==void 0?H:null,props:B}}function Xt(h,M){return Yt(h.type,M,h.props)}function Ut(h){return typeof h=="object"&&h!==null&&h.$$typeof===x}function yt(h){var M={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(B){return M[B]})}var Zt=/\/+/g;function Bt(h,M){return typeof h=="object"&&h!==null&&h.key!=null?yt(""+h.key):M.toString(36)}function G(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(Z,Z):(h.status="pending",h.then(function(M){h.status==="pending"&&(h.status="fulfilled",h.value=M)},function(M){h.status==="pending"&&(h.status="rejected",h.reason=M)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function nt(h,M,B,H,V){var $=typeof h;($==="undefined"||$==="boolean")&&(h=null);var I=!1;if(h===null)I=!0;else switch($){case"bigint":case"string":case"number":I=!0;break;case"object":switch(h.$$typeof){case x:case o:I=!0;break;case D:return I=h._init,nt(I(h._payload),M,B,H,V)}}if(I)return V=V(h),I=H===""?"."+Bt(h,0):H,vt(V)?(B="",I!=null&&(B=I.replace(Zt,"$&/")+"/"),nt(V,M,B,"",function(_t){return _t})):V!=null&&(Ut(V)&&(V=Xt(V,B+(V.key==null||h&&h.key===V.key?"":(""+V.key).replace(Zt,"$&/")+"/")+I)),M.push(V)),1;I=0;var q=H===""?".":H+":";if(vt(h))for(var X=0;X<h.length;X++)H=h[X],$=q+Bt(H,X),I+=nt(H,M,B,$,V);else if(X=ot(h),typeof X=="function")for(h=X.call(h),X=0;!(H=h.next()).done;)H=H.value,$=q+Bt(H,X++),I+=nt(H,M,B,$,V);else if($==="object"){if(typeof h.then=="function")return nt(G(h),M,B,H,V);throw M=String(h),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return I}function at(h,M,B){if(h==null)return h;var H=[],V=0;return nt(h,H,"","",function($){return M.call(B,$,V++)}),H}function Et(h){if(h._status===-1){var M=h._result,B=M();B.then(function(H){(h._status===0||h._status===-1)&&(h._status=1,h._result=H,B.status===void 0&&(B.status="fulfilled",B.value=H))},function(H){(h._status===0||h._status===-1)&&(h._status=2,h._result=H,B.status===void 0&&(B.status="rejected",B.reason=H))}),h._status===-1&&(h._status=0,h._result=B)}if(h._status===1)return h._result.default;throw h._result}var S=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function v(h){var M=ht.T,B={};B.types=M!==null?M.types:null,ht.T=B;try{var H=h(),V=ht.S;V!==null&&V(B,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Z,S)}catch($){S($)}finally{M!==null&&B.types!==null&&(M.types=B.types),ht.T=M}}function W(h){var M=ht.T;if(M!==null){var B=M.types;B===null?M.types=[h]:B.indexOf(h)===-1&&B.push(h)}else v(W.bind(null,h))}var et={map:at,forEach:function(h,M,B){at(h,function(){M.apply(this,arguments)},B)},count:function(h){var M=0;return at(h,function(){M++}),M},toArray:function(h){return at(h,function(M){return M})||[]},only:function(h){if(!Ut(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return st.Activity=g,st.Children=et,st.Component=tt,st.Fragment=d,st.Profiler=N,st.PureComponent=zt,st.StrictMode=s,st.Suspense=U,st.ViewTransition=_,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ht,st.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ht.H.useMemoCache(h)}},st.addTransitionType=W,st.cache=function(h){return function(){return h.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(h,M,B){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var H=Y({},h.props),V=h.key;if(M!=null)for($ in M.key!==void 0&&(V=""+M.key),M)!Mt.call(M,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&M.ref===void 0||(H[$]=M[$]);var $=arguments.length-2;if($===1)H.children=B;else if(1<$){for(var I=Array($),q=0;q<$;q++)I[q]=arguments[q+2];H.children=I}return Yt(h.type,V,H)},st.createContext=function(h){return h={$$typeof:z,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:O,_context:h},h},st.createElement=function(h,M,B){var H,V={},$=null;if(M!=null)for(H in M.key!==void 0&&($=""+M.key),M)Mt.call(M,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(V[H]=M[H]);var I=arguments.length-2;if(I===1)V.children=B;else if(1<I){for(var q=Array(I),X=0;X<I;X++)q[X]=arguments[X+2];V.children=q}if(h&&h.defaultProps)for(H in I=h.defaultProps,I)V[H]===void 0&&(V[H]=I[H]);return Yt(h,$,V)},st.createRef=function(){return{current:null}},st.forwardRef=function(h){return{$$typeof:A,render:h}},st.isValidElement=Ut,st.lazy=function(h){return{$$typeof:D,_payload:{_status:-1,_result:h},_init:Et}},st.memo=function(h,M){return{$$typeof:E,type:h,compare:M===void 0?null:M}},st.startTransition=v,st.unstable_useCacheRefresh=function(){return ht.H.useCacheRefresh()},st.use=function(h){return ht.H.use(h)},st.useActionState=function(h,M,B){return ht.H.useActionState(h,M,B)},st.useCallback=function(h,M){return ht.H.useCallback(h,M)},st.useContext=function(h){return ht.H.useContext(h)},st.useDebugValue=function(){},st.useDeferredValue=function(h,M){return ht.H.useDeferredValue(h,M)},st.useEffect=function(h,M){return ht.H.useEffect(h,M)},st.useEffectEvent=function(h){return ht.H.useEffectEvent(h)},st.useId=function(){return ht.H.useId()},st.useImperativeHandle=function(h,M,B){return ht.H.useImperativeHandle(h,M,B)},st.useInsertionEffect=function(h,M){return ht.H.useInsertionEffect(h,M)},st.useLayoutEffect=function(h,M){return ht.H.useLayoutEffect(h,M)},st.useMemo=function(h,M){return ht.H.useMemo(h,M)},st.useOptimistic=function(h,M){return ht.H.useOptimistic(h,M)},st.useReducer=function(h,M,B){return ht.H.useReducer(h,M,B)},st.useRef=function(h){return ht.H.useRef(h)},st.useState=function(h){return ht.H.useState(h)},st.useSyncExternalStore=function(h,M,B){return ht.H.useSyncExternalStore(h,M,B)},st.useTransition=function(){return ht.H.useTransition()},st.version="19.3.0",st}var fh;function Hs(){return fh||(fh=1,_s.exports=jg()),_s.exports}var J=Hs();const zg=Nh(J);var Cs={exports:{}},pi={},Rs={exports:{}},Ds={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function Mg(){return dh||(dh=1,(function(x){function o(G,nt){var at=G.length;G.push(nt);t:for(;0<at;){var Et=at-1>>>1,S=G[Et];if(0<N(S,nt))G[Et]=nt,G[at]=S,at=Et;else break t}}function d(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var nt=G[0],at=G.pop();if(at!==nt){G[0]=at;t:for(var Et=0,S=G.length,v=S>>>1;Et<v;){var W=2*(Et+1)-1,et=G[W],h=W+1,M=G[h];if(0>N(et,at))h<S&&0>N(M,et)?(G[Et]=M,G[h]=at,Et=h):(G[Et]=et,G[W]=at,Et=W);else if(h<S&&0>N(M,at))G[Et]=M,G[h]=at,Et=h;else break t}}return nt}function N(G,nt){var at=G.sortIndex-nt.sortIndex;return at!==0?at:G.id-nt.id}if(x.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;x.unstable_now=function(){return O.now()}}else{var z=Date,A=z.now();x.unstable_now=function(){return z.now()-A}}var U=[],E=[],D=1,g=null,_=3,Q=!1,ot=!1,ct=!1,Y=!1,L=typeof setTimeout=="function"?setTimeout:null,tt=typeof clearTimeout=="function"?clearTimeout:null,Nt=typeof setImmediate<"u"?setImmediate:null;function zt(G){for(var nt=d(E);nt!==null;){if(nt.callback===null)s(E);else if(nt.startTime<=G)s(E),nt.sortIndex=nt.expirationTime,o(U,nt);else break;nt=d(E)}}function Lt(G){if(ct=!1,zt(G),!ot)if(d(U)!==null)ot=!0,vt||(vt=!0,Ut());else{var nt=d(E);nt!==null&&Bt(Lt,nt.startTime-G)}}var vt=!1,Z=-1,ht=5,Mt=-1;function Yt(){return Y?!0:!(x.unstable_now()-Mt<ht)}function Xt(){if(Y=!1,vt){var G=x.unstable_now();Mt=G;var nt=!0;try{t:{ot=!1,ct&&(ct=!1,tt(Z),Z=-1),Q=!0;var at=_;try{e:{for(zt(G),g=d(U);g!==null&&!(g.expirationTime>G&&Yt());){var Et=g.callback;if(typeof Et=="function"){g.callback=null,_=g.priorityLevel;var S=Et(g.expirationTime<=G);if(G=x.unstable_now(),typeof S=="function"){g.callback=S,zt(G),nt=!0;break e}g===d(U)&&s(U),zt(G)}else s(U);g=d(U)}if(g!==null)nt=!0;else{var v=d(E);v!==null&&Bt(Lt,v.startTime-G),nt=!1}}break t}finally{g=null,_=at,Q=!1}nt=void 0}}finally{nt?Ut():vt=!1}}}var Ut;if(typeof Nt=="function")Ut=function(){Nt(Xt)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,Zt=yt.port2;yt.port1.onmessage=Xt,Ut=function(){Zt.postMessage(null)}}else Ut=function(){L(Xt,0)};function Bt(G,nt){Z=L(function(){G(x.unstable_now())},nt)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(G){G.callback=null},x.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ht=0<G?Math.floor(1e3/G):5},x.unstable_getCurrentPriorityLevel=function(){return _},x.unstable_next=function(G){switch(_){case 1:case 2:case 3:var nt=3;break;default:nt=_}var at=_;_=nt;try{return G()}finally{_=at}},x.unstable_requestPaint=function(){Y=!0},x.unstable_runWithPriority=function(G,nt){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var at=_;_=G;try{return nt()}finally{_=at}},x.unstable_scheduleCallback=function(G,nt,at){var Et=x.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Et+at:Et):at=Et,G){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=at+S,G={id:D++,callback:nt,priorityLevel:G,startTime:at,expirationTime:S,sortIndex:-1},at>Et?(G.sortIndex=at,o(E,G),d(U)===null&&G===d(E)&&(ct?(tt(Z),Z=-1):ct=!0,Bt(Lt,at-Et))):(G.sortIndex=S,o(U,G),ot||Q||(ot=!0,vt||(vt=!0,Ut()))),G},x.unstable_shouldYield=Yt,x.unstable_wrapCallback=function(G){var nt=_;return function(){var at=_;_=nt;try{return G.apply(this,arguments)}finally{_=at}}}})(Ds)),Ds}var hh;function Og(){return hh||(hh=1,Rs.exports=Mg()),Rs.exports}var Us={exports:{}},he={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function Ag(){if(mh)return he;mh=1;var x=Hs();function o(D){var g="https://react.dev/errors/"+D;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+D+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},N=Symbol.for("react.portal"),O=Symbol.for("react.recoverable"),z=Symbol.for("react.optimistic_key");function A(D,g,_){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:Q==null?null:Q===z?z:""+Q,children:D,containerInfo:g,implementation:_}}var U=x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(D,g){if(D==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return he.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,he.browser=function(D){return{$$typeof:O,_reason:D}},he.createPortal=function(D,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return A(D,g,null,_)},he.flushSync=function(D){var g=U.T,_=s.p;try{if(U.T=null,s.p=2,D)return D()}finally{U.T=g,s.p=_,s.d.f()}},he.preconnect=function(D,g){typeof D=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(D,g))},he.prefetchDNS=function(D){typeof D=="string"&&s.d.D(D)},he.preinit=function(D,g){if(typeof D=="string"&&g&&typeof g.as=="string"){var _=g.as,Q=E(_,g.crossOrigin),ot=typeof g.integrity=="string"?g.integrity:void 0,ct=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(D,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:Q,integrity:ot,fetchPriority:ct}):_==="script"&&s.d.X(D,{crossOrigin:Q,integrity:ot,fetchPriority:ct,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},he.preinitModule=function(D,g){if(typeof D=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=E(g.as,g.crossOrigin);s.d.M(D,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(D)},he.preload=function(D,g){if(typeof D=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,Q=E(_,g.crossOrigin);s.d.L(D,_,{crossOrigin:Q,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},he.preloadModule=function(D,g){if(typeof D=="string")if(g){var _=E(g.as,g.crossOrigin);s.d.m(D,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(D)},he.requestFormReset=function(D){s.d.r(D)},he.unstable_batchedUpdates=function(D,g){return D(g)},he.useFormState=function(D,g,_){return U.H.useFormState(D,g,_)},he.useFormStatus=function(){return U.H.useHostTransitionStatus()},he.version="19.3.0",he}var vh;function _g(){if(vh)return Us.exports;vh=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(o){console.error(o)}}return x(),Us.exports=Ag(),Us.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function Cg(){if(gh)return pi;gh=1;var x=Og(),o=Hs(),d=_g();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function O(t){for(var e=t,l=e;l&&!l.alternate;)e=l,(e.flags&4098)!==0&&(t=e.return),l=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function z(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function A(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function U(t){if(O(t)!==t)throw Error(s(188))}function E(t){var e=t.alternate;if(!e){if(e=O(t),e===null)throw Error(s(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return U(n),t;if(i===a)return U(n),e;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,r=n.child;r;){if(r===l){u=!0,l=n,a=i;break}if(r===a){u=!0,a=n,l=i;break}r=r.sibling}if(!u){for(r=i.child;r;){if(r===l){u=!0,l=i,a=n;break}if(r===a){u=!0,a=i,l=n;break}r=r.sibling}if(!u)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?t:e}function D(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=D(t),e!==null)return e;t=t.sibling}return null}function g(t,e,l,a,n,i){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&l(t,a,n,i)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&g(t.child,e,l,a,n,i))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function Q(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function ot(t){var e=[null,null],l=_(t);return l===null||ct(e,t,l.child,{foundSelf:!1}),e}function ct(t,e,l,a){for(;l!==null;){if(l===e)a.foundSelf=!0;else if(l.tag===5||l.tag===27||l.tag===6){if(a.foundSelf)return t[1]=l,!0;t[0]=l}else if((l.tag!==22||l.memoizedState===null)&&ct(t,e,l.child,a))return!0;l=l.sibling}return!1}function Y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var L=null,tt=null;function Nt(t,e,l){return t===l?!0:t===e?(L=t,!0):!1}function zt(t,e,l){return t===l?(tt=t,!1):t===e?(tt!==null&&(L=t),!0):!1}function Lt(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function vt(t,e,l){for(var a=0,n=t;n;n=l(n))a++;n=0;for(var i=e;i;i=l(i))n++;for(;0<a-n;)t=l(t),a--;for(;0<n-a;)e=l(e),n--;for(;a--;){if(t===e||e!==null&&t===e.alternate)return t;t=l(t),e=l(e)}return null}var Z=Object.assign,ht=Symbol.for("react.element"),Mt=Symbol.for("react.transitional.element"),Yt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),Ut=Symbol.for("react.strict_mode"),yt=Symbol.for("react.profiler"),Zt=Symbol.for("react.consumer"),Bt=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),Et=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),W=Symbol.for("react.legacy_hidden"),et=Symbol.for("react.memo_cache_sentinel"),h=Symbol.for("react.view_transition"),M=Symbol.for("react.recoverable"),B=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var V=Symbol.for("react.client.reference");function $(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===V?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xt:return"Fragment";case yt:return"Profiler";case Ut:return"StrictMode";case nt:return"Suspense";case at:return"SuspenseList";case v:return"Activity";case h:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Yt:return"Portal";case Bt:return t.displayName||"Context";case Zt:return(t._context.displayName||"Context")+".Consumer";case G:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Et:return e=t.displayName||null,e!==null?e:$(t.type)||"Memo";case S:e=t._payload,t=t._init;try{return $(t(e))}catch{}}return null}var I=Array.isArray,q=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_t={pending:!1,data:null,method:null,action:null},gt=[],lt=-1;function it(t){return{current:t}}function mt(t){0>lt||(t.current=gt[lt],gt[lt]=null,lt--)}function rt(t,e){lt++,gt[lt]=t.current,t.current=e}var le=it(null),me=it(null),tl=it(null),Ma=it(null);function Oa(t,e){switch(rt(tl,e),rt(me,t),rt(le,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?p0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=p0(e),t=y0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(le),rt(le,t)}function dl(){mt(le),mt(me),mt(tl)}function Sn(t){var e=t.memoizedState;e!==null&&(yn._currentValue=e.memoizedState,rt(Ma,t)),e=le.current;var l=y0(e,t.type);e!==l&&(rt(me,t),rt(le,l))}function aa(t){me.current===t&&(mt(le),mt(me)),Ma.current===t&&(mt(Ma),yn._currentValue=_t)}var wn,xi;function Ke(t){if(wn===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);wn=e&&e[1]||"",xi=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wn+t+xi}var Aa=!1;function na(t,e){if(!t||Aa)return"";Aa=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(k){var p=k}Reflect.construct(t,[],R)}else{try{R.call()}catch(k){p=k}R=!1;try{var T=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),R=!0,new t}finally{R&&(T!==void 0?Object.defineProperty(t.prototype,"props",T):delete t.prototype.props)}}}else{try{throw Error()}catch(k){p=k}(R=t())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(k){if(k&&p&&typeof k.stack=="string")return[k.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],r=i[1];if(u&&r){var f=u.split(`
`),b=r.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<b.length&&!b[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===b.length)for(a=f.length-1,n=b.length-1;1<=a&&0<=n&&f[a]!==b[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==b[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==b[n]){var j=`
`+f[a].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=a&&0<=n);break}}}finally{Aa=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Ke(l):""}function Pu(t,e){switch(t.tag){case 26:case 27:case 5:return Ke(t.type);case 16:return Ke("Lazy");case 13:return t.child!==e&&e!==null?Ke("Suspense Fallback"):Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return na(t.type,!1);case 11:return na(t.type.render,!1);case 1:return na(t.type,!0);case 31:return Ke("Activity");case 30:return Ke("ViewTransition");default:return""}}function Si(t){try{var e="",l=null;do e+=Pu(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var tc=Object.prototype.hasOwnProperty,ec=x.unstable_scheduleCallback,lc=x.unstable_cancelCallback,zh=x.unstable_shouldYield,Mh=x.unstable_requestPaint,ze=x.unstable_now,Oh=x.unstable_getCurrentPriorityLevel,qs=x.unstable_ImmediatePriority,Ys=x.unstable_UserBlockingPriority,wi=x.unstable_NormalPriority,Ah=x.unstable_LowPriority,Gs=x.unstable_IdlePriority,_h=x.log,Ch=x.unstable_setDisableYieldValue,Tn=null,Me=null;function Ol(t){if(typeof _h=="function"&&Ch(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Tn,t)}catch{}}var Oe=Math.clz32?Math.clz32:Uh,Rh=Math.log,Dh=Math.LN2;function Uh(t){return t>>>=0,t===0?32:31-(Rh(t)/Dh|0)|0}var Ti=256,Ni=262144,Ei=4194304;function ia(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ji(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var r=a&134217727;return r!==0?(a=r&~i,a!==0?n=ia(a):(u&=r,u!==0?n=ia(u):l||(l=r&~t,l!==0&&(n=ia(l))))):(r=a&~i,r!==0?n=ia(r):u!==0?n=ia(u):l||(l=a&~t,l!==0&&(n=ia(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function Nn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ks(t,e){(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-Oe(l),n=1<<a;e|=t[a],l&=~n}return e}function Hh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ls(){var t=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),t}function ac(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function En(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bh(t,e,l,a,n,i){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var r=t.entanglements,f=t.expirationTimes,b=t.hiddenUpdates;for(l=u&~l;0<l;){var j=31-Oe(l),R=1<<j;r[j]=0,f[j]=-1;var p=b[j];if(p!==null)for(b[j]=null,j=0;j<p.length;j++){var T=p[j];T!==null&&(T.lane&=-536870913)}l&=~R}a!==0&&Vs(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Vs(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Oe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Xs(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Oe(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Qs(t,e){var l=e&-e;return l=(l&42)!==0?1:nc(l),(l&(t.suspendedLanes|e))!==0?0:l}function nc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ic(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zs(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:eh(t.type))}function Ks(t,e){var l=X.p;try{return X.p=t,e()}finally{X.p=l}}var hl=Math.random().toString(36).slice(2),ce="__reactFiber$"+hl,xe="__reactProps$"+hl,_a="__reactContainer$"+hl,Js="__reactEvents$"+hl,qh="__reactListeners$"+hl,Yh="__reactHandles$"+hl,Ws="__reactResources$"+hl,jn="__reactMarker$"+hl,zi="__reactLoad$"+hl;function Mi(t){delete t[ce],delete t[xe],delete t[qh],delete t[Yh]}function ua(t){var e;if(e=t[ce])return e;for(var l=t.parentNode;l;){if(e=l[_a]||l[ce]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=U0(t);t!==null;){if(l=t[ce])return l;t=U0(t)}return e}t=l,l=t.parentNode}return null}function Ca(t){if(t=t[ce]||t[_a]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function zn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ra(t){var e=t[Ws];return e||(e=t[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ae(t){t[jn]=!0}function Fs(t){t[zi]=void 0}var $s=new Set,Is={};function ca(t,e){Da(t,e),Da(t+"Capture",e)}function Da(t,e){for(Is[t]=e,t=0;t<e.length;t++)$s.add(e[t])}var Gh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ps={},to={};function kh(t){return tc.call(to,t)?!0:tc.call(Ps,t)?!1:Gh.test(t)?to[t]=!0:(Ps[t]=!0,!1)}var jt=!1;function eo(){var t=jt;return jt=!1,t}function Oi(t,e,l){if(kh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,l)}}function Ai(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,l)}}function ml(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,a)}}function Ae(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lh(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uc(t){if(!t._valueTracker){var e=lo(t)?"checked":"value";t._valueTracker=Lh(t,e,""+t[e])}}function ao(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=lo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}var Vh=/[\n"\\]/g;function qe(t){return t.replace(Vh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function cc(t,e,l,a,n,i,u,r){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ae(e)):t.value!==""+Ae(e)&&(t.value=""+Ae(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?u==="number"&&t.value==e?rc(t,Ae(t.value)):rc(t,Ae(e)):l!=null?rc(t,Ae(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.name=""+Ae(r):t.removeAttribute("name")}function no(t,e,l,a,n,i,u,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){uc(t);return}l=l!=null?""+Ae(l):"",e=e!=null?""+Ae(e):l,r||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=r?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),uc(t)}function rc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Ua(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Ae(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function io(t,e,l){if(e!=null&&(e=""+Ae(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Ae(l):""}function uo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(s(92));if(I(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Ae(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),uc(t)}function Ha(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Xh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function co(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Xh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ro(t,e,l){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="",jt=!0);for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&(co(t,n,a),jt=!0)}else for(var i in e)e.hasOwnProperty(i)&&co(t,i,e[i])}function sc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(t){return Zh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function el(){}var oc=null;function fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ba=null,qa=null;function so(t){var e=Ca(t);if(e&&(t=e.stateNode)){var l=t[xe]||null;t:switch(t=e.stateNode,e.type){case"input":if(cc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+qe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[xe]||null;if(!n)throw Error(s(90));cc(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&ao(a)}break t;case"textarea":io(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ua(t,!!l.multiple,e,!1)}}}var dc=!1;function oo(t,e,l){if(dc)return t(e,l);dc=!0;try{var a=t(e);return a}finally{if(dc=!1,(Ba!==null||qa!==null)&&(_u(),Ba&&(e=Ba,t=qa,qa=Ba=null,so(e),t)))for(e=0;e<t.length;e++)so(t[e])}}function Mn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[xe]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(s(231,e,typeof l));return l}var vl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hc=!1;if(vl)try{var On={};Object.defineProperty(On,"passive",{get:function(){hc=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{hc=!1}var Al=null,mc=null,Ci=null;function fo(){if(Ci)return Ci;var t,e=mc,l=e.length,a,n="value"in Al?Al.value:Al.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===n[i-a];a++);return Ci=n.slice(t,1<a?1-a:void 0)}function Ri(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Di(){return!0}function ho(){return!1}function ge(t){function e(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var r in t)t.hasOwnProperty(r)&&(l=t[r],this[r]=l?l(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Di:ho,this.isPropagationStopped=ho,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),e}var _l={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=ge(_l),An=Z({},_l,{view:0,detail:0}),Kh=ge(An),vc,gc,_n,Hi=Z({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_n&&(_n&&t.type==="mousemove"?(vc=t.screenX-_n.screenX,gc=t.screenY-_n.screenY):gc=vc=0,_n=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),mo=ge(Hi),Jh=Z({},Hi,{dataTransfer:0}),Wh=ge(Jh),Fh=Z({},An,{relatedTarget:0}),pc=ge(Fh),$h=Z({},_l,{animationName:0,elapsedTime:0,pseudoElement:0}),Ih=ge($h),Ph=Z({},_l,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tm=ge(Ph),em=Z({},_l,{data:0}),vo=ge(em),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nm[t])?!!e[t]:!1}function yc(){return im}var um=Z({},An,{key:function(t){if(t.key){var e=lm[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ri(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?am[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(t){return t.type==="keypress"?Ri(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ri(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cm=ge(um),rm=Z({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),go=ge(rm),sm=Z({},_l,{submitter:0}),om=ge(sm),fm=Z({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),dm=ge(fm),hm=Z({},_l,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=ge(hm),vm=Z({},Hi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gm=ge(vm),pm=Z({},_l,{newState:0,oldState:0,source:0}),ym=ge(pm),bm=[9,13,27,32],bc=vl&&"CompositionEvent"in window,Cn=null;vl&&"documentMode"in document&&(Cn=document.documentMode);var xm=vl&&"TextEvent"in window&&!Cn,po=vl&&(!bc||Cn&&8<Cn&&11>=Cn),yo=" ",bo=!1;function xo(t,e){switch(t){case"keyup":return bm.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function So(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ya=!1;function Sm(t,e){switch(t){case"compositionend":return So(e);case"keypress":return e.which!==32?null:(bo=!0,yo);case"textInput":return t=e.data,t===yo&&bo?null:t;default:return null}}function wm(t,e){if(Ya)return t==="compositionend"||!bc&&xo(t,e)?(t=fo(),Ci=mc=Al=null,Ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return po&&e.locale!=="ko"?null:e.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tm[t.type]:e==="textarea"}function To(t,e,l,a){Ba?qa?qa.push(a):qa=[a]:Ba=a,e=Bu(e,"onChange"),0<e.length&&(l=new Ui("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Rn=null,Dn=null;function Nm(t){f0(t,0)}function Bi(t){var e=zn(t);if(ao(e))return t}function No(t,e){if(t==="change")return e}var Eo=!1;if(vl){var xc;if(vl){var Sc="oninput"in document;if(!Sc){var jo=document.createElement("div");jo.setAttribute("oninput","return;"),Sc=typeof jo.oninput=="function"}xc=Sc}else xc=!1;Eo=xc&&(!document.documentMode||9<document.documentMode)}function zo(){Rn&&(Rn.detachEvent("onpropertychange",Mo),Dn=Rn=null)}function Mo(t){if(t.propertyName==="value"&&Bi(Dn)){var e=[];To(e,Dn,t,fc(t)),oo(Nm,e)}}function Em(t,e,l){t==="focusin"?(zo(),Rn=e,Dn=l,Rn.attachEvent("onpropertychange",Mo)):t==="focusout"&&zo()}function jm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bi(Dn)}function zm(t,e){if(t==="click")return Bi(e)}function Mm(t,e){if(t==="input"||t==="change")return Bi(e)}function Om(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _e=typeof Object.is=="function"?Object.is:Om;function Un(t,e){if(_e(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!tc.call(e,n)||!_e(t[n],e[n]))return!1}return!0}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ao(t,e){var l=Oo(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Oo(l)}}function _o(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_o(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Co(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=wc(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=wc(t.document)}return e}function Tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Am=vl&&"documentMode"in document&&11>=document.documentMode,Ga=null,Nc=null,Hn=null,Ec=!1;function Ro(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Ec||Ga==null||Ga!==wc(a)||(a=Ga,"selectionStart"in a&&Tc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hn&&Un(Hn,a)||(Hn=a,a=Bu(Nc,"onSelect"),0<a.length&&(e=new Ui("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ga)))}function ra(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ka={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionrun:ra("Transition","TransitionRun"),transitionstart:ra("Transition","TransitionStart"),transitioncancel:ra("Transition","TransitionCancel"),transitionend:ra("Transition","TransitionEnd")},jc={},Do={};vl&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function sa(t){if(jc[t])return jc[t];if(!ka[t])return t;var e=ka[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Do)return jc[t]=e[l];return t}var Uo=sa("animationend"),Ho=sa("animationiteration"),Bo=sa("animationstart"),_m=sa("transitionrun"),Cm=sa("transitionstart"),Rm=sa("transitioncancel"),qo=sa("transitionend"),Yo=new Map,zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zc.push("scrollEnd");function Je(t,e){Yo.set(t,e),ca(e,[t])}var Dm=0;function gl(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ie.identifierPrefix;var l=Dm++;return t="_"+t+"t_"+l.toString(32)+"_",e.autoName=t}function Go(t){if(t==null||typeof t=="string")return t;var e=null,l=rn;if(l!==null)for(var a=0;a<l.length;a++){var n=t[l[a]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function pl(t,e){return t=Go(t),e=Go(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var qi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ye=[],La=0,Mc=0;function Yi(){for(var t=La,e=Mc=La=0;e<t;){var l=Ye[e];Ye[e++]=null;var a=Ye[e];Ye[e++]=null;var n=Ye[e];Ye[e++]=null;var i=Ye[e];if(Ye[e++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&ko(l,n,i)}}function Gi(t,e,l,a){Ye[La++]=t,Ye[La++]=e,Ye[La++]=l,Ye[La++]=a,Mc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Oc(t,e,l,a){return Gi(t,e,l,a),ki(t)}function oa(t,e){return Gi(t,null,null,e),ki(t)}function ko(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-Oe(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function ki(t){if(50<ni)throw ni=0,Au=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Va={};function Um(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(t,e,l,a){return new Um(t,e,l,a)}function Ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yl(t,e){var l=t.alternate;return l===null?(l=Se(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&1206910976,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Lo(t,e){t.flags&=1206910978;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Li(t,e,l,a,n,i){var u=0;if(a=t,typeof a=="function")Ac(a)&&(u=1);else if(typeof a=="string")u=sg(t,l,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(a){case v:return t=Se(31,l,e,n),t.elementType=v,t.lanes=i,t;case Xt:return fa(l.children,n,i,e);case Ut:u=8,n|=24;break;case yt:return t=Se(12,l,e,n|2),t.elementType=yt,t.lanes=i,t;case nt:return t=Se(13,l,e,n),t.elementType=nt,t.lanes=i,t;case at:return t=Se(19,l,e,n),t.elementType=at,t.lanes=i,t;case W:case h:return t=n|32,t=Se(30,l,e,t),t.elementType=h,t.lanes=i,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Bt:u=10;break t;case Zt:u=9;break t;case G:u=11;break t;case Et:u=14;break t;case S:u=16,a=null;break t}u=29,l=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=Se(u,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function fa(t,e,l,a){return t=Se(7,t,a,e),t.lanes=l,t}function _c(t,e,l){return t=Se(6,t,null,e),t.lanes=l,t}function Vo(t){var e=Se(18,null,null,0);return e.stateNode=t,e}function Cc(t,e,l){return e=Se(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Xo=new WeakMap;function Ge(t,e){if(typeof t=="object"&&t!==null){var l=Xo.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Si(e)},Xo.set(t,e),e)}return{value:t,source:e,stack:Si(e)}}var Xa=[],Qa=0,Vi=null,Bn=0,ke=[],Le=0,Cl=null,ll=1,al="";function bl(t,e){Xa[Qa++]=Bn,Xa[Qa++]=Vi,Vi=t,Bn=e}function Qo(t,e,l){ke[Le++]=ll,ke[Le++]=al,ke[Le++]=Cl,Cl=t;var a=ll;t=al;var n=32-Oe(a)-1;a&=~(1<<n),l+=1;var i=32-Oe(e)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,ll=1<<32-Oe(e)+n|l<<n|a,al=i+t}else ll=1<<i|l<<n|a,al=t}function Xi(t){t.return!==null&&(bl(t,1),Qo(t,1,0))}function Rc(t){for(;t===Vi;)Vi=Xa[--Qa],Xa[Qa]=null,Bn=Xa[--Qa],Xa[Qa]=null;for(;t===Cl;)Cl=ke[--Le],ke[Le]=null,al=ke[--Le],ke[Le]=null,ll=ke[--Le],ke[Le]=null}function Zo(t,e){ke[Le++]=ll,ke[Le++]=al,ke[Le++]=Cl,ll=e.id,al=e.overflow,Cl=t}var ne=null,Gt=null,pt=!1,Rl=null,Ve=!1,Dc=Error(s(519));function Dl(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qn(Ge(e,t)),Dc}function Ko(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[ce]=t,e[xe]=a,l){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(l=0;l<ui.length;l++)xt(ui[l],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),no(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),uo(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||v0(e.textContent,l)?(a.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),a.onScroll!=null&&xt("scroll",e),a.onScrollEnd!=null&&xt("scrollend",e),a.onClick!=null&&(e.onclick=el),e=!0):e=!1,e||Dl(t,!0)}function Qi(t){for(ne=t.return;ne;)switch(ne.tag){case 5:case 31:case 13:Ve=!1;return;case 27:case 3:Ve=!0;return;default:ne=ne.return}}function Za(t){if(t!==ne)return!1;if(!pt)return Qi(t),pt=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||os(t.type,t.memoizedProps)),l=!l),l&&Gt&&Dl(t),Qi(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Gt=D0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Gt=D0(t)}else e===27?(e=Gt,Fl(t.type)?(t=bs,bs=null,Gt=t):Gt=e):Gt=ne?Qe(t.stateNode.nextSibling):null;return!0}function da(){Gt=ne=null,pt=!1}function Uc(){var t=Rl;return t!==null&&(Ne===null?Ne=t:Ne.push.apply(Ne,t),Rl=null),t}function qn(t){Rl===null?Rl=[t]:Rl.push(t)}var Hc=it(null),ha=null,xl=null;function Ul(t,e,l){rt(Hc,e._currentValue),e._currentValue=l}function Sl(t){t._currentValue=Hc.current,mt(Hc)}function Zi(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Bc(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var r=i;i=n;for(var f=0;f<e.length;f++)if(r.context===e[f]){i.lanes|=l,r=i.alternate,r!==null&&(r.lanes|=l),Zi(i.return,l,t),a||(u=null);break t}i=r.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Zi(u,l,t),u=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=l,u=n.alternate,u!==null&&(u.lanes|=l),Zi(n.return,l,t),u=n.child,u=u!==null?u.sibling:null):u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ma(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var r=n.type;_e(n.pendingProps.value,u.value)||(t!==null?t.push(r):t=[r])}}else if(n===Ma.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(yn):t=[yn])}n=n.return}return t!==null&&Bc(e,t,l,a),e.flags|=262144,t!==null}function Ki(t){for(t=t.firstContext;t!==null;){if(!_e(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function va(t){ha=t,xl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function re(t){return Jo(ha,t)}function Ji(t,e){return ha===null&&va(t),Jo(t,e)}function Jo(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},xl===null){if(t===null)throw Error(s(308));xl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else xl=xl.next=e;return l}var Hm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Bm=x.unstable_scheduleCallback,qm=x.unstable_NormalPriority,Ft={$$typeof:Bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qc(){return{controller:new Hm,data:new Map,refCount:0}}function Yn(t){t.refCount--,t.refCount===0&&Bm(qm,function(){t.controller.abort()})}function Wo(t,e){if((t.pendingLanes&4194048)!==0){var l=t.transitionTypes;for(l===null&&(l=t.transitionTypes=[]),t=0;t<e.length;t++){var a=e[t];l.indexOf(a)===-1&&l.push(a)}}}var Gn=null;function Ym(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var kn=null,Yc=0,ga=0,Ka=null;function Gm(t,e){if(kn===null){var l=kn=[];Yc=0,ga=es(),Ka={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Yc++,e.then(Fo,Fo),e}function Fo(){if(--Yc===0&&(Gn=null,kn!==null)){Ka!==null&&(Ka.status="fulfilled");var t=kn;kn=null,ga=0,Ka=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function km(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var $o=q.S;q.S=function(t,e){if(Xd=ze(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Gm(t,e),Gn!==null)for(var l=dn;l!==null;)Wo(l,Gn),l=l.next;if(l=t.types,l!==null){for(var a=dn;a!==null;)Wo(a,l),a=a.next;if(ga!==0){a=Gn,a===null&&(a=Gn=[]);for(var n=0;n<l.length;n++){var i=l[n];a.indexOf(i)===-1&&a.push(i)}}}$o!==null&&$o(t,e)};var pa=it(null);function Gc(){var t=pa.current;return t!==null?t:qt.pooledCache}function Wi(t,e){e===null?rt(pa,pa.current):rt(pa,e.pool)}function Io(){var t=Gc();return t===null?null:{parent:Ft._currentValue,pool:t}}var Ja=Error(s(460)),kc=Error(s(474)),Fi=Error(s(542)),$i={then:function(){}};function Po(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(el,el),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lf(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(el,el);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lf(t),t}throw ba=e,Ja}}function ya(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ba=l,Ja):l}}var ba=null;function ef(){if(ba===null)throw Error(s(459));var t=ba;return ba=null,t}function lf(t){if(t===Ja||t===Fi)throw Error(s(483))}var Wa=null,Ln=0;function Ii(t){var e=Ln;return Ln+=1,Wa===null&&(Wa=[]),tf(Wa,t,e)}function Hl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pi(t,e){throw e.$$typeof===ht?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function af(t){function e(y,m){if(t){var w=y.deletions;w===null?(y.deletions=[m],y.flags|=16):w.push(m)}}function l(y,m){if(!t)return null;for(;m!==null;)e(y,m),m=m.sibling;return null}function a(y){for(var m=new Map;y!==null;)y.key===null?m.set(y.index,y):m.set(y.key,y),y=y.sibling;return m}function n(y,m){return y=yl(y,m),y.index=0,y.sibling=null,y}function i(y,m,w){return y.index=w,t?(w=y.alternate,w!==null?(w=w.index,w<m?(y.flags|=2,m):w):(y.flags|=134217730,m)):(y.flags|=1048576,m)}function u(y){return t&&y.alternate===null&&(y.flags|=134217730),y}function r(y,m,w,C){return m===null||m.tag!==6?(m=_c(w,y.mode,C),m.return=y,m):(m=n(m,w),m.return=y,m)}function f(y,m,w,C){var K=w.type;return K===Xt?(y=j(y,m,w.props.children,C,w.key),Hl(y,w),y):m!==null&&(m.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===S&&ya(K)===m.type)?(m=n(m,w.props),Hl(m,w),m.return=y,m):(m=Li(w.type,w.key,w.props,null,y.mode,C),Hl(m,w),m.return=y,m)}function b(y,m,w,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=Cc(w,y.mode,C),m.return=y,m):(m=n(m,w.children||[]),m.return=y,m)}function j(y,m,w,C,K){return m===null||m.tag!==7?(m=fa(w,y.mode,C,K),m.return=y,m):(m=n(m,w),m.return=y,m)}function R(y,m,w){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=_c(""+m,y.mode,w),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mt:return w=Li(m.type,m.key,m.props,null,y.mode,w),Hl(w,m),w.return=y,w;case Yt:return m=Cc(m,y.mode,w),m.return=y,m;case S:return m=ya(m),R(y,m,w)}if(I(m)||H(m))return m=fa(m,y.mode,w,null),m.return=y,m;if(typeof m.then=="function")return R(y,Ii(m),w);if(m.$$typeof===Bt)return R(y,Ji(y,m),w);Pi(y,m)}return null}function p(y,m,w,C){var K=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return K!==null?null:r(y,m,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mt:return w.key===K?f(y,m,w,C):null;case Yt:return w.key===K?b(y,m,w,C):null;case S:return w=ya(w),p(y,m,w,C)}if(I(w)||H(w))return K!==null?null:j(y,m,w,C,null);if(typeof w.then=="function")return p(y,m,Ii(w),C);if(w.$$typeof===Bt)return p(y,m,Ji(y,w),C);Pi(y,w)}return null}function T(y,m,w,C,K){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return y=y.get(w)||null,r(m,y,""+C,K);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Mt:return y=y.get(C.key===null?w:C.key)||null,f(m,y,C,K);case Yt:return y=y.get(C.key===null?w:C.key)||null,b(m,y,C,K);case S:return C=ya(C),T(y,m,w,C,K)}if(I(C)||H(C))return y=y.get(w)||null,j(m,y,C,K,null);if(typeof C.then=="function")return T(y,m,w,Ii(C),K);if(C.$$typeof===Bt)return T(y,m,w,Ji(m,C),K);Pi(m,C)}return null}function k(y,m,w,C){for(var K=null,wt=null,P=m,ut=m=0,Pt=null;P!==null&&ut<w.length;ut++){P.index>ut?(Pt=P,P=null):Pt=P.sibling;var Tt=p(y,P,w[ut],C);if(Tt===null){P===null&&(P=Pt);break}t&&P&&Tt.alternate===null&&e(y,P),m=i(Tt,m,ut),wt===null?K=Tt:wt.sibling=Tt,wt=Tt,P=Pt}if(ut===w.length)return l(y,P),pt&&bl(y,ut),K;if(P===null){for(;ut<w.length;ut++)P=R(y,w[ut],C),P!==null&&(m=i(P,m,ut),wt===null?K=P:wt.sibling=P,wt=P);return pt&&bl(y,ut),K}for(P=a(P);ut<w.length;ut++)Pt=T(P,y,ut,w[ut],C),Pt!==null&&(t&&(Tt=Pt.alternate,Tt!==null&&P.delete(Tt.key===null?ut:Tt.key)),m=i(Pt,m,ut),wt===null?K=Pt:wt.sibling=Pt,wt=Pt);return t&&P.forEach(function(ea){return e(y,ea)}),pt&&bl(y,ut),K}function F(y,m,w,C){if(w==null)throw Error(s(151));for(var K=null,wt=null,P=m,ut=m=0,Pt=null,Tt=w.next();P!==null&&!Tt.done;ut++,Tt=w.next()){P.index>ut?(Pt=P,P=null):Pt=P.sibling;var ea=p(y,P,Tt.value,C);if(ea===null){P===null&&(P=Pt);break}t&&P&&ea.alternate===null&&e(y,P),m=i(ea,m,ut),wt===null?K=ea:wt.sibling=ea,wt=ea,P=Pt}if(Tt.done)return l(y,P),pt&&bl(y,ut),K;if(P===null){for(;!Tt.done;ut++,Tt=w.next())Tt=R(y,Tt.value,C),Tt!==null&&(m=i(Tt,m,ut),wt===null?K=Tt:wt.sibling=Tt,wt=Tt);return pt&&bl(y,ut),K}for(P=a(P);!Tt.done;ut++,Tt=w.next())Tt=T(P,y,ut,Tt.value,C),Tt!==null&&(t&&(Pt=Tt.alternate,Pt!==null&&P.delete(Pt.key===null?ut:Pt.key)),m=i(Tt,m,ut),wt===null?K=Tt:wt.sibling=Tt,wt=Tt);return t&&P.forEach(function(Sg){return e(y,Sg)}),pt&&bl(y,ut),K}function dt(y,m,w,C){if(typeof w=="object"&&w!==null&&w.type===Xt&&w.key===null&&w.props.ref===void 0&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Mt:t:{for(var K=w.key;m!==null;){if(m.key===K){if(K=w.type,K===Xt){if(m.tag===7){l(y,m.sibling),C=n(m,w.props.children),Hl(C,w),C.return=y,y=C;break t}}else if(m.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===S&&ya(K)===m.type){l(y,m.sibling),C=n(m,w.props),Hl(C,w),C.return=y,y=C;break t}l(y,m);break}else e(y,m);m=m.sibling}w.type===Xt?(C=fa(w.props.children,y.mode,C,w.key),Hl(C,w),C.return=y,y=C):(C=Li(w.type,w.key,w.props,null,y.mode,C),Hl(C,w),C.return=y,y=C)}return u(y);case Yt:t:{for(K=w.key;m!==null;){if(m.key===K)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){l(y,m.sibling),C=n(m,w.children||[]),C.return=y,y=C;break t}else{l(y,m);break}else e(y,m);m=m.sibling}C=Cc(w,y.mode,C),C.return=y,y=C}return u(y);case S:return w=ya(w),dt(y,m,w,C)}if(I(w))return k(y,m,w,C);if(H(w)){if(K=H(w),typeof K!="function")throw Error(s(150));return w=K.call(w),F(y,m,w,C)}if(typeof w.then=="function")return dt(y,m,Ii(w),C);if(w.$$typeof===Bt)return dt(y,m,Ji(y,w),C);Pi(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,m!==null&&m.tag===6?(l(y,m.sibling),C=n(m,w),C.return=y,y=C):(l(y,m),C=_c(w,y.mode,C),C.return=y,y=C),u(y)):l(y,m)}return function(y,m,w,C){try{Ln=0;var K=dt(y,m,w,C);return Wa=null,K}catch(P){if(P===Ja||P===Fi)throw P;var wt=Se(29,P,null,y.mode);return wt.lanes=C,wt.return=y,wt}finally{}}}var xa=af(!0),nf=af(!1),Bl=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ql(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Yl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Ot&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=ki(t),ko(t,null,l),e}return Gi(t,a,e,l),ki(t)}function Vn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Xs(t,l)}}function Xc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Qc=!1;function Xn(){if(Qc){var t=Ka;if(t!==null)throw t}}function Qn(t,e,l,a){Qc=!1;var n=t.updateQueue;Bl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var f=r,b=f.next;f.next=null,u===null?i=b:u.next=b,u=f;var j=t.alternate;j!==null&&(j=j.updateQueue,r=j.lastBaseUpdate,r!==u&&(r===null?j.firstBaseUpdate=b:r.next=b,j.lastBaseUpdate=f))}if(i!==null){var R=n.baseState;u=0,j=b=f=null,r=i;do{var p=r.lane&-536870913,T=p!==r.lane;if(T?(St&p)===p:(a&p)===p){p!==0&&p===ga&&(Qc=!0),j!==null&&(j=j.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});t:{var k=t,F=r;p=e;var dt=l;switch(F.tag){case 1:if(k=F.payload,typeof k=="function"){R=k.call(dt,R,p);break t}R=k;break t;case 3:k.flags=k.flags&-65537|128;case 0:if(k=F.payload,p=typeof k=="function"?k.call(dt,R,p):k,p==null)break t;R=Z({},R,p);break t;case 2:Bl=!0}}p=r.callback,p!==null&&(t.flags|=64,T&&(t.flags|=8192),T=n.callbacks,T===null?n.callbacks=[p]:T.push(p))}else T={lane:p,tag:r.tag,payload:r.payload,callback:r.callback,next:null},j===null?(b=j=T,f=R):j=j.next=T,u|=p;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;T=r,r=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);j===null&&(f=R),n.baseState=f,n.firstBaseUpdate=b,n.lastBaseUpdate=j,i===null&&(n.shared.lanes=0),Zl|=u,t.lanes=u,t.memoizedState=R}}function uf(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function cf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)uf(l[t],e)}var Gl=it(null),tu=it(0);function rf(t,e){t=jl,rt(tu,t),rt(Gl,e),jl=t|e.baseLanes}function Zc(){rt(tu,jl),rt(Gl,Gl.current)}function Kc(){jl=tu.current,mt(Gl),mt(tu)}var se=it(null),ve=null;function kl(t){var e=t.alternate;rt(oe,oe.current&1),rt(se,t),ve===null&&(e===null||Gl.current!==null||e.memoizedState!==null)&&(ve=t)}function Jc(t){rt(oe,oe.current),rt(se,t),ve===null&&(ve=t)}function sf(t){t.tag===22?(rt(oe,oe.current),rt(se,t),ve===null&&(ve=t)):Ll()}function Ll(){rt(oe,oe.current),rt(se,se.current)}function Ce(t){mt(se),ve===t&&(ve=null),mt(oe)}var oe=it(0);function Zn(t,e){rt(se,se.current),rt(oe,e)}function Wc(t){mt(oe),mt(se),ve===t&&(ve=null)}function eu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||ps(l)||ys(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wl=0,ft=null,Ht=null,$t=null,lu=!1,Fa=!1,Sa=!1,au=0,Kn=0,$a=null,Lm=0;function Kt(){throw Error(s(321))}function Fc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!_e(t[l],e[l]))return!1;return!0}function $c(t,e,l,a,n,i){return wl=i,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,q.H=t===null||t.memoizedState===null?Zf:Kf,Sa=!1,i=l(a,n),Sa=!1,Fa&&(i=ff(e,l,a,n)),of(t),i}function of(t){q.H=ou;var e=Ht!==null&&Ht.next!==null;if(wl=0,$t=Ht=ft=null,lu=!1,Kn=0,$a=null,e)throw Error(s(300));t===null||It||(t=t.dependencies,t!==null&&Ki(t)&&(It=!0))}function ff(t,e,l,a){ft=t;var n=0;do{if(Fa&&($a=null),Kn=0,Fa=!1,25<=n)throw Error(s(301));if(n+=1,$t=Ht=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}q.H=Fm,i=e(l,a)}while(Fa);return i}function Vm(){var t=q.H,e=t.useState()[0];return e=typeof e.then=="function"?Jn(e):e,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(ft.flags|=1024),e}function Ic(){var t=au!==0;return au=0,t}function Pc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function tr(t){if(lu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}lu=!1}wl=0,$t=Ht=ft=null,Fa=!1,Kn=au=0,$a=null}function pe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?ft.memoizedState=$t=t:$t=$t.next=t,$t}function Wt(){if(Ht===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=$t===null?ft.memoizedState:$t.next;if(e!==null)$t=e,Ht=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},$t===null?ft.memoizedState=$t=t:$t=$t.next=t}return $t}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jn(t){var e=Kn;return Kn+=1,$a===null&&($a=[]),t=tf($a,t,e),e=ft,($t===null?e.memoizedState:$t.next)===null&&(e=e.alternate,q.H=e===null||e.memoizedState===null?Zf:Kf),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jn(t);if(t.$$typeof===M)return;if(t.$$typeof===Bt)return re(t)}throw Error(s(438,String(t)))}function er(t){var e=null,l=ft.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=ft.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=nu(),ft.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=et;return e.index++,l}function Tl(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=Wt();return lr(e,Ht,t)}function lr(t,e,l){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var r=u=null,f=null,b=e,j=!1;do{var R=b.lane&-536870913;if(R!==b.lane?(St&R)===R:(wl&R)===R){var p=b.revertLane;if(p===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),R===ga&&(j=!0);else if((wl&p)===p){b=b.next,p===ga&&(j=!0);continue}else R={lane:0,revertLane:b.revertLane,gesture:null,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(r=f=R,u=i):f=f.next=R,ft.lanes|=p,Zl|=p;R=b.action,Sa&&l(i,R),i=b.hasEagerState?b.eagerState:l(i,R)}else p={lane:R,revertLane:b.revertLane,gesture:b.gesture,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null},f===null?(r=f=p,u=i):f=f.next=p,ft.lanes|=R,Zl|=R;b=b.next}while(b!==null&&b!==e);if(f===null?u=i:f.next=r,!_e(i,t.memoizedState)&&(It=!0,j&&(l=Ka,l!==null)))throw l;t.memoizedState=i,t.baseState=u,t.baseQueue=f,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function ar(t){var e=Wt(),l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);_e(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function df(t,e,l){var a=ft,n=Wt(),i=pt;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=e();var u=!_e((Ht||n).memoizedState,l);if(u&&(n.memoizedState=l,It=!0),n=n.queue,ur(vf.bind(null,a,n,t),[t]),t=n.getSnapshot!==e||u||$t!==null&&($t.memoizedState.tag&1)!==0,Ia(t?9:8,{destroy:void 0},mf.bind(null,a,n,l,e),null),t){if(a.flags|=2048,qt===null)throw Error(s(349));i||(wl&127)!==0||hf(a,e,l)}return l}function hf(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=ft.updateQueue,e===null?(e=nu(),ft.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function mf(t,e,l,a){e.value=l,e.getSnapshot=a,gf(e)&&pf(t)}function vf(t,e,l){return l(function(){gf(e)&&pf(t)})}function gf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!_e(t,l)}catch{return!0}}function pf(t){var e=oa(t,2);e!==null&&Ee(e,t,2)}function nr(t){var e=pe();if(typeof t=="function"){var l=t;if(t=l(),Sa){Ol(!0);try{l()}finally{Ol(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:t},e}function yf(t,e,l,a){return t.baseState=l,lr(t,Ht,typeof a=="function"?a:Tl)}function Xm(t,e,l,a,n){if(su(t))throw Error(s(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};q.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,bf(e,i)):(i.next=l.next,e.pending=l.next=i)}}function bf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=q.T,u={};u.types=i!==null?i.types:null,q.T=u;try{var r=l(n,a),f=q.S;f!==null&&f(u,r),xf(t,e,r)}catch(b){ir(t,e,b)}finally{i!==null&&u.types!==null&&(i.types=u.types),q.T=i}}else try{i=l(n,a),xf(t,e,i)}catch(b){ir(t,e,b)}}function xf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Sf(t,e,a)},function(a){return ir(t,e,a)}):Sf(t,e,l)}function Sf(t,e,l){e.status="fulfilled",e.value=l,wf(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,bf(t,l)))}function ir(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,wf(e),e=e.next;while(e!==a)}t.action=null}function wf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Tf(t,e){return e}function Nf(t,e){if(pt){var l=qt.formState;if(l!==null){t:{var a=ft;if(pt){if(Gt){e:{for(var n=Gt,i=Ve;n.nodeType!==8;){if(!i){n=null;break e}if(n=Qe(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Gt=Qe(n.nextSibling),a=n.data==="F!";break t}}Dl(a)}a=!1}a&&(e=l[0])}}return l=pe(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tf,lastRenderedState:e},l.queue=a,l=Vf.bind(null,ft,a),a.dispatch=l,a=nr(!1),i=fr.bind(null,ft,!1,a.queue),a=pe(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Xm.bind(null,ft,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Ef(t){var e=Wt();return jf(e,Ht,t)}function jf(t,e,l){if(e=lr(t,e,Tf)[0],t=uu(Tl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Jn(e)}catch(u){throw u===Ja?Fi:u}else a=e;e=Wt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(ft.flags|=2048,Ia(9,{destroy:void 0},Qm.bind(null,n,l),null)),[a,i,t]}function Qm(t,e){t.action=e}function zf(t){var e=Wt(),l=Ht;if(l!==null)return jf(e,l,t);Wt(),e=e.memoizedState,l=Wt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ia(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=ft.updateQueue,e===null&&(e=nu(),ft.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Mf(){return Wt().memoizedState}function cu(t,e,l,a){var n=pe();ft.flags|=t,n.memoizedState=Ia(1|e,{destroy:void 0},l,a===void 0?null:a)}function ru(t,e,l,a){var n=Wt();a=a===void 0?null:a;var i=n.memoizedState.inst;Ht!==null&&a!==null&&Fc(a,Ht.memoizedState.deps)?n.memoizedState=Ia(e,i,l,a):(ft.flags|=t,n.memoizedState=Ia(1|e,i,l,a))}function Of(t,e){cu(8390656,8,t,e)}function ur(t,e){ru(2048,8,t,e)}function Zm(t){ft.flags|=4;var e=ft.updateQueue;if(e===null)e=nu(),ft.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Af(t){var e=Wt().memoizedState;return Zm({ref:e,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function _f(t,e){return ru(4,2,t,e)}function Cf(t,e){return ru(4,4,t,e)}function Rf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Df(t,e,l){l=l!=null?l.concat([t]):null,ru(4,4,Rf.bind(null,e,t),l)}function cr(){}function Uf(t,e){var l=Wt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Fc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Hf(t,e){var l=Wt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Fc(e,a[1]))return a[0];if(a=t(),Sa){Ol(!0);try{t()}finally{Ol(!1)}}return l.memoizedState=[a,e],a}function rr(t,e,l){return l===void 0||(wl&1073741824)!==0&&(St&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Zd(),ft.lanes|=t,Zl|=t,l)}function Bf(t,e,l,a){return _e(l,e)?l:Gl.current!==null?(t=rr(t,l,a),_e(t,e)||(It=!0),t):(wl&106)===0||(wl&1073741824)!==0&&(St&261930)===0?(It=!0,t.memoizedState=l):(t=Zd(),ft.lanes|=t,Zl|=t,e)}function qf(t,e,l,a,n){var i=X.p;X.p=i!==0&&8>i?i:8;var u=q.T,r={};r.types=u!==null?u.types:null,q.T=r,fr(t,!1,e,l);try{var f=n(),b=q.S;if(b!==null&&b(r,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var j=km(f,a);Wn(t,e,j,He(t))}else Wn(t,e,a,He(t))}catch(R){Wn(t,e,{then:function(){},status:"rejected",reason:R},He())}finally{X.p=i,u!==null&&r.types!==null&&(u.types=r.types),q.T=u}}function Km(){}function sr(t,e,l,a){if(t.tag!==5)throw Error(s(476));var n=Yf(t).queue;qf(t,n,e,_t,l===null?Km:function(){return Gf(t),l(a)})}function Yf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_t,baseState:_t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:_t},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Gf(t){var e=Yf(t);e.next===null&&(e=t.alternate.memoizedState),Wn(t,e.next.queue,{},He())}function or(){return re(yn)}function kf(){return Wt().memoizedState}function Lf(){return Wt().memoizedState}function Jm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=He();t=ql(l);var a=Yl(e,t,l);a!==null&&(Ee(a,e,l),Vn(a,e,l)),e={cache:qc()},t.payload=e;return}e=e.return}}function Wm(t,e,l){var a=He();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},su(t)?Xf(e,l):(l=Oc(t,e,l,a),l!==null&&(Ee(l,t,a),Qf(l,e,a)))}function Vf(t,e,l){var a=He();Wn(t,e,l,a)}function Wn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(su(t))Xf(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,r=i(u,l);if(n.hasEagerState=!0,n.eagerState=r,_e(r,u))return Gi(t,e,n,0),qt===null&&Yi(),!1}catch{}finally{}if(l=Oc(t,e,n,a),l!==null)return Ee(l,t,a),Qf(l,e,a),!0}return!1}function fr(t,e,l,a){if(a={lane:2,revertLane:es(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},su(t)){if(e)throw Error(s(479))}else e=Oc(t,l,a,2),e!==null&&Ee(e,t,2)}function su(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Xf(t,e){Fa=lu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Qf(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Xs(t,l)}}var ou={readContext:re,use:iu,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt,useEffectEvent:Kt},Zf={readContext:re,use:iu,useCallback:function(t,e){return pe().memoizedState=[t,e===void 0?null:e],t},useContext:re,useEffect:Of,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,cu(4194308,4,Rf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){cu(4,2,t,e)},useMemo:function(t,e){var l=pe();e=e===void 0?null:e;var a=t();if(Sa){Ol(!0);try{t()}finally{Ol(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=pe();if(l!==void 0){var n=l(e);if(Sa){Ol(!0);try{l(e)}finally{Ol(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Wm.bind(null,ft,t),[a.memoizedState,t]},useRef:function(t){var e=pe();return t={current:t},e.memoizedState=t},useState:function(t){t=nr(t);var e=t.queue,l=Vf.bind(null,ft,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:cr,useDeferredValue:function(t,e){var l=pe();return rr(l,t,e)},useTransition:function(){var t=nr(!1);return t=qf.bind(null,ft,t.queue,!0,!1),pe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=ft,n=pe();if(pt){if(l===void 0)throw Error(s(407));l=l()}else{if(l=e(),qt===null)throw Error(s(349));(St&127)!==0||hf(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,Of(vf.bind(null,a,i,t),[t]),a.flags|=2048,Ia(9,{destroy:void 0},mf.bind(null,a,i,l,e),null),l},useId:function(){var t=pe(),e=qt.identifierPrefix;if(pt){var l=al,a=ll;l=(a&~(1<<32-Oe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=au++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Lm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:or,useFormState:Nf,useActionState:Nf,useOptimistic:function(t){var e=pe();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=fr.bind(null,ft,!0,l),l.dispatch=e,[t,e]},useMemoCache:er,useCacheRefresh:function(){return pe().memoizedState=Jm.bind(null,ft)},useEffectEvent:function(t){var e=pe(),l={impl:t};return e.memoizedState=l,function(){if((Ot&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}},Kf={readContext:re,use:iu,useCallback:Uf,useContext:re,useEffect:ur,useImperativeHandle:Df,useInsertionEffect:_f,useLayoutEffect:Cf,useMemo:Hf,useReducer:uu,useRef:Mf,useState:function(){return uu(Tl)},useDebugValue:cr,useDeferredValue:function(t,e){var l=Wt();return Bf(l,Ht.memoizedState,t,e)},useTransition:function(){var t=uu(Tl)[0],e=Wt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:df,useId:kf,useHostTransitionStatus:or,useFormState:Ef,useActionState:Ef,useOptimistic:function(t,e){var l=Wt();return yf(l,Ht,t,e)},useMemoCache:er,useCacheRefresh:Lf,useEffectEvent:Af},Fm={readContext:re,use:iu,useCallback:Uf,useContext:re,useEffect:ur,useImperativeHandle:Df,useInsertionEffect:_f,useLayoutEffect:Cf,useMemo:Hf,useReducer:ar,useRef:Mf,useState:function(){return ar(Tl)},useDebugValue:cr,useDeferredValue:function(t,e){var l=Wt();return Ht===null?rr(l,t,e):Bf(l,Ht.memoizedState,t,e)},useTransition:function(){var t=ar(Tl)[0],e=Wt().memoizedState;return[typeof t=="boolean"?t:Jn(t),e]},useSyncExternalStore:df,useId:kf,useHostTransitionStatus:or,useFormState:zf,useActionState:zf,useOptimistic:function(t,e){var l=Wt();return Ht!==null?yf(l,Ht,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:er,useCacheRefresh:Lf,useEffectEvent:Af};function dr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:Z({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var hr={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=He(),n=ql(a);n.payload=e,l!=null&&(n.callback=l),e=Yl(t,n,a),e!==null&&(Ee(e,t,a),Vn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=He(),n=ql(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Yl(t,n,a),e!==null&&(Ee(e,t,a),Vn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=He(),a=ql(l);a.tag=2,e!=null&&(a.callback=e),e=Yl(t,a,l),e!==null&&(Ee(e,t,l),Vn(e,t,l))}};function Jf(t,e,l,a,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):e.prototype&&e.prototype.isPureReactComponent?!Un(l,a)||!Un(n,i):!0}function Wf(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&hr.enqueueReplaceState(e,e.state,null)}function wa(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=Z({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Ff(t){qi(t)}function $f(t){console.error(t)}function If(t){qi(t)}function fu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Pf(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function mr(t,e,l){return l=ql(l),l.tag=3,l.payload={element:null},l.callback=function(){fu(t,e)},l}function td(t){return t=ql(t),t.tag=3,t}function ed(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Pf(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Pf(e,l,a),typeof n!="function"&&(Kl===null?Kl=new Set([this]):Kl.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function $m(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ma(e,l,n,!0),l=se.current,l!==null){switch(l.tag){case 31:case 13:case 19:return ve===null?Cu():l.alternate===null&&Jt===0&&(Jt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===$i?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Ir(t,a,n)),!1;case 22:return l.flags|=65536,a===$i?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Ir(t,a,n)),!1}throw Error(s(435,l.tag))}return Ir(t,a,n),Cu(),!1}if(pt)return e=se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Dc&&(t=Error(s(422),{cause:a}),qn(Ge(t,l)))):(a!==Dc&&(e=Error(s(423),{cause:a}),qn(Ge(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=Ge(a,l),n=mr(t.stateNode,a,n),Xc(t,n),Jt!==4&&(Jt=2)),!1;var i=Error(s(520),{cause:a});if(i=Ge(i,l),ai===null?ai=[i]:ai.push(i),Jt!==4&&(Jt=2),e===null)return!0;a=Ge(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=mr(l.stateNode,a,t),Xc(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Kl===null||!Kl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=td(n),ed(n,t,l,a),Xc(l,n),!1;break;case 22:if(l.memoizedState!==null)return l.flags|=65536,!1}l=l.return}while(l!==null);return!1}var vr=Error(s(461)),It=!1;function ee(t,e,l,a){e.child=t===null?nf(e,null,l,a):xa(e,t.child,l,a)}function ld(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var u={};for(var r in a)r!=="ref"&&(u[r]=a[r])}else u=a;return va(e),a=$c(t,e,l,u,i,n),r=Ic(),t!==null&&!It?(Pc(t,e,n),Nl(t,e,n)):(pt&&r&&Xi(e),e.flags|=1,ee(t,e,a,n),e.child)}function ad(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Ac(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,nd(t,e,i,a,n)):(t=Li(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Tr(t,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Un,l(u,a)&&t.ref===e.ref)return Nl(t,e,n)}return e.flags|=1,t=yl(i,a),t.ref=e.ref,t.return=e,e.child=t}function nd(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Un(i,a)&&t.ref===e.ref)if(It=!1,e.pendingProps=a=i,Tr(t,n))(t.flags&131072)!==0&&(It=!0);else return e.lanes=t.lanes,Nl(t,e,n)}return gr(t,e,l,a,n)}function id(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return ud(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wi(e,i!==null?i.cachePool:null),i!==null?rf(e,i):Zc(),sf(e);else return a=e.lanes=536870912,ud(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Wi(e,i.cachePool),rf(e,i),Ll(),e.memoizedState=null):(t!==null&&Wi(e,null),Zc(),Ll());return ee(t,e,n,l),e.child}function Fn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ud(t,e,l,a,n){var i=Gc();return i=i===null?null:{parent:Ft._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Wi(e,null),Zc(),sf(e),t!==null&&ma(t,e,a,!0),e.childLanes=n,null}function du(t,e){return e=hu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function cd(t,e,l){return xa(e,t.child,null,l),t=du(e,e.pendingProps),t.flags|=2,Ce(e),e.memoizedState=null,t}function Im(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(pt){if(a.mode==="hidden")return t=du(e,a),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Fn(null,t);if(Jc(e),(t=Gt)?(t=R0(t,Ve),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Cl!==null?{id:ll,overflow:al}:null,retryLane:536870912,hydrationErrors:null},l=Vo(t),l.return=e,e.child=l,ne=e,Gt=null)):t=null,t===null)throw Dl(e);return e.lanes=536870912,null}return du(e,a)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Jc(e),n)if(e.flags&256)e.flags&=-257,e=cd(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(It||ma(t,e,l,!1),n=(l&t.childLanes)!==0,It||n){if(Gl.current===null){if(a=qt,a!==null&&(u=Qs(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,oa(t,u),Ee(a,t,u),vr;Cu()}e=cd(t,e,l)}else t=i.treeContext,Gt=Qe(u.nextSibling),ne=e,pt=!0,Rl=null,Ve=!1,t!==null&&Zo(e,t),e=du(e,a),e.flags|=134221824;return e}return t=yl(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Pa(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function gr(t,e,l,a,n){return va(e),l=$c(t,e,l,a,void 0,n),a=Ic(),t!==null&&!It?(Pc(t,e,n),Nl(t,e,n)):(pt&&a&&Xi(e),e.flags|=1,ee(t,e,l,n),e.child)}function rd(t,e,l,a,n,i){return va(e),e.updateQueue=null,l=ff(e,a,l,n),of(t),a=Ic(),t!==null&&!It?(Pc(t,e,i),Nl(t,e,i)):(pt&&a&&Xi(e),e.flags|=1,ee(t,e,l,i),e.child)}function sd(t,e,l,a,n){if(va(e),e.stateNode===null){var i=Va,u=l.contextType;typeof u=="object"&&u!==null&&(i=re(u)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hr,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Lc(e),u=l.contextType,i.context=typeof u=="object"&&u!==null?re(u):Va,i.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(dr(e,l,u,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&hr.enqueueReplaceState(i,i.state,null),Qn(e,a,i,n),Xn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var r=e.memoizedProps,f=wa(l,r);i.props=f;var b=i.context,j=l.contextType;u=Va,typeof j=="object"&&j!==null&&(u=re(j));var R=l.getDerivedStateFromProps;j=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=e.pendingProps!==r,j||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||b!==u)&&Wf(e,i,a,u),Bl=!1;var p=e.memoizedState;i.state=p,Qn(e,a,i,n),Xn(),b=e.memoizedState,r||p!==b||Bl?(typeof R=="function"&&(dr(e,l,R,a),b=e.memoizedState),(f=Bl||Jf(e,l,f,a,p,b,u))?(j||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=b),i.props=a,i.state=b,i.context=u,a=f):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Vc(t,e),u=e.memoizedProps,j=wa(l,u),i.props=j,R=e.pendingProps,p=i.context,b=l.contextType,f=Va,typeof b=="object"&&b!==null&&(f=re(b)),r=l.getDerivedStateFromProps,(b=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==R||p!==f)&&Wf(e,i,a,f),Bl=!1,p=e.memoizedState,i.state=p,Qn(e,a,i,n),Xn();var T=e.memoizedState;u!==R||p!==T||Bl||t!==null&&t.dependencies!==null&&Ki(t.dependencies)?(typeof r=="function"&&(dr(e,l,r,a),T=e.memoizedState),(j=Bl||Jf(e,l,j,a,p,T,f)||t!==null&&t.dependencies!==null&&Ki(t.dependencies))?(b||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,T,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,T,f)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=T),i.props=a,i.state=T,i.context=f,a=j):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Pa(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=xa(e,t.child,null,n),e.child=xa(e,null,l,n)):ee(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Nl(t,e,n),t}function od(t,e,l,a){return da(),e.flags|=256,ee(t,e,l,a),e.child}var pr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yr(t){return{baseLanes:t,cachePool:Io()}}function br(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=Ue),t}function fd(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(oe.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(pt){if(n?kl(e):Ll(),(t=Gt)?(t=R0(t,Ve),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Cl!==null?{id:ll,overflow:al}:null,retryLane:536870912,hydrationErrors:null},l=Vo(t),l.return=e,e.child=l,ne=e,Gt=null)):t=null,t===null)throw Dl(e);return ys(t)?e.lanes=32:e.lanes=536870912,null}return i=a.children,a=a.fallback,n?(Ll(),n=e.mode,i=hu({mode:"hidden",children:i},n),a=fa(a,n,l,null),i.return=e,a.return=e,i.sibling=a,e.child=i,a=e.child,a.memoizedState=yr(l),a.childLanes=br(t,u,l),e.memoizedState=pr,Fn(null,a)):(kl(e),xr(e,i))}var r=t.memoizedState;if(r!==null){var f=r.dehydrated;if(f!==null)return Pm(t,e,i,u,a,f,r,l)}return n?(Ll(),n=a.fallback,i=e.mode,r=t.child,f=r.sibling,a=yl(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&1206910976,f!==null?n=yl(f,n):(n=fa(n,i,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,Fn(null,a),a=e.child,n=t.child.memoizedState,n===null?n=yr(l):(i=n.cachePool,i!==null?(r=Ft._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Io(),n={baseLanes:n.baseLanes|l,cachePool:i}),a.memoizedState=n,a.childLanes=br(t,u,l),e.memoizedState=pr,Fn(t.child,a)):(kl(e),l=t.child,t=l.sibling,l=yl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function xr(t,e){return e=hu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hu(t,e){return t=Se(22,t,null,e),t.lanes=0,t}function mu(t,e,l){return xa(e,t.child,null,l),t=xr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Pm(t,e,l,a,n,i,u,r){if(l)return e.flags&256?(kl(e),e.flags&=-257,mu(t,e,r)):e.memoizedState!==null?(Ll(),e.child=t.child,e.flags|=128,null):(Ll(),i=n.fallback,u=e.mode,n=hu({mode:"visible",children:n.children},u),i=fa(i,u,r,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,xa(e,t.child,null,r),n=e.child,n.memoizedState=yr(r),n.childLanes=br(t,a,r),e.memoizedState=pr,Fn(null,n));if(kl(e),ys(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(n=Error(s(419)),n.stack="",n.digest=a,qn({value:n,source:null,stack:null})),mu(t,e,r)}if(It||ma(t,e,r,!1),a=(r&t.childLanes)!==0,It||a){if(Gl.current!==null)return mu(t,e,r);if(a=qt,a!==null&&(n=Qs(a,r),n!==0&&n!==u.retryLane))throw u.retryLane=n,oa(t,n),Ee(a,t,n),vr;return ps(i)||Cu(),mu(t,e,r)}return ps(i)?(e.flags|=192,e.child=t.child,null):(t=u.treeContext,Gt=Qe(i.nextSibling),ne=e,pt=!0,Rl=null,Ve=!1,t!==null&&Zo(e,t),e=xr(e,n.children),e.flags|=134221824,e)}function dd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Zi(t.return,e,l)}function hd(t){for(var e=null;t!==null;){var l=t.alternate;l!==null&&eu(l)===null&&(e=t),t=t.sibling}return e}function vu(t,e,l,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Sr(t){var e=t.child;for(t.child=null;e!==null;){var l=e.sibling;e.sibling=t.child,t.child=e,e=l}}function wr(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=oe.current;if(e.flags&128)return Zn(e,u),null;var r=(u&2)!==0;if(r?(u=u&1|2,e.flags|=128):u&=1,Zn(e,u),n==="backwards"&&t!==null?(Sr(t),ee(t,e,a,l),Sr(t)):ee(t,e,a,l),a=pt?Bn:0,!r&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dd(t,l,e);else if(t.tag===19)dd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":l=hd(e.child),l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null,Sr(e)),vu(e,!0,n,null,i,a);break;case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&eu(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}vu(e,!0,l,null,i,a);break;case"together":vu(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:l=hd(e.child),l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),vu(e,!1,n,l,i,a)}return e.child}function md(t,e,l){var a=e.pendingProps;return Ul(e,e.type,a.value),ee(t,e,a.children,l),e.child}function Nl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Zl|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ma(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,l=yl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=yl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Tr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ki(t)))}function tv(t,e,l){switch(e.tag){case 3:Oa(e,e.stateNode.containerInfo),Ul(e,Ft,t.memoizedState.cache),da();break;case 27:case 5:Sn(e);break;case 4:Oa(e,e.stateNode.containerInfo);break;case 10:Ul(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Jc(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return kl(e),e.flags|=128,null;a=ma(t,e,l,!1);var n=e.child.childLanes;return a||(l&n)!==0?fd(t,e,l):(kl(e),t=Nl(t,e,l),t!==null?t.sibling:null)}kl(e);break;case 19:if(e.flags&128)return wr(t,e,l);if(n=(t.flags&128)!==0,a=(l&e.childLanes)!==0,a||(ma(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return wr(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Zn(e,oe.current),a)break;return null;case 22:return e.lanes=0,id(t,e,l,e.pendingProps);case 24:Ul(e,Ft,t.memoizedState.cache)}return Nl(t,e,l)}function vd(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)It=!0;else{if(!Tr(t,l)&&(e.flags&128)===0)return It=!1,tv(t,e,l);It=(t.flags&131072)!==0}else It=!1,pt&&(e.flags&1048576)!==0&&Qo(e,Bn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ya(e.elementType),e.type=t,typeof t=="function")Ac(t)?(a=wa(t,a),e.tag=1,e=sd(null,e,t,a,l)):(e.tag=0,e=gr(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===G){e.tag=11,e=ld(null,e,t,a,l);break t}else if(n===Et){e.tag=14,e=ad(null,e,t,a,l);break t}else if(n===Bt){e.tag=10,e.type=t,e=md(null,e,l);break t}}throw e=$(t)||t,Error(s(306,e,""))}}return e;case 0:return gr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=wa(a,e.pendingProps),sd(t,e,a,n,l);case 3:t:{if(Oa(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Vc(t,e),Qn(e,a,null,l);var u=e.memoizedState;if(a=u.cache,Ul(e,Ft,a),a!==i.cache&&Bc(e,[Ft],l,!0),Xn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=od(t,e,a,l);break t}else if(a!==n){n=Ge(Error(s(424)),e),qn(n),e=od(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Gt=Qe(t.firstChild),ne=e,pt=!0,Rl=null,Ve=!0,l=nf(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|134221824,l=l.sibling}else{if(da(),a===n){e=Nl(t,e,l);break t}ee(t,e,a,l)}e=e.child}return e;case 26:return Pa(t,e),t===null?(l=G0(e.type,null,e.pendingProps,null))?e.memoizedState=l:pt||(e.stateNode=b0(e.type,e.pendingProps,tl.current,e)):e.memoizedState=G0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Sn(e),t===null&&pt&&(a=e.stateNode=H0(e.type,e.pendingProps,tl.current),ne=e,Ve=!0,n=Gt,Fl(e.type)?(bs=n,Gt=Qe(a.firstChild)):Gt=n),ee(t,e,e.pendingProps.children,l),Pa(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&pt&&((n=a=Gt)&&(a=Jv(a,e.type,e.pendingProps,Ve),a!==null?(e.stateNode=a,ne=e,Gt=Qe(a.firstChild),Ve=!1,n=!0):n=!1),n||Dl(e)),Sn(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,os(n,i)?a=null:u!==null&&os(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=$c(t,e,Vm,null,null,l),yn._currentValue=n),Pa(t,e),ee(t,e,a,l),e.child;case 6:return t===null&&pt&&((t=l=Gt)&&(l=Wv(l,e.pendingProps,Ve),l!==null?(e.stateNode=l,ne=e,Gt=null,t=!0):t=!1),t||Dl(e)),null;case 13:return fd(t,e,l);case 4:return Oa(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=xa(e,null,a,l):ee(t,e,a,l),e.child;case 11:return ld(t,e,e.type,e.pendingProps,l);case 7:return a=e.pendingProps,Pa(t,e),ee(t,e,a,l),e.child;case 8:return ee(t,e,e.pendingProps.children,l),e.child;case 12:return ee(t,e,e.pendingProps.children,l),e.child;case 10:return md(t,e,l);case 9:return n=e.type._context,a=e.pendingProps.children,va(e),n=re(n),a=a(n),e.flags|=1,ee(t,e,a,l),e.child;case 14:return ad(t,e,e.type,e.pendingProps,l);case 15:return nd(t,e,e.type,e.pendingProps,l);case 19:return wr(t,e,l);case 31:return Im(t,e,l);case 22:return id(t,e,l,e.pendingProps);case 24:return va(e),a=re(Ft),t===null?(n=Gc(),n===null&&(n=qt,i=qc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Lc(e),Ul(e,Ft,n)):((t.lanes&l)!==0&&(Vc(t,e),Qn(e,null,null,l),Xn()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ul(e,Ft,a)):(a=i.cache,Ul(e,Ft,a),a!==n.cache&&Bc(e,[Ft],l,!0))),ee(t,e,e.pendingProps.children,l),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=t===null?18882560:18874368:pt&&Xi(e),t!==null&&t.memoizedProps.name!==a.name?e.flags|=4194816:Pa(t,e),ee(t,e,a.children,l),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function El(t){t.flags|=4}function Nr(t,e,l,a,n){var i;if((i=(t.mode&32)!==0)&&(i=l===null?X0(e,a):X0(e,a)&&(a.src!==l.src||a.srcSet!==l.srcSet)),i){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Fd())t.flags|=8192;else throw ba=$i,kc}else t.flags&=-16777217}function gd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Q0(e))if(Fd())t.flags|=8192;else throw ba=$i,kc}function gu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ls():536870912,t.lanes|=e,nn|=e)}function $n(t,e){if(!pt)switch(t.tailMode){case"visible":break;case"collapsed":for(var l=t.tail,a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null;break;default:for(e=t.tail,l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&1206910976,a|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function ev(t,e,l){var a=e.pendingProps;switch(Rc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return kt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sl(Ft),dl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Za(e)?El(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Uc())),kt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(El(e),i!==null?(kt(e),gd(e,i)):(kt(e),Nr(e,n,null,a,l))):i?i!==t.memoizedState?(El(e),kt(e),gd(e,i)):(kt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&El(e),kt(e),Nr(e,n,t,a,l)),null;case 27:if(aa(e),l=tl.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return kt(e),e.subtreeFlags&=-33554433,null}t=le.current,Za(e)?Ko(e):(t=H0(n,a,l),e.stateNode=t,El(e))}return kt(e),e.subtreeFlags&=-33554433,null;case 5:if(aa(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return kt(e),e.subtreeFlags&=-33554433,null}if(i=le.current,Za(e))Ko(e);else{var u=ri(tl.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[ce]=e,i[xe]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=i;t:switch(de(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&El(e)}}return kt(e),e.subtreeFlags&=-33554433,Nr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&El(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=tl.current,Za(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=ne,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[ce]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||v0(t.nodeValue,l)),t||Dl(e,!0)}else t=ri(t).createTextNode(a),t[ce]=e,e.stateNode=t}return kt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Za(e),l!==null){if(t===null){if(!a)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ce]=e}else da(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),t=!1}else l=Uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Ce(e),e):(Ce(e),null);if((e.flags&128)!==0)throw Error(s(558))}return kt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Za(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(s(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[ce]=e}else da(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),n=!1}else n=Uc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ce(e),e):(Ce(e),null)}return Ce(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),gu(e,e.updateQueue),kt(e),null);case 4:return dl(),t===null&&is(e.stateNode.containerInfo),e.flags|=67108864,kt(e),null;case 10:return Sl(e.type),kt(e),null;case 19:if(Wc(e),a=e.memoizedState,a===null)return kt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)$n(a,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=eu(t),i!==null){for(e.flags|=128,$n(a,!1),t=i.updateQueue,e.updateQueue=t,gu(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Lo(l,t),l=l.sibling;return Zn(e,oe.current&1|2),pt&&bl(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ze()>Mu&&(e.flags|=128,n=!0,$n(a,!1),e.lanes=4194304)}else{if(!n)if(t=eu(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,gu(e,t),$n(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!pt)return kt(e),null}else 2*ze()-a.renderingStartTime>Mu&&l!==536870912&&(e.flags|=128,n=!0,$n(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}if(a.tail!==null){t=a.tail;t:{for(l=t;l!==null;){if(l.alternate!==null){l=!1;break t}l=l.sibling}l=!0}return a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ze(),t.sibling=null,i=oe.current,i=n?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!l||pt?Zn(e,i):(l=i,rt(se,e),rt(oe,l),ve===null&&(ve=e)),pt&&bl(e,a.treeForkCount),t}return kt(e),null;case 22:case 23:return Ce(e),Kc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),l=e.updateQueue,l!==null&&gu(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&mt(pa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Sl(Ft),kt(e),null;case 25:return null;case 30:return e.flags|=33554432,kt(e),null}throw Error(s(156,e.tag))}function lv(t,e){switch(Rc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Sl(Ft),dl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return aa(e),null;case 31:if(e.memoizedState!==null){if(Ce(e),e.alternate===null)throw Error(s(340));da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ce(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Wc(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return dl(),null;case 10:return Sl(e.type),null;case 22:case 23:return Ce(e),Kc(),t!==null&&mt(pa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Sl(Ft),null;case 25:return null;default:return null}}function pd(t,e){switch(Rc(e),e.tag){case 3:Sl(Ft),dl();break;case 26:case 27:case 5:aa(e);break;case 4:dl();break;case 31:e.memoizedState!==null&&Ce(e);break;case 13:Ce(e);break;case 19:Wc(e);break;case 10:Sl(e.type);break;case 22:case 23:Ce(e),Kc(),t!==null&&mt(pa);break;case 24:Sl(Ft)}}function In(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(r){Rt(e,e.return,r)}}function Vl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var u=a.inst,r=u.destroy;if(r!==void 0){u.destroy=void 0,n=e;var f=l,b=r;try{b()}catch(j){Rt(n,f,j)}}}a=a.next}while(a!==i)}}catch(j){Rt(e,e.return,j)}}function yd(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{cf(e,l)}catch(a){Rt(t,t.return,a)}}}function bd(t,e,l){l.props=wa(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Rt(t,e,a)}}function nl(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:var n=t.stateNode,i=gl(t.memoizedProps,n);(n.ref===null||n.ref.name!==i)&&(n.ref=j0(i)),a=n.ref;break;case 7:if(t.stateNode===null){var u=new Be(t);g(t.child,!1,Zv,u,void 0,void 0),t.stateNode=u}a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(r){Rt(t,e,r)}}function fe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Rt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Rt(t,e,n)}else l.current=null}function pu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var l=0;l<e.length;l++)C0(t.stateNode,e[l])}function xd(t){for(var e=t.return;e!==null&&(jr(e)&&C0(t.stateNode,e.stateNode),!Er(e));)e=e.return}function Pn(t){for(var e=t.return;e!==null&&(jr(e)&&Kv(t.stateNode,e.stateNode),!Er(e));)e=e.return}function Er(t){return t.tag===5||t.tag===3||t.tag===27}function jr(t){return t&&t.tag===7&&t.stateNode!==null}function zr(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Rt(t,t.return,n)}}function Mr(t,e,l){try{var a=t.stateNode;Mv(a,t.type,l,e),a[xe]=e}catch(n){Rt(t,t.return,n)}}function Sd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fl(t.type)||t.tag===4}function Or(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Sd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ar(t,e,l,a){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(n,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(n),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=el)),pu(t,a),jt=!0;else if(n!==4&&(n===27&&(pu(t,a),a=null,Fl(t.type)&&(l=t.stateNode,e=null)),t=t.child,t!==null))for(Ar(t,e,l,a),t=t.sibling;t!==null;)Ar(t,e,l,a),t=t.sibling}function yu(t,e,l,a){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?l.insertBefore(n,e):l.appendChild(n),pu(t,a),jt=!0;else if(n!==4&&(n===27&&(pu(t,a),a=null,Fl(t.type)&&(l=t.stateNode)),t=t.child,t!==null))for(yu(t,e,l,a),t=t.sibling;t!==null;)yu(t,e,l,a),t=t.sibling}function wd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);de(e,a,l),e[ce]=t,e[xe]=l}catch(i){Rt(t,t.return,i)}}var bu=!1,Re=null;function Td(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(bu=!0)}var il=null;function Nd(){var t=il;return il=null,t}var we=0;function tn(t,e,l,a,n){return we=0,Ed(t.child,e,l,a,n)}function Ed(t,e,l,a,n){for(var i=!1;t!==null;){if(t.tag===5){var u=t.stateNode;if(a!==null){var r=hs(u);a.push(r),r.view&&(i=!0)}else i||hs(u).view&&(i=!0);bu=!0,N0(u,we===0?e:e+"_"+we,l),we++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ed(t.child,e,l,a,n)&&(i=!0));t=t.sibling}return i}function ul(t,e){for(;t!==null;)t.tag===5?E0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||ul(t.child,e)),t=t.sibling}function xu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(xu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var l=e.name;e=pl(e.default,e.share),e!=="none"&&(tn(t,l,e,null,!1)||ul(t.child,!1))}t=t.sibling}}function _r(t,e){if(t.tag===30){var l=t.stateNode,a=t.memoizedProps,n=gl(a,l),i=pl(a.default,l.paired?a.share:a.enter);i!=="none"?tn(t,n,i,null,!1)?(xu(t),l.paired||e||sn(t,a.onEnter)):ul(t.child,!1):xu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_r(t,e),t=t.sibling;else xu(t)}function Cr(t){if(Re!==null&&Re.size!==0){var e=Re;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var l=t.memoizedProps,a=l.name;if(a!=null&&a!=="auto"){var n=e.get(a);if(n!==void 0){var i=pl(l.default,l.share);if(i!=="none"&&(tn(t,a,i,null,!1)?(i=t.stateNode,n.paired=i,i.paired=n,sn(t,l.onShare)):ul(t.child,!1)),e.delete(a),e.size===0)break}}}Cr(t)}t=t.sibling}}}function Rr(t){if(t.tag===30){var e=t.memoizedProps,l=gl(e,t.stateNode),a=Re!==null?Re.get(l):void 0,n=pl(e.default,a!==void 0?e.share:e.exit);n!=="none"&&(tn(t,l,n,null,!1)?a!==void 0?(n=t.stateNode,a.paired=n,n.paired=a,Re.delete(l),sn(t,e.onShare)):sn(t,e.onExit):ul(t.child,!1)),Re!==null&&Cr(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rr(t),t=t.sibling;else Re!==null&&Cr(t)}function jd(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,l=gl(e,t.stateNode);e=pl(e.default,e.update),t.flags&=-5,e!=="none"&&tn(t,l,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&jd(t);t=t.sibling}}function Dr(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,ul(t.child,!1))}Dr(t)}t=t.sibling}}function Su(t){if(t.tag===30)t.stateNode.paired=null,ul(t.child,!1),Dr(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Su(t),t=t.sibling;else Dr(t)}function zd(t){for(t=t.child;t!==null;)t.tag===30?ul(t.child,!1):(t.subtreeFlags&33554432)!==0&&zd(t),t=t.sibling}function Ur(t,e,l,a,n,i,u){for(var r=!1;e!==null;){if(e.tag===5){var f=e.stateNode;if(i!==null&&we<i.length){var b=i[we],j=hs(f);(b.view||j.view)&&(r=!0);var R;if(R=(t.flags&4)===0)if(j.clip)R=!0;else{R=b.rect;var p=j.rect;R=R.y!==p.y||R.x!==p.x||R.height!==p.height||R.width!==p.width}R&&(t.flags|=4),j.abs?j=!b.abs:(b=b.rect,j=j.rect,j=b.height!==j.height||b.width!==j.width),j&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&N0(f,we===0?l:l+"_"+we,n),r&&(t.flags&4)!==0||(il===null&&(il=[]),il.push(f,we===0?a:a+"_"+we,e.memoizedProps)),we++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u?t.flags|=e.flags&32:Ur(t,e.child,l,a,n,i,u)&&(r=!0));e=e.sibling}return r}function Md(t,e){for(t=t.child;t!==null;){if(t.tag===30){var l=t.memoizedProps,a=t.stateNode,n=gl(l,a),i=pl(l.default,l.update),u;u=t.memoizedState,t.memoizedState=null,a=t;var r=t.child;we=0,n=Ur(a,r,n,n,i,u,!1),(t.flags&4)!==0&&n&&sn(t,l.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Md(t);t=t.sibling}}var ie=!1,At=!1,cl=!1,Hr=!1,Od=typeof WeakSet=="function"?WeakSet:Set,ue=null,rl=!1,ti=!1,wu=!1,Br=!1;function av(t,e,l){if(t=t.containerInfo,rs=bn,t=Co(t),Tc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var r=0,f=-1,b=-1,j=0,R=0,p=t,T=null;e:for(;;){for(var k;p!==a||i!==0&&p.nodeType!==3||(f=r+i),p!==u||n!==0&&p.nodeType!==3||(b=r+n),p.nodeType===3&&(r+=p.nodeValue.length),(k=p.firstChild)!==null;)T=p,p=k;for(;;){if(p===t)break e;if(T===a&&++j===i&&(f=r),T===u&&++R===n&&(b=r),(k=p.nextSibling)!==null)break;p=T,T=p.parentNode}p=k}a=f===-1||b===-1?null:{start:f,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(ss={focusedElem:t,selectionRange:a},bn=!1,l=(l&335544064)===l,ue=e,e=l?9270:1024;ue!==null;){if(t=ue,l&&(a=t.deletions,a!==null))for(i=0;i<a.length;i++)l&&Rr(a[i]);if(t.alternate===null&&(t.flags&2)!==0)l&&Td(t),Tu(l);else{if(t.tag===22){if(a=t.alternate,t.memoizedState!==null){a!==null&&a.memoizedState===null&&l&&Rr(a),Tu(l);continue}else if(a!==null&&a.memoizedState!==null){l&&Td(t),Tu(l);continue}}a=t.child,(t.subtreeFlags&e)!==0&&a!==null?(a.return=t,ue=a):(l&&jd(t),Tu(l))}}Re=null}function Tu(t){for(;ue!==null;){var e=ue,l=t,a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&a!==null){l=void 0,n=a.memoizedProps,a=a.memoizedState;var i=e.stateNode;try{var u=wa(e.type,n);l=i.getSnapshotBeforeUpdate(u,a),i.__reactInternalSnapshotBeforeUpdate=l}catch(r){Rt(e,e.return,r)}}break;case 3:if((n&1024)!==0){if(a=e.stateNode.containerInfo,l=a.nodeType,l===9)gs(a);else if(l===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":gs(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:l&&a!==null&&(l=gl(a.memoizedProps,a.stateNode),n=e.memoizedProps,n=pl(n.default,n.update),n!=="none"&&tn(a,l,n,a.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(s(163))}if(a=e.sibling,a!==null){a.return=e.return,ue=a;break}ue=e.return}}function Ad(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:sl(t,l),a&4&&In(5,l);break;case 1:if(sl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){Rt(l,l.return,u)}else{var n=wa(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){Rt(l,l.return,u)}}a&64&&yd(l),a&512&&nl(l,l.return);break;case 3:if(sl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{cf(t,e)}catch(u){Rt(l,l.return,u)}}break;case 27:e===null&&a&4&&wd(l);case 26:case 5:sl(t,l),e===null&&a&4&&zr(l),a&512&&nl(l,l.return);break;case 12:sl(t,l);break;case 31:sl(t,l),a&4&&Dd(t,l);break;case 13:sl(t,l),a&4&&Ud(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=vv.bind(null,l),Fv(t,l))));break;case 22:if(a=l.memoizedState!==null||ie,!a){var i=e!==null&&e.memoizedState!==null||At;e=ie,n=At,ie=a,(At=i)&&!n?(a=2,(l.subtreeFlags&8772)!==0&&(a|=1),$e(t,l,a)):sl(t,l),ie=e,At=n}break;case 30:sl(t,l),a&512&&nl(l,l.return);break;case 7:a&512&&nl(l,l.return);default:sl(t,l)}}function qr(t,e){for(t=t.child;t!==null;)_d(t,e),t=t.sibling}function _d(t,e){switch(t.tag){case 5:case 26:try{var l=t.stateNode;if(e){var a=l.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var n=t.stateNode,i=t.memoizedProps.style,u=i!=null&&i.hasOwnProperty("display")?i.display:null;n.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(f){Rt(t,t.return,f)}Yr(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,jt=!0}catch(f){Rt(t,t.return,f)}break;case 18:try{var r=t.stateNode;e?T0(r,!0):T0(t.stateNode,!1)}catch(f){Rt(t,t.return,f)}break;case 22:case 23:t.memoizedState===null&&qr(t,e);break;default:qr(t,e)}}function Yr(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var l=t,a=e;switch(l.tag){case 4:_d(l,a);break t;case 22:l.memoizedState===null&&Yr(l,a);break t;default:Yr(l,a)}}t=t.sibling}}function Cd(t){var e=t.alternate;e!==null&&(t.alternate=null,Cd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Mi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Vt=null,Te=!1;function We(t,e,l){for(l=l.child;l!==null;)Rd(t,e,l),l=l.sibling}function Rd(t,e,l){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Tn,l)}catch{}switch(l.tag){case 26:At||fe(l,e),We(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&!At&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:At||fe(l,e),Pn(l);var a=Vt,n=Te;Fl(l.type)&&(Vt=l.stateNode,Te=!1),We(t,e,l),B0(l.stateNode,l.type,l.memoizedProps),Vt=a,Te=n;break;case 5:At||fe(l,e),Pn(l);case 6:if(l.tag===6&&Pn(l),a=Vt,n=Te,Vt=null,We(t,e,l),Vt=a,Te=n,Vt!==null)if(Te)try{(Vt.nodeType===9?Vt.body:Vt.nodeName==="HTML"?Vt.ownerDocument.body:Vt).removeChild(l.stateNode),jt=!0}catch(i){Rt(l,e,i)}else try{Vt.removeChild(l.stateNode),jt=!0}catch(i){Rt(l,e,i)}break;case 18:Vt!==null&&(Te?(t=Vt,w0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),xn(t)):w0(Vt,l.stateNode));break;case 4:a=Vt,n=Te,Vt=l.stateNode.containerInfo,Te=!0,We(t,e,l),Vt=a,Te=n;break;case 0:case 11:case 14:case 15:Vl(2,l,e),At||Vl(4,l,e),We(t,e,l);break;case 1:At||(fe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&bd(l,e,a)),We(t,e,l);break;case 21:We(t,e,l);break;case 22:At=(a=At)||l.memoizedState!==null,We(t,e,l),At=a;break;case 30:fe(l,e),We(t,e,l);break;case 7:At||fe(l,e),We(t,e,l);break;default:We(t,e,l)}}function Dd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xn(t)}catch(l){Rt(e,e.return,l)}}}function Ud(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xn(t)}catch(l){Rt(e,e.return,l)}}function nv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Od),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Od),e;default:throw Error(s(435,t.tag))}}function Nu(t,e){var l=nv(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=gv.bind(null,t,a);a.then(n,n)}})}function ye(t,e,l){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,r=e,f=r;t:for(;f!==null;){switch(f.tag){case 27:if(Fl(f.type)){Vt=f.stateNode,Te=!1;break t}break;case 5:Vt=f.stateNode,Te=!1;break t;case 3:case 4:Vt=f.stateNode.containerInfo,Te=!0;break t}f=f.return}if(Vt===null)throw Error(s(160));Rd(u,r,i),Vt=null,Te=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Hd(e,t,l),e=e.sibling}var Fe=null;function Hd(t,e,l){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var u=a[i];u.ref.impl=u.nextImpl}ye(e,t,l),be(t),n&4&&(Vl(3,t,t.return),In(3,t),Vl(5,t,t.return));break;case 1:ye(e,t,l),be(t),n&512&&(At||a===null||fe(a,a.return)),n&64&&ie&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:if(i=Fe,ye(e,t,l),be(t),n&512&&(At||a===null||fe(a,a.return)),n&4)if(n=a!==null?a.memoizedState:null,l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null)if(ie)t.stateNode=b0(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,l=t.memoizedProps,n=i.ownerDocument||i;e:switch(e){case"title":a=n.getElementsByTagName("title")[0],(!a||a[jn]||a[ce]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(e),n.head.insertBefore(a,n.querySelector("head > title"))),de(a,e,l),a[ce]=t,ae(a),e=a;break t;case"link":if(i=V0("link","href",n).get(e+(l.href||""))){for(u=0;u<i.length;u++)if(a=i[u],a.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&a.getAttribute("rel")===(l.rel==null?null:l.rel)&&a.getAttribute("title")===(l.title==null?null:l.title)&&a.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(u,1);break e}}a=n.createElement(e),de(a,e,l),n.head.appendChild(a);break;case"meta":if(i=V0("meta","content",n).get(e+(l.content||""))){for(u=0;u<i.length;u++)if(a=i[u],a.getAttribute("content")===(l.content==null?null:""+l.content)&&a.getAttribute("name")===(l.name==null?null:l.name)&&a.getAttribute("property")===(l.property==null?null:l.property)&&a.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&a.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(u,1);break e}}a=n.createElement(e),de(a,e,l),n.head.appendChild(a);break;default:throw Error(s(468,e))}a[ce]=t,ae(a),e=a}t.stateNode=e}else ie||Ts(i,t.type,t.stateNode);else t.stateNode=L0(i,l,t.memoizedProps);else n!==l?(n===null?(e=a.stateNode,e===null||At||e.parentNode.removeChild(e)):n.count--,l===null?ie||Ts(i,t.type,t.stateNode):L0(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Mr(t,t.memoizedProps,a.memoizedProps);break;case 27:ye(e,t,l),be(t),n&512&&(At||a===null||fe(a,a.return)),a!==null&&n&4&&Mr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(i=cl,cl=!1,ye(e,t,l),cl=i,be(t),n&512&&(At||a===null||fe(a,a.return)),t.flags&32){e=t.stateNode;try{Ha(e,""),jt=!0}catch(j){Rt(t,t.return,j)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,Mr(t,e,a!==null?a.memoizedProps:e)),n&1024&&(Hr=!0);break;case 6:if(ye(e,t,l),be(t),n&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e,jt=!0}catch(j){Rt(t,t.return,j)}}break;case 3:if(jt=!1,Yu=null,i=Fe,Fe=si(e.containerInfo),ye(e,t,l),Fe=i,be(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(e.containerInfo)}catch(j){Rt(t,t.return,j)}Hr&&(Hr=!1,Bd(t)),jt=!1;break;case 4:n=cl,cl=ie,a=eo(),i=Fe,Fe=si(t.stateNode.containerInfo),ye(e,t,l),be(t),Fe=i,jt&&ti&&(wu=!0),jt=a,cl=n;break;case 12:ye(e,t,l),be(t);break;case 31:ye(e,t,l),be(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Nu(t,e)));break;case 13:ye(e,t,l),be(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zu=ze()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Nu(t,e)));break;case 22:i=t.memoizedState!==null,u=a!==null&&a.memoizedState!==null;var r=ie,f=At,b=cl;ie=r||i,cl=b||i,At=f||u,ye(e,t,l),At=f,cl=b,ie=r,be(t),n&8192&&(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,!i||a===null||u||ie||At||(e=u||At,l=ie,a=At,ie=i||ie,At=e,Xl(t,2),ie=l,At=a),!i&&cl||qr(t,i)),n&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,Nu(t,l))));break;case 19:ye(e,t,l),be(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Nu(t,e)));break;case 30:n&512&&(At||a===null||fe(a,a.return)),n=eo(),i=ti,u=(l&335544064)===l,r=t.memoizedProps,ti=u&&pl(r.default,r.update)!=="none",ye(e,t,l),be(t),u&&a!==null&&jt&&(t.flags|=4),ti=i,jt=n;break;case 21:break;case 7:n&512&&(At||a===null||fe(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=t);default:ye(e,t,l),be(t)}}function be(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Sd(a)){l=a;break}a=a.return}a=null;for(var n=t.return;n!==null;){if(jr(n)){var i=n.stateNode;a===null?a=[i]:a.push(i)}if(Er(n))break;n=n.return}var u=a;if(l==null)throw Error(s(160));switch(l.tag){case 27:var r=l.stateNode,f=Or(t);yu(t,f,r,u);break;case 5:var b=l.stateNode;l.flags&32&&(Ha(b,""),l.flags&=-33);var j=Or(t);yu(t,j,b,u);break;case 3:case 4:var R=l.stateNode.containerInfo,p=Or(t);Ar(t,p,R,u);break;default:throw Error(s(161))}}catch(T){Rt(t,t.return,T)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Bd(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,bn=!0,e.reset(),bn=!1),t=t.sibling}}function en(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)qd(e,t),e=e.sibling;else Md(e)}function qd(t,e){var l=t.alternate;if(l===null)_r(t,!1);else switch(t.tag){case 3:if(Br=rl=!1,Nd(),en(e,t),!rl&&!wu){if(t=il,t!==null)for(var a=0;a<t.length;a+=3){l=t[a];var n=t[a+1];E0(l,t[a+2]),l=l.ownerDocument.documentElement,l!==null&&l.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Br=!0}il=null;break;case 5:en(e,t);break;case 4:a=rl,rl=!1,en(e,t),rl&&(wu=!0),rl=a;break;case 22:t.memoizedState===null&&(l.memoizedState!==null?_r(t,!1):en(e,t));break;case 30:a=rl,n=Nd(),rl=!1,en(e,t),rl&&(t.flags|=4);var i=t.memoizedProps,u=t.stateNode;e=gl(i,u),u=gl(l.memoizedProps,u);var r=pl(i.default,i.update);r==="none"?e=!1:(i=l.memoizedState,l.memoizedState=null,l=t.child,we=0,e=Ur(t,l,e,u,r,i,!0),we!==(i===null?0:i.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(sn(t,t.memoizedProps.onUpdate),il=n):n!==null&&(n.push.apply(n,il),il=n),rl=(t.flags&32)!==0?!0:a;break;default:en(e,t)}}function sl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Ad(t,e.alternate,e),e=e.sibling}function Xl(t,e){for(t=t.child;t!==null;){var l=t,a=e;switch(l.tag){case 0:case 11:case 14:case 15:Vl(4,l,l.return),Xl(l,a);break;case 1:fe(l,l.return);var n=l.stateNode;typeof n.componentWillUnmount=="function"&&bd(l,l.return,n),Xl(l,a);break;case 27:(a&2)!==0&&B0(l.stateNode,l.type,l.memoizedProps);case 5:fe(l,l.return),l.tag!==5&&l.tag!==27||Pn(l),Xl(l,a);break;case 6:Pn(l);break;case 26:fe(l,l.return),n=l.stateNode,l.memoizedState!==null||n===null||At||n.parentNode.removeChild(n),Xl(l,a);break;case 22:l.memoizedState===null&&Xl(l,a);break;case 30:fe(l,l.return),Xl(l,a);break;case 7:fe(l,l.return);default:Xl(l,a)}t=t.sibling}}function $e(t,e,l){for(l=(e.subtreeFlags&8772)!==0?l:l&-2,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,u=i.flags,r=(l&1)!==0;switch(i.tag){case 0:case 11:case 15:$e(n,i,l),In(4,i);break;case 1:if($e(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){Rt(a,a.return,j)}if(a=i,n=a.updateQueue,n!==null){var f=a.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)uf(b[n],f)}catch(j){Rt(a,a.return,j)}}r&&u&64&&yd(i),nl(i,i.return);break;case 27:(l&2)!==0&&wd(i);case 5:i.tag!==5&&i.tag!==27||xd(i),$e(n,i,l),r&&a===null&&u&4&&zr(i),nl(i,i.return);break;case 6:xd(i);break;case 26:f=i.stateNode,i.memoizedState!==null||f===null||ie||Ts(si(f.ownerDocument),i.type,f),$e(n,i,l),r&&a===null&&u&4&&zr(i),nl(i,i.return);break;case 12:$e(n,i,l);break;case 31:$e(n,i,l),r&&u&4&&Dd(n,i);break;case 13:$e(n,i,l),r&&u&4&&Ud(n,i);break;case 22:i.memoizedState===null&&$e(n,i,l),nl(i,i.return);break;case 30:$e(n,i,l),nl(i,i.return);break;case 7:nl(i,i.return);default:$e(n,i,l)}e=e.sibling}}function Gr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Yn(l))}function kr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Yn(t))}function Xe(t,e,l,a){var n=(l&335544064)===l;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)Yd(t,e,l,a),e=e.sibling;else n&&zd(e)}function Yd(t,e,l,a){var n=(l&335544064)===l;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Su(e);var i=e.flags;switch(e.tag){case 0:case 11:case 15:Xe(t,e,l,a),i&2048&&In(9,e);break;case 1:Xe(t,e,l,a);break;case 3:Xe(t,e,l,a),n&&Br&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),i&2048&&(i=null,e.alternate!==null&&(i=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==i&&(e.refCount++,i!=null&&Yn(i)));break;case 12:if(i&2048){Xe(t,e,l,a),i=e.stateNode;try{var u=e.memoizedProps,r=u.id,f=u.onPostCommit;typeof f=="function"&&f(r,e.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(b){Rt(e,e.return,b)}}else Xe(t,e,l,a);break;case 31:Xe(t,e,l,a);break;case 13:Xe(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,r=e.alternate,e.memoizedState!==null?(n&&r!==null&&r.memoizedState===null&&Su(r),u._visibility&2?Xe(t,e,l,a):ei(t,e)):(n&&r!==null&&r.memoizedState!==null&&Su(e),u._visibility&2?Xe(t,e,l,a):(u._visibility|=2,ln(t,e,l,a,(e.subtreeFlags&10256)!==0||!1))),i&2048&&Gr(r,e);break;case 24:Xe(t,e,l,a),i&2048&&kr(e.alternate,e);break;case 30:n&&(i=e.alternate,i!==null&&(ul(i.child,!0),ul(e.child,!0))),Xe(t,e,l,a);break;default:Xe(t,e,l,a)}}function ln(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,u=e,r=l,f=a,b=u.flags;switch(u.tag){case 0:case 11:case 15:ln(i,u,r,f,n),In(8,u);break;case 23:break;case 22:var j=u.stateNode;u.memoizedState!==null?j._visibility&2?ln(i,u,r,f,n):ei(i,u):(j._visibility|=2,ln(i,u,r,f,n)),n&&b&2048&&Gr(u.alternate,u);break;case 24:ln(i,u,r,f,n),n&&b&2048&&kr(u.alternate,u);break;default:ln(i,u,r,f,n)}e=e.sibling}}function ei(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:ei(l,a),n&2048&&Gr(a.alternate,a);break;case 24:ei(l,a),n&2048&&kr(a.alternate,a);break;default:ei(l,a)}e=e.sibling}}var Ta=8192;function Na(t,e,l){if(t.subtreeFlags&Ta)for(t=t.child;t!==null;)Gd(t,e,l),t=t.sibling}function Gd(t,e,l){switch(t.tag){case 26:Na(t,e,l),t.flags&Ta&&(t.memoizedState!==null?og(l,Fe,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&K0(l,t)));break;case 5:Na(t,e,l),t.flags&Ta&&(t=t.stateNode,(e&335544128)===e&&K0(l,t));break;case 3:case 4:var a=Fe;Fe=si(t.stateNode.containerInfo),Na(t,e,l),Fe=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ta,Ta=16777216,Na(t,e,l),Ta=a):Na(t,e,l));break;case 30:if((t.flags&Ta)!==0&&(a=t.memoizedProps.name,a!=null&&a!=="auto")){var n=t.stateNode;n.paired=null,Re===null&&(Re=new Map),Re.set(a,n)}Na(t,e,l);break;default:Na(t,e,l)}}function kd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function li(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,Vd(a,t)}kd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ld(t),t=t.sibling}function Ld(t){switch(t.tag){case 0:case 11:case 15:li(t),t.flags&2048&&Vl(9,t,t.return);break;case 3:li(t);break;case 12:li(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Eu(t)):li(t);break;default:li(t)}}function Eu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ue=a,Vd(a,t)}kd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Vl(8,e,e.return),Eu(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Eu(e));break;default:Eu(e)}t=t.sibling}}function Vd(t,e){for(;ue!==null;){var l=ue;switch(l.tag){case 0:case 11:case 15:Vl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Yn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ue=a;else t:for(l=t;ue!==null;){a=ue;var n=a.sibling,i=a.return;if(Cd(a),a===l){ue=null;break t}if(n!==null){n.return=i,ue=n;break t}ue=i}}}var iv={getCacheForType:function(t){var e=re(Ft),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return re(Ft).controller.signal}},uv=typeof WeakMap=="function"?WeakMap:Map,Ot=0,qt=null,bt=null,St=0,Ct=0,De=null,Ql=!1,an=!1,Lr=!1,jl=0,Jt=0,Zl=0,Ea=0,ju=0,Ue=0,nn=0,ai=null,Ne=null,Vr=!1,zu=0,Xd=0,Mu=1/0,Ou=null,Kl=null,Qt=0,Ie=null,ja=null,ol=0,Xr=0,Qr=null,Qd=null,un=null,cn=null,rn=null,ni=0,Au=null;function He(){return(Ot&2)!==0&&St!==0?St&-St:q.T!==null?es():Zs()}function Zd(){if(Ue===0)if((St&536870912)===0||pt){var t=Ni;Ni<<=1,(Ni&3932160)===0&&(Ni=262144),Ue=t}else Ue=536870912;return t=se.current,t!==null&&(t.flags|=32),Ue}function sn(t,e){if(e!=null){var l=t.stateNode,a=l.ref;a===null&&(a=l.ref=j0(gl(t.memoizedProps,l))),cn===null&&(cn=[]),cn.push(e.bind(null,a))}}function Ee(t,e,l){(t===qt&&(Ct===2||Ct===9)||t.cancelPendingCommit!==null)&&(on(t,0),Jl(t,St,Ue,!1)),En(t,l),((Ot&2)===0||t!==qt)&&(t===qt&&((Ot&2)===0&&(Ea|=l),Jt===4&&Jl(t,St,Ue,!1)),fl(t))}function Kd(t,e,l){if((Ot&6)!==0)throw Error(s(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Nn(t,e),n=a?sv(t,e):Kr(t,e,!0),i=a;do{if(n===0){an&&!a&&Jl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!cv(l)){n=Kr(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var r=t;n=ai;var f=r.current.memoizedState.isDehydrated;if(f&&(on(r,u).flags|=256),u=Kr(r,u,!1),u!==2&&u!==6){if(Lr&&!f){r.errorRecoveryDisabledLanes|=i,Ea|=i,n=4;break t}i=Ne,Ne=n,i!==null&&(Ne===null?Ne=i:Ne.push.apply(Ne,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){on(t,0),Jl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Jl(a,e,Ue,!Ql);break t;case 2:Ne=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(n=zu+300-ze(),10<n)){if(Jl(a,e,Ue,!Ql),ji(a,0,!0)!==0)break t;ol=e,a.timeoutHandle=ds(Jd.bind(null,a,l,Ne,Ou,Vr,e,Ue,Ea,nn,Ql,i,"Throttled",-0,0),n);break t}Jd(a,l,Ne,Ou,Vr,e,Ue,Ea,nn,Ql,i,null,-0,0)}}break}while(!0);fl(t)}function Jd(t,e,l,a,n,i,u,r,f,b,j,R,p,T){t.timeoutHandle=-1;var k=e.subtreeFlags,F=(i&335544064)===i;if(R=null,(F||k&8192||(k&16785408)===16785408)&&(R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:el},Re=null,Gd(e,i,R),F&&(k=R,F=t.containerInfo,F=(F.nodeType===9?F:F.ownerDocument).__reactViewTransition,F!=null&&(k.count++,k.waitingForViewTransition=!0,k=di.bind(k),F.finished.then(k,k))),k=(i&62914560)===i?zu-ze():(i&4194048)===i?Xd-ze():0,k=fg(R,k),k!==null)){ol=i,t.cancelPendingCommit=k(l0.bind(null,t,e,i,l,a,n,u,r,f,b,j,R,null,p,T)),Jl(t,i,u,!b);return}l0(t,e,i,l,a,n,u,r,f,b,j,R)}function cv(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!_e(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jl(t,e,l,a){e=ks(t,e),e&=~ju,e&=~Ea,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-Oe(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Vs(t,l,e)}function _u(){return(Ot&6)===0?(ii(0),!1):!0}function Zr(){if(bt!==null){if(Ct===0)var t=bt.return;else t=bt,xl=ha=null,tr(t),Wa=null,Ln=0,t=bt;for(;t!==null;)pd(t.alternate,t),t=t.return;bt=null}}function on(t,e){var l=t.timeoutHandle;return l!==-1&&(t.timeoutHandle=-1,_v(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),ol=0,Zr(),qt=t,bt=l=yl(t.current,null),St=e,Ct=0,De=null,Ql=!1,an=Nn(t,e),Lr=!1,nn=Ue=ju=Ea=Zl=Jt=0,Ne=ai=null,Vr=!1,jl=ks(t,e),Yi(),l}function Wd(t,e){ft=null,q.H=ou,e===Ja||e===Fi?(e=ef(),Ct=3):e===kc?(e=ef(),Ct=4):Ct=e===vr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,De=e,bt===null&&(Jt=1,fu(t,Ge(e,t.current)))}function Fd(){var t=se.current;return t===null?!0:(St&4194048)===St?ve===null:(St&62914560)===St||(St&536870912)!==0?t===ve:!1}function $d(){var t=q.H;return q.H=ou,t===null?ou:t}function Id(){var t=q.A;return q.A=iv,t}function Cu(){Jt=4,Ql||(St&4194048)!==St&&se.current!==null||(an=!0),(Zl&134217727)===0&&(Ea&134217727)===0||qt===null||Jl(qt,St,Ue,!1)}function Kr(t,e,l){var a=Ot;Ot|=2;var n=$d(),i=Id();(qt!==t||St!==e)&&(Ou=null,on(t,e)),e=!1;var u=Jt;t:do try{if(Ct!==0&&bt!==null){var r=bt,f=De;switch(Ct){case 8:Zr(),u=6;break t;case 3:case 2:case 9:case 6:se.current===null&&(e=!0);var b=Ct;if(Ct=0,De=null,fn(t,r,f,b),l&&an){u=0;break t}break;default:b=Ct,Ct=0,De=null,fn(t,r,f,b)}}rv(),u=Jt;break}catch(j){Wd(t,j)}while(!0);return e&&t.shellSuspendCounter++,xl=ha=null,Ot=a,q.H=n,q.A=i,bt===null&&(qt=null,St=0,Yi()),u}function rv(){for(;bt!==null;)Pd(bt)}function sv(t,e){var l=Ot;Ot|=2;var a=$d(),n=Id();qt!==t||St!==e?(Ou=null,Mu=ze()+500,on(t,e)):an=Nn(t,e);t:do try{if(Ct!==0&&bt!==null){e=bt;var i=De;e:switch(Ct){case 1:Ct=0,De=null,fn(t,e,i,1);break;case 2:case 9:if(Po(i)){Ct=0,De=null,t0(e);break}e=function(){Ct!==2&&Ct!==9||qt!==t||(Ct=7),fl(t)},i.then(e,e);break t;case 3:Ct=7;break t;case 4:Ct=5;break t;case 7:Po(i)?(Ct=0,De=null,t0(e)):(Ct=0,De=null,fn(t,e,i,7));break;case 5:var u=null;switch(bt.tag){case 26:u=bt.memoizedState;case 5:case 27:var r=bt;if(u?Q0(u):r.stateNode.complete){Ct=0,De=null;var f=r.sibling;if(f!==null)bt=f;else{var b=r.return;b!==null?(bt=b,Ru(b)):bt=null}break e}}Ct=0,De=null,fn(t,e,i,5);break;case 6:Ct=0,De=null,fn(t,e,i,6);break;case 8:Zr(),Jt=6;break t;default:throw Error(s(462))}}ov();break}catch(j){Wd(t,j)}while(!0);return xl=ha=null,q.H=a,q.A=n,Ot=l,bt!==null?0:(qt=null,St=0,Yi(),Jt)}function ov(){for(;bt!==null&&!zh();)Pd(bt)}function Pd(t){var e=vd(t.alternate,t,jl);t.memoizedProps=t.pendingProps,e===null?Ru(t):bt=e}function t0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=rd(l,e,e.pendingProps,e.type,void 0,St);break;case 11:e=rd(l,e,e.pendingProps,e.type.render,e.ref,St);break;case 5:tr(e);var a=e;a===ne&&(pt?(Qi(a),a.tag===5&&a.stateNode!=null&&(Gt=a.stateNode)):(Qi(a),pt=!0));default:pd(l,e),e=bt=Lo(e,jl),e=vd(l,e,jl)}t.memoizedProps=t.pendingProps,e===null?Ru(t):bt=e}function fn(t,e,l,a){xl=ha=null,tr(e),Wa=null,Ln=0;var n=e.return;try{if($m(t,n,e,l,St)){Jt=1,fu(t,Ge(l,t.current)),bt=null;return}}catch(i){if(n!==null)throw bt=n,i;Jt=1,fu(t,Ge(l,t.current)),bt=null;return}e.flags&32768?(pt||a===1?t=!0:an||(St&536870912)!==0?t=!1:(Ql=t=!0,(a===2||a===9||a===3||a===6)&&(a=se.current,a!==null&&a.tag===13&&(a.flags|=16384))),e0(e,t)):Ru(e)}function Ru(t){var e=t;do{if((e.flags&32768)!==0){e0(e,Ql);return}t=e.return;var l=ev(e.alternate,e,jl);if(l!==null){bt=l;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Jt===0&&(Jt=5)}function e0(t,e){do{var l=lv(t.alternate,t);if(l!==null){l.flags&=32767,bt=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){bt=t;return}bt=t=l}while(t!==null);Jt=6,bt=null}function l0(t,e,l,a,n,i,u,r,f,b,j,R){t.cancelPendingCommit=null;do Du();while(Qt!==0);if((Ot&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===qt&&(bt=qt=null,St=0),ja=e,Ie=t,ol=l,Qr=n,Qd=a,fv(t,e,l,u,r,f,R)}}function fv(t,e,l,a,n,i,u){var r=e.lanes|e.childLanes;if(Xr=r,r|=Mc,Bh(t,l,r,a,n,i),cn=null,(l&335544064)===l?(rn=Ym(t),a=10262):(rn=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(t.callbackNode=null,t.callbackPriority=0,pv(wi,function(){return $r(),null})):(t.callbackNode=null,t.callbackPriority=0),bu=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=q.T,q.T=null,n=X.p,X.p=2,i=Ot,Ot|=4;try{av(t,e,l)}finally{Ot=i,X.p=n,q.T=a}}Qt=1,bu?un=Bv(u,t.containerInfo,rn,Jr,Wr,hv,Fr,$r,dv):(Jr(),Wr(),Fr())}function dv(t){if(Qt!==0){var e=Ie.onRecoverableError;e(t,{componentStack:null})}}function hv(){Qt===3&&(Qt=0,qd(ja,Ie),Qt=4)}function Jr(){if(Qt===1){Qt=0;var t=Ie,e=ja,l=ol,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var n=X.p;X.p=2;var i=Ot;Ot|=4;try{ti=wu=!1,Hd(e,t,l),l=ss;var u=Co(t.containerInfo),r=l.focusedElem,f=l.selectionRange;if(u!==r&&r&&r.ownerDocument&&_o(r.ownerDocument.documentElement,r)){if(f!==null&&Tc(r)){var b=f.start,j=f.end;if(j===void 0&&(j=b),"selectionStart"in r)r.selectionStart=b,r.selectionEnd=Math.min(j,r.value.length);else{var R=r.ownerDocument||document,p=R&&R.defaultView||window;if(p.getSelection){var T=p.getSelection(),k=r.textContent.length,F=Math.min(f.start,k),dt=f.end===void 0?F:Math.min(f.end,k);!T.extend&&F>dt&&(u=dt,dt=F,F=u);var y=Ao(r,F),m=Ao(r,dt);if(y&&m&&(T.rangeCount!==1||T.anchorNode!==y.node||T.anchorOffset!==y.offset||T.focusNode!==m.node||T.focusOffset!==m.offset)){var w=R.createRange();w.setStart(y.node,y.offset),T.removeAllRanges(),F>dt?(T.addRange(w),T.extend(m.node,m.offset)):(w.setEnd(m.node,m.offset),T.addRange(w))}}}}for(R=[],T=r;T=T.parentNode;)T.nodeType===1&&R.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<R.length;r++){var C=R[r];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}bn=!!rs,ss=rs=null}finally{Ot=i,X.p=n,q.T=a}}t.current=e,Qt=2}}function Wr(){if(Qt===2){Qt=0;var t=Ie,e=ja,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=q.T,q.T=null;var a=X.p;X.p=2;var n=Ot;Ot|=4;try{Ad(t,e.alternate,e)}finally{Ot=n,X.p=a,q.T=l}}Qt=3}}function Fr(){if(Qt===4||Qt===3){Qt=0;var t=un;un=null,Mh();var e=Ie,l=ja,a=ol,n=Qd,i=(a&335544064)===a?10262:10256;if((l.subtreeFlags&i)!==0||(l.flags&i)!==0?Qt=5:(Qt=0,ja=Ie=null,a0(e,e.pendingLanes)),i=e.pendingLanes,i===0&&(Kl=null),ic(a),l=l.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Tn,l,void 0,(l.current.flags&128)===128)}catch{}if(n!==null){l=q.T,i=X.p,X.p=2,q.T=null;try{for(var u=e.onRecoverableError,r=0;r<n.length;r++){var f=n[r];u(f.value,{componentStack:f.stack})}}finally{q.T=l,X.p=i}}if(n=cn,u=rn,rn=null,n!==null&&(cn=null,u===null&&(u=[]),t!==null))for(f=0;f<n.length;f++)l=(0,n[f])(u),l!==void 0&&t.finished.finally(l);(ol&3)!==0&&Du(),fl(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Au?ni++:(ni=0,Au=e):(ni=0,Au=null),ii(0)}}function a0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Yn(e)))}function Du(){return un!==null&&(un.skipTransition(),un=null),Jr(),Wr(),Fr(),$r()}function $r(){if(Qt!==5)return!1;var t=Ie,e=Xr;Xr=0;var l=ic(ol),a=q.T,n=X.p;try{X.p=32>l?32:l,q.T=null,l=Qr,Qr=null;var i=Ie,u=ol;if(Qt=0,ja=Ie=null,ol=0,(Ot&6)!==0)throw Error(s(331));var r=Ot;if(Ot|=4,Ld(i.current),Yd(i,i.current,u,l),Ot=r,ii(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Tn,i)}catch{}return!0}finally{X.p=n,q.T=a,a0(t,e)}}function n0(t,e,l){e=Ge(l,e),e=mr(t.stateNode,e,2),t=Yl(t,e,2),t!==null&&(En(t,2),fl(t))}function Rt(t,e,l){if(t.tag===3)n0(t,t,l);else for(;e!==null;){if(e.tag===3){n0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kl===null||!Kl.has(a))){t=Ge(l,t),l=td(2),a=Yl(e,l,2),a!==null&&(ed(l,a,e,t),En(a,2),fl(a));break}}e=e.return}}function Ir(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new uv;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Lr=!0,n.add(l),t=mv.bind(null,t,e,l),e.then(t,t))}function mv(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,qt===t&&(St&l)===l&&((Jt===4||Jt===3&&(St&62914560)===St&&300>ze()-zu)&&(Ot&2)===0?on(t,0):ju|=l,nn===St&&(nn=0)),fl(t)}function i0(t,e){e===0&&(e=Ls()),t=oa(t,e),t!==null&&(En(t,e),fl(t))}function vv(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),i0(t,l)}function gv(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),i0(t,l)}function pv(t,e){return ec(t,e)}var dn=null,hn=null,Pr=!1,Uu=!1,ts=!1,Wl=0;function fl(t){t!==hn&&t.next===null&&(hn===null?dn=hn=t:hn=hn.next=t),Uu=!0,Pr||(Pr=!0,bv())}function ii(t,e){if(!ts&&Uu){ts=!0;do for(var l=!1,a=dn;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,r=a.pingedLanes;i=(1<<31-Oe(42|t)+1)-1,i&=n&~(u&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,s0(a,i))}else i=St,i=ji(a,a===qt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Nn(a,i)||(l=!0,s0(a,i));a=a.next}while(l);ts=!1}}function yv(){u0()}function u0(){Uu=Pr=!1;var t=0;Wl!==0&&Av()&&(t=Wl);for(var e=ze(),l=null,a=dn;a!==null;){var n=a.next,i=c0(a,e);i===0?(a.next=null,l===null?dn=n:l.next=n,n===null&&(hn=l)):(l=a,(t!==0||(i&3)!==0)&&(Uu=!0)),a=n}Qt!==0&&Qt!==5||ii(t),Wl!==0&&(Wl=0)}function c0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Oe(i),r=1<<u,f=n[u];f===-1?((r&l)===0||(r&a)!==0)&&(n[u]=Hh(r,e)):f<=e&&(t.expiredLanes|=r),i&=~r}if(e=qt,l=St,l=ji(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(Ct===2||Ct===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&lc(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Nn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&lc(a),ic(l)){case 2:case 8:l=Ys;break;case 32:l=wi;break;case 268435456:l=Gs;break;default:l=wi}return a=r0.bind(null,t),l=ec(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&lc(a),t.callbackPriority=2,t.callbackNode=null,2}function r0(t,e){if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Du()&&t.callbackNode!==l)return null;var a=St;return a=ji(t,t===qt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Kd(t,a,e),c0(t,ze()),t.callbackNode!=null&&t.callbackNode===l?r0.bind(null,t):null)}function s0(t,e){if(Du())return null;Kd(t,e,!0)}function bv(){Cv(function(){(Ot&6)!==0?ec(qs,yv):u0()})}function es(){if(Wl===0){var t=ga;t===0&&(t=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),Wl=t}return Wl}function o0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_i(t)}function xv(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=o0((n[xe]||null).action),u=a.submitter;u&&(e=(e=u[xe]||null)?o0(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var r=new Ui("action","action",null,a,n);t.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Wl!==0){var f=new FormData(n,u);sr(l,{pending:!0,data:f,method:n.method,action:i},null,f)}}else typeof i=="function"&&(r.preventDefault(),f=new FormData(n,u),sr(l,{pending:!0,data:f,method:n.method,action:i},i,f))},currentTarget:n}]})}}for(var ls=0;ls<zc.length;ls++){var as=zc[ls],Sv=as.toLowerCase(),wv=as[0].toUpperCase()+as.slice(1);Je(Sv,"on"+wv)}Je(Uo,"onAnimationEnd"),Je(Ho,"onAnimationIteration"),Je(Bo,"onAnimationStart"),Je("dblclick","onDoubleClick"),Je("focusin","onFocus"),Je("focusout","onBlur"),Je(_m,"onTransitionRun"),Je(Cm,"onTransitionStart"),Je(Rm,"onTransitionCancel"),Je(qo,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function f0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var u=a.length-1;0<=u;u--){var r=a[u],f=r.instance,b=r.currentTarget;if(r=r.listener,f!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=b;try{i(n)}catch(j){qi(j)}n.currentTarget=null,i=f}else for(u=0;u<a.length;u++){if(r=a[u],f=r.instance,b=r.currentTarget,r=r.listener,f!==i&&n.isPropagationStopped())break t;i=r,n.currentTarget=b;try{i(n)}catch(j){qi(j)}n.currentTarget=null,i=f}}}}function xt(t,e){var l=e[Js];l===void 0&&(l=e[Js]=new Set);var a=t+"__bubble";l.has(a)||(d0(e,t,2,!1),l.add(a))}function ns(t,e,l){var a=0;e&&(a|=4),d0(l,t,a,e)}var Hu="_reactListening"+Math.random().toString(36).slice(2);function is(t){if(!t[Hu]){t[Hu]=!0,$s.forEach(function(l){l!=="selectionchange"&&(Tv.has(l)||ns(l,!1,t),ns(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hu]||(e[Hu]=!0,ns("selectionchange",!1,e))}}function d0(t,e,l,a){switch(eh(e)){case 2:var n=vg;break;case 8:n=gg;break;default:n=Es}l=n.bind(null,e,l,t),n=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function us(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var r=a.stateNode.containerInfo;if(r===n)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;r!==null;){if(u=ua(r),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=i=u;continue t}r=r.parentNode}}a=a.return}oo(function(){var b=i,j=fc(l),R=[];t:{var p=Yo.get(t);if(p!==void 0){var T=Ui,k=t;switch(t){case"keypress":if(Ri(l)===0)break t;case"keydown":case"keyup":T=cm;break;case"focusin":k="focus",T=pc;break;case"focusout":k="blur",T=pc;break;case"beforeblur":case"afterblur":T=pc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=dm;break;case Uo:case Ho:case Bo:T=Ih;break;case qo:T=mm;break;case"scroll":case"scrollend":T=Kh;break;case"wheel":T=gm;break;case"copy":case"cut":case"paste":T=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=go;break;case"submit":T=om;break;case"toggle":case"beforetoggle":T=ym}var F=(e&4)!==0,dt=!F&&(t==="scroll"||t==="scrollend"),y=F?p!==null?p+"Capture":null:p;F=[];for(var m=b,w;m!==null;){var C=m;if(w=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||w===null||y===null||(C=Mn(m,y),C!=null&&F.push(ci(m,C,w))),dt)break;m=m.return}0<F.length&&(p=new T(p,k,null,l,j),R.push({event:p,listeners:F}))}}if((e&7)===0){t:{if(T=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",T&&l!==oc&&(k=l.relatedTarget||l.fromElement)&&(ua(k)||k[_a]))break t;(p||T)&&(k=j.window===j?j:(T=j.ownerDocument)?T.defaultView||T.parentWindow:window,p?(T=l.relatedTarget||l.toElement,p=b,T=T?ua(T):null,T!==null&&(dt=O(T),F=T.tag,T!==dt||F!==5&&F!==27&&F!==6)&&(T=null)):(p=null,T=b),p!==T&&(F=mo,C="onMouseLeave",y="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(F=go,C="onPointerLeave",y="onPointerEnter",m="pointer"),dt=p==null?k:zn(p),w=T==null?k:zn(T),k=new F(C,m+"leave",p,l,j),k.target=dt,k.relatedTarget=w,C=null,ua(j)===b&&(F=new F(y,m+"enter",T,l,j),F.target=w,F.relatedTarget=dt,C=F),dt=C,F=p&&T?vt(p,T,Nv):null,p!==null&&h0(R,k,p,F,!1),T!==null&&dt!==null&&h0(R,dt,T,F,!0)))}t:{if(p=b?zn(b):window,T=p.nodeName&&p.nodeName.toLowerCase(),T==="select"||T==="input"&&p.type==="file")var K=No;else if(wo(p))if(Eo)K=Mm;else{K=jm;var wt=Em}else T=p.nodeName,!T||T.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?b&&sc(b.elementType)&&(K=No):K=zm;if(K&&(K=K(t,b))){To(R,K,l,j);break t}wt&&wt(t,p,b)}switch(wt=b?zn(b):window,t){case"focusin":(wo(wt)||wt.contentEditable==="true")&&(Ga=wt,Nc=b,Hn=null);break;case"focusout":Hn=Nc=Ga=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,Ro(R,l,j);break;case"selectionchange":if(Am)break;case"keydown":case"keyup":Ro(R,l,j)}var P;if(bc)t:{switch(t){case"compositionstart":var ut="onCompositionStart";break t;case"compositionend":ut="onCompositionEnd";break t;case"compositionupdate":ut="onCompositionUpdate";break t}ut=void 0}else Ya?xo(t,l)&&(ut="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(po&&l.locale!=="ko"&&(Ya||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ya&&(P=fo()):(Al=j,mc="value"in Al?Al.value:Al.textContent,Ya=!0)),wt=Bu(b,ut),0<wt.length&&(ut=new vo(ut,t,null,l,j),R.push({event:ut,listeners:wt}),P?ut.data=P:(P=So(l),P!==null&&(ut.data=P)))),(P=xm?Sm(t,l):wm(t,l))&&(ut=Bu(b,"onBeforeInput"),0<ut.length&&(wt=new vo("onBeforeInput","beforeinput",null,l,j),R.push({event:wt,listeners:ut}),wt.data=P)),xv(R,t,b,l,j)}f0(R,e)})}function ci(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Bu(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Mn(t,l),n!=null&&a.unshift(ci(t,n,i)),n=Mn(t,e),n!=null&&a.push(ci(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Nv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function h0(t,e,l,a,n){for(var i=e._reactName,u=[];l!==null&&l!==a;){var r=l,f=r.alternate,b=r.stateNode;if(r=r.tag,f!==null&&f===a)break;r!==5&&r!==26&&r!==27||b===null||(f=b,n?(b=Mn(l,i),b!=null&&u.unshift(ci(l,b,f))):n||(b=Mn(l,i),b!=null&&u.push(ci(l,b,f)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var Ev=/\r\n?/g,jv=/\u0000|\uFFFD/g;function m0(t){return(typeof t=="string"?t:""+t).replace(Ev,`
`).replace(jv,"")}function v0(t,e){return e=m0(e),m0(t)===e}function Dt(t,e,l,a,n,i){switch(l){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||Ha(t,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&Ha(t,""+a);else return;break;case"className":Ai(t,"class",a);break;case"tabIndex":Ai(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(t,l,a);break;case"style":ro(t,a,i);return;case"data":if(e!=="object"){Ai(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=_i(a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&Dt(t,e,"name",n.name,n,null),Dt(t,e,"formEncType",n.formEncType,n,null),Dt(t,e,"formMethod",n.formMethod,n,null),Dt(t,e,"formTarget",n.formTarget,n,null)):(Dt(t,e,"encType",n.encType,n,null),Dt(t,e,"method",n.method,n,null),Dt(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=_i(a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=el);return;case"onScroll":a!=null&&xt("scroll",t);return;case"onScrollEnd":a!=null&&xt("scrollend",t);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));(i!=null?i.__html:void 0)!==l&&(t.innerHTML=l)}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=_i(a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Oi(t,"popover",a);break;case"xlinkActuate":ml(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ml(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ml(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ml(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ml(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ml(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ml(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ml(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ml(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Oi(t,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")l=Qh.get(l)||l,Oi(t,l,a);else return}jt=!0}function cs(t,e,l,a,n,i){switch(l){case"style":ro(t,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));(i!=null?i.__html:void 0)!==l&&(t.innerHTML=l)}}break;case"children":if(typeof a=="string")Ha(t,a);else if(typeof a=="number"||typeof a=="bigint")Ha(t,""+a);else return;break;case"onScroll":a!=null&&xt("scroll",t);return;case"onScrollEnd":a!=null&&xt("scrollend",t);return;case"onClick":a!=null&&(t.onclick=el);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Is.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),i=l.slice(2,n?l.length-7:void 0),e=t[xe]||null,e=e!=null?e[l]:null,typeof e=="function"&&t.removeEventListener(i,e,n),typeof a=="function")){typeof e!="function"&&e!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(i,a,n);break t}jt=!0,l in t?t[l]=a:a===!0?t.setAttribute(l,""):Oi(t,l,a)}return}jt=!0}function de(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Dt(t,e,i,u,l,null)}}n&&Dt(t,e,"srcSet",l.srcSet,l,null),a&&Dt(t,e,"src",l.src,l,null);return;case"input":xt("invalid",t);var r=i=u=n=null,f=null,b=null;for(a in l)if(l.hasOwnProperty(a)){var j=l[a];if(j!=null)switch(a){case"name":n=j;break;case"type":u=j;break;case"checked":f=j;break;case"defaultChecked":b=j;break;case"value":i=j;break;case"defaultValue":r=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,e));break;default:Dt(t,e,a,j,l,null)}}no(t,i,r,f,b,u,n,!1);return;case"select":xt("invalid",t),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(r=l[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":u=r;break;case"multiple":a=r;default:Dt(t,e,n,r,l,null)}e=i,l=u,t.multiple=!!a,e!=null?Ua(t,!!a,e,!1):l!=null&&Ua(t,!!a,l,!0);return;case"textarea":xt("invalid",t),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(r=l[u],r!=null))switch(u){case"value":a=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:Dt(t,e,u,r,l,null)}uo(t,a,n,i);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Dt(t,e,f,a,l,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(a=0;a<ui.length;a++)xt(ui[a],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(b in l)if(l.hasOwnProperty(b)&&(a=l[b],a!=null))switch(b){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Dt(t,e,b,a,l,null)}return;default:if(sc(e)){for(j in l)l.hasOwnProperty(j)&&(a=l[j],a!==void 0&&cs(t,e,j,a,l,void 0));return}}for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null&&Dt(t,e,r,a,l,null))}var zv={};function Mv(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,r=null,f=null,b=null,j=null;for(T in l){var R=l[T];if(l.hasOwnProperty(T)&&R!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":f=R;default:a.hasOwnProperty(T)||Dt(t,e,T,null,a,R)}}for(var p in a){var T=a[p];if(R=l[p],a.hasOwnProperty(p)&&(T!=null||R!=null))switch(p){case"type":T!==R&&(jt=!0),i=T;break;case"name":T!==R&&(jt=!0),n=T;break;case"checked":T!==R&&(jt=!0),b=T;break;case"defaultChecked":T!==R&&(jt=!0),j=T;break;case"value":T!==R&&(jt=!0),u=T;break;case"defaultValue":T!==R&&(jt=!0),r=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,e));break;default:T!==R&&Dt(t,e,p,T,a,R)}}cc(t,u,r,f,b,j,i,n);return;case"select":T=u=r=p=null;for(i in l)if(f=l[i],l.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":T=f;default:a.hasOwnProperty(i)||Dt(t,e,i,null,a,f)}for(n in a)if(i=a[n],f=l[n],a.hasOwnProperty(n)&&(i!=null||f!=null))switch(n){case"value":i!==f&&(jt=!0),p=i;break;case"defaultValue":i!==f&&(jt=!0),r=i;break;case"multiple":i!==f&&(jt=!0),u=i;default:i!==f&&Dt(t,e,n,i,a,f)}e=r,l=u,a=T,p!=null?Ua(t,!!l,p,!1):!!a!=!!l&&(e!=null?Ua(t,!!l,e,!0):Ua(t,!!l,l?[]:"",!1));return;case"textarea":T=p=null;for(r in l)if(n=l[r],l.hasOwnProperty(r)&&n!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:Dt(t,e,r,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":n!==i&&(jt=!0),p=n;break;case"defaultValue":n!==i&&(jt=!0),T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&Dt(t,e,u,n,a,i)}io(t,p,T);return;case"option":for(var k in l)if(p=l[k],l.hasOwnProperty(k)&&p!=null&&!a.hasOwnProperty(k))switch(k){case"selected":t.selected=!1;break;default:Dt(t,e,k,null,a,p)}for(f in a)if(p=a[f],T=l[f],a.hasOwnProperty(f)&&p!==T&&(p!=null||T!=null))switch(f){case"selected":p!==T&&(jt=!0),t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Dt(t,e,f,p,a,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in l)p=l[F],l.hasOwnProperty(F)&&p!=null&&!a.hasOwnProperty(F)&&Dt(t,e,F,null,a,p);for(b in a)if(p=a[b],T=l[b],a.hasOwnProperty(b)&&p!==T&&(p!=null||T!=null))switch(b){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,e));break;default:Dt(t,e,b,p,a,T)}return;default:if(sc(e)){for(var dt in l)p=l[dt],l.hasOwnProperty(dt)&&p!==void 0&&!a.hasOwnProperty(dt)&&cs(t,e,dt,void 0,a,p);for(j in a)p=a[j],T=l[j],!a.hasOwnProperty(j)||p===T||p===void 0&&T===void 0||cs(t,e,j,p,a,T);return}}for(var y in l)p=l[y],l.hasOwnProperty(y)&&p!=null&&!a.hasOwnProperty(y)&&Dt(t,e,y,null,a,p);for(R in a)p=a[R],T=l[R],!a.hasOwnProperty(R)||p===T||p==null&&T==null||Dt(t,e,R,p,a,T)}function g0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ov(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,r=n.duration;if(i&&r&&g0(u)){for(u=0,r=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],b=f.startTime;if(b>r)break;var j=f.transferSize,R=f.initiatorType;j&&g0(R)&&(f=f.responseEnd,u+=j*(f<r?1:(r-b)/(f-b)))}if(--a,e+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rs=null,ss=null;function ri(t){return t.nodeType===9?t:t.ownerDocument}function p0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function b0(t,e,l,a){return l=ri(l).createElement(t),l[ce]=a,l[xe]=e,de(l,t,e),ae(l),l}function os(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fs=null;function Av(){var t=window.event;return t&&t.type==="popstate"?t===fs?!1:(fs=t,!0):(fs=null,!1)}var ds=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,S0=typeof requestAnimationFrame=="function"?requestAnimationFrame:ds,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch(Rv)}:ds;function Rv(t){setTimeout(function(){throw t})}function Fl(t){return t==="head"}function w0(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),xn(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")xs(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,xs(l);for(var i=l.firstChild;i;){var u=i.nextSibling,r=i.nodeName;i[jn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&xs(t.ownerDocument.body);l=n}while(l);xn(e)}function T0(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function N0(t,e,l){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,l!=null&&(t.style.viewTransitionClass=l),l=getComputedStyle(t),l.display==="inline"){if(e=t.getClientRects(),e.length===1)var a=1;else for(var n=a=0;n<e.length;n++){var i=e[n];0<i.width&&0<i.height&&a++}a===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+l.paddingTop,t.marginBottom="-"+l.paddingBottom)}}function E0(t,e){t=t.style,e=e.style;var l=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=l==null||typeof l=="boolean"?"":(""+l).trim(),l=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=l==null||typeof l=="boolean"?"":(""+l).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(l=e.display,t.display=l==null||typeof l=="boolean"?"":l,l=e.margin,l!=null?t.margin=l:(l=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=l==null||typeof l=="boolean"?"":l,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Dv(t,e,l){return l=l.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=l.innerHeight&&t.left<=l.innerWidth}}function hs(t){var e=t.getBoundingClientRect(),l=getComputedStyle(t);return Dv(e,l,t)}function Uv(t){return t.documentElement.clientHeight}function Hv(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Bv(t,e,l,a,n,i,u,r,f){var b=e.nodeType===9?e:e.ownerDocument;try{var j=b.startViewTransition({update:function(){var p=b.defaultView,T=p.navigation&&p.navigation.transition,k=b.fonts.status;a();var F=[];if(k==="loaded"&&(Uv(b),b.fonts.status==="loading"&&F.push(b.fonts.ready)),k=F.length,t!==null)for(var dt=t.suspenseyImages,y=0,m=0;m<dt.length;m++){var w=dt[m];if(!w.complete){var C=w.getBoundingClientRect();if(0<C.bottom&&0<C.right&&C.top<p.innerHeight&&C.left<p.innerWidth){if(y+=Z0(w),y>Gu){F.length=k;break}w=new Promise(Hv.bind(w)),F.push(w)}}}if(0<F.length)return p=Promise.race([Promise.all(F),new Promise(function(K){return setTimeout(K,500)})]).then(n,n),(T?Promise.allSettled([T.finished,p]):p).then(i,i);if(n(),T)return T.finished.then(i,i);i()},types:l});b.__reactViewTransition=j;var R=[];return j.ready.then(function(){for(var p=b.documentElement.getAnimations({subtree:!0}),T=0;T<p.length;T++){var k=p[T],F=k.effect,dt=F.pseudoElement;if(dt!=null&&dt.startsWith("::view-transition")){R.push(k),k=F.getKeyframes();for(var y=dt=void 0,m=!0,w=0;w<k.length;w++){var C=k[w],K=C.width;if(dt===void 0)dt=K;else if(dt!==K){m=!1;break}if(K=C.height,y===void 0)y=K;else if(y!==K){m=!1;break}delete C.width,delete C.height,C.transform==="none"&&delete C.transform}m&&dt!==void 0&&y!==void 0&&(F.setKeyframes(k),m=getComputedStyle(F.target,F.pseudoElement),m.width!==dt||m.height!==y)&&(m=k[0],m.width=dt,m.height=y,m=k[k.length-1],m.width=dt,m.height=y,F.setKeyframes(k))}}u()},function(p){b.__reactViewTransition===j&&(b.__reactViewTransition=null);try{if(typeof p=="object"&&p!==null)switch(p.name){case"InvalidStateError":(p.message==="View transition was skipped because document visibility state is hidden."||p.message==="Skipping view transition because document visibility state has become hidden."||p.message==="Skipping view transition because viewport size changed."||p.message==="Transition was aborted because of invalid state")&&(p=null)}p!==null&&f(p)}finally{a(),n(),u()}}),j.finished.finally(function(){for(var p=0;p<R.length;p++)R[p].cancel();b.__reactViewTransition===j&&(b.__reactViewTransition=null),r()}),j}catch{return a(),n(),u(),null}}function za(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}za.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Z({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},za.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,l=t.getAnimations({subtree:!0}),a=[],n=0;n<l.length;n++){var i=l[n].effect;i!==null&&i.target===t&&i.pseudoElement===e&&a.push(l[n])}return a},za.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function j0(t){return{name:t,group:new za("group",t),imagePair:new za("image-pair",t),old:new za("old",t),new:new za("new",t)}}function Be(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Be.prototype.addEventListener=function(t,e,l){var a=null,n=null;if(!(l!=null&&typeof l!="boolean"&&(a=l.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(M0(i,t,e,l)===-1){var u=this,r=e;l!=null&&typeof l!="boolean"&&l.once===!0&&(r=function(f){u.removeEventListener(t,e,l),typeof e=="function"?e.call(this,f):e.handleEvent(f)}),a!==null&&(n=u.removeEventListener.bind(u,t,e,l),a.addEventListener("abort",n,{once:!0}),n=a.removeEventListener.bind(a,"abort",n)),a=mn(l),i.push({type:t,listener:e,optionsOrUseCapture:l,attachedListener:r,cleanup:n}),g(this._fragmentFiber.child,!1,qv,t,r,a)}this._eventListeners=i}};function qv(t,e,l,a){return Y(t).addEventListener(e,l,a),!1}Be.prototype.removeEventListener=function(t,e,l){var a=this._eventListeners;if(a!==null&&(e=M0(a,t,e,l),e!==-1)){var n=a[e];l=n.attachedListener;var i=n.cleanup;n=mn(n.optionsOrUseCapture),g(this._fragmentFiber.child,!1,Yv,t,l,n),a.splice(e,1),i!==null&&i()}};function Yv(t,e,l,a){return Y(t).removeEventListener(e,l,a),!1}function mn(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function z0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function M0(t,e,l,a){if(t.length===0)return-1;a=z0(a);for(var n=0;n<t.length;n++){var i=t[n];if(i.type===e&&i.listener===l&&z0(i.optionsOrUseCapture)===a)return n}return-1}Be.prototype.dispatchEvent=function(t){var e=_(this._fragmentFiber);if(e===null)return!0;e=Y(e);var l=this._eventListeners;if(l!==null&&0<l.length||!t.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(l)for(var n=0;n<l.length;n++){var i=l[n];a.addEventListener(i.type,i.attachedListener,mn(i.optionsOrUseCapture))}if(e.appendChild(a),t=a.dispatchEvent(t),l)for(n=0;n<l.length;n++)i=l[n],a.removeEventListener(i.type,i.attachedListener,mn(i.optionsOrUseCapture));return e.removeChild(a),t}return e.dispatchEvent(t)},Be.prototype.focus=function(t){g(this._fragmentFiber.child,!0,O0,t,void 0,void 0)};function O0(t,e){return t.tag===6?!1:(t=Y(t),$v(t,e))}Be.prototype.focusLast=function(t){var e=[];g(this._fragmentFiber.child,!0,ms,e,void 0,void 0);for(var l=e.length-1;0<=l&&!O0(e[l],t);l--);};function ms(t,e){return e.push(t),!1}Be.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=Y(t),t=ri(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,Gv,t,void 0,void 0))};function Gv(t,e){return t.tag===6?!1:(t=Y(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Be.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,kv,t,void 0,void 0)};function kv(t,e){return t.tag===6||(t=Y(t),e.observe(t)),!1}Be.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),g(this._fragmentFiber.child,!1,Lv,t,void 0,void 0);for(var l=e=0;l<Pe.length;l++){var a=Pe[l];a.fragmentInstance===this&&a.observer===t?t.unobserve(a.instance):Pe[e++]=a}Pe.length=e}};function Lv(t,e){return t.tag===6||(t=Y(t),e.unobserve(t)),!1}var Pe=[],vs=!1;function Vv(t,e,l){Pe.push({fragmentInstance:t,observer:e,instance:l}),vs||(vs=!0,Iv(function(){vs=!1;var a=Pe;Pe=[];for(var n=0;n<a.length;n++){var i=a[n];i.observer.unobserve(i.instance)}}))}Be.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,Xv,t,void 0,void 0),t};function Xv(t,e){if(t.tag===6){t=t.stateNode;var l=t.ownerDocument.createRange();l.selectNodeContents(t),e.push.apply(e,l.getClientRects())}else t=Y(t),e.push.apply(e,t.getClientRects());return!1}Be.prototype.getRootNode=function(t){var e=_(this._fragmentFiber);return e===null?this:Y(e).getRootNode(t)},Be.prototype.compareDocumentPosition=function(t){var e=_(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var l=[];g(this._fragmentFiber.child,!1,ms,l,void 0,void 0);var a=Y(e);if(l.length===0){if(l=a,Q(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(l=e)}e=this._fragmentFiber;var n=a=l.compareDocumentPosition(t);return l===t?n=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(l=ot(e)[1],l===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=Y(l).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=Y(l[0]),n=Y(l[l.length-1]);var i=Q(this._fragmentFiber)?e.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=e.compareDocumentPosition(t),r=n.compareDocumentPosition(t),f=u&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=a&&i&&u&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===t||i&&n===t||f||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===t||!i&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Qv(e,this._fragmentFiber,l[0],l[l.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Qv(t,e,l,a,n){var i=ua(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(l=!!i)t:{for(;i!==null;){if(i.tag===7&&(i===e||i.alternate===e)){l=!0;break t}i=i.return}l=!1}return l}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;t:{for(i=e,e=_(e);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==e&&i.alternate!==e)){i=!0;break t}i=i.return}i=!1}return i}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!i)&&!(e=i===l)&&(e=vt(l,i,Lt),e===null?e=!1:(g(e,!0,Nt,i,l),i=L,L=null,e=i!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!i)&&!(e=i===a)&&(e=vt(a,i,Lt),e===null?e=!1:(g(e,!0,zt,i,a),i=L,tt=L=null,e=i!==null)),e):!1}function A0(t,e){var l=t.ownerDocument.createRange();l.selectNodeContents(t),t=l.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Be.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];g(this._fragmentFiber.child,!1,ms,e,void 0,void 0);var l=t!==!1;if(e.length===0){var a=ot(this._fragmentFiber);if(a=l?a[1]||a[0]||_(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){t=Y(a),A0(t,l);return}if(a=Y(a),a.nodeType!==9){if(a.nodeType===11){l="host"in a?a.host:null,l!==null&&l.scrollIntoView(t);return}a.scrollIntoView(t)}}for(a=l?e.length-1:0;a!==(l?-1:e.length);){var n=e[a];n.tag===6?(n=Y(n),A0(n,l)):Y(n).scrollIntoView(t),a+=l?-1:1}};function Zv(t,e){return t=Y(t),_0(t,e),!1}function _0(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function C0(t,e){var l=e._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];t.addEventListener(n.type,n.attachedListener,mn(n.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(i){for(var u=0,r=0;r<Pe.length;r++){var f=Pe[r];(f.fragmentInstance!==e||f.observer!==i||f.instance!==t)&&(Pe[u++]=f)}Pe.length=u,i.observe(t)}),_0(t,e))}function Kv(t,e){var l=e._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];t.removeEventListener(n.type,n.attachedListener,mn(n.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(i){typeof i.rootMargin=="string"?Vv(e,i,t):i.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function gs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":gs(l),Mi(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Jv(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[jn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Qe(t.nextSibling),t===null)break}return null}function Wv(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Qe(t.nextSibling),t===null))return null;return t}function R0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Qe(t.nextSibling),t===null))return null;return t}function ps(t){return t.data==="$?"||t.data==="$~"}function ys(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fv(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var bs=null;function D0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Qe(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function $v(t,e){function l(){a=!0}if(t.ownerDocument.activeElement===t)return!0;var a=!1;try{t.ownerDocument.addEventListener("focus",l,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",l,!0)}return a}function Iv(t){S0(function(){S0(function(e){return t(e)})})}function H0(t,e,l){switch(e=ri(l),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function B0(t,e,l){for(var a in l){var n=l[a];l.hasOwnProperty(a)&&n!=null&&Dt(t,e,a,null,zv,n)}l.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===el&&(t.onclick=null),Mi(t)}function xs(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Mi(t)}var Ze=new Map,q0=new Set;function si(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var zl=X.d;X.d={f:Pv,r:tg,D:eg,C:lg,L:ag,m:ng,X:ug,S:ig,M:cg};function Pv(){var t=zl.f(),e=_u();return t||e}function tg(t){var e=Ca(t);e!==null&&e.tag===5&&e.type==="form"?Gf(e):zl.r(t)}var vn=typeof document>"u"?null:document;function Y0(t,e,l){var a=vn;if(a&&typeof e=="string"&&e){var n=qe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),q0.has(n)||(q0.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),de(e,"link",t),ae(e),a.head.appendChild(e)))}}function eg(t){zl.D(t),Y0("dns-prefetch",t,null)}function lg(t,e){zl.C(t,e),Y0("preconnect",t,e)}function ag(t,e,l){zl.L(t,e,l);var a=vn;if(a&&t&&e){var n='link[rel="preload"][as="'+qe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+qe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+qe(l.imageSizes)+'"]')):n+='[href="'+qe(t)+'"]';var i=n;switch(e){case"style":i=gn(t);break;case"script":i=pn(t)}if(!(Ze.has(i)||(t=Z({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ze.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(oi(i))||e==="script"&&a.querySelector(fi(i))))){var u=a.createElement("link");de(u,"link",t),e==="style"&&(u[zi]=!0,u.onload=u.onerror=function(){Fs(u)}),ae(u),a.head.appendChild(u)}}}function ng(t,e){zl.m(t,e);var l=vn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+qe(a)+'"][href="'+qe(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=pn(t)}if(!Ze.has(i)&&(t=Z({rel:"modulepreload",href:t},e),Ze.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(fi(i)))return}a=l.createElement("link"),de(a,"link",t),ae(a),l.head.appendChild(a)}}}function ig(t,e,l){zl.S(t,e,l);var a=vn;if(a&&t){var n=Ra(a).hoistableStyles,i=gn(t);e=e||"default";var u=n.get(i);if(!u){var r={loading:0,preload:null};if(u=a.querySelector(oi(i)))r.loading=5;else{t=Z({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ze.get(i))&&Ss(t,l);var f=u=a.createElement("link");ae(f),de(f,"link",t),f._p=new Promise(function(b,j){f.onload=b,f.onerror=j}),f.addEventListener("load",function(){r.loading|=1}),f.addEventListener("error",function(){r.loading|=2}),r.loading|=4,qu(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:r},n.set(i,u)}}}function ug(t,e){zl.X(t,e);var l=vn;if(l&&t){var a=Ra(l).hoistableScripts,n=pn(t),i=a.get(n);i||(i=l.querySelector(fi(n)),i||(t=Z({src:t,async:!0},e),(e=Ze.get(n))&&ws(t,e),i=l.createElement("script"),ae(i),de(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function cg(t,e){zl.M(t,e);var l=vn;if(l&&t){var a=Ra(l).hoistableScripts,n=pn(t),i=a.get(n);i||(i=l.querySelector(fi(n)),i||(t=Z({src:t,async:!0,type:"module"},e),(e=Ze.get(n))&&ws(t,e),i=l.createElement("script"),ae(i),de(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function G0(t,e,l,a){var n=(n=tl.current)?si(n):null;if(!n)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(l=gn(l.href),e=Ra(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=gn(l.href);var i=Ra(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(oi(t)))?i._p||(u.instance=i,u.state.loading=5):(i=Ze.get(t),i||(i={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ze.set(t,i)),rg(n,t,i,u.state))),e&&a===null)throw Error(s(528,""));return u}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(l=pn(l),e=Ra(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function gn(t){return'href="'+qe(t)+'"'}function oi(t){return'link[rel="stylesheet"]['+t+"]"}function k0(t){return Z({},t,{"data-precedence":t.precedence,precedence:null})}function rg(t,e,l,a){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[zi]!==!0){a.loading=1;return}}else e=t.createElement("link"),e[zi]=!0,e.onload=e.onerror=Fs.bind(null,e),de(e,"link",l),ae(e),t.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function pn(t){return'[src="'+qe(t)+'"]'}function fi(t){return"script[async]"+t}function L0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+qe(l.href)+'"]');if(a)return e.instance=a,ae(a),a;var n=Z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ae(a),de(a,"style",n),qu(a,l.precedence,t),e.instance=a;case"stylesheet":n=gn(l.href);var i=t.querySelector(oi(n));if(i)return e.state.loading|=4,e.instance=i,ae(i),i;a=k0(l),(n=Ze.get(n))&&Ss(a,n),i=(t.ownerDocument||t).createElement("link"),ae(i);var u=i;return u._p=new Promise(function(r,f){u.onload=r,u.onerror=f}),de(i,"link",a),e.state.loading|=4,qu(i,l.precedence,t),e.instance=i;case"script":return i=pn(l.src),(n=t.querySelector(fi(i)))?(e.instance=n,ae(n),n):(a=l,(n=Ze.get(i))&&(a=Z({},l),ws(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),ae(n),de(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,qu(a,l.precedence,t));return e.instance}function qu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var r=a[u];if(r.dataset.precedence===e)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Ss(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ws(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Yu=null;function V0(t,e,l){if(Yu===null){var a=new Map,n=Yu=new Map;n.set(l,a)}else n=Yu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[jn]||i[ce]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var r=a.get(u);r?r.push(i):a.set(u,[i])}}return a}function Ts(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function sg(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function X0(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Q0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Z0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function K0(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Z0(e),t.suspenseyImages.push(e)),t=dg.bind(t),e.decode().then(t,t))}function og(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=gn(a.href),i=e.querySelector(oi(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=di.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,ae(i);return}i=e.ownerDocument||e,a=k0(a),(n=Ze.get(n))&&Ss(a,n),i=i.createElement("link"),ae(i);var u=i;u._p=new Promise(function(r,f){u.onload=r,u.onerror=f}),de(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=di.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Gu=0;function fg(t,e){return t.stylesheets&&t.count===0&&Lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Lu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Gu===0&&(Gu=62500*Ov());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Lu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Gu?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function J0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Lu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function di(){this.count--,J0(this)}function dg(){this.imgCount--,J0(this)}var ku=null;function Lu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ku=new Map,e.forEach(hg,t),ku=null,di.call(t))}function hg(t,e){if(!(e.state.loading&4)){var l=ku.get(t);if(l)var a=l.get(null);else{l=new Map,ku.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=e.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=di.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var yn={$$typeof:Bt,Provider:null,Consumer:null,_currentValue:_t,_currentValue2:_t,_threadCount:0};function mg(t,e,l,a,n,i,u,r,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ac(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.hiddenUpdates=ac(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function W0(t,e,l,a,n,i,u,r,f,b,j,R){return t=new mg(t,e,l,u,f,b,j,R,r),e=1,i===!0&&(e|=24),i=Se(3,null,null,e),t.current=i,i.stateNode=t,e=qc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Lc(i),t}function F0(t){return t?(t=Va,t):Va}function $0(t,e,l,a,n,i){n=F0(n),a.context===null?a.context=n:a.pendingContext=n,a=ql(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Yl(t,a,e),l!==null&&(Ee(l,t,e),Vn(l,t,e))}function I0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Ns(t,e){I0(t,e),(t=t.alternate)&&I0(t,e)}function P0(t){if(t.tag===13||t.tag===31){var e=oa(t,67108864);e!==null&&Ee(e,t,67108864),Ns(t,67108864)}}function th(t){if(t.tag===13||t.tag===31){var e=He();e=nc(e);var l=oa(t,e);l!==null&&Ee(l,t,e),Ns(t,e)}}var bn=!0;function vg(t,e,l,a){var n=q.T;q.T=null;var i=X.p;try{X.p=2,Es(t,e,l,a)}finally{X.p=i,q.T=n}}function gg(t,e,l,a){var n=q.T;q.T=null;var i=X.p;try{X.p=8,Es(t,e,l,a)}finally{X.p=i,q.T=n}}function Es(t,e,l,a){if(bn){var n=js(a);if(n===null)us(t,e,a,Vu,l),lh(t,a);else if(yg(n,t,e,l,a))a.stopPropagation();else if(lh(t,a),e&4&&-1<pg.indexOf(t)){for(;n!==null;){var i=Ca(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ia(i.pendingLanes);if(u!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;u;){var f=1<<31-Oe(u);r.entanglements[1]|=f,u&=~f}fl(i),(Ot&6)===0&&(Mu=ze()+500,ii(0))}}break;case 31:case 13:r=oa(i,2),r!==null&&Ee(r,i,2),_u(),Ns(i,2)}if(i=js(a),i===null&&us(t,e,a,Vu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else us(t,e,a,null,l)}}function js(t){return t=fc(t),zs(t)}var Vu=null;function zs(t){if(Vu=null,t=ua(t),t!==null){var e=O(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=z(e),t!==null)return t;t=null}else if(l===31){if(t=A(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Vu=t,null}function eh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oh()){case qs:return 2;case Ys:return 8;case wi:case Ah:return 32;case Gs:return 268435456;default:return 32}default:return 32}}var Ms=!1,$l=null,Il=null,Pl=null,hi=new Map,mi=new Map,ta=[],pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lh(t,e){switch(t){case"focusin":case"focusout":$l=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Pl=null;break;case"pointerover":case"pointerout":hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(e.pointerId)}}function vi(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Ca(e),e!==null&&P0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function yg(t,e,l,a,n){switch(e){case"focusin":return $l=vi($l,t,e,l,a,n),!0;case"dragenter":return Il=vi(Il,t,e,l,a,n),!0;case"mouseover":return Pl=vi(Pl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return hi.set(i,vi(hi.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,mi.set(i,vi(mi.get(i)||null,t,e,l,a,n)),!0}return!1}function ah(t){var e=ua(t.target);if(e!==null){var l=O(e);if(l!==null){if(e=l.tag,e===13){if(e=z(l),e!==null){t.blockedOn=e,Ks(t.priority,function(){th(l)});return}}else if(e===31){if(e=A(l),e!==null){t.blockedOn=e,Ks(t.priority,function(){th(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=js(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);oc=a,l.target.dispatchEvent(a),oc=null}else return e=Ca(l),e!==null&&P0(e),t.blockedOn=l,!1;e.shift()}return!0}function nh(t,e,l){Xu(t)&&l.delete(e)}function bg(){Ms=!1,$l!==null&&Xu($l)&&($l=null),Il!==null&&Xu(Il)&&(Il=null),Pl!==null&&Xu(Pl)&&(Pl=null),hi.forEach(nh),mi.forEach(nh)}function Qu(t,e){t.blockedOn===e&&(t.blockedOn=null,Ms||(Ms=!0,x.unstable_scheduleCallback(x.unstable_NormalPriority,bg)))}var Zu=null;function ih(t){Zu!==t&&(Zu=t,x.unstable_scheduleCallback(x.unstable_NormalPriority,function(){Zu===t&&(Zu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(zs(a||l)===null)continue;break}var i=Ca(l);i!==null&&(t.splice(e,3),e-=3,sr(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function xn(t){function e(f){return Qu(f,t)}$l!==null&&Qu($l,t),Il!==null&&Qu(Il,t),Pl!==null&&Qu(Pl,t),hi.forEach(e),mi.forEach(e);for(var l=0;l<ta.length;l++){var a=ta[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ta.length&&(l=ta[0],l.blockedOn===null);)ah(l),l.blockedOn===null&&ta.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[xe]||null;if(typeof i=="function")u||ih(l);else if(u){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[xe]||null)r=u.formAction;else if(zs(n)!==null)continue}else r=u.action;typeof r=="function"?l[a+1]=r:(l.splice(a,3),a-=3),ih(l)}}}function uh(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Os(t){this._internalRoot=t}Ku.prototype.render=Os.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var l=e.current,a=He();$0(l,a,t,e,null,null)},Ku.prototype.unmount=Os.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$0(t.current,2,null,t,null,null),_u(),e[_a]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zs();t={blockedOn:null,target:t,priority:e};for(var l=0;l<ta.length&&e!==0&&e<ta[l].priority;l++);ta.splice(l,0,t),l===0&&ah(t)}};var ch=o.version;if(ch!=="19.3.0")throw Error(s(527,ch,"19.3.0"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=E(e),t=t!==null?D(t):null,t=t===null?null:t.stateNode,t};var xg={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{Tn=Ju.inject(xg),Me=Ju}catch{}}return pi.createRoot=function(t,e){if(!N(t))throw Error(s(299));var l=!1,a="",n=Ff,i=$f,u=If;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=W0(t,1,!1,null,null,l,a,null,n,i,u,uh),t[_a]=e.current,is(t),new Os(e)},pi.hydrateRoot=function(t,e,l){if(!N(t))throw Error(s(299));var a=!1,n="",i=Ff,u=$f,r=If,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(r=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=W0(t,1,!0,e,l??null,a,n,f,i,u,r,uh),e.context=F0(null),l=e.current,a=He(),a=nc(a),n=ql(a),n.callback=null,Yl(l,n,a),l=a,e.current.lanes=l,En(e,l),fl(e),t[_a]=e.current,is(t),new Ku(e)},pi.version="19.3.0",pi}var ph;function Rg(){if(ph)return Cs.exports;ph=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(o){console.error(o)}}return x(),Cs.exports=Cg(),Cs.exports}var Dg=Rg();const Ug=Nh(Dg),Hg=({mode:x="landing",difficulty:o,soundMuted:d,onToggleSound:s,onOpenSettings:N,onOpenStats:O,onOpenHowToPlay:z,onNavigateHome:A,theme:U,onToggleTheme:E})=>c.jsxs("header",{className:"app-header",children:[c.jsxs("div",{className:"header-left",children:[A&&x!=="landing"?c.jsxs("button",{type:"button",className:"brand-button",onClick:A,"aria-label":"Back to home",children:[c.jsx("span",{className:"brand-dot p1-dot"}),c.jsx("span",{className:"brand-dot p2-dot"}),c.jsx("span",{className:"brand-title",children:"Four in a Row"})]}):c.jsxs("div",{className:"brand-button",children:[c.jsx("span",{className:"brand-dot p1-dot"}),c.jsx("span",{className:"brand-dot p2-dot"}),c.jsx("span",{className:"brand-title",children:"Four in a Row"})]}),x!=="landing"&&c.jsx("div",{className:"mode-badge",children:x==="ai"?`vs AI (${o})`:"2 Players (Pass & Play)"})]}),c.jsxs("div",{className:"header-actions",children:[c.jsx("button",{type:"button",className:"icon-button theme-toggle",onClick:E,title:"Toggle Theme","aria-label":"Toggle Theme",children:U==="dark"?c.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"5"}),c.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}):c.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})})}),c.jsx("button",{type:"button",className:`icon-button ${d?"muted":""}`,onClick:s,title:d?"Unmute Sound":"Mute Sound","aria-label":d?"Unmute Sound (M)":"Mute Sound (M)",children:d?c.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6",strokeLinecap:"round",strokeLinejoin:"round"})}):c.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("button",{type:"button",className:"icon-button",onClick:O,title:"Statistics","aria-label":"View Statistics",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M18 20V10M12 20V4M6 20v-6",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.jsx("button",{type:"button",className:"icon-button",onClick:z,title:"How to Play","aria-label":"How to Play Rules and Help",children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01",strokeLinecap:"round",strokeLinejoin:"round"})]})}),c.jsx("button",{type:"button",className:"icon-button",onClick:N,title:"Settings","aria-label":"Game Settings",children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"12",cy:"12",r:"3"}),c.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})})]}),c.jsx("style",{children:`
        .app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: clamp(8px, 1.5vh, 12px) clamp(12px, 3vw, 24px);
          z-index: 50;
          box-sizing: border-box;
          background: var(--surface-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--surface-border);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.5vw, 12px);
          min-width: 0;
        }

        .brand-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
          flex-shrink: 0;
        }

        .brand-button:hover {
          background: var(--surface-glass-hover);
        }

        .brand-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .p1-dot {
          background: var(--p1-gradient);
          box-shadow: 0 0 8px var(--p1-color);
        }

        .p2-dot {
          background: var(--p2-gradient);
          box-shadow: 0 0 8px var(--p2-color);
          margin-left: -5px;
        }

        .brand-title {
          font-size: clamp(14px, 3.5vw, 18px);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--text-main);
          white-space: nowrap;
        }

        .mode-badge {
          font-size: clamp(10px, 2vw, 11px);
          font-weight: 800;
          color: var(--accent-color);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          box-shadow: var(--accent-glow);
          padding: 3px 9px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 150px;
        }

        @media (max-width: 440px) {
          .mode-badge {
            display: none;
          }
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: clamp(5px, 1.2vw, 8px);
          flex-shrink: 0;
        }

        .icon-button {
          width: clamp(34px, 8vw, 40px);
          height: clamp(34px, 8vw, 40px);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .icon-button svg {
          width: clamp(16px, 4vw, 19px);
          height: clamp(16px, 4vw, 19px);
        }

        .icon-button:hover {
          background: var(--surface-glass-hover);
          border-color: var(--accent-color);
          color: var(--text-main);
          box-shadow: var(--accent-glow);
          transform: translateY(-1px);
        }

        .icon-button.muted {
          color: #f87171;
          border-color: rgba(239, 68, 68, 0.45);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.25);
        }
      `})]}),Bg=({isOpen:x,onClose:o})=>(J.useEffect(()=>{const d=s=>{s.key==="Escape"&&x&&o()};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[x,o]),x?c.jsxs("div",{className:"modal-backdrop",onClick:o,role:"dialog","aria-modal":"true","aria-labelledby":"rules-title",children:[c.jsxs("div",{className:"modal-card",onClick:d=>d.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{id:"rules-title",className:"modal-title",children:"How to Play"}),c.jsx("button",{type:"button",className:"modal-close-btn",onClick:o,"aria-label":"Close Rules (Esc)",children:"×"})]}),c.jsxs("div",{className:"modal-body",children:[c.jsxs("div",{className:"rule-cards-grid",children:[c.jsxs("div",{className:"rule-card",children:[c.jsx("div",{className:"rule-number",children:"1"}),c.jsx("h3",{className:"rule-heading",children:"Drop"}),c.jsx("p",{className:"rule-text",children:"Tap or click any of the 7 columns. Your token drops by gravity to the lowest unoccupied slot."})]}),c.jsxs("div",{className:"rule-card",children:[c.jsx("div",{className:"rule-number",children:"2"}),c.jsx("h3",{className:"rule-heading",children:"Connect 4"}),c.jsx("p",{className:"rule-text",children:"Build a continuous sequence of 4 tokens horizontally, vertically, or diagonally while blocking your opponent."})]}),c.jsxs("div",{className:"rule-card",children:[c.jsx("div",{className:"rule-number",children:"3"}),c.jsx("h3",{className:"rule-heading",children:"Win"}),c.jsx("p",{className:"rule-text",children:"The first player to connect 4 wins! If all 42 slots are filled without a line of four, the match ends in a draw."})]})]}),c.jsxs("div",{className:"keyboard-shortcuts-section",children:[c.jsx("h3",{className:"shortcuts-title",children:"Keyboard Shortcuts"}),c.jsxs("div",{className:"shortcuts-grid",children:[c.jsxs("div",{className:"shortcut-item",children:[c.jsx("kbd",{className:"key-badge",children:"←"})," ",c.jsx("kbd",{className:"key-badge",children:"→"}),c.jsx("span",{children:"Select column"})]}),c.jsxs("div",{className:"shortcut-item",children:[c.jsx("kbd",{className:"key-badge",children:"Enter"})," / ",c.jsx("kbd",{className:"key-badge",children:"Space"}),c.jsx("span",{children:"Drop token"})]}),c.jsxs("div",{className:"shortcut-item",children:[c.jsx("kbd",{className:"key-badge",children:"1"})," – ",c.jsx("kbd",{className:"key-badge",children:"7"}),c.jsx("span",{children:"Quick drop column"})]}),c.jsxs("div",{className:"shortcut-item",children:[c.jsx("kbd",{className:"key-badge",children:"U"}),c.jsx("span",{children:"Undo move"})]}),c.jsxs("div",{className:"shortcut-item",children:[c.jsx("kbd",{className:"key-badge",children:"R"}),c.jsx("span",{children:"Restart / Rematch"})]}),c.jsxs("div",{className:"shortcut-item",children:[c.jsx("kbd",{className:"key-badge",children:"M"}),c.jsx("span",{children:"Toggle Sound"})]})]})]})]}),c.jsx("div",{className:"modal-footer",children:c.jsx("button",{type:"button",className:"got-it-btn",onClick:o,children:"Got It!"})})]}),c.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 20, 0.78);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 100;
          animation: overlayFadeIn 0.25s ease-out;
        }

        .modal-card {
          width: 100%;
          max-width: 520px;
          background: rgba(22, 28, 58, 0.96);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--surface-border);
        }

        .modal-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-main);
        }

        .modal-close-btn {
          font-size: 26px;
          color: var(--text-dim);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .modal-close-btn:hover {
          color: var(--text-main);
          background: var(--surface-glass);
        }

        .modal-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          max-height: 70vh;
          overflow-y: auto;
        }

        .rule-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (max-width: 480px) {
          .rule-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        .rule-card {
          background: rgba(0, 0, 0, 0.28);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 16px 14px;
          text-align: center;
        }

        .rule-number {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
        }

        .rule-heading {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .rule-text {
          font-size: 12px;
          line-height: 1.45;
          color: var(--text-muted);
        }

        .keyboard-shortcuts-section {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 16px 18px;
        }

        .shortcuts-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }

        .shortcuts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 14px;
        }

        @media (max-width: 480px) {
          .shortcuts-grid {
            grid-template-columns: 1fr;
          }
        }

        .shortcut-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .key-badge {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom-width: 2px;
          border-radius: 4px;
          padding: 2px 7px;
          font-family: monospace;
          font-size: 12px;
          color: var(--text-main);
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--surface-border);
          display: flex;
          justify-content: flex-end;
        }

        .got-it-btn {
          background: var(--accent-gradient);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
        }
      `})]}):null),qg=({isOpen:x,settings:o,onUpdateSettings:d,onClose:s})=>(J.useEffect(()=>{const N=O=>{O.key==="Escape"&&x&&s()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[x,s]),x?c.jsxs("div",{className:"modal-backdrop",onClick:s,role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",children:[c.jsxs("div",{className:"modal-card",onClick:N=>N.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{id:"settings-title",className:"modal-title",children:"Settings & Accessibility"}),c.jsx("button",{type:"button",className:"modal-close-btn",onClick:s,"aria-label":"Close Settings (Esc)",children:"×"})]}),c.jsxs("div",{className:"modal-body",children:[c.jsxs("div",{className:"setting-group",children:[c.jsx("label",{className:"setting-label",children:"Theme"}),c.jsx("div",{className:"segmented-control",children:["system","dark","light"].map(N=>c.jsx("button",{type:"button",className:`segment-btn ${o.theme===N?"active":""}`,onClick:()=>d({theme:N}),children:N.charAt(0).toUpperCase()+N.slice(1)},N))})]}),c.jsxs("div",{className:"setting-group",children:[c.jsxs("div",{className:"setting-label-row",children:[c.jsx("label",{className:"setting-label",children:"Color Palette"}),c.jsx("span",{className:"setting-hint",children:"Accessible token styling"})]}),c.jsx("div",{className:"palette-grid",children:[{id:"classic",label:"Classic",c1:"#ef4444",c2:"#eab308"},{id:"colorblind",label:"Colorblind Safe",c1:"#0284c7",c2:"#ea580c"},{id:"neon",label:"Neon Cyber",c1:"#06b6d4",c2:"#ec4899"},{id:"monochrome",label:"Monochrome",c1:"#ffffff",c2:"#1e293b"}].map(N=>c.jsxs("button",{type:"button",className:`palette-card ${o.palette===N.id?"active":""}`,onClick:()=>d({palette:N.id}),children:[c.jsxs("div",{className:"palette-swatches",children:[c.jsx("span",{className:"swatch",style:{background:N.c1}}),c.jsx("span",{className:"swatch",style:{background:N.c2}})]}),c.jsx("span",{className:"palette-title",children:N.label})]},N.id))})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("div",{className:"setting-title-line",children:"Sound Effects"}),c.jsx("div",{className:"setting-hint",children:"Procedural drop, win, and draw chimes"})]}),c.jsx("button",{type:"button",className:`toggle-switch ${o.sound?"on":"off"}`,onClick:()=>d({sound:!o.sound}),role:"switch","aria-checked":o.sound,children:c.jsx("span",{className:"toggle-handle"})})]}),c.jsxs("div",{className:"setting-row",children:[c.jsxs("div",{children:[c.jsx("div",{className:"setting-title-line",children:"Haptic Feedback"}),c.jsx("div",{className:"setting-hint",children:"Tactile vibrations on supported mobile devices"})]}),c.jsx("button",{type:"button",className:`toggle-switch ${o.haptics?"on":"off"}`,onClick:()=>d({haptics:!o.haptics}),role:"switch","aria-checked":o.haptics,children:c.jsx("span",{className:"toggle-handle"})})]}),c.jsxs("div",{className:"setting-group",children:[c.jsxs("div",{className:"setting-label-row",children:[c.jsx("label",{className:"setting-label",children:"Motion Animations"}),c.jsx("span",{className:"setting-hint",children:"Controls drop bounce and particle effects"})]}),c.jsx("div",{className:"segmented-control",children:["system","off","on"].map(N=>c.jsx("button",{type:"button",className:`segment-btn ${o.reducedMotion===N?"active":""}`,onClick:()=>d({reducedMotion:N}),children:N==="system"?"System Pref":N==="on"?"Reduced":"Full Motion"},N))})]})]}),c.jsx("div",{className:"modal-footer",children:c.jsx("button",{type:"button",className:"done-btn",onClick:s,children:"Done"})})]}),c.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 20, 0.78);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 100;
          animation: overlayFadeIn 0.25s ease-out;
        }

        .modal-card {
          width: 100%;
          max-width: 480px;
          background: rgba(22, 28, 58, 0.96);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--surface-border);
        }

        .modal-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-main);
        }

        .modal-close-btn {
          font-size: 26px;
          color: var(--text-dim);
          line-height: 1;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-main);
          background: var(--surface-glass);
        }

        .modal-body {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          max-height: 68vh;
          overflow-y: auto;
        }

        .setting-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .setting-label-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .setting-label {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
        }

        .setting-hint {
          font-size: 12px;
          color: var(--text-dim);
        }

        .setting-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .setting-title-line {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }

        .segmented-control {
          display: flex;
          background: rgba(0, 0, 0, 0.3);
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--surface-border);
        }

        .segment-btn {
          flex: 1;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 600;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .segment-btn.active {
          background: var(--accent-color);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
        }

        .palette-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .palette-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--surface-border);
          transition: all 0.2s ease;
          text-align: left;
        }

        .palette-card.active {
          border-color: var(--accent-color);
          background: rgba(99, 102, 241, 0.15);
        }

        .palette-swatches {
          display: flex;
          gap: 4px;
        }

        .swatch {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .palette-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-main);
        }

        .toggle-switch {
          width: 48px;
          height: 28px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.15);
          position: relative;
          transition: background 0.25s ease;
          flex-shrink: 0;
        }

        .toggle-switch.on {
          background: var(--accent-color);
        }

        .toggle-handle {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          transition: transform 0.25s cubic-bezier(0.34, 1.4, 0.64, 1);
        }

        .toggle-switch.on .toggle-handle {
          transform: translateX(20px);
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--surface-border);
          display: flex;
          justify-content: flex-end;
        }

        .done-btn {
          background: var(--accent-gradient);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          transition: transform 0.15s ease;
        }

        .done-btn:hover {
          transform: translateY(-1px);
        }
      `})]}):null),yh=[[0,1],[1,0],[1,1],[-1,1]];class la{static checkWinFromMove(o,d,s,N,O){const{rows:z,cols:A,connect:U}=O;for(const[E,D]of yh){const g=[[d,s]];let _=d+E,Q=s+D;for(;_>=0&&_<z&&Q>=0&&Q<A&&o[_][Q]===N;)g.push([_,Q]),_+=E,Q+=D;for(_=d-E,Q=s-D;_>=0&&_<z&&Q>=0&&Q<A&&o[_][Q]===N;)g.unshift([_,Q]),_-=E,Q-=D;if(g.length>=U)return g}return null}static scanBoardForWin(o,d){const{rows:s,cols:N,connect:O}=d;for(let z=0;z<s;z++)for(let A=0;A<N;A++){const U=o[z][A];if(U!==0)for(const[E,D]of yh){const g=z+(O-1)*E,_=A+(O-1)*D;if(g>=0&&g<s&&_>=0&&_<N){let Q=!0;const ot=[];for(let ct=0;ct<O;ct++){const Y=z+ct*E,L=A+ct*D;if(o[Y][L]!==U){Q=!1;break}ot.push([Y,L])}if(Q)return{winner:U,line:ot}}}}return null}}class Yg{async chooseMove(o,d){const s=o.legalMoves();if(s.length===0)return 0;if(Math.random()<.5)for(const O of s){const z=o.drop(O,d);if(z.success&&la.checkWinFromMove(z.board.getRawGrid(),z.row,O,d,o.config))return O}const N=Math.floor(Math.random()*s.length);return s[N]}}class bh{async chooseMove(o,d){const s=o.legalMoves();if(s.length===0)return 0;const N=d===1?2:1;for(const U of s){const E=o.drop(U,d);if(E.success&&la.checkWinFromMove(E.board.getRawGrid(),E.row,U,d,o.config))return U}for(const U of s){const E=o.drop(U,N);if(E.success&&la.checkWinFromMove(E.board.getRawGrid(),E.row,U,N,o.config))return U}const O={3:7,2:5,4:5,1:3,5:3,0:1,6:1},z=[];for(const U of s){const E=O[U]||1;for(let D=0;D<E;D++)z.push(U)}const A=Math.floor(Math.random()*z.length);return z[A]}}const xh=[3,2,4,1,5,0,6],Sh=[[3,4,5,7,5,4,3],[4,6,8,10,8,6,4],[5,8,11,13,11,8,5],[5,8,11,13,11,8,5],[4,6,8,10,8,6,4],[3,4,5,7,5,4,3]];function Wu(x,o){const d=o===1?2:1;let s=0,N=0,O=0;for(let z=0;z<4;z++){const A=x[z];A===o?s++:A===d?N++:O++}return s>0&&N>0?0:s===4?1e5:s===3&&O===1?80:s===2&&O===2?12:N===4?-1e5:N===3&&O===1?-100:N===2&&O===2?-14:0}function Gg(x,o){let d=0;const s=x.getRawGrid(),N=x.rows,O=x.cols;for(let z=0;z<N;z++)for(let A=0;A<O;A++){const U=s[z][A];U===o?d+=Sh[z][A]:U!==0&&(d-=Sh[z][A])}for(let z=0;z<N;z++)for(let A=0;A<=O-4;A++){const U=[s[z][A],s[z][A+1],s[z][A+2],s[z][A+3]];d+=Wu(U,o)}for(let z=0;z<O;z++)for(let A=0;A<=N-4;A++){const U=[s[A][z],s[A+1][z],s[A+2][z],s[A+3][z]];d+=Wu(U,o)}for(let z=0;z<=N-4;z++)for(let A=0;A<=O-4;A++){const U=[s[z][A],s[z+1][A+1],s[z+2][A+2],s[z+3][A+3]];d+=Wu(U,o)}for(let z=3;z<N;z++)for(let A=0;A<=O-4;A++){const U=[s[z][A],s[z-1][A+1],s[z-2][A+2],s[z-3][A+3]];d+=Wu(U,o)}return d}class yi{constructor(o,d=1500){te(this,"depth");te(this,"timeBudgetMs");te(this,"transpositionTable",new Map);te(this,"startTime",0);te(this,"timedOut",!1);this.depth=o,this.timeBudgetMs=d}async chooseMove(o,d,s){const N=o.legalMoves();if(N.length===0)return 0;if(N.length===1)return N[0];const O=d===1?2:1;for(const g of N){const _=o.drop(g,d);if(_.success&&la.checkWinFromMove(_.board.getRawGrid(),_.row,g,d,o.config))return g}for(const g of N){const _=o.drop(g,O);if(_.success&&la.checkWinFromMove(_.board.getRawGrid(),_.row,g,O,o.config))return g}this.startTime=performance.now(),this.timedOut=!1,this.transpositionTable.clear();const z=xh.filter(g=>N.includes(g));let A=z[0],U=-1/0;const E=this.depth,D=Math.min(3,E);for(let g=D;g<=E&&!(this.timedOut||s!=null&&s.aborted);g++){let _=A,Q=-1/0,ot=-1/0;const ct=1/0;for(const Y of z){if(this.isOutOfTime()||s!=null&&s.aborted){this.timedOut=!0;break}const L=o.drop(Y,d);if(!L.success)continue;if(la.checkWinFromMove(L.board.getRawGrid(),L.row,Y,d,o.config))return Y;const Nt=-this.minimax(L.board,g-1,-ct,-ot,O,d,L.row,Y,s);Nt>Q&&(Q=Nt,_=Y),ot=Math.max(ot,Nt)}if(!this.timedOut&&(A=_,U=Q,U>=9e4))break}return A}isOutOfTime(){return performance.now()-this.startTime>this.timeBudgetMs}minimax(o,d,s,N,O,z,A,U,E){if(this.isOutOfTime()||E!=null&&E.aborted)return this.timedOut=!0,0;const D=O===1?2:1;if(la.checkWinFromMove(o.getRawGrid(),A,U,D,o.config))return D===z?1e5+d:-(1e5+d);const _=o.legalMoves();if(_.length===0)return 0;if(d===0){const ct=Gg(o,z);return O===z?ct:-ct}const Q=xh.filter(ct=>_.includes(ct));let ot=-1/0;for(const ct of Q){const Y=o.drop(ct,O);if(!Y.success)continue;const L=-this.minimax(Y.board,d-1,-N,-s,D,z,Y.row,ct,E);if(ot=Math.max(ot,L),s=Math.max(s,L),s>=N)break}return ot}}function kg(x){switch(x){case"beginner":return new Yg;case"easy":return new bh;case"medium":return new yi(4,500);case"hard":return new yi(7,1e3);case"expert":return new yi(9,1500);default:return new bh}}class Lg{constructor(){te(this,"worker",null);te(this,"reqId",0);te(this,"pendingRequests",new Map);this.initWorker()}initWorker(){try{typeof window<"u"&&typeof Worker<"u"&&(this.worker=new Worker(new URL("/assets/worker-CXL9jBPh.js",import.meta.url),{type:"module"}),this.worker.onmessage=o=>{const{id:d,col:s}=o.data,N=this.pendingRequests.get(d);N&&(this.pendingRequests.delete(d),N(s))},this.worker.onerror=o=>{console.warn("AI Worker error, fallback will be used:",o),this.worker=null})}catch(o){console.warn("Failed to initialize AI Web Worker, using main thread fallback:",o),this.worker=null}}async getMove(o,d,s,N=400){const O=performance.now();let z;if(this.worker){const E=++this.reqId;z=new Promise(D=>{var _;this.pendingRequests.set(E,D);const g={id:E,type:"CHOOSE_MOVE",boardGrid:o.getRawGrid(),player:d,difficulty:s};(_=this.worker)==null||_.postMessage(g)})}else z=kg(s).chooseMove(o,d);const A=await z,U=performance.now()-O;return U<N&&await new Promise(E=>setTimeout(E,N-U)),A}destroy(){this.worker&&(this.worker.terminate(),this.worker=null),this.pendingRequests.clear()}}const bi=({player:x,isWinning:o=!1,isGhost:d=!1,dropDistance:s=0,className:N=""})=>{const O=x===1,z={"--drop-distance":s,animation:s>0?"dropFall 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards":void 0};return c.jsxs("div",{className:`token-container ${o?"token-winning":""} ${d?"token-ghost":""} ${N}`,style:z,"aria-hidden":"true",children:[c.jsx("div",{className:`coin-3d ${O?"coin-p1":"coin-p2"}`,children:c.jsx("div",{className:"coin-inner-ring",children:c.jsx("div",{className:"coin-center-face"})})}),c.jsx("style",{children:`
        .token-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .coin-3d {
          width: 88%;
          height: 88%;
          border-radius: 50%;
          position: relative;
          box-sizing: border-box;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .coin-p1 {
          background: var(--p1-gradient);
          border: clamp(2px, 0.5vw, 4px) solid rgba(0, 0, 0, 0.4);
          box-shadow: 
            var(--p1-shadow),
            inset 0 0 0 clamp(2px, 0.5vw, 4px) rgba(255, 0, 0, 0.5),
            inset 0 5px 8px rgba(255, 255, 255, 0.4),
            inset 0 -5px 8px rgba(0, 0, 0, 0.3);
        }

        .coin-p2 {
          background: var(--p2-gradient);
          border: clamp(2px, 0.5vw, 4px) solid rgba(0, 0, 0, 0.4);
          box-shadow: 
            var(--p2-shadow),
            inset 0 0 0 clamp(2px, 0.5vw, 4px) rgba(255, 140, 0, 0.6),
            inset 0 5px 8px rgba(255, 255, 255, 0.5),
            inset 0 -5px 8px rgba(0, 0, 0, 0.2);
        }

        .coin-inner-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          pointer-events: none;
        }

        .coin-center-face {
          position: absolute;
          top: 6%;
          left: 15%;
          width: 70%;
          height: 40%;
          border-radius: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%);
          pointer-events: none;
        }

        .token-winning {
          z-index: 10;
        }

        .token-winning .coin-3d {
          animation: winPulse 1.2s ease-in-out infinite alternate;
          border-color: #ffffff;
        }

        .token-winning .coin-p1 {
          box-shadow:
            0 0 24px 6px rgba(244, 63, 94, 0.95),
            0 4px 12px rgba(0, 0, 0, 0.75),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.7);
        }

        .token-winning .coin-p2 {
          box-shadow:
            0 0 24px 6px rgba(250, 204, 21, 0.95),
            0 4px 12px rgba(0, 0, 0, 0.75),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.8);
        }

        .token-ghost {
          opacity: 0.7;
          animation: ghostFloat 1.8s ease-in-out infinite;
        }

        .token-ghost .coin-3d {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
        }
        [data-palette="colorblind"] .coin-p1 {
          background: var(--p1-gradient);
        }
        [data-palette="colorblind"] .coin-p2 {
          background: var(--p2-gradient);
        }

        [data-palette="neon"] .coin-p1 {
          background: var(--p1-gradient);
        }
        [data-palette="neon"] .coin-p2 {
          background: var(--p2-gradient);
        }

        [data-palette="monochrome"] .coin-p1 {
          background: var(--p1-gradient);
        }
        [data-palette="monochrome"] .coin-p2 {
          background: var(--p2-gradient);
        }
      `})]})},Eh=({board:x,currentPlayer:o,winningLine:d,isLocked:s,onDrop:N,lastMove:O,hintCol:z=null})=>{const[A,U]=J.useState(null),[E,D]=J.useState(3),g=J.useRef(null),_=x.cols,Q=x.rows;J.useEffect(()=>{const Y=L=>{if(!s){if(L.key==="ArrowLeft"||L.key==="a"||L.key==="A")L.preventDefault(),D(tt=>Math.max(0,tt-1));else if(L.key==="ArrowRight"||L.key==="d"||L.key==="D")L.preventDefault(),D(tt=>Math.min(_-1,tt+1));else if(L.key==="Enter"||L.key===" "||L.key==="ArrowDown"||L.key==="s"||L.key==="S")L.preventDefault(),x.isColumnFull(E)||N(E);else if(L.key>="1"&&L.key<="7"){const tt=parseInt(L.key,10)-1;tt>=0&&tt<_&&!x.isColumnFull(tt)&&(L.preventDefault(),D(tt),N(tt))}}};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[x,_,E,s,N]);const ot=(Y,L)=>d?d.some(([tt,Nt])=>tt===Y&&Nt===L):!1,ct=Y=>{s||x.isColumnFull(Y)||(D(Y),N(Y))};return c.jsxs("div",{className:"board-wrapper",ref:g,children:[c.jsx("div",{className:"ghost-bar","aria-hidden":"true",children:Array.from({length:_}).map((Y,L)=>{const tt=(A===L||E===L)&&!x.isColumnFull(L)&&!s,Nt=z===L&&!x.isColumnFull(L);return c.jsxs("div",{className:`ghost-slot ${Nt?"ghost-slot-hint":""}`,children:[tt&&c.jsx(bi,{player:o,isGhost:!0}),Nt&&!tt&&c.jsx("div",{className:"hint-indicator",children:"HINT"})]},`ghost-${L}`)})}),c.jsxs("div",{className:"board-grid-frame",role:"grid","aria-label":"Connect Four Game Board","aria-readonly":"true",children:[c.jsx("div",{className:"column-interactive-layer",children:Array.from({length:_}).map((Y,L)=>{const tt=x.columnHeight(L),Nt=tt>=Q,zt=`Column ${L+1}, ${tt} of ${Q} filled${Nt?" (Full)":""}`;return c.jsx("button",{type:"button",className:`col-tap-target ${A===L?"is-hovered":""} ${E===L?"is-focused":""} ${Nt?"is-full":""}`,onClick:()=>ct(L),onMouseEnter:()=>U(L),onMouseLeave:()=>U(null),onFocus:()=>{D(L),U(L)},onBlur:()=>U(null),"aria-label":zt,disabled:s||Nt,tabIndex:0,children:c.jsx("span",{className:"sr-only",children:zt})},`col-btn-${L}`)})}),c.jsx("div",{className:"slots-grid",children:Array.from({length:Q}).map((Y,L)=>{const tt=Q-1-L;return c.jsx("div",{className:"board-row",role:"row",children:Array.from({length:_}).map((Nt,zt)=>{const Lt=x.cellAt(tt,zt),vt=ot(tt,zt),ht=O&&O.row===tt&&O.col===zt?Q-tt:0;return c.jsx("div",{className:`board-cell ${vt?"cell-winning":""}`,role:"gridcell","aria-label":`Row ${tt+1}, Column ${zt+1}: ${Lt===0?"Empty":`Player ${Lt}`}`,children:c.jsx("div",{className:"cell-hole",children:Lt!==0&&c.jsx(bi,{player:Lt,isWinning:vt,dropDistance:ht})})},`cell-${tt}-${zt}`)})},`row-${tt}`)})})]}),c.jsx("style",{children:`
        .board-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: min(
            100%,
            calc((var(--board-max-height, calc(100dvh - 220px))) * (7 / 6)),
            620px
          );
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          user-select: none;
        }

        .ghost-bar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          width: 100%;
          height: clamp(26px, 6vw, 56px);
          margin-bottom: clamp(2px, 0.8vw, 6px);
          padding: 0 clamp(4px, 1.5vw, 16px);
        }

        .ghost-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ghost-slot-hint {
          background: rgba(99, 102, 241, 0.15);
          border-radius: var(--radius-sm);
        }

        .hint-indicator {
          font-size: clamp(9px, 1.8vw, 11px);
          font-weight: 800;
          color: #818cf8;
          background: rgba(99, 102, 241, 0.25);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(99, 102, 241, 0.4);
          animation: ghostFloat 1.5s ease-in-out infinite;
        }

        .board-grid-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 7 / 6;
          background: var(--board-bg-gradient);
          border-radius: clamp(12px, 2.8vw, 26px);
          box-shadow: var(--board-shadow);
          padding: clamp(6px, 1.6vw, 16px);
          border: 2px solid var(--board-rim);
          overflow: hidden;
        }

        .board-grid-frame::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 5%, rgba(255, 255, 255, 0.5) 30%, rgba(129, 140, 248, 0.9) 70%, transparent 95%);
          pointer-events: none;
        }

        .column-interactive-layer {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          z-index: 20;
          pointer-events: none;
        }

        .col-tap-target {
          pointer-events: auto;
          height: 100%;
          min-width: 38px;
          background: transparent;
          border-radius: var(--radius-sm);
          transition: background 0.18s ease, box-shadow 0.18s ease;
          position: relative;
        }

        .col-tap-target:hover, .col-tap-target.is-hovered {
          background: linear-gradient(180deg, rgba(99, 102, 241, 0.24) 0%, rgba(99, 102, 241, 0.08) 65%, transparent 100%);
          box-shadow: inset 0 0 14px rgba(99, 102, 241, 0.35);
        }

        .col-tap-target:focus-visible, .col-tap-target.is-focused {
          background: linear-gradient(180deg, rgba(99, 102, 241, 0.32) 0%, rgba(99, 102, 241, 0.12) 65%, transparent 100%);
          outline: 2px solid rgba(129, 140, 248, 0.85);
          outline-offset: -2px;
          box-shadow: inset 0 0 16px rgba(99, 102, 241, 0.45);
        }

        .col-tap-target.is-full {
          cursor: not-allowed;
        }

        .slots-grid {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-rows: repeat(6, 1fr);
          gap: clamp(2px, 0.9vw, 10px);
        }

        .board-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: clamp(2px, 0.9vw, 10px);
        }

        .board-cell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cell-hole {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background: var(--board-slot-empty);
          box-shadow: var(--board-slot-shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .cell-winning .cell-hole {
          box-shadow: 0 0 16px 3px var(--focus-ring), var(--board-slot-shadow);
        }
      `})]})},Vg=({currentStep:x,totalSteps:o,isPlaying:d,playbackSpeed:s,lastMove:N,status:O,p1Name:z="Player 1",p2Name:A="Player 2",onPlayToggle:U,onStepForward:E,onStepBackward:D,onJumpToStart:g,onJumpToEnd:_,onSeek:Q,onSpeedChange:ot,onExitReplay:ct,onRematch:Y})=>{J.useEffect(()=>{const vt=Z=>{Z.target instanceof HTMLInputElement||Z.target instanceof HTMLTextAreaElement||(Z.code==="Space"?(Z.preventDefault(),U()):Z.key==="ArrowLeft"?(Z.preventDefault(),D()):Z.key==="ArrowRight"?(Z.preventDefault(),E()):Z.key==="Home"?(Z.preventDefault(),g()):Z.key==="End"?(Z.preventDefault(),_()):Z.key==="Escape"&&(Z.preventDefault(),ct()))};return window.addEventListener("keydown",vt),()=>window.removeEventListener("keydown",vt)},[U,D,E,g,_,ct]);const L=x===0,tt=x===o,Nt=O.kind==="won"&&tt,zt=O.kind==="won"?O.winner===1?z:A:null,Lt=N?N.player===1?z:A:null;return c.jsxs("div",{className:"replay-controls-card",role:"region","aria-label":"Game Replay Controls",children:[c.jsxs("div",{className:"replay-header",children:[c.jsxs("div",{className:"replay-badge",children:[c.jsx("span",{className:"replay-icon",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})}),c.jsx("span",{className:"badge-text",children:"REPLAY"})]}),c.jsx("div",{className:"replay-step-info",children:L?c.jsx("span",{className:"step-desc",children:"Starting Board"}):Nt?c.jsxs("div",{className:"victory-pill",children:[c.jsx("span",{className:"trophy-icon",children:"🏆"}),c.jsxs("span",{children:[zt," Victory! (Move ",o,")"]})]}):O.kind==="draw"&&tt?c.jsx("div",{className:"victory-pill draw",children:c.jsxs("span",{children:["🤝 Match Drawn (Move ",o,")"]})}):c.jsxs("div",{className:"move-detail",children:[N&&c.jsx("div",{className:"token-thumb",children:c.jsx(bi,{player:N.player})}),c.jsxs("span",{children:["Move ",x," of ",o,": ",c.jsx("strong",{children:Lt})," in Col ",N?N.col+1:""]})]})}),c.jsx("div",{className:"speed-pills",children:[.5,1,2].map(vt=>c.jsxs("button",{type:"button",className:`speed-btn ${s===vt?"active":""}`,onClick:()=>ot(vt),"aria-label":`Playback speed ${vt}x`,children:[vt,"x"]},vt))})]}),c.jsxs("div",{className:"scrubber-row",children:[c.jsx("span",{className:"scrubber-time",children:"0"}),c.jsxs("div",{className:"slider-wrapper",children:[c.jsx("input",{type:"range",min:"0",max:o,value:x,onChange:vt=>Q(Number(vt.target.value)),className:"replay-slider","aria-label":"Replay move scrubber"}),c.jsx("div",{className:"slider-progress",style:{width:`${o>0?x/o*100:0}%`}})]}),c.jsx("span",{className:"scrubber-time",children:o})]}),c.jsxs("div",{className:"controls-footer",children:[c.jsxs("div",{className:"playback-btns",children:[c.jsx("button",{type:"button",className:"ctrl-btn",onClick:g,disabled:L,title:"Jump to Start (Home)","aria-label":"Jump to Start (Home)",children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[c.jsx("line",{x1:"5",y1:"5",x2:"5",y2:"19",strokeLinecap:"round"}),c.jsx("polygon",{points:"19 19 8 12 19 5 19 19",fill:"currentColor"})]})}),c.jsx("button",{type:"button",className:"ctrl-btn",onClick:D,disabled:L,title:"Previous Move (Left Arrow)","aria-label":"Previous Move (Left Arrow)",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("polygon",{points:"19 19 7 12 19 5 19 19",fill:"currentColor"})})}),c.jsx("button",{type:"button",className:`play-btn ${d?"playing":""}`,onClick:U,title:d?"Pause (Space)":"Play (Space)","aria-label":d?"Pause (Space)":"Play (Space)",children:d?c.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",children:[c.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1.5"}),c.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1.5"})]}):c.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"currentColor",style:{marginLeft:"2px"},children:c.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})})}),c.jsx("button",{type:"button",className:"ctrl-btn",onClick:E,disabled:tt,title:"Next Move (Right Arrow)","aria-label":"Next Move (Right Arrow)",children:c.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("polygon",{points:"5 5 17 12 5 19 5 5",fill:"currentColor"})})}),c.jsx("button",{type:"button",className:"ctrl-btn",onClick:_,disabled:tt,title:"Jump to End (End)","aria-label":"Jump to End (End)",children:c.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[c.jsx("polygon",{points:"5 5 16 12 5 19 5 5",fill:"currentColor"}),c.jsx("line",{x1:"19",y1:"5",x2:"19",y2:"19",strokeLinecap:"round"})]})})]}),c.jsxs("div",{className:"action-btns",children:[c.jsx("button",{type:"button",className:"action-btn secondary",onClick:ct,title:"Exit Replay to Result Screen (Esc)",children:c.jsx("span",{children:"Exit Replay"})}),c.jsxs("button",{type:"button",className:"action-btn primary",onClick:Y,title:"Start New Match",children:[c.jsxs("svg",{viewBox:"0 0 24 24",width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[c.jsx("path",{d:"M1 4v6h6M23 20v-6h-6",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15",strokeLinecap:"round",strokeLinejoin:"round"})]}),c.jsx("span",{children:"Rematch"})]})]})]}),c.jsx("style",{children:`
        .replay-controls-card {
          width: 100%;
          max-width: 660px;
          margin: 0 auto;
          background: rgba(18, 24, 48, 0.94);
          border: 1px solid var(--surface-border-glow);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.2);
          border-radius: var(--radius-lg);
          padding: clamp(10px, 1.8vh, 16px) clamp(12px, 2.5vw, 20px);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: overlayFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .replay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .replay-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(99, 102, 241, 0.25);
          border: 1px solid rgba(129, 140, 248, 0.4);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          color: #a5b4fc;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .replay-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
        }

        .replay-step-info {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: var(--text-main);
          font-weight: 600;
          flex: 1;
          min-width: 160px;
        }

        .move-detail {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .token-thumb {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .victory-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 700;
        }

        .victory-pill.draw {
          background: rgba(245, 158, 11, 0.2);
          border-color: rgba(245, 158, 11, 0.4);
          color: #fbbf24;
        }

        .trophy-icon {
          font-size: 13px;
        }

        .speed-pills {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          padding: 2px;
          gap: 2px;
        }

        .speed-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .speed-btn:hover {
          color: var(--text-main);
        }

        .speed-btn.active {
          background: var(--accent-gradient);
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.4);
        }

        .scrubber-row {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .scrubber-time {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-dim);
          min-width: 16px;
          text-align: center;
        }

        .slider-wrapper {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          height: 20px;
        }

        .replay-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          outline: none;
          position: relative;
          z-index: 2;
          cursor: pointer;
        }

        .replay-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.8), 0 2px 4px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .replay-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider-progress {
          position: absolute;
          left: 0;
          top: 7px;
          height: 6px;
          background: var(--accent-gradient);
          border-radius: 999px;
          pointer-events: none;
          z-index: 1;
        }

        .controls-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .playback-btns {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ctrl-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .ctrl-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-1px);
        }

        .ctrl-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .play-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-gradient);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.45);
          transition: all 0.2s ease;
        }

        .play-btn:hover {
          transform: scale(1.08);
          filter: brightness(1.1);
        }

        .play-btn:active {
          transform: scale(0.96);
        }

        .action-btns {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-main);
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .action-btn.primary {
          background: var(--accent-gradient);
          border: none;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
        }

        .action-btn.primary:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        @media (max-width: 520px) {
          .controls-footer {
            justify-content: center;
          }
          .action-btns {
            width: 100%;
            justify-content: center;
            margin-left: 0;
          }
        }
      `})]})};var Bs={};(function x(o,d,s,N){var O=!!(o.Worker&&o.Blob&&o.Promise&&o.OffscreenCanvas&&o.OffscreenCanvasRenderingContext2D&&o.HTMLCanvasElement&&o.HTMLCanvasElement.prototype.transferControlToOffscreen&&o.URL&&o.URL.createObjectURL),z=typeof Path2D=="function"&&typeof DOMMatrix=="function",A=(function(){if(!o.OffscreenCanvas)return!1;try{var S=new OffscreenCanvas(1,1),v=S.getContext("2d");v.fillRect(0,0,1,1);var W=S.transferToImageBitmap();v.createPattern(W,"no-repeat")}catch{return!1}return!0})();function U(){}function E(S){var v=d.exports.Promise,W=v!==void 0?v:o.Promise;return typeof W=="function"?new W(S):(S(U,U),null)}var D=(function(S,v){return{transform:function(W){if(S)return W;if(v.has(W))return v.get(W);var et=new OffscreenCanvas(W.width,W.height),h=et.getContext("2d");return h.drawImage(W,0,0),v.set(W,et),et},clear:function(){v.clear()}}})(A,new Map),g=(function(){var S=Math.floor(16.666666666666668),v,W,et={},h=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(v=function(M){var B=Math.random();return et[B]=requestAnimationFrame(function H(V){h===V||h+S-1<V?(h=V,delete et[B],M()):et[B]=requestAnimationFrame(H)}),B},W=function(M){et[M]&&cancelAnimationFrame(et[M])}):(v=function(M){return setTimeout(M,S)},W=function(M){return clearTimeout(M)}),{frame:v,cancel:W}})(),_=(function(){var S,v,W={};function et(h){function M(B,H){h.postMessage({options:B||{},callback:H})}h.init=function(H){var V=H.transferControlToOffscreen();h.postMessage({canvas:V},[V])},h.fire=function(H,V,$){if(v)return M(H,null),v;var I=Math.random().toString(36).slice(2);return v=E(function(q){function X(_t){_t.data.callback===I&&(delete W[I],h.removeEventListener("message",X),v=null,D.clear(),$(),q())}h.addEventListener("message",X),M(H,I),W[I]=X.bind(null,{data:{callback:I}})}),v},h.reset=function(){h.postMessage({reset:!0});for(var H in W)W[H](),delete W[H]}}return function(){if(S)return S;if(!s&&O){var h=["var CONFETTI, SIZE = {}, module = {};","("+x.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{S=new Worker(URL.createObjectURL(new Blob([h])))}catch(M){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",M),null}et(S)}return S}})(),Q={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ot(S,v){return v?v(S):S}function ct(S){return S!=null}function Y(S,v,W){return ot(S&&ct(S[v])?S[v]:Q[v],W)}function L(S){return S<0?0:Math.floor(S)}function tt(S,v){return Math.floor(Math.random()*(v-S))+S}function Nt(S){return parseInt(S,16)}function zt(S){return S.map(Lt)}function Lt(S){var v=String(S).replace(/[^0-9a-f]/gi,"");return v.length<6&&(v=v[0]+v[0]+v[1]+v[1]+v[2]+v[2]),{r:Nt(v.substring(0,2)),g:Nt(v.substring(2,4)),b:Nt(v.substring(4,6))}}function vt(S){var v=Y(S,"origin",Object);return v.x=Y(v,"x",Number),v.y=Y(v,"y",Number),v}function Z(S){S.width=document.documentElement.clientWidth,S.height=document.documentElement.clientHeight}function ht(S){var v=S.getBoundingClientRect();S.width=v.width,S.height=v.height}function Mt(S){var v=document.createElement("canvas");return v.style.position="fixed",v.style.top="0px",v.style.left="0px",v.style.pointerEvents="none",v.style.zIndex=S,v}function Yt(S,v,W,et,h,M,B,H,V){S.save(),S.translate(v,W),S.rotate(M),S.scale(et,h),S.arc(0,0,1,B,H,V),S.restore()}function Xt(S){var v=S.angle*(Math.PI/180),W=S.spread*(Math.PI/180);return{x:S.x,y:S.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:S.startVelocity*.5+Math.random()*S.startVelocity,angle2D:-v+(.5*W-Math.random()*W),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:S.color,shape:S.shape,tick:0,totalTicks:S.ticks,decay:S.decay,drift:S.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:S.gravity*3,ovalScalar:.6,scalar:S.scalar,flat:S.flat}}function Ut(S,v){v.x+=Math.cos(v.angle2D)*v.velocity+v.drift,v.y+=Math.sin(v.angle2D)*v.velocity+v.gravity,v.velocity*=v.decay,v.flat?(v.wobble=0,v.wobbleX=v.x+10*v.scalar,v.wobbleY=v.y+10*v.scalar,v.tiltSin=0,v.tiltCos=0,v.random=1):(v.wobble+=v.wobbleSpeed,v.wobbleX=v.x+10*v.scalar*Math.cos(v.wobble),v.wobbleY=v.y+10*v.scalar*Math.sin(v.wobble),v.tiltAngle+=.1,v.tiltSin=Math.sin(v.tiltAngle),v.tiltCos=Math.cos(v.tiltAngle),v.random=Math.random()+2);var W=v.tick++/v.totalTicks,et=v.x+v.random*v.tiltCos,h=v.y+v.random*v.tiltSin,M=v.wobbleX+v.random*v.tiltCos,B=v.wobbleY+v.random*v.tiltSin;if(S.fillStyle="rgba("+v.color.r+", "+v.color.g+", "+v.color.b+", "+(1-W)+")",S.beginPath(),z&&v.shape.type==="path"&&typeof v.shape.path=="string"&&Array.isArray(v.shape.matrix))S.fill(nt(v.shape.path,v.shape.matrix,v.x,v.y,Math.abs(M-et)*.1,Math.abs(B-h)*.1,Math.PI/10*v.wobble));else if(v.shape.type==="bitmap"){var H=Math.PI/10*v.wobble,V=Math.abs(M-et)*.1,$=Math.abs(B-h)*.1,I=v.shape.bitmap.width*v.scalar,q=v.shape.bitmap.height*v.scalar,X=new DOMMatrix([Math.cos(H)*V,Math.sin(H)*V,-Math.sin(H)*$,Math.cos(H)*$,v.x,v.y]);X.multiplySelf(new DOMMatrix(v.shape.matrix));var _t=S.createPattern(D.transform(v.shape.bitmap),"no-repeat");_t.setTransform(X),S.globalAlpha=1-W,S.fillStyle=_t,S.fillRect(v.x-I/2,v.y-q/2,I,q),S.globalAlpha=1}else if(v.shape==="circle")S.ellipse?S.ellipse(v.x,v.y,Math.abs(M-et)*v.ovalScalar,Math.abs(B-h)*v.ovalScalar,Math.PI/10*v.wobble,0,2*Math.PI):Yt(S,v.x,v.y,Math.abs(M-et)*v.ovalScalar,Math.abs(B-h)*v.ovalScalar,Math.PI/10*v.wobble,0,2*Math.PI);else if(v.shape==="star")for(var gt=Math.PI/2*3,lt=4*v.scalar,it=8*v.scalar,mt=v.x,rt=v.y,le=5,me=Math.PI/le;le--;)mt=v.x+Math.cos(gt)*it,rt=v.y+Math.sin(gt)*it,S.lineTo(mt,rt),gt+=me,mt=v.x+Math.cos(gt)*lt,rt=v.y+Math.sin(gt)*lt,S.lineTo(mt,rt),gt+=me;else S.moveTo(Math.floor(v.x),Math.floor(v.y)),S.lineTo(Math.floor(v.wobbleX),Math.floor(h)),S.lineTo(Math.floor(M),Math.floor(B)),S.lineTo(Math.floor(et),Math.floor(v.wobbleY));return S.closePath(),S.fill(),v.tick<v.totalTicks}function yt(S,v,W,et,h){var M=v.slice(),B=S.getContext("2d"),H,V,$=E(function(I){function q(){H=V=null,B.clearRect(0,0,et.width,et.height),D.clear(),h(),I()}function X(){s&&!(et.width===N.width&&et.height===N.height)&&(et.width=S.width=N.width,et.height=S.height=N.height),!et.width&&!et.height&&(W(S),et.width=S.width,et.height=S.height),B.clearRect(0,0,et.width,et.height),M=M.filter(function(_t){return Ut(B,_t)}),M.length?H=g.frame(X):q()}H=g.frame(X),V=q});return{addFettis:function(I){return M=M.concat(I),$},canvas:S,promise:$,reset:function(){H&&g.cancel(H),V&&V()}}}function Zt(S,v){var W=!S,et=!!Y(v||{},"resize"),h=!1,M=Y(v,"disableForReducedMotion",Boolean),B=O&&!!Y(v||{},"useWorker"),H=B?_():null,V=W?Z:ht,$=S&&H?!!S.__confetti_initialized:!1,I=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,q;function X(gt,lt,it){for(var mt=Y(gt,"particleCount",L),rt=Y(gt,"angle",Number),le=Y(gt,"spread",Number),me=Y(gt,"startVelocity",Number),tl=Y(gt,"decay",Number),Ma=Y(gt,"gravity",Number),Oa=Y(gt,"drift",Number),dl=Y(gt,"colors",zt),Sn=Y(gt,"ticks",Number),aa=Y(gt,"shapes"),wn=Y(gt,"scalar"),xi=!!Y(gt,"flat"),Ke=vt(gt),Aa=mt,na=[],Pu=S.width*Ke.x,Si=S.height*Ke.y;Aa--;)na.push(Xt({x:Pu,y:Si,angle:rt,spread:le,startVelocity:me,color:dl[Aa%dl.length],shape:aa[tt(0,aa.length)],ticks:Sn,decay:tl,gravity:Ma,drift:Oa,scalar:wn,flat:xi}));return q?q.addFettis(na):(q=yt(S,na,V,lt,it),q.promise)}function _t(gt){var lt=M||Y(gt,"disableForReducedMotion",Boolean),it=Y(gt,"zIndex",Number);if(lt&&I)return E(function(me){me()});W&&q?S=q.canvas:W&&!S&&(S=Mt(it),document.body.appendChild(S)),et&&!$&&V(S);var mt={width:S.width,height:S.height};H&&!$&&H.init(S),$=!0,H&&(S.__confetti_initialized=!0);function rt(){if(H){var me={getBoundingClientRect:function(){if(!W)return S.getBoundingClientRect()}};V(me),H.postMessage({resize:{width:me.width,height:me.height}});return}mt.width=mt.height=null}function le(){q=null,et&&(h=!1,o.removeEventListener("resize",rt)),W&&S&&(document.body.contains(S)&&document.body.removeChild(S),S=null,$=!1)}return et&&!h&&(h=!0,o.addEventListener("resize",rt,!1)),H?H.fire(gt,mt,le):X(gt,mt,le)}return _t.reset=function(){H&&H.reset(),q&&q.reset()},_t}var Bt;function G(){return Bt||(Bt=Zt(null,{useWorker:!0,resize:!0})),Bt}function nt(S,v,W,et,h,M,B){var H=new Path2D(S),V=new Path2D;V.addPath(H,new DOMMatrix(v));var $=new Path2D;return $.addPath(V,new DOMMatrix([Math.cos(B)*h,Math.sin(B)*h,-Math.sin(B)*M,Math.cos(B)*M,W,et])),$}function at(S){if(!z)throw new Error("path confetti are not supported in this browser");var v,W;typeof S=="string"?v=S:(v=S.path,W=S.matrix);var et=new Path2D(v),h=document.createElement("canvas"),M=h.getContext("2d");if(!W){for(var B=1e3,H=B,V=B,$=0,I=0,q,X,_t=0;_t<B;_t+=2)for(var gt=0;gt<B;gt+=2)M.isPointInPath(et,_t,gt,"nonzero")&&(H=Math.min(H,_t),V=Math.min(V,gt),$=Math.max($,_t),I=Math.max(I,gt));q=$-H,X=I-V;var lt=10,it=Math.min(lt/q,lt/X);W=[it,0,0,it,-Math.round(q/2+H)*it,-Math.round(X/2+V)*it]}return{type:"path",path:v,matrix:W}}function Et(S){var v,W=1,et="#000000",h='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof S=="string"?v=S:(v=S.text,W="scalar"in S?S.scalar:W,h="fontFamily"in S?S.fontFamily:h,et="color"in S?S.color:et);var M=10*W,B=""+M+"px "+h,H=new OffscreenCanvas(M,M),V=H.getContext("2d");V.font=B;var $=V.measureText(v),I=Math.ceil($.actualBoundingBoxRight+$.actualBoundingBoxLeft),q=Math.ceil($.actualBoundingBoxAscent+$.actualBoundingBoxDescent),X=2,_t=$.actualBoundingBoxLeft+X,gt=$.actualBoundingBoxAscent+X;I+=X+X,q+=X+X,H=new OffscreenCanvas(I,q),V=H.getContext("2d"),V.font=B,V.fillStyle=et,V.fillText(v,_t,gt);var lt=1/W;return{type:"bitmap",bitmap:H.transferToImageBitmap(),matrix:[lt,0,0,lt,-I*lt/2,-q*lt/2]}}d.exports=function(){return G().apply(this,arguments)},d.exports.reset=function(){G().reset()},d.exports.create=Zt,d.exports.shapeFromPath=at,d.exports.shapeFromText=Et})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Bs,!1);const Xg=Bs.exports;Bs.exports.create;const Qg=({status:x,mode:o,isDismissed:d,onRematch:s,onReviewBoard:N,onShowOverlay:O,onNavigateHome:z,onOpenSettings:A,onWatchReplay:U,p1Name:E="Player 1",p2Name:D=o==="ai"?"Computer":"Player 2",reducedMotion:g=!1})=>{if(x.kind==="playing")return null;if(J.useEffect(()=>{g||x.kind==="won"&&(o==="local"||o==="ai"&&x.winner===1)&&Xg({particleCount:85,spread:70,origin:{y:.6},colors:x.winner===1?["#ef4444","#f87171","#ffffff"]:["#eab308","#facc15","#ffffff"]})},[x,o,g]),d)return c.jsxs("div",{className:"review-banner-container",children:[c.jsxs("div",{className:"review-banner",children:[c.jsx("span",{children:"Board inspection mode"}),c.jsxs("div",{className:"review-actions",children:[U&&c.jsxs("button",{type:"button",className:"btn-small replay",onClick:U,children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2.5",style:{marginRight:"4px",verticalAlign:"-1px"},children:c.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Replay"]}),c.jsx("button",{type:"button",className:"btn-small primary",onClick:s,children:"Rematch"}),c.jsx("button",{type:"button",className:"btn-small secondary",onClick:O,children:"Show Result"})]})]}),c.jsx("style",{children:`
          .review-banner-container {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
            width: 90%;
            max-width: 440px;
          }

          .review-banner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(15, 23, 42, 0.92);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 10px 16px;
            border-radius: var(--radius-full);
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }

          .review-actions {
            display: flex;
            gap: 8px;
          }

          .btn-small {
            padding: 6px 14px;
            border-radius: var(--radius-full);
            font-size: 13px;
            font-weight: 700;
            transition: all 0.2s ease;
          }

          .btn-small.primary {
            background: var(--accent-gradient);
            color: #fff;
          }

          .btn-small.secondary {
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
          }

          .btn-small.replay {
            background: rgba(99, 102, 241, 0.35);
            border: 1px solid rgba(129, 140, 248, 0.5);
            color: #fff;
            display: inline-flex;
            align-items: center;
          }

          .btn-small.replay:hover {
            background: rgba(99, 102, 241, 0.55);
          }
        `})]});const _=x.kind==="won",Q=_?x.winner===1?E:D:null;return c.jsxs("div",{className:"result-backdrop",role:"dialog","aria-modal":"true","aria-labelledby":"result-title",children:[c.jsxs("div",{className:"result-card",children:[_&&c.jsx("div",{className:"result-token-showcase",children:c.jsx("div",{className:"result-token-wrapper",children:c.jsx(bi,{player:x.winner})})}),c.jsx("h2",{id:"result-title",className:"result-title",children:_?`${Q} Victory!`:"It's a Draw!"}),c.jsx("p",{className:"result-desc",children:_?`${Q} lined up 4 in a row to take the match.`:"Every slot has been filled without a four-in-a-row alignment."}),c.jsxs("div",{className:"result-buttons",children:[c.jsxs("button",{type:"button",className:"action-btn primary-btn",onClick:s,autoFocus:!0,children:[c.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[c.jsx("path",{d:"M1 4v6h6M23 20v-6h-6",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Play Rematch (R)"]}),U&&c.jsxs("button",{type:"button",className:"action-btn replay-btn",onClick:U,children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:c.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),"Watch Replay"]}),c.jsx("button",{type:"button",className:"action-btn secondary-btn",onClick:N,children:"Review Board"}),c.jsxs("div",{className:"aux-buttons",children:[c.jsx("button",{type:"button",className:"action-btn tertiary-btn",onClick:z,children:"Main Menu"}),c.jsx("button",{type:"button",className:"action-btn tertiary-btn",onClick:A,children:"Settings"})]})]})]}),c.jsx("style",{children:`
        .result-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 6, 18, 0.78);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 90;
          animation: overlayFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .result-card {
          width: 100%;
          max-width: 440px;
          background: rgba(22, 28, 58, 0.95);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .result-token-showcase {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .result-token-wrapper {
          width: 68px;
          height: 68px;
        }

        .result-title {
          font-size: clamp(24px, 5vw, 30px);
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .result-desc {
          font-size: 15px;
          color: var(--text-muted);
          margin-bottom: 26px;
          line-height: 1.5;
        }

        .result-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          font-size: 16px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .primary-btn {
          background: var(--accent-gradient);
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);
        }

        .primary-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        .replay-btn {
          background: rgba(99, 102, 241, 0.16);
          border: 1px solid rgba(129, 140, 248, 0.38);
          color: var(--text-main);
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.2);
        }

        .replay-btn:hover {
          background: rgba(99, 102, 241, 0.3);
          border-color: rgba(129, 140, 248, 0.65);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
        }

        .secondary-btn {
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          color: var(--text-main);
        }

        .secondary-btn:hover {
          background: var(--surface-glass-hover);
        }

        .aux-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 4px;
        }

        .tertiary-btn {
          background: transparent;
          border: 1px solid var(--surface-border);
          color: var(--text-muted);
          font-size: 14px;
          padding: 10px;
        }

        .tertiary-btn:hover {
          background: var(--surface-glass);
          color: var(--text-main);
        }
      `})]})},Zg=({status:x,mode:o,isAiThinking:d,p1Name:s="Player 1",p2Name:N=o==="ai"?"Computer":"Player 2"})=>{let O="",z="",A=null;if(x.kind==="playing"){A=x.next;const U=o==="ai"&&A===2;d?(O=`${N} is thinking...`,z="Analyzing board positions"):(O=`${A===1?s:N}'s Turn`,z=U?"Computer is calculating":"Choose a column to drop")}else x.kind==="won"?(A=x.winner,O=`${x.winner===1?s:N} Wins!`,z="4 in a row connected!"):(O="It's a Draw!",z="Board is completely full");return c.jsxs("div",{className:"turn-indicator-card","aria-live":"polite","aria-atomic":"true",children:[c.jsx("div",{className:"player-badge-container",children:A&&c.jsx("div",{className:"token-preview-wrapper",children:c.jsx(bi,{player:A})})}),c.jsxs("div",{className:"text-info",children:[c.jsxs("h2",{className:"turn-title",children:[O,d&&c.jsx("span",{className:"thinking-dots",children:"..."})]}),c.jsx("p",{className:"turn-subtitle",children:z})]}),c.jsx("style",{children:`
        .turn-indicator-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--surface-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 10px 22px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 0 20px var(--surface-border-glow);
          transition: all 0.25s ease;
        }

        .player-badge-container {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .token-preview-wrapper {
          width: 38px;
          height: 38px;
        }

        .text-info {
          display: flex;
          flex-direction: column;
        }

        .turn-title {
          font-size: clamp(16px, 3.5vw, 19px);
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .turn-subtitle {
          font-size: clamp(12px, 2.5vw, 13px);
          color: var(--text-muted);
          margin-top: 1px;
        }

        .thinking-dots {
          display: inline-block;
          animation: ghostFloat 1s infinite alternate;
        }
      `})]})},$u={rows:6,cols:7,connect:4};class Ml{constructor(o,d,s=$u,N=0){te(this,"config");te(this,"grid");te(this,"heights");te(this,"moveCount");this.config=s;const{rows:O,cols:z}=s;if(o&&d)this.grid=o,this.heights=d;else{const A=Array.from({length:O},()=>Array.from({length:z},()=>0));this.grid=A,this.heights=Array.from({length:z},()=>0)}this.moveCount=N}get rows(){return this.config.rows}get cols(){return this.config.cols}cellAt(o,d){return o<0||o>=this.config.rows||d<0||d>=this.config.cols?0:this.grid[o][d]}columnHeight(o){return o<0||o>=this.config.cols?this.config.rows:this.heights[o]}isColumnFull(o){return this.columnHeight(o)>=this.config.rows}isFull(){return this.heights.every(o=>o>=this.config.rows)}legalMoves(){const o=[];for(let d=0;d<this.config.cols;d++)this.isColumnFull(d)||o.push(d);return o}drop(o,d){if(o<0||o>=this.config.cols)return{success:!1,error:"OUT_OF_RANGE"};const s=this.heights[o];if(s>=this.config.rows)return{success:!1,error:"COLUMN_FULL"};const N=s,O=this.grid.map((U,E)=>{if(E===N){const D=[...U];return D[o]=d,D}return U}),z=[...this.heights];return z[o]=s+1,{success:!0,board:new Ml(O,z,this.config,this.moveCount+1),row:N,col:o,player:d}}dropOrThrow(o,d){const s=this.drop(o,d);if(!s.success)throw new Error(`Drop failed: ${s.error}`);return s.board}getRawGrid(){return this.grid}static createEmpty(o=$u){return new Ml(void 0,void 0,o,0)}}class Iu{constructor(o=1,d=$u){te(this,"config");te(this,"_state");this.config=d,this._state={board:Ml.createEmpty(d),status:{kind:"playing",next:o},history:[],starter:o}}get state(){return this._state}get board(){return this._state.board}get status(){return this._state.status}get isOver(){return this._state.status.kind!=="playing"}get history(){return this._state.history}get currentPlayer(){return this._state.status.kind==="playing"?this._state.status.next:null}makeMove(o){if(this._state.status.kind!=="playing")return{success:!1,error:"GAME_OVER"};const d=this._state.status.next,s=this._state.board.drop(o,d);if(!s.success)return{success:!1,error:s.error};const N=s.board,O={col:o,row:s.row,player:d},z=la.checkWinFromMove(N.getRawGrid(),s.row,o,d,this.config);let A;return z?A={kind:"won",winner:d,line:z}:N.isFull()?A={kind:"draw"}:A={kind:"playing",next:d===1?2:1},this._state={board:N,status:A,history:[...this._state.history,O],starter:this._state.starter},{success:!0,move:O,status:A}}undo(o=1){if(this._state.history.length===0||o<=0)return!1;const d=Math.max(0,this._state.history.length-o),s=this._state.history.slice(0,d);let N=Ml.createEmpty(this.config);for(const z of s){const A=N.drop(z.col,z.player);A.success&&(N=A.board)}const O=s.length%2===0?this._state.starter:this._state.starter===1?2:1;return this._state={board:N,status:{kind:"playing",next:O},history:s,starter:this._state.starter},!0}rematch(o="alternating"){let d;const s=this._state.starter;switch(o){case"alternating":d=s===1?2:1;break;case"winner":d=this._state.status.kind==="won"?this._state.status.winner:s;break;case"loser":this._state.status.kind==="won"?d=this._state.status.winner===1?2:1:d=s===1?2:1;break;case"always-p1":d=1;break;case"always-p2":d=2;break}this._state={board:Ml.createEmpty(this.config),status:{kind:"playing",next:d},history:[],starter:d}}toMoveString(){return this._state.history.map(o=>o.col.toString()).join("")}static fromMoveString(o,d=1,s=$u){const N=new Iu(d,s);for(const O of o){const z=parseInt(O,10);isNaN(z)||N.makeMove(z)}return N}}const wh="four_in_a_row_state_v1",jh={theme:"system",palette:"classic",sound:!0,haptics:!0,reducedMotion:"system"},Fu={version:1,settings:jh,stats:{}};class Kg{constructor(){te(this,"cachedState",null)}load(){if(this.cachedState)return this.cachedState;if(typeof window>"u"||!window.localStorage)return{...Fu};try{const o=localStorage.getItem(wh);if(!o)return this.cachedState={...Fu},this.cachedState;const d=JSON.parse(o);return!d||typeof d!="object"||d.version!==1?(console.warn("Unknown state version, resetting to defaults."),this.cachedState={...Fu},this.save(this.cachedState),this.cachedState):(this.cachedState={version:1,settings:{...jh,...d.settings},stats:d.stats||{},inProgress:d.inProgress},this.cachedState)}catch(o){return console.error("Failed to load state from localStorage, falling back to default:",o),this.cachedState={...Fu},this.cachedState}}save(o){if(this.cachedState=o,!(typeof window>"u"||!window.localStorage))try{localStorage.setItem(wh,JSON.stringify(o))}catch(d){console.error("Failed to write state to localStorage:",d)}}updateSettings(o){const d=this.load(),s={...d.settings,...o};return this.save({...d,settings:s}),s}recordGame(o,d,s){const N=this.load(),O=N.stats[o]||{played:0,won:0,lost:0,drawn:0,bestStreak:0,currentStreak:0,hintsUsed:0},z=O.played+1;let A=O.won,U=O.lost,E=O.drawn,D=O.currentStreak,g=O.bestStreak,_=O.fastestWinMoves;d==="win"?(A++,D++,D>g&&(g=D),s!==void 0&&(!_||s<_)&&(_=s)):d==="loss"?(U++,D=0):(E++,D=0);const Q={...O,played:z,won:A,lost:U,drawn:E,bestStreak:g,currentStreak:D,fastestWinMoves:_};this.save({...N,stats:{...N.stats,[o]:Q},inProgress:void 0})}incrementHintUsed(o){const d=this.load(),s=d.stats[o]||{played:0,won:0,lost:0,drawn:0,bestStreak:0,currentStreak:0,hintsUsed:0};this.save({...d,stats:{...d.stats,[o]:{...s,hintsUsed:s.hintsUsed+1}}})}saveInProgress(o){const d=this.load();this.save({...d,inProgress:o})}clearInProgress(){const o=this.load();o.inProgress&&this.save({...o,inProgress:void 0})}resetStats(){const o=this.load();this.save({...o,stats:{}})}}const je=new Kg,Jg=({mode:x,difficulty:o="medium",soundPlayer:d,haptics:s,onNavigateHome:N,onOpenSettings:O,initialMoveString:z,initialStarter:A=1,reducedMotion:U=!1})=>{const[E,D]=J.useState(()=>z?Iu.fromMoveString(z,A):new Iu(A)),[g,_]=J.useState(!1),[Q,ot]=J.useState(!1),[ct,Y]=J.useState(null),[L,tt]=J.useState(null),[Nt,zt]=J.useState(!1),[Lt,vt]=J.useState(!1),[Z,ht]=J.useState(!1),[Mt,Yt]=J.useState(0),[Xt,Ut]=J.useState(!1),[yt,Zt]=J.useState(1),Bt=J.useRef(null);J.useEffect(()=>(x==="ai"&&(Bt.current=new Lg),()=>{var lt;(lt=Bt.current)==null||lt.destroy()}),[x]);const G=x==="ai"?`ai:${o}`:"local";J.useEffect(()=>{E.isOver?je.clearInProgress():E.history.length>0&&je.saveInProgress({mode:x,level:o,starter:E.state.starter,moves:E.toMoveString(),startedAt:new Date().toISOString()})},[E,x,o]),J.useEffect(()=>{if(E.isOver){const lt=E.status.kind==="won";if(lt?(d.play("win"),s.trigger("success")):(d.play("draw"),s.trigger("medium")),lt){const mt=E.status.winner===1;if(x==="local")je.recordGame(G,"win",E.history.length);else{const rt=mt?"win":"loss";je.recordGame(G,rt,mt?E.history.length:void 0)}}else je.recordGame(G,"draw");const it=setTimeout(()=>{vt(!0)},700);return()=>clearTimeout(it)}},[E.isOver,E.status,x,G,d,s,E.history.length]);const nt=J.useCallback(async lt=>{if(g||E.isOver)return;const it=E.makeMove(lt);if(!it.success){d.play("invalid"),s.trigger("error");return}d.play("drop"),s.trigger("light"),Y(it.move),tt(null),D(Object.assign(Object.create(Object.getPrototypeOf(E)),E)),_(!0),setTimeout(()=>{_(!1)},U?50:380)},[E,g,U,d,s]);J.useEffect(()=>{if(x!=="ai"||E.isOver||E.currentPlayer!==2)return;let lt=!0;return ot(!0),_(!0),(async()=>{try{const mt=await(Bt.current?Bt.current.getMove(E.board,2,o):new yi(4).chooseMove(E.board,2));if(!lt)return;ot(!1);const rt=E.makeMove(mt);rt.success&&(d.play("drop"),s.trigger("light"),Y(rt.move),D(Object.assign(Object.create(Object.getPrototypeOf(E)),E))),setTimeout(()=>{lt&&_(!1)},U?50:380)}catch(mt){console.error("AI Move calculation error:",mt),lt&&(ot(!1),_(!1))}})(),()=>{lt=!1}},[E,x,o,U,d,s]);const at=J.useCallback(()=>{if(g||E.history.length===0)return;const lt=x==="ai"?2:1;E.undo(lt)&&(d.play("click"),Y(null),tt(null),vt(!1),zt(!1),D(Object.assign(Object.create(Object.getPrototypeOf(E)),E)))},[E,g,x,d]),Et=J.useCallback(async()=>{if(!(g||E.isOver||Q))try{je.incrementHintUsed(G);const it=await new yi(4,400).chooseMove(E.board,E.currentPlayer||1);tt(it),d.play("click")}catch(lt){console.warn("Hint calculation error:",lt)}},[E,g,Q,G,d]),S=J.useCallback((lt="alternating")=>{E.rematch(lt),Y(null),tt(null),vt(!1),zt(!1),_(!1),ot(!1),ht(!1),Ut(!1),D(Object.assign(Object.create(Object.getPrototypeOf(E)),E)),d.play("click")},[E,d]),v=J.useCallback(()=>{vt(!1),zt(!1),ht(!0),Yt(0),Ut(!0),d.play("click")},[d]),W=J.useCallback(()=>{ht(!1),Ut(!1),vt(!0),d.play("click")},[d]),et=J.useCallback(()=>{Xt?Ut(!1):(Mt>=E.history.length&&Yt(0),Ut(!0))},[Xt,Mt,E.history.length]),h=J.useCallback(()=>{Mt<E.history.length&&(Yt(lt=>lt+1),d.play("drop"))},[Mt,E.history.length,d]),M=J.useCallback(()=>{Mt>0&&(Yt(lt=>lt-1),d.play("click"))},[Mt,d]),B=J.useCallback(()=>{Yt(0),Ut(!1),d.play("click")},[d]),H=J.useCallback(()=>{Yt(E.history.length),Ut(!1),d.play("click")},[E.history.length,d]),V=J.useCallback(lt=>{const it=Math.max(0,Math.min(E.history.length,lt));Yt(it),Ut(!1),it>0&&d.play("drop")},[E.history.length,d]);J.useEffect(()=>{if(!Z||!Xt)return;if(Mt>=E.history.length){Ut(!1);return}const it=setTimeout(()=>{Yt(mt=>{const rt=mt+1;return d.play("drop"),rt>=E.history.length&&(Ut(!1),E.status.kind==="won"&&(d.play("win"),s.trigger("success"))),rt})},yt===.5?900:yt===2?280:550);return()=>clearTimeout(it)},[Z,Xt,Mt,yt,E.history.length,E.status,d,s]),J.useEffect(()=>{const lt=it=>{it.target instanceof HTMLInputElement||it.target instanceof HTMLTextAreaElement||Z||(it.key==="u"||it.key==="U"?(it.preventDefault(),at()):it.key==="r"||it.key==="R"?(it.preventDefault(),S("alternating")):(it.key==="h"||it.key==="H")&&(it.preventDefault(),Et()))};return window.addEventListener("keydown",lt),()=>window.removeEventListener("keydown",lt)},[at,S,Et,Z]);const $=x==="ai"?"You":"Player 1",I=x==="ai"?`AI (${o})`:"Player 2",q=J.useMemo(()=>{if(!Z)return E.board;let lt=Ml.createEmpty(E.config);for(let it=0;it<Mt;it++){const mt=E.history[it],rt=lt.drop(mt.col,mt.player);rt.success&&(lt=rt.board)}return lt},[Z,Mt,E.config,E.history,E.board]),X=Z?Mt>0?E.history[Mt-1]:null:ct,_t=Z?Mt===E.history.length&&E.status.kind==="won"?E.status.line:null:E.status.kind==="won"?E.status.line:null,gt=Z?Mt===0?E.state.starter:E.history[Mt-1].player===1?2:1:E.currentPlayer||1;return c.jsxs("div",{className:"game-page-container",children:[c.jsx("div",{className:"game-info-side",children:Z?c.jsx(Vg,{currentStep:Mt,totalSteps:E.history.length,isPlaying:Xt,playbackSpeed:yt,lastMove:X,status:E.status,p1Name:$,p2Name:I,onPlayToggle:et,onStepForward:h,onStepBackward:M,onJumpToStart:B,onJumpToEnd:H,onSeek:V,onSpeedChange:Zt,onExitReplay:W,onRematch:()=>S("alternating")}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"status-row",children:c.jsx(Zg,{status:E.status,mode:x,isAiThinking:Q,p1Name:$,p2Name:I})}),c.jsxs("div",{className:"game-toolbar",children:[c.jsxs("button",{type:"button",className:"tool-btn",onClick:at,disabled:g||E.history.length===0,title:"Undo Move (U)","aria-label":"Undo Move (U)",children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M3 7v6h6M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{children:"Undo"})]}),c.jsxs("button",{type:"button",className:"tool-btn",onClick:Et,disabled:g||E.isOver||Q,title:"Get Move Hint (H)","aria-label":"Get Move Hint (H)",children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.5V17a2 2 0 002 2h3a2 2 0 002-2v-2.5c2-1 3.5-3 3.5-5.5a7 7 0 00-7-7zM9 21h6",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{children:"Hint"})]}),c.jsxs("button",{type:"button",className:"tool-btn",onClick:()=>S("alternating"),title:"Restart Match (R)","aria-label":"Restart Match (R)",children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{children:"Restart"})]}),c.jsx("button",{type:"button",className:"tool-btn secondary",onClick:N,title:"Return to Main Menu","aria-label":"Return to Main Menu",children:c.jsx("span",{children:"Menu"})})]})]})}),c.jsx("div",{className:"board-play-area",children:c.jsx(Eh,{board:q,currentPlayer:gt,winningLine:_t,isLocked:Z||g||Q||x==="ai"&&E.currentPlayer===2,onDrop:nt,lastMove:X,hintCol:Z?null:L})}),Lt&&!Z&&c.jsx(Qg,{status:E.status,mode:x,isDismissed:Nt,onRematch:()=>S("alternating"),onReviewBoard:()=>zt(!0),onShowOverlay:()=>zt(!1),onNavigateHome:N,onOpenSettings:O,onWatchReplay:E.history.length>0?v:void 0,p1Name:$,p2Name:I,reducedMotion:U}),c.jsx("style",{children:`
        .game-page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
          padding: clamp(4px, 1.5vh, 12px) clamp(8px, 2vw, 16px) clamp(8px, 2vh, 24px);
          min-height: calc(100dvh - 70px);
          box-sizing: border-box;
        }

        .game-info-side {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(6px, 1.2vh, 12px);
          margin-bottom: clamp(6px, 1.2vh, 14px);
        }

        .status-row {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .board-play-area {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }

        .game-toolbar {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.5vw, 12px);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          padding: clamp(4px, 1vw, 8px) clamp(8px, 2vw, 16px);
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
          flex-wrap: wrap;
          justify-content: center;
        }

        .tool-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: clamp(6px, 1vh, 8px) clamp(10px, 1.8vw, 14px);
          border-radius: var(--radius-full);
          font-size: clamp(11px, 2.5vw, 13px);
          font-weight: 700;
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .tool-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-1px);
        }

        .tool-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .tool-btn.secondary {
          background: transparent;
          border-color: transparent;
          color: var(--text-dim);
        }

        .tool-btn.secondary:hover {
          color: var(--text-main);
          background: var(--surface-glass);
        }

        /* Landscape Mobile / Short Screen Split (Side-by-side) */
        @media (orientation: landscape) and (max-height: 560px) {
          .game-page-container {
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            gap: clamp(12px, 2.5vw, 28px);
            padding: 4px 12px;
            min-height: calc(100dvh - 50px);
            max-width: 920px;
          }

          .game-info-side {
            width: auto;
            flex-shrink: 0;
            margin-bottom: 0;
            gap: 10px;
          }

          .board-play-area {
            flex: initial;
            --board-max-height: calc(100dvh - 75px);
          }

          .game-toolbar {
            flex-direction: column;
            border-radius: var(--radius-lg);
            padding: 8px;
            gap: 6px;
          }

          .tool-btn {
            width: 100%;
            justify-content: center;
            padding: 6px 12px;
          }
        }
      `})]})},Th=[3,3,2,4,3,2,4,4,1,5,0,3],Wg=({onStartAiGame:x,onStartLocalGame:o,onOpenHowToPlay:d,hasSavedGame:s,onResumeSavedGame:N})=>{const[O,z]=J.useState("medium"),[A,U]=J.useState(()=>Ml.createEmpty()),[,E]=J.useState(0),[D,g]=J.useState(1);return J.useEffect(()=>{const _=setInterval(()=>{E(Q=>{if(Q>=Th.length)return U(Ml.createEmpty()),g(1),0;const ot=Th[Q];return U(ct=>{const Y=ct.drop(ot,D);return Y.success?Y.board:ct}),g(ct=>ct===1?2:1),Q+1})},1400);return()=>clearInterval(_)},[D]),c.jsxs("main",{className:"landing-container",children:[s&&c.jsxs("div",{className:"resume-banner",children:[c.jsxs("div",{className:"resume-info",children:[c.jsx("span",{className:"live-pulse-dot"}),c.jsx("span",{children:"Active match detected in progress"})]}),c.jsx("button",{type:"button",className:"resume-btn",onClick:N,children:"Resume Game →"})]}),c.jsxs("section",{className:"hero-section",children:[c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"hero-badge",children:[c.jsx("span",{className:"badge-glow-dot"})," Pure TypeScript Engine • 60 FPS"]}),c.jsxs("h1",{className:"hero-title",children:["Tactical Drop & Connect, ",c.jsx("span",{className:"gradient-text",children:"Perfected."})]}),c.jsx("p",{className:"hero-subtitle",children:"Enter the arena against our 5-tier calibrated AI running on dedicated Web Workers, or battle a rival in local pass & play. Powered by procedural Web Audio, accessible graphics, and zero latency."}),c.jsxs("div",{className:"hero-cta-box",children:[c.jsxs("div",{className:"difficulty-picker",children:[c.jsxs("div",{className:"picker-header",children:[c.jsx("span",{className:"picker-label",children:"AI CHALLENGE TIER"}),c.jsx("span",{className:"picker-hint",children:"Select opponent strength"})]}),c.jsx("div",{className:"difficulty-buttons",children:["beginner","easy","medium","hard","expert"].map(_=>c.jsxs("button",{type:"button",className:`diff-btn diff-${_} ${O===_?"active":""}`,onClick:()=>z(_),children:[c.jsx("span",{className:`diff-dot dot-${_}`}),_.charAt(0).toUpperCase()+_.slice(1)]},_))})]}),c.jsxs("div",{className:"cta-actions",children:[c.jsxs("button",{type:"button",className:"cta-btn primary-cta",onClick:()=>x(O),children:[c.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"currentColor",children:c.jsx("polygon",{points:"6 4 20 12 6 20 6 4"})}),c.jsx("span",{children:"Play vs Computer"})]}),c.jsxs("button",{type:"button",className:"cta-btn secondary-cta",onClick:o,children:[c.jsxs("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[c.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),c.jsx("circle",{cx:"9",cy:"7",r:"4"}),c.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]}),c.jsx("span",{children:"Two Players (Pass & Play)"})]})]})]})]}),c.jsxs("div",{className:"hero-board-wrapper","aria-hidden":"true",children:[c.jsx("div",{className:"board-ambient-glow"}),c.jsxs("div",{className:"demo-label",children:[c.jsx("span",{className:"live-pulse-dot"})," LIVE ENGINE ARENA"]}),c.jsx(Eh,{board:A,currentPlayer:D,winningLine:null,isLocked:!0,onDrop:()=>{}})]})]}),c.jsxs("section",{className:"how-it-works-section",children:[c.jsx("h2",{className:"section-title",children:"How It Works"}),c.jsxs("div",{className:"steps-container",children:[c.jsxs("div",{className:"step-card",children:[c.jsx("div",{className:"step-badge",children:"01"}),c.jsx("h3",{children:"Drop into Columns"}),c.jsx("p",{children:"Target any of the 7 column shafts. Real gravity easing sends your piece to the lowest open slot."})]}),c.jsxs("div",{className:"step-card",children:[c.jsx("div",{className:"step-badge",children:"02"}),c.jsx("h3",{children:"Form Lines of Four"}),c.jsx("p",{children:"Line up 4 matching pieces horizontally, vertically, or along diagonals while countering enemy vectors."})]}),c.jsxs("div",{className:"step-card",children:[c.jsx("div",{className:"step-badge",children:"03"}),c.jsx("h3",{children:"Claim Victory"}),c.jsx("p",{children:"Seal your four-in-a-row alignment before your rival corners you or the 42 slots exhaust into a draw."})]})]})]}),c.jsxs("section",{className:"ai-levels-section",children:[c.jsx("h2",{className:"section-title",children:"Calibrated AI Opponents"}),c.jsx("p",{className:"section-desc",children:"Because Connect Four is a mathematically solved game, a computer with perfect play wins every time as Player 1. Our engine calibrates 5 distinctive skill levels designed for genuine tactical fun and competition."}),c.jsxs("div",{className:"levels-grid",children:[c.jsxs("div",{className:"level-card tier-beginner",children:[c.jsxs("div",{className:"level-header",children:[c.jsx("span",{className:"level-tag beginner",children:"TIER 1"}),c.jsx("span",{className:"level-rank",children:"RECRUIT"})]}),c.jsx("h4",{children:"Beginner"}),c.jsx("p",{children:"Random legal exploration with a 50% chance of seizing an open win. Great for newcomers and casual play."})]}),c.jsxs("div",{className:"level-card tier-easy",children:[c.jsxs("div",{className:"level-header",children:[c.jsx("span",{className:"level-tag easy",children:"TIER 2"}),c.jsx("span",{className:"level-rank",children:"FIGHTER"})]}),c.jsx("h4",{children:"Easy"}),c.jsx("p",{children:"Always detects 1-ply winning moves and shuts down your immediate threats with center-biased tactical drops."})]}),c.jsxs("div",{className:"level-card tier-medium",children:[c.jsxs("div",{className:"level-header",children:[c.jsx("span",{className:"level-tag medium",children:"TIER 3"}),c.jsx("span",{className:"level-rank",children:"VETERAN"})]}),c.jsx("h4",{children:"Medium"}),c.jsx("p",{children:"Minimax search looking 4 plies ahead with alpha-beta pruning and positional window evaluations. A balanced foe."})]}),c.jsxs("div",{className:"level-card tier-hard",children:[c.jsxs("div",{className:"level-header",children:[c.jsx("span",{className:"level-tag hard",children:"TIER 4"}),c.jsx("span",{className:"level-rank",children:"ELITE"})]}),c.jsx("h4",{children:"Hard"}),c.jsx("p",{children:"Deep 7-ply alpha-beta search with center-first exploration ordering and transposition memory. Punishes subtle blunders."})]}),c.jsxs("div",{className:"level-card tier-expert",children:[c.jsxs("div",{className:"level-header",children:[c.jsx("span",{className:"level-tag expert",children:"TIER 5"}),c.jsx("span",{className:"level-rank",children:"MASTER"})]}),c.jsx("h4",{children:"Expert"}),c.jsx("p",{children:"Iterative deepening to depth 9 within a 1.5s time budget. Deep strategic foresight engineered for high-level players."})]})]})]}),c.jsx("footer",{className:"landing-footer",children:c.jsxs("div",{className:"footer-content",children:[c.jsxs("p",{children:["© ",new Date().getFullYear()," Four in a Row • Esports Tactical Engine"]}),c.jsxs("div",{className:"footer-links",children:[c.jsx("button",{type:"button",onClick:d,children:"Rules & Shortcuts"}),c.jsx("span",{children:"•"}),c.jsx("span",{children:"Local Storage Only"}),c.jsx("span",{children:"•"}),c.jsx("span",{children:"WCAG 2.2 AA"})]})]})}),c.jsx("style",{children:`
        .landing-container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: clamp(8px, 1.8vh, 18px) clamp(12px, 3vw, 26px) 60px;
          display: flex;
          flex-direction: column;
          gap: clamp(36px, 6vw, 64px);
          box-sizing: border-box;
          color: var(--text-main);
        }

        /* Active Match Resume Banner */
        .resume-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: clamp(10px, 1.5vh, 14px) clamp(14px, 2vw, 22px);
          border-radius: var(--radius-md);
          font-size: clamp(13px, 2.5vw, 15px);
          font-weight: 600;
          flex-wrap: wrap;
          gap: 10px;
        }

        .resume-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resume-btn {
          background: var(--accent-gradient);
          color: #fff;
          padding: 8px 18px;
          border-radius: var(--radius-sm);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.02em;
          box-shadow: var(--accent-glow);
          transition: transform 0.15s ease, filter 0.15s ease;
        }

        .resume-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.15);
        }

        /* Hero Layout */
        .hero-section {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(24px, 4vw, 44px);
          align-items: center;
          padding-top: 10px;
        }

        @media (max-width: 880px) {
          .hero-section {
            grid-template-columns: 1fr;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(10px, 2vw, 12px);
          font-weight: 800;
          color: var(--accent-color);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          box-shadow: var(--accent-glow);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .badge-glow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-color);
          box-shadow: 0 0 8px var(--accent-color);
        }

        .hero-title {
          font-size: clamp(30px, 6vw, 54px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-main);
          margin-bottom: 14px;
        }

        .gradient-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(14px, 2vw, 17px);
          line-height: 1.55;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        /* Hero Gaming CTA Box */
        .hero-cta-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: var(--surface-card);
          border: 1px solid var(--surface-border);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
          padding: clamp(16px, 2.5vw, 22px);
          border-radius: var(--radius-lg);
        }

        .difficulty-picker {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .picker-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .picker-label {
          font-size: 11px;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .picker-hint {
          font-size: 11px;
          color: var(--text-muted);
        }

        .difficulty-buttons {
          display: flex;
          gap: 6px;
          background: var(--surface-card-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--surface-border);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .diff-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 10px;
          font-size: clamp(11px, 2.2vw, 13px);
          font-weight: 700;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all 0.2s ease;
          white-space: nowrap;
          background: transparent;
          border: 1px solid transparent;
        }

        .diff-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-beginner { background: var(--tier-beginner); box-shadow: 0 0 6px var(--tier-beginner); }
        .dot-easy { background: var(--tier-easy); box-shadow: 0 0 6px var(--tier-easy); }
        .dot-medium { background: var(--tier-medium); box-shadow: 0 0 6px var(--tier-medium); }
        .dot-hard { background: var(--tier-hard); box-shadow: 0 0 6px var(--tier-hard); }
        .dot-expert { background: var(--tier-expert); box-shadow: 0 0 6px var(--tier-expert); }

        .diff-btn:hover {
          color: var(--text-main);
          background: var(--surface-glass-hover);
        }

        .diff-btn.active {
          background: var(--surface-glass);
          color: var(--accent-color);
          border: 1px solid var(--accent-color);
          box-shadow: var(--accent-glow);
        }

        .cta-actions {
          display: flex;
          gap: 12px;
        }

        @media (max-width: 520px) {
          .cta-actions {
            flex-direction: column;
          }
        }

        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: clamp(13px, 2vh, 16px) clamp(16px, 2.5vw, 24px);
          border-radius: var(--radius-md);
          font-size: clamp(14px, 2.5vw, 16px);
          font-weight: 800;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }

        .primary-cta {
          background: var(--accent-gradient);
          color: #ffffff;
          box-shadow: var(--accent-glow);
          border: none;
          flex: 1.25;
        }

        .primary-cta:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
        }

        .primary-cta:active {
          transform: translateY(1px);
        }

        .secondary-cta {
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          color: var(--text-main);
          flex: 1;
        }

        .secondary-cta:hover {
          background: var(--surface-glass-hover);
          transform: translateY(-2px);
        }

        .secondary-cta:active {
          transform: translateY(1px);
        }

        /* Demo Board Area */
        .hero-board-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%;
          max-width: 490px;
          margin: 0 auto;
        }

        .board-ambient-glow {
          position: absolute;
          width: 95%;
          height: 95%;
          background: radial-gradient(circle, var(--accent-color) 0%, transparent 75%);
          opacity: 0.2;
          filter: blur(40px);
          z-index: -1;
          pointer-events: none;
        }

        .demo-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .live-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: ghostFloat 1.2s infinite alternate;
        }

        /* Section Headings */
        .section-title {
          font-size: clamp(26px, 4.5vw, 36px);
          font-weight: 900;
          color: var(--text-main);
          text-align: center;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-desc {
          font-size: 15px;
          color: var(--text-muted);
          text-align: center;
          max-width: 700px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        /* How It Works Tutorial Cards */
        .steps-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 24px;
        }

        @media (max-width: 760px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
        }

        .step-card {
          background: var(--surface-card);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.25s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1), var(--accent-glow);
        }

        .step-badge {
          font-family: monospace;
          font-size: 13px;
          font-weight: 900;
          color: var(--accent-color);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .step-card h3 {
          font-size: 19px;
          font-weight: 800;
          color: var(--text-main);
        }

        .step-card p {
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-muted);
        }

        /* Calibrated AI Grid (Boss Cards) */
        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 18px;
        }

        .level-card {
          background: var(--surface-card);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .level-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .level-card.tier-beginner::before { background: var(--tier-beginner); box-shadow: 0 0 10px var(--tier-beginner); }
        .level-card.tier-easy::before { background: var(--tier-easy); box-shadow: 0 0 10px var(--tier-easy); }
        .level-card.tier-medium::before { background: var(--tier-medium); box-shadow: 0 0 10px var(--tier-medium); }
        .level-card.tier-hard::before { background: var(--tier-hard); box-shadow: 0 0 10px var(--tier-hard); }
        .level-card.tier-expert::before { background: var(--tier-expert); box-shadow: 0 0 10px var(--tier-expert); }

        .level-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
        }

        .level-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .level-tag {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .level-tag.beginner { background: rgba(16, 185, 129, 0.2); color: var(--tier-beginner); }
        .level-tag.easy { background: rgba(6, 182, 212, 0.2); color: var(--tier-easy); }
        .level-tag.medium { background: rgba(245, 158, 11, 0.2); color: var(--tier-medium); }
        .level-tag.hard { background: rgba(249, 115, 22, 0.2); color: var(--tier-hard); }
        .level-tag.expert { background: rgba(239, 68, 68, 0.2); color: var(--tier-expert); }

        .level-rank {
          font-size: 10px;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.06em;
        }

        .level-card h4 {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-main);
        }

        .level-card p {
          font-size: 13px;
          line-height: 1.55;
          color: var(--text-muted);
        }

        /* Footer */
        .landing-footer {
          border-top: 1px solid var(--surface-border);
          padding-top: 28px;
          margin-top: 10px;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-links button {
          color: var(--text-muted);
          font-weight: 600;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .footer-links button:hover {
          color: var(--text-main);
        }
      `})]})},Fg=({isOpen:x,onClose:o})=>{const[d,s]=J.useState(()=>je.load()),[N,O]=J.useState("ai:medium"),[z,A]=J.useState(!1);if(J.useEffect(()=>{x&&(s(je.load()),A(!1))},[x]),J.useEffect(()=>{const g=_=>{_.key==="Escape"&&x&&o()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[x,o]),!x)return null;const U=d.stats[N]||{played:0,won:0,lost:0,drawn:0,bestStreak:0,currentStreak:0},E=U.played>0?Math.round(U.won/U.played*100):0,D=()=>{je.resetStats(),s(je.load()),A(!1)};return c.jsxs("div",{className:"modal-backdrop",onClick:o,role:"dialog","aria-modal":"true","aria-labelledby":"stats-title",children:[c.jsxs("div",{className:"modal-card",onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{id:"stats-title",className:"modal-title",children:"Personal Statistics"}),c.jsx("button",{type:"button",className:"modal-close-btn",onClick:o,"aria-label":"Close Stats (Esc)",children:"×"})]}),c.jsxs("div",{className:"modal-body",children:[c.jsx("div",{className:"mode-tabs",children:[{key:"ai:beginner",label:"Beginner"},{key:"ai:easy",label:"Easy"},{key:"ai:medium",label:"Medium"},{key:"ai:hard",label:"Hard"},{key:"ai:expert",label:"Expert"},{key:"local",label:"2 Players"}].map(g=>c.jsx("button",{type:"button",className:`mode-tab-btn ${N===g.key?"active":""}`,onClick:()=>O(g.key),children:g.label},g.key))}),c.jsxs("div",{className:"stat-grid",children:[c.jsxs("div",{className:"stat-box primary",children:[c.jsx("span",{className:"stat-label",children:"Win Rate"}),c.jsxs("span",{className:"stat-value",children:[E,"%"]}),c.jsx("div",{className:"win-bar",children:c.jsx("div",{className:"win-bar-fill",style:{width:`${E}%`}})})]}),c.jsxs("div",{className:"stat-box",children:[c.jsx("span",{className:"stat-label",children:"Games Played"}),c.jsx("span",{className:"stat-value",children:U.played})]}),c.jsxs("div",{className:"stat-box",children:[c.jsx("span",{className:"stat-label",children:"Wins"}),c.jsx("span",{className:"stat-value text-green",children:U.won})]}),c.jsxs("div",{className:"stat-box",children:[c.jsx("span",{className:"stat-label",children:"Losses"}),c.jsx("span",{className:"stat-value text-red",children:U.lost})]}),c.jsxs("div",{className:"stat-box",children:[c.jsx("span",{className:"stat-label",children:"Draws"}),c.jsx("span",{className:"stat-value text-yellow",children:U.drawn})]}),c.jsxs("div",{className:"stat-box",children:[c.jsx("span",{className:"stat-label",children:"Current Streak"}),c.jsxs("span",{className:"stat-value",children:[U.currentStreak," 🔥"]})]}),c.jsxs("div",{className:"stat-box",children:[c.jsx("span",{className:"stat-label",children:"Best Streak"}),c.jsxs("span",{className:"stat-value",children:[U.bestStreak," 🏆"]})]}),c.jsxs("div",{className:"stat-box",children:[c.jsx("span",{className:"stat-label",children:"Fastest Win"}),c.jsx("span",{className:"stat-value",children:U.fastestWinMoves?`${U.fastestWinMoves} moves`:"—"})]})]})]}),c.jsxs("div",{className:"modal-footer",children:[z?c.jsxs("div",{className:"reset-confirm-bar",children:[c.jsx("span",{className:"confirm-text",children:"Are you sure?"}),c.jsx("button",{type:"button",className:"confirm-btn yes",onClick:D,children:"Reset"}),c.jsx("button",{type:"button",className:"confirm-btn no",onClick:()=>A(!1),children:"Cancel"})]}):c.jsx("button",{type:"button",className:"reset-stats-btn",onClick:()=>A(!0),children:"Reset All Stats"}),c.jsx("button",{type:"button",className:"done-btn",onClick:o,children:"Close"})]})]}),c.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 20, 0.78);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 100;
          animation: overlayFadeIn 0.25s ease-out;
        }

        .modal-card {
          width: 100%;
          max-width: 540px;
          background: rgba(22, 28, 58, 0.96);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--surface-border);
        }

        .modal-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-main);
        }

        .modal-close-btn {
          font-size: 26px;
          color: var(--text-dim);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .modal-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-height: 70vh;
          overflow-y: auto;
        }

        .mode-tabs {
          display: flex;
          gap: 6px;
          background: rgba(0, 0, 0, 0.3);
          padding: 4px;
          border-radius: var(--radius-md);
          overflow-x: auto;
        }

        .mode-tab-btn {
          flex: 1;
          white-space: nowrap;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .mode-tab-btn.active {
          background: var(--accent-color);
          color: #ffffff;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .stat-box {
          background: rgba(0, 0, 0, 0.24);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-box.primary {
          grid-column: span 2;
          background: rgba(99, 102, 241, 0.12);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .stat-label {
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-main);
        }

        .win-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          margin-top: 6px;
          overflow: hidden;
        }

        .win-bar-fill {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: var(--radius-full);
          transition: width 0.4s ease;
        }

        .text-green { color: #22c55e; }
        .text-red { color: #ef4444; }
        .text-yellow { color: #eab308; }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--surface-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reset-stats-btn {
          color: #f87171;
          font-size: 13px;
          font-weight: 600;
        }

        .reset-stats-btn:hover {
          text-decoration: underline;
        }

        .reset-confirm-bar {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .confirm-text {
          font-size: 13px;
          color: #f87171;
        }

        .confirm-btn {
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 700;
        }

        .confirm-btn.yes {
          background: #ef4444;
          color: #ffffff;
        }

        .confirm-btn.no {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .done-btn {
          background: var(--accent-gradient);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
        }
      `})]})};class $g{constructor(o=!0){te(this,"enabled",!0);this.enabled=o}setEnabled(o){this.enabled=o}get isEnabled(){return this.enabled}trigger(o="light"){if(!(!this.enabled||typeof window>"u"||!("vibrate"in navigator)))try{switch(o){case"light":navigator.vibrate(15);break;case"medium":navigator.vibrate(30);break;case"success":navigator.vibrate([20,60,40,60,60]);break;case"warning":case"error":navigator.vibrate([50,40,50]);break}}catch{}}}class Ig{constructor(o=!0){te(this,"ctx",null);te(this,"isMuted",!0);te(this,"isUnlocked",!1);this.isMuted=o}setMuted(o){this.isMuted=o}get muted(){return this.isMuted}unlock(){if(!this.isUnlocked)try{const o=window.AudioContext||window.webkitAudioContext;o&&(this.ctx=new o,this.ctx.state==="suspended"&&this.ctx.resume(),this.isUnlocked=!0)}catch(o){console.warn("Web Audio API not supported or blocked:",o)}}play(o){var d;if(!this.isMuted){if(this.ctx||this.unlock(),!this.ctx||this.ctx.state==="suspended")try{(d=this.ctx)==null||d.resume()}catch{return}if(this.ctx)try{const s=this.ctx.currentTime;switch(o){case"drop":this.playDrop(s);break;case"win":this.playWin(s);break;case"draw":this.playDraw(s);break;case"invalid":this.playInvalid(s);break;case"click":this.playClick(s);break}}catch(s){console.warn("Sound play error:",s)}}}playDrop(o){if(!this.ctx)return;const d=this.ctx.createOscillator(),s=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(380,o),d.frequency.exponentialRampToValueAtTime(110,o+.12),s.gain.setValueAtTime(.35,o),s.gain.exponentialRampToValueAtTime(.001,o+.14),d.connect(s),s.connect(this.ctx.destination),d.start(o),d.stop(o+.15)}playWin(o){if(!this.ctx)return;[523.25,659.25,783.99,1046.5].forEach((s,N)=>{if(!this.ctx)return;const O=o+N*.12,z=this.ctx.createOscillator(),A=this.ctx.createGain();z.type="triangle",z.frequency.setValueAtTime(s,O),A.gain.setValueAtTime(.25,O),A.gain.exponentialRampToValueAtTime(.001,O+.45),z.connect(A),A.connect(this.ctx.destination),z.start(O),z.stop(O+.46)})}playDraw(o){if(!this.ctx)return;[440,392,349.23].forEach((s,N)=>{if(!this.ctx)return;const O=o+N*.14,z=this.ctx.createOscillator(),A=this.ctx.createGain();z.type="sine",z.frequency.setValueAtTime(s,O),A.gain.setValueAtTime(.2,O),A.gain.exponentialRampToValueAtTime(.001,O+.35),z.connect(A),A.connect(this.ctx.destination),z.start(O),z.stop(O+.36)})}playInvalid(o){if(!this.ctx)return;const d=this.ctx.createOscillator(),s=this.ctx.createGain();d.type="sawtooth",d.frequency.setValueAtTime(130,o),d.frequency.setValueAtTime(110,o+.08),s.gain.setValueAtTime(.18,o),s.gain.exponentialRampToValueAtTime(.001,o+.18),d.connect(s),s.connect(this.ctx.destination),d.start(o),d.stop(o+.19)}playClick(o){if(!this.ctx)return;const d=this.ctx.createOscillator(),s=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(600,o),d.frequency.exponentialRampToValueAtTime(300,o+.04),s.gain.setValueAtTime(.12,o),s.gain.exponentialRampToValueAtTime(.001,o+.05),d.connect(s),s.connect(this.ctx.destination),d.start(o),d.stop(o+.05)}}const Pg=()=>{const[x,o]=J.useState(()=>je.load().settings),d=J.useRef(new Ig(!x.sound)),s=J.useRef(new $g(x.haptics)),[N,O]=J.useState(!1),[z,A]=J.useState(!1),[U,E]=J.useState(!1),[D,g]=J.useState(()=>je.load().inProgress),[_,Q]=J.useState("landing"),[ot,ct]=J.useState("ai"),[Y,L]=J.useState("medium"),[tt,Nt]=J.useState(void 0),[zt,Lt]=J.useState(1);J.useEffect(()=>{const yt=document.documentElement;if(x.theme==="system"){const Zt=window.matchMedia("(prefers-color-scheme: dark)").matches;yt.setAttribute("data-theme",Zt?"dark":"light")}else yt.setAttribute("data-theme",x.theme);yt.setAttribute("data-palette",x.palette),yt.setAttribute("data-reduced-motion",x.reducedMotion),d.current.setMuted(!x.sound),s.current.setEnabled(x.haptics)},[x]),J.useEffect(()=>{const yt=()=>{d.current.unlock(),window.removeEventListener("pointerdown",yt),window.removeEventListener("keydown",yt)};return window.addEventListener("pointerdown",yt),window.addEventListener("keydown",yt),()=>{window.removeEventListener("pointerdown",yt),window.removeEventListener("keydown",yt)}},[]);const vt=yt=>{const Zt=je.updateSettings(yt);o(Zt)},Z=yt=>{ct("ai"),L(yt),Nt(void 0),Lt(1),Q("game"),d.current.play("click")},ht=()=>{ct("local"),Nt(void 0),Lt(1),Q("game"),d.current.play("click")},Mt=()=>{D&&(ct(D.mode),D.level&&L(D.level),Nt(D.moves),Lt(D.starter),Q("game"),d.current.play("click"))},Yt=()=>{g(je.load().inProgress),Q("landing"),d.current.play("click")},Xt=()=>{vt({sound:!x.sound})},Ut=()=>{let yt=x.theme;yt==="system"&&(yt=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),vt({theme:yt==="light"?"dark":"light"})};return J.useEffect(()=>{const yt=Zt=>{Zt.target instanceof HTMLInputElement||Zt.target instanceof HTMLTextAreaElement||(Zt.key==="m"||Zt.key==="M")&&Xt()};return window.addEventListener("keydown",yt),()=>window.removeEventListener("keydown",yt)},[x.sound]),c.jsxs("div",{className:"app-root",children:[c.jsx(Hg,{mode:_==="landing"?"landing":ot,difficulty:Y,soundMuted:!x.sound,onToggleSound:Xt,onOpenSettings:()=>O(!0),onOpenStats:()=>A(!0),onOpenHowToPlay:()=>E(!0),onNavigateHome:_==="game"?Yt:void 0,theme:x.theme,onToggleTheme:Ut}),_==="landing"?c.jsx(Wg,{onStartAiGame:Z,onStartLocalGame:ht,onOpenHowToPlay:()=>E(!0),hasSavedGame:!!(D&&D.moves.length>0),onResumeSavedGame:Mt}):c.jsx(Jg,{mode:ot,difficulty:Y,soundPlayer:d.current,haptics:s.current,onNavigateHome:Yt,onOpenSettings:()=>O(!0),initialMoveString:tt,initialStarter:zt,reducedMotion:x.reducedMotion==="on"},`${ot}-${Y}-${tt||"new"}`),c.jsx(qg,{isOpen:N,settings:x,onUpdateSettings:vt,onClose:()=>O(!1)}),c.jsx(Fg,{isOpen:z,onClose:()=>A(!1)}),c.jsx(Bg,{isOpen:U,onClose:()=>E(!1)}),c.jsx("style",{children:`
        .app-root {
          display: flex;
          flex-direction: column;
          min-height: 100dvh;
          width: 100%;
        }
      `})]})};Ug.createRoot(document.getElementById("root")).render(c.jsx(zg.StrictMode,{children:c.jsx(Pg,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(x=>{console.log("Service Worker registered with scope:",x.scope)}).catch(x=>{console.warn("Service Worker registration failed:",x)})});
