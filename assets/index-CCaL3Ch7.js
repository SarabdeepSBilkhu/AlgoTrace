(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=r(c);fetch(c.href,h)}})();function oS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Bu={exports:{}},ul={};var pm;function sS(){if(pm)return ul;pm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(s,c,h){var f=null;if(h!==void 0&&(f=""+h),c.key!==void 0&&(f=""+c.key),"key"in c){h={};for(var p in c)p!=="key"&&(h[p]=c[p])}else h=c;return c=h.ref,{$$typeof:i,type:s,key:f,ref:c!==void 0?c:null,props:h}}return ul.Fragment=l,ul.jsx=r,ul.jsxs=r,ul}var mm;function uS(){return mm||(mm=1,Bu.exports=sS()),Bu.exports}var H=uS(),Hu={exports:{}},st={};var gm;function cS(){if(gm)return st;gm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),T=Symbol.iterator;function D(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,X={};function q(b,V,k){this.props=b,this.context=V,this.refs=X,this.updater=k||N}q.prototype.isReactComponent={},q.prototype.setState=function(b,V){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,V,"setState")},q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Z(){}Z.prototype=q.prototype;function B(b,V,k){this.props=b,this.context=V,this.refs=X,this.updater=k||N}var J=B.prototype=new Z;J.constructor=B,U(J,q.prototype),J.isPureReactComponent=!0;var G=Array.isArray;function F(){}var Q={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function lt(b,V,k){var W=k.ref;return{$$typeof:i,type:b,key:V,ref:W!==void 0?W:null,props:k}}function nt(b,V){return lt(b.type,V,b.props)}function xt(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function it(b){var V={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(k){return V[k]})}var ot=/\/+/g;function jt(b,V){return typeof b=="object"&&b!==null&&b.key!=null?it(""+b.key):V.toString(36)}function rt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(F,F):(b.status="pending",b.then(function(V){b.status==="pending"&&(b.status="fulfilled",b.value=V)},function(V){b.status==="pending"&&(b.status="rejected",b.reason=V)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function C(b,V,k,W,ut){var ht=typeof b;(ht==="undefined"||ht==="boolean")&&(b=null);var Et=!1;if(b===null)Et=!0;else switch(ht){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(b.$$typeof){case i:case l:Et=!0;break;case y:return Et=b._init,C(Et(b._payload),V,k,W,ut)}}if(Et)return ut=ut(b),Et=W===""?"."+jt(b,0):W,G(ut)?(k="",Et!=null&&(k=Et.replace(ot,"$&/")+"/"),C(ut,V,k,"",function(ga){return ga})):ut!=null&&(xt(ut)&&(ut=nt(ut,k+(ut.key==null||b&&b.key===ut.key?"":(""+ut.key).replace(ot,"$&/")+"/")+Et)),V.push(ut)),1;Et=0;var re=W===""?".":W+":";if(G(b))for(var qt=0;qt<b.length;qt++)W=b[qt],ht=re+jt(W,qt),Et+=C(W,V,k,ht,ut);else if(qt=D(b),typeof qt=="function")for(b=qt.call(b),qt=0;!(W=b.next()).done;)W=W.value,ht=re+jt(W,qt++),Et+=C(W,V,k,ht,ut);else if(ht==="object"){if(typeof b.then=="function")return C(rt(b),V,k,W,ut);throw V=String(b),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Et}function Y(b,V,k){if(b==null)return b;var W=[],ut=0;return C(b,W,"","",function(ht){return V.call(k,ht,ut++)}),W}function $(b){if(b._status===-1){var V=b._result;V=V(),V.then(function(k){(b._status===0||b._status===-1)&&(b._status=1,b._result=k)},function(k){(b._status===0||b._status===-1)&&(b._status=2,b._result=k)}),b._status===-1&&(b._status=0,b._result=V)}if(b._status===1)return b._result.default;throw b._result}var dt=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},gt={map:Y,forEach:function(b,V,k){Y(b,function(){V.apply(this,arguments)},k)},count:function(b){var V=0;return Y(b,function(){V++}),V},toArray:function(b){return Y(b,function(V){return V})||[]},only:function(b){if(!xt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return st.Activity=S,st.Children=gt,st.Component=q,st.Fragment=r,st.Profiler=c,st.PureComponent=B,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,st.__COMPILER_RUNTIME={__proto__:null,c:function(b){return Q.H.useMemoCache(b)}},st.cache=function(b){return function(){return b.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(b,V,k){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var W=U({},b.props),ut=b.key;if(V!=null)for(ht in V.key!==void 0&&(ut=""+V.key),V)!K.call(V,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&V.ref===void 0||(W[ht]=V[ht]);var ht=arguments.length-2;if(ht===1)W.children=k;else if(1<ht){for(var Et=Array(ht),re=0;re<ht;re++)Et[re]=arguments[re+2];W.children=Et}return lt(b.type,ut,W)},st.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:h,_context:b},b},st.createElement=function(b,V,k){var W,ut={},ht=null;if(V!=null)for(W in V.key!==void 0&&(ht=""+V.key),V)K.call(V,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ut[W]=V[W]);var Et=arguments.length-2;if(Et===1)ut.children=k;else if(1<Et){for(var re=Array(Et),qt=0;qt<Et;qt++)re[qt]=arguments[qt+2];ut.children=re}if(b&&b.defaultProps)for(W in Et=b.defaultProps,Et)ut[W]===void 0&&(ut[W]=Et[W]);return lt(b,ht,ut)},st.createRef=function(){return{current:null}},st.forwardRef=function(b){return{$$typeof:p,render:b}},st.isValidElement=xt,st.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:$}},st.memo=function(b,V){return{$$typeof:g,type:b,compare:V===void 0?null:V}},st.startTransition=function(b){var V=Q.T,k={};Q.T=k;try{var W=b(),ut=Q.S;ut!==null&&ut(k,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(F,dt)}catch(ht){dt(ht)}finally{V!==null&&k.types!==null&&(V.types=k.types),Q.T=V}},st.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},st.use=function(b){return Q.H.use(b)},st.useActionState=function(b,V,k){return Q.H.useActionState(b,V,k)},st.useCallback=function(b,V){return Q.H.useCallback(b,V)},st.useContext=function(b){return Q.H.useContext(b)},st.useDebugValue=function(){},st.useDeferredValue=function(b,V){return Q.H.useDeferredValue(b,V)},st.useEffect=function(b,V){return Q.H.useEffect(b,V)},st.useEffectEvent=function(b){return Q.H.useEffectEvent(b)},st.useId=function(){return Q.H.useId()},st.useImperativeHandle=function(b,V,k){return Q.H.useImperativeHandle(b,V,k)},st.useInsertionEffect=function(b,V){return Q.H.useInsertionEffect(b,V)},st.useLayoutEffect=function(b,V){return Q.H.useLayoutEffect(b,V)},st.useMemo=function(b,V){return Q.H.useMemo(b,V)},st.useOptimistic=function(b,V){return Q.H.useOptimistic(b,V)},st.useReducer=function(b,V,k){return Q.H.useReducer(b,V,k)},st.useRef=function(b){return Q.H.useRef(b)},st.useState=function(b){return Q.H.useState(b)},st.useSyncExternalStore=function(b,V,k){return Q.H.useSyncExternalStore(b,V,k)},st.useTransition=function(){return Q.H.useTransition()},st.version="19.2.3",st}var ym;function wc(){return ym||(ym=1,Hu.exports=cS()),Hu.exports}var O=wc();const ca=oS(O);var qu={exports:{}},cl={},Yu={exports:{}},Gu={};var vm;function fS(){return vm||(vm=1,(function(i){function l(C,Y){var $=C.length;C.push(Y);t:for(;0<$;){var dt=$-1>>>1,gt=C[dt];if(0<c(gt,Y))C[dt]=Y,C[$]=gt,$=dt;else break t}}function r(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var Y=C[0],$=C.pop();if($!==Y){C[0]=$;t:for(var dt=0,gt=C.length,b=gt>>>1;dt<b;){var V=2*(dt+1)-1,k=C[V],W=V+1,ut=C[W];if(0>c(k,$))W<gt&&0>c(ut,k)?(C[dt]=ut,C[W]=$,dt=W):(C[dt]=k,C[V]=$,dt=V);else if(W<gt&&0>c(ut,$))C[dt]=ut,C[W]=$,dt=W;else break t}}return Y}function c(C,Y){var $=C.sortIndex-Y.sortIndex;return $!==0?$:C.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,p=f.now();i.unstable_now=function(){return f.now()-p}}var m=[],g=[],y=1,S=null,T=3,D=!1,N=!1,U=!1,X=!1,q=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function J(C){for(var Y=r(g);Y!==null;){if(Y.callback===null)s(g);else if(Y.startTime<=C)s(g),Y.sortIndex=Y.expirationTime,l(m,Y);else break;Y=r(g)}}function G(C){if(U=!1,J(C),!N)if(r(m)!==null)N=!0,F||(F=!0,it());else{var Y=r(g);Y!==null&&rt(G,Y.startTime-C)}}var F=!1,Q=-1,K=5,lt=-1;function nt(){return X?!0:!(i.unstable_now()-lt<K)}function xt(){if(X=!1,F){var C=i.unstable_now();lt=C;var Y=!0;try{t:{N=!1,U&&(U=!1,Z(Q),Q=-1),D=!0;var $=T;try{e:{for(J(C),S=r(m);S!==null&&!(S.expirationTime>C&&nt());){var dt=S.callback;if(typeof dt=="function"){S.callback=null,T=S.priorityLevel;var gt=dt(S.expirationTime<=C);if(C=i.unstable_now(),typeof gt=="function"){S.callback=gt,J(C),Y=!0;break e}S===r(m)&&s(m),J(C)}else s(m);S=r(m)}if(S!==null)Y=!0;else{var b=r(g);b!==null&&rt(G,b.startTime-C),Y=!1}}break t}finally{S=null,T=$,D=!1}Y=void 0}}finally{Y?it():F=!1}}}var it;if(typeof B=="function")it=function(){B(xt)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,jt=ot.port2;ot.port1.onmessage=xt,it=function(){jt.postMessage(null)}}else it=function(){q(xt,0)};function rt(C,Y){Q=q(function(){C(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_next=function(C){switch(T){case 1:case 2:case 3:var Y=3;break;default:Y=T}var $=T;T=Y;try{return C()}finally{T=$}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(C,Y){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=T;T=C;try{return Y()}finally{T=$}},i.unstable_scheduleCallback=function(C,Y,$){var dt=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?dt+$:dt):$=dt,C){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=$+gt,C={id:y++,callback:Y,priorityLevel:C,startTime:$,expirationTime:gt,sortIndex:-1},$>dt?(C.sortIndex=$,l(g,C),r(m)===null&&C===r(g)&&(U?(Z(Q),Q=-1):U=!0,rt(G,$-dt))):(C.sortIndex=gt,l(m,C),N||D||(N=!0,F||(F=!0,it()))),C},i.unstable_shouldYield=nt,i.unstable_wrapCallback=function(C){var Y=T;return function(){var $=T;T=Y;try{return C.apply(this,arguments)}finally{T=$}}}})(Gu)),Gu}var Sm;function dS(){return Sm||(Sm=1,Yu.exports=fS()),Yu.exports}var Xu={exports:{}},ae={};var xm;function hS(){if(xm)return ae;xm=1;var i=wc();function l(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(m,g,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:m,containerInfo:g,implementation:y}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ae.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return h(m,g,null,y)},ae.flushSync=function(m){var g=f.T,y=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=g,s.p=y,s.d.f()}},ae.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},ae.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},ae.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,S=p(y,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,D=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:D}):y==="script"&&s.d.X(m,{crossOrigin:S,integrity:T,fetchPriority:D,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ae.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},ae.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,S=p(y,g.crossOrigin);s.d.L(m,y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ae.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},ae.requestFormReset=function(m){s.d.r(m)},ae.unstable_batchedUpdates=function(m,g){return m(g)},ae.useFormState=function(m,g,y){return f.H.useFormState(m,g,y)},ae.useFormStatus=function(){return f.H.useHostTransitionStatus()},ae.version="19.2.3",ae}var bm;function pS(){if(bm)return Xu.exports;bm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Xu.exports=hS(),Xu.exports}var Tm;function mS(){if(Tm)return cl;Tm=1;var i=dS(),l=wc(),r=pS();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(h(t)!==t)throw Error(s(188))}function g(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,a=e;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return m(o),t;if(u===a)return m(o),e;u=u.sibling}throw Error(s(188))}if(n.return!==a.return)n=o,a=u;else{for(var d=!1,v=o.child;v;){if(v===n){d=!0,n=o,a=u;break}if(v===a){d=!0,a=o,n=u;break}v=v.sibling}if(!d){for(v=u.child;v;){if(v===n){d=!0,n=u,a=o;break}if(v===a){d=!0,a=u,n=o;break}v=v.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=y(t),e!==null)return e;t=t.sibling}return null}var S=Object.assign,T=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),B=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),xt=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=xt&&t[xt]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function jt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case q:return"Profiler";case X:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case N:return"Portal";case B:return t.displayName||"Context";case Z:return(t._context.displayName||"Context")+".Consumer";case J:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return e=t.displayName||null,e!==null?e:jt(t.type)||"Memo";case K:e=t._payload,t=t._init;try{return jt(t(e))}catch{}}return null}var rt=Array.isArray,C=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},dt=[],gt=-1;function b(t){return{current:t}}function V(t){0>gt||(t.current=dt[gt],dt[gt]=null,gt--)}function k(t,e){gt++,dt[gt]=t.current,t.current=e}var W=b(null),ut=b(null),ht=b(null),Et=b(null);function re(t,e){switch(k(ht,e),k(ut,t),k(W,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Up(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Up(e),t=Bp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(W),k(W,t)}function qt(){V(W),V(ut),V(ht)}function ga(t){t.memoizedState!==null&&k(Et,t);var e=W.current,n=Bp(e,t.type);e!==n&&(k(ut,t),k(W,n))}function Nl(t){ut.current===t&&(V(W),V(ut)),Et.current===t&&(V(Et),ll._currentValue=$)}var xo,hf;function Wn(t){if(xo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xo=e&&e[1]||"",hf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xo+t+hf}var bo=!1;function To(t,e){if(!t||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(z){var R=z}Reflect.construct(t,[],L)}else{try{L.call()}catch(z){R=z}t.call(L.prototype)}}else{try{throw Error()}catch(z){R=z}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(z){if(z&&R&&typeof z.stack=="string")return[z.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),d=u[0],v=u[1];if(d&&v){var x=d.split(`
`),M=v.split(`
`);for(o=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;o<M.length&&!M[o].includes("DetermineComponentFrameRoot");)o++;if(a===x.length||o===M.length)for(a=x.length-1,o=M.length-1;1<=a&&0<=o&&x[a]!==M[o];)o--;for(;1<=a&&0<=o;a--,o--)if(x[a]!==M[o]){if(a!==1||o!==1)do if(a--,o--,0>o||x[a]!==M[o]){var w=`
`+x[a].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=a&&0<=o);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Wn(n):""}function Bv(t,e){switch(t.tag){case 26:case 27:case 5:return Wn(t.type);case 16:return Wn("Lazy");case 13:return t.child!==e&&e!==null?Wn("Suspense Fallback"):Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 15:return To(t.type,!1);case 11:return To(t.type.render,!1);case 1:return To(t.type,!0);case 31:return Wn("Activity");default:return""}}function pf(t){try{var e="",n=null;do e+=Bv(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ao=Object.prototype.hasOwnProperty,jo=i.unstable_scheduleCallback,Eo=i.unstable_cancelCallback,Hv=i.unstable_shouldYield,qv=i.unstable_requestPaint,ve=i.unstable_now,Yv=i.unstable_getCurrentPriorityLevel,mf=i.unstable_ImmediatePriority,gf=i.unstable_UserBlockingPriority,Ol=i.unstable_NormalPriority,Gv=i.unstable_LowPriority,yf=i.unstable_IdlePriority,Xv=i.log,Qv=i.unstable_setDisableYieldValue,ya=null,Se=null;function xn(t){if(typeof Xv=="function"&&Qv(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(ya,t)}catch{}}var xe=Math.clz32?Math.clz32:kv,Zv=Math.log,Kv=Math.LN2;function kv(t){return t>>>=0,t===0?32:31-(Zv(t)/Kv|0)|0}var wl=256,Vl=262144,_l=4194304;function $n(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ll(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var o=0,u=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var v=a&134217727;return v!==0?(a=v&~u,a!==0?o=$n(a):(d&=v,d!==0?o=$n(d):n||(n=v&~t,n!==0&&(o=$n(n))))):(v=a&~u,v!==0?o=$n(v):d!==0?o=$n(d):n||(n=a&~t,n!==0&&(o=$n(n)))),o===0?0:e!==0&&e!==o&&(e&u)===0&&(u=o&-o,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:o}function va(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Jv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(){var t=_l;return _l<<=1,(_l&62914560)===0&&(_l=4194304),t}function Mo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fv(t,e,n,a,o,u){var d=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var v=t.entanglements,x=t.expirationTimes,M=t.hiddenUpdates;for(n=d&~n;0<n;){var w=31-xe(n),L=1<<w;v[w]=0,x[w]=-1;var R=M[w];if(R!==null)for(M[w]=null,w=0;w<R.length;w++){var z=R[w];z!==null&&(z.lane&=-536870913)}n&=~L}a!==0&&Sf(t,a,0),u!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=u&~(d&~e))}function Sf(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-xe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-xe(n),o=1<<a;o&e|t[a]&e&&(t[a]|=e),n&=~o}}function bf(t,e){var n=e&-e;return n=(n&42)!==0?1:Ro(n),(n&(t.suspendedLanes|e))!==0?0:n}function Ro(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Do(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tf(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:om(t.type))}function Af(t,e){var n=Y.p;try{return Y.p=t,e()}finally{Y.p=n}}var bn=Math.random().toString(36).slice(2),$t="__reactFiber$"+bn,fe="__reactProps$"+bn,bi="__reactContainer$"+bn,Co="__reactEvents$"+bn,Pv="__reactListeners$"+bn,Wv="__reactHandles$"+bn,jf="__reactResources$"+bn,xa="__reactMarker$"+bn;function zo(t){delete t[$t],delete t[fe],delete t[Co],delete t[Pv],delete t[Wv]}function Ti(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zp(t);t!==null;){if(n=t[$t])return n;t=Zp(t)}return e}t=n,n=t.parentNode}return null}function Ai(t){if(t=t[$t]||t[bi]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ba(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ji(t){var e=t[jf];return e||(e=t[jf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Pt(t){t[xa]=!0}var Ef=new Set,Mf={};function In(t,e){Ei(t,e),Ei(t+"Capture",e)}function Ei(t,e){for(Mf[t]=e,t=0;t<e.length;t++)Ef.add(e[t])}var $v=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rf={},Df={};function Iv(t){return Ao.call(Df,t)?!0:Ao.call(Rf,t)?!1:$v.test(t)?Df[t]=!0:(Rf[t]=!0,!1)}function Ul(t,e,n){if(Iv(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Bl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ie(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function Ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t0(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(d){n=""+d,u.call(this,d)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){if(!t._valueTracker){var e=Cf(t)?"checked":"value";t._valueTracker=t0(t,e,""+t[e])}}function zf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Cf(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var e0=/[\n"\\]/g;function ze(t){return t.replace(e0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Oo(t,e,n,a,o,u,d,v){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ce(e)):t.value!==""+Ce(e)&&(t.value=""+Ce(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?wo(t,d,Ce(e)):n!=null?wo(t,d,Ce(n)):a!=null&&t.removeAttribute("value"),o==null&&u!=null&&(t.defaultChecked=!!u),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Ce(v):t.removeAttribute("name")}function Nf(t,e,n,a,o,u,d,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){No(t);return}n=n!=null?""+Ce(n):"",e=e!=null?""+Ce(e):n,v||e===t.value||(t.value=e),t.defaultValue=e}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=v?t.checked:!!a,t.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d),No(t)}function wo(t,e,n){e==="number"&&Hl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Mi(t,e,n,a){if(t=t.options,e){e={};for(var o=0;o<n.length;o++)e["$"+n[o]]=!0;for(n=0;n<t.length;n++)o=e.hasOwnProperty("$"+t[n].value),t[n].selected!==o&&(t[n].selected=o),o&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Ce(n),e=null,o=0;o<t.length;o++){if(t[o].value===n){t[o].selected=!0,a&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Of(t,e,n){if(e!=null&&(e=""+Ce(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ce(n):""}function wf(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(s(92));if(rt(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Ce(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),No(t)}function Ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var n0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vf(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||n0.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function _f(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var o in e)a=e[o],e.hasOwnProperty(o)&&n[o]!==a&&Vf(t,o,a)}else for(var u in e)e.hasOwnProperty(u)&&Vf(t,u,e[u])}function Vo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var i0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(t){return a0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function tn(){}var _o=null;function Lo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Di=null,Ci=null;function Lf(t){var e=Ai(t);if(e&&(t=e.stateNode)){var n=t[fe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Oo(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ze(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var o=a[fe]||null;if(!o)throw Error(s(90));Oo(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&zf(a)}break t;case"textarea":Of(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}}}var Uo=!1;function Uf(t,e,n){if(Uo)return t(e,n);Uo=!0;try{var a=t(e);return a}finally{if(Uo=!1,(Di!==null||Ci!==null)&&(Rr(),Di&&(e=Di,t=Ci,Ci=Di=null,Lf(e),t)))for(e=0;e<t.length;e++)Lf(t[e])}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var a=n[fe]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bo=!1;if(en)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{Bo=!1}var Tn=null,Ho=null,Yl=null;function Bf(){if(Yl)return Yl;var t,e=Ho,n=e.length,a,o="value"in Tn?Tn.value:Tn.textContent,u=o.length;for(t=0;t<n&&e[t]===o[t];t++);var d=n-t;for(a=1;a<=d&&e[n-a]===o[u-a];a++);return Yl=o.slice(t,1<a?1-a:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function Hf(){return!1}function de(t){function e(n,a,o,u,d){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(n=t[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Xl:Hf,this.isPropagationStopped=Hf,this}return S(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=de(ti),ja=S({},ti,{view:0,detail:0}),l0=de(ja),qo,Yo,Ea,Zl=S({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(qo=t.screenX-Ea.screenX,Yo=t.screenY-Ea.screenY):Yo=qo=0,Ea=t),qo)},movementY:function(t){return"movementY"in t?t.movementY:Yo}}),qf=de(Zl),r0=S({},Zl,{dataTransfer:0}),o0=de(r0),s0=S({},ja,{relatedTarget:0}),Go=de(s0),u0=S({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=de(u0),f0=S({},ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d0=de(f0),h0=S({},ti,{data:0}),Yf=de(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g0[t])?!!e[t]:!1}function Xo(){return y0}var v0=S({},ja,{key:function(t){if(t.key){var e=p0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S0=de(v0),x0=S({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=de(x0),b0=S({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),T0=de(b0),A0=S({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),j0=de(A0),E0=S({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M0=de(E0),R0=S({},ti,{newState:0,oldState:0}),D0=de(R0),C0=[9,13,27,32],Qo=en&&"CompositionEvent"in window,Ma=null;en&&"documentMode"in document&&(Ma=document.documentMode);var z0=en&&"TextEvent"in window&&!Ma,Xf=en&&(!Qo||Ma&&8<Ma&&11>=Ma),Qf=" ",Zf=!1;function Kf(t,e){switch(t){case"keyup":return C0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function N0(t,e){switch(t){case"compositionend":return kf(e);case"keypress":return e.which!==32?null:(Zf=!0,Qf);case"textInput":return t=e.data,t===Qf&&Zf?null:t;default:return null}}function O0(t,e){if(zi)return t==="compositionend"||!Qo&&Kf(t,e)?(t=Bf(),Yl=Ho=Tn=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xf&&e.locale!=="ko"?null:e.data;default:return null}}var w0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w0[t.type]:e==="textarea"}function Ff(t,e,n,a){Di?Ci?Ci.push(a):Ci=[a]:Di=a,e=Vr(e,"onChange"),0<e.length&&(n=new Ql("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var Ra=null,Da=null;function V0(t){Np(t,0)}function Kl(t){var e=ba(t);if(zf(e))return t}function Pf(t,e){if(t==="change")return e}var Wf=!1;if(en){var Zo;if(en){var Ko="oninput"in document;if(!Ko){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),Ko=typeof $f.oninput=="function"}Zo=Ko}else Zo=!1;Wf=Zo&&(!document.documentMode||9<document.documentMode)}function If(){Ra&&(Ra.detachEvent("onpropertychange",td),Da=Ra=null)}function td(t){if(t.propertyName==="value"&&Kl(Da)){var e=[];Ff(e,Da,t,Lo(t)),Uf(V0,e)}}function _0(t,e,n){t==="focusin"?(If(),Ra=e,Da=n,Ra.attachEvent("onpropertychange",td)):t==="focusout"&&If()}function L0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(Da)}function U0(t,e){if(t==="click")return Kl(e)}function B0(t,e){if(t==="input"||t==="change")return Kl(e)}function H0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var be=typeof Object.is=="function"?Object.is:H0;function Ca(t,e){if(be(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Ao.call(e,o)||!be(t[o],e[o]))return!1}return!0}function ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nd(t,e){var n=ed(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ed(n)}}function id(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?id(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ad(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Hl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function ko(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var q0=en&&"documentMode"in document&&11>=document.documentMode,Ni=null,Jo=null,za=null,Fo=!1;function ld(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fo||Ni==null||Ni!==Hl(a)||(a=Ni,"selectionStart"in a&&ko(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),za&&Ca(za,a)||(za=a,a=Vr(Jo,"onSelect"),0<a.length&&(e=new Ql("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=Ni)))}function ei(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionrun:ei("Transition","TransitionRun"),transitionstart:ei("Transition","TransitionStart"),transitioncancel:ei("Transition","TransitionCancel"),transitionend:ei("Transition","TransitionEnd")},Po={},rd={};en&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function ni(t){if(Po[t])return Po[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rd)return Po[t]=e[n];return t}var od=ni("animationend"),sd=ni("animationiteration"),ud=ni("animationstart"),Y0=ni("transitionrun"),G0=ni("transitionstart"),X0=ni("transitioncancel"),cd=ni("transitionend"),fd=new Map,Wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wo.push("scrollEnd");function Ge(t,e){fd.set(t,e),In(e,[t])}var kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ne=[],wi=0,$o=0;function Jl(){for(var t=wi,e=$o=wi=0;e<t;){var n=Ne[e];Ne[e++]=null;var a=Ne[e];Ne[e++]=null;var o=Ne[e];Ne[e++]=null;var u=Ne[e];if(Ne[e++]=null,a!==null&&o!==null){var d=a.pending;d===null?o.next=o:(o.next=d.next,d.next=o),a.pending=o}u!==0&&dd(n,o,u)}}function Fl(t,e,n,a){Ne[wi++]=t,Ne[wi++]=e,Ne[wi++]=n,Ne[wi++]=a,$o|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Io(t,e,n,a){return Fl(t,e,n,a),Pl(t)}function ii(t,e){return Fl(t,null,null,e),Pl(t)}function dd(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var o=!1,u=t.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(o=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,o&&e!==null&&(o=31-xe(n),t=u.hiddenUpdates,a=t[o],a===null?t[o]=[e]:a.push(e),e.lane=n|536870912),u):null}function Pl(t){if(50<$a)throw $a=0,su=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Vi={};function Q0(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,n,a){return new Q0(t,e,n,a)}function ts(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nn(t,e){var n=t.alternate;return n===null?(n=Te(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function hd(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Wl(t,e,n,a,o,u){var d=0;if(a=t,typeof t=="function")ts(t)&&(d=1);else if(typeof t=="string")d=F1(t,n,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=Te(31,n,e,o),t.elementType=lt,t.lanes=u,t;case U:return ai(n.children,o,u,e);case X:d=8,o|=24;break;case q:return t=Te(12,n,e,o|2),t.elementType=q,t.lanes=u,t;case G:return t=Te(13,n,e,o),t.elementType=G,t.lanes=u,t;case F:return t=Te(19,n,e,o),t.elementType=F,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:d=10;break t;case Z:d=9;break t;case J:d=11;break t;case Q:d=14;break t;case K:d=16,a=null;break t}d=29,n=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=Te(d,n,e,o),e.elementType=t,e.type=a,e.lanes=u,e}function ai(t,e,n,a){return t=Te(7,t,a,e),t.lanes=n,t}function es(t,e,n){return t=Te(6,t,null,e),t.lanes=n,t}function pd(t){var e=Te(18,null,null,0);return e.stateNode=t,e}function ns(t,e,n){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var md=new WeakMap;function Oe(t,e){if(typeof t=="object"&&t!==null){var n=md.get(t);return n!==void 0?n:(e={value:t,source:e,stack:pf(e)},md.set(t,e),e)}return{value:t,source:e,stack:pf(e)}}var _i=[],Li=0,$l=null,Na=0,we=[],Ve=0,An=null,ke=1,Je="";function an(t,e){_i[Li++]=Na,_i[Li++]=$l,$l=t,Na=e}function gd(t,e,n){we[Ve++]=ke,we[Ve++]=Je,we[Ve++]=An,An=t;var a=ke;t=Je;var o=32-xe(a)-1;a&=~(1<<o),n+=1;var u=32-xe(e)+o;if(30<u){var d=o-o%5;u=(a&(1<<d)-1).toString(32),a>>=d,o-=d,ke=1<<32-xe(e)+o|n<<o|a,Je=u+t}else ke=1<<u|n<<o|a,Je=t}function is(t){t.return!==null&&(an(t,1),gd(t,1,0))}function as(t){for(;t===$l;)$l=_i[--Li],_i[Li]=null,Na=_i[--Li],_i[Li]=null;for(;t===An;)An=we[--Ve],we[Ve]=null,Je=we[--Ve],we[Ve]=null,ke=we[--Ve],we[Ve]=null}function yd(t,e){we[Ve++]=ke,we[Ve++]=Je,we[Ve++]=An,ke=e.id,Je=e.overflow,An=t}var It=null,Ot=null,St=!1,jn=null,_e=!1,ls=Error(s(519));function En(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oa(Oe(e,t)),ls}function vd(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[$t]=t,e[fe]=a,n){case"dialog":mt("cancel",e),mt("close",e);break;case"iframe":case"object":case"embed":mt("load",e);break;case"video":case"audio":for(n=0;n<tl.length;n++)mt(tl[n],e);break;case"source":mt("error",e);break;case"img":case"image":case"link":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"input":mt("invalid",e),Nf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":mt("invalid",e);break;case"textarea":mt("invalid",e),wf(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||_p(e.textContent,n)?(a.popover!=null&&(mt("beforetoggle",e),mt("toggle",e)),a.onScroll!=null&&mt("scroll",e),a.onScrollEnd!=null&&mt("scrollend",e),a.onClick!=null&&(e.onclick=tn),e=!0):e=!1,e||En(t,!0)}function Sd(t){for(It=t.return;It;)switch(It.tag){case 5:case 31:case 13:_e=!1;return;case 27:case 3:_e=!0;return;default:It=It.return}}function Ui(t){if(t!==It)return!1;if(!St)return Sd(t),St=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Au(t.type,t.memoizedProps)),n=!n),n&&Ot&&En(t),Sd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ot=Qp(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ot=Qp(t)}else e===27?(e=Ot,Hn(t.type)?(t=Du,Du=null,Ot=t):Ot=e):Ot=It?Ue(t.stateNode.nextSibling):null;return!0}function li(){Ot=It=null,St=!1}function rs(){var t=jn;return t!==null&&(ge===null?ge=t:ge.push.apply(ge,t),jn=null),t}function Oa(t){jn===null?jn=[t]:jn.push(t)}var os=b(null),ri=null,ln=null;function Mn(t,e,n){k(os,e._currentValue),e._currentValue=n}function rn(t){t._currentValue=os.current,V(os)}function ss(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function us(t,e,n,a){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){var d=o.child;u=u.firstContext;t:for(;u!==null;){var v=u;u=o;for(var x=0;x<e.length;x++)if(v.context===e[x]){u.lanes|=n,v=u.alternate,v!==null&&(v.lanes|=n),ss(u.return,n,t),a||(d=null);break t}u=v.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(s(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),ss(d,n,t),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===t){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Bi(t,e,n,a){t=null;for(var o=e,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var v=o.type;be(o.pendingProps.value,d.value)||(t!==null?t.push(v):t=[v])}}else if(o===Et.current){if(d=o.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(ll):t=[ll])}o=o.return}t!==null&&us(e,t,n,a),e.flags|=262144}function Il(t){for(t=t.firstContext;t!==null;){if(!be(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function oi(t){ri=t,ln=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function te(t){return xd(ri,t)}function tr(t,e){return ri===null&&oi(t),xd(t,e)}function xd(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ln===null){if(t===null)throw Error(s(308));ln=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ln=ln.next=e;return n}var Z0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},K0=i.unstable_scheduleCallback,k0=i.unstable_NormalPriority,Xt={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cs(){return{controller:new Z0,data:new Map,refCount:0}}function wa(t){t.refCount--,t.refCount===0&&K0(k0,function(){t.controller.abort()})}var Va=null,fs=0,Hi=0,qi=null;function J0(t,e){if(Va===null){var n=Va=[];fs=0,Hi=pu(),qi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return fs++,e.then(bd,bd),e}function bd(){if(--fs===0&&Va!==null){qi!==null&&(qi.status="fulfilled");var t=Va;Va=null,Hi=0,qi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function F0(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var o=0;o<n.length;o++)(0,n[o])(e)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Td=C.S;C.S=function(t,e){lp=ve(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&J0(t,e),Td!==null&&Td(t,e)};var si=b(null);function ds(){var t=si.current;return t!==null?t:Nt.pooledCache}function er(t,e){e===null?k(si,si.current):k(si,e.pool)}function Ad(){var t=ds();return t===null?null:{parent:Xt._currentValue,pool:t}}var Yi=Error(s(460)),hs=Error(s(474)),nr=Error(s(542)),ir={then:function(){}};function jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ed(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(tn,tn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rd(t),t;default:if(typeof e.status=="string")e.then(tn,tn);else{if(t=Nt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=a}},function(a){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rd(t),t}throw ci=e,Yi}}function ui(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ci=n,Yi):n}}var ci=null;function Md(){if(ci===null)throw Error(s(459));var t=ci;return ci=null,t}function Rd(t){if(t===Yi||t===nr)throw Error(s(483))}var Gi=null,_a=0;function ar(t){var e=_a;return _a+=1,Gi===null&&(Gi=[]),Ed(Gi,t,e)}function La(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function lr(t,e){throw e.$$typeof===T?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Dd(t){function e(j,A){if(t){var E=j.deletions;E===null?(j.deletions=[A],j.flags|=16):E.push(A)}}function n(j,A){if(!t)return null;for(;A!==null;)e(j,A),A=A.sibling;return null}function a(j){for(var A=new Map;j!==null;)j.key!==null?A.set(j.key,j):A.set(j.index,j),j=j.sibling;return A}function o(j,A){return j=nn(j,A),j.index=0,j.sibling=null,j}function u(j,A,E){return j.index=E,t?(E=j.alternate,E!==null?(E=E.index,E<A?(j.flags|=67108866,A):E):(j.flags|=67108866,A)):(j.flags|=1048576,A)}function d(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function v(j,A,E,_){return A===null||A.tag!==6?(A=es(E,j.mode,_),A.return=j,A):(A=o(A,E),A.return=j,A)}function x(j,A,E,_){var et=E.type;return et===U?w(j,A,E.props.children,_,E.key):A!==null&&(A.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===K&&ui(et)===A.type)?(A=o(A,E.props),La(A,E),A.return=j,A):(A=Wl(E.type,E.key,E.props,null,j.mode,_),La(A,E),A.return=j,A)}function M(j,A,E,_){return A===null||A.tag!==4||A.stateNode.containerInfo!==E.containerInfo||A.stateNode.implementation!==E.implementation?(A=ns(E,j.mode,_),A.return=j,A):(A=o(A,E.children||[]),A.return=j,A)}function w(j,A,E,_,et){return A===null||A.tag!==7?(A=ai(E,j.mode,_,et),A.return=j,A):(A=o(A,E),A.return=j,A)}function L(j,A,E){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=es(""+A,j.mode,E),A.return=j,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case D:return E=Wl(A.type,A.key,A.props,null,j.mode,E),La(E,A),E.return=j,E;case N:return A=ns(A,j.mode,E),A.return=j,A;case K:return A=ui(A),L(j,A,E)}if(rt(A)||it(A))return A=ai(A,j.mode,E,null),A.return=j,A;if(typeof A.then=="function")return L(j,ar(A),E);if(A.$$typeof===B)return L(j,tr(j,A),E);lr(j,A)}return null}function R(j,A,E,_){var et=A!==null?A.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return et!==null?null:v(j,A,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case D:return E.key===et?x(j,A,E,_):null;case N:return E.key===et?M(j,A,E,_):null;case K:return E=ui(E),R(j,A,E,_)}if(rt(E)||it(E))return et!==null?null:w(j,A,E,_,null);if(typeof E.then=="function")return R(j,A,ar(E),_);if(E.$$typeof===B)return R(j,A,tr(j,E),_);lr(j,E)}return null}function z(j,A,E,_,et){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return j=j.get(E)||null,v(A,j,""+_,et);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case D:return j=j.get(_.key===null?E:_.key)||null,x(A,j,_,et);case N:return j=j.get(_.key===null?E:_.key)||null,M(A,j,_,et);case K:return _=ui(_),z(j,A,E,_,et)}if(rt(_)||it(_))return j=j.get(E)||null,w(A,j,_,et,null);if(typeof _.then=="function")return z(j,A,E,ar(_),et);if(_.$$typeof===B)return z(j,A,E,tr(A,_),et);lr(A,_)}return null}function I(j,A,E,_){for(var et=null,bt=null,tt=A,ft=A=0,vt=null;tt!==null&&ft<E.length;ft++){tt.index>ft?(vt=tt,tt=null):vt=tt.sibling;var Tt=R(j,tt,E[ft],_);if(Tt===null){tt===null&&(tt=vt);break}t&&tt&&Tt.alternate===null&&e(j,tt),A=u(Tt,A,ft),bt===null?et=Tt:bt.sibling=Tt,bt=Tt,tt=vt}if(ft===E.length)return n(j,tt),St&&an(j,ft),et;if(tt===null){for(;ft<E.length;ft++)tt=L(j,E[ft],_),tt!==null&&(A=u(tt,A,ft),bt===null?et=tt:bt.sibling=tt,bt=tt);return St&&an(j,ft),et}for(tt=a(tt);ft<E.length;ft++)vt=z(tt,j,ft,E[ft],_),vt!==null&&(t&&vt.alternate!==null&&tt.delete(vt.key===null?ft:vt.key),A=u(vt,A,ft),bt===null?et=vt:bt.sibling=vt,bt=vt);return t&&tt.forEach(function(Qn){return e(j,Qn)}),St&&an(j,ft),et}function at(j,A,E,_){if(E==null)throw Error(s(151));for(var et=null,bt=null,tt=A,ft=A=0,vt=null,Tt=E.next();tt!==null&&!Tt.done;ft++,Tt=E.next()){tt.index>ft?(vt=tt,tt=null):vt=tt.sibling;var Qn=R(j,tt,Tt.value,_);if(Qn===null){tt===null&&(tt=vt);break}t&&tt&&Qn.alternate===null&&e(j,tt),A=u(Qn,A,ft),bt===null?et=Qn:bt.sibling=Qn,bt=Qn,tt=vt}if(Tt.done)return n(j,tt),St&&an(j,ft),et;if(tt===null){for(;!Tt.done;ft++,Tt=E.next())Tt=L(j,Tt.value,_),Tt!==null&&(A=u(Tt,A,ft),bt===null?et=Tt:bt.sibling=Tt,bt=Tt);return St&&an(j,ft),et}for(tt=a(tt);!Tt.done;ft++,Tt=E.next())Tt=z(tt,j,ft,Tt.value,_),Tt!==null&&(t&&Tt.alternate!==null&&tt.delete(Tt.key===null?ft:Tt.key),A=u(Tt,A,ft),bt===null?et=Tt:bt.sibling=Tt,bt=Tt);return t&&tt.forEach(function(rS){return e(j,rS)}),St&&an(j,ft),et}function zt(j,A,E,_){if(typeof E=="object"&&E!==null&&E.type===U&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case D:t:{for(var et=E.key;A!==null;){if(A.key===et){if(et=E.type,et===U){if(A.tag===7){n(j,A.sibling),_=o(A,E.props.children),_.return=j,j=_;break t}}else if(A.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===K&&ui(et)===A.type){n(j,A.sibling),_=o(A,E.props),La(_,E),_.return=j,j=_;break t}n(j,A);break}else e(j,A);A=A.sibling}E.type===U?(_=ai(E.props.children,j.mode,_,E.key),_.return=j,j=_):(_=Wl(E.type,E.key,E.props,null,j.mode,_),La(_,E),_.return=j,j=_)}return d(j);case N:t:{for(et=E.key;A!==null;){if(A.key===et)if(A.tag===4&&A.stateNode.containerInfo===E.containerInfo&&A.stateNode.implementation===E.implementation){n(j,A.sibling),_=o(A,E.children||[]),_.return=j,j=_;break t}else{n(j,A);break}else e(j,A);A=A.sibling}_=ns(E,j.mode,_),_.return=j,j=_}return d(j);case K:return E=ui(E),zt(j,A,E,_)}if(rt(E))return I(j,A,E,_);if(it(E)){if(et=it(E),typeof et!="function")throw Error(s(150));return E=et.call(E),at(j,A,E,_)}if(typeof E.then=="function")return zt(j,A,ar(E),_);if(E.$$typeof===B)return zt(j,A,tr(j,E),_);lr(j,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,A!==null&&A.tag===6?(n(j,A.sibling),_=o(A,E),_.return=j,j=_):(n(j,A),_=es(E,j.mode,_),_.return=j,j=_),d(j)):n(j,A)}return function(j,A,E,_){try{_a=0;var et=zt(j,A,E,_);return Gi=null,et}catch(tt){if(tt===Yi||tt===nr)throw tt;var bt=Te(29,tt,null,j.mode);return bt.lanes=_,bt.return=j,bt}}}var fi=Dd(!0),Cd=Dd(!1),Rn=!1;function ps(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ms(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Dn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(At&2)!==0){var o=a.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),a.pending=e,e=Pl(t),dd(t,null,n),e}return Fl(t,a,e,n),Pl(t)}function Ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,xf(t,n)}}function gs(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?o=u=e:u=u.next=e}else o=u=e;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var ys=!1;function Ba(){if(ys){var t=qi;if(t!==null)throw t}}function Ha(t,e,n,a){ys=!1;var o=t.updateQueue;Rn=!1;var u=o.firstBaseUpdate,d=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var x=v,M=x.next;x.next=null,d===null?u=M:d.next=M,d=x;var w=t.alternate;w!==null&&(w=w.updateQueue,v=w.lastBaseUpdate,v!==d&&(v===null?w.firstBaseUpdate=M:v.next=M,w.lastBaseUpdate=x))}if(u!==null){var L=o.baseState;d=0,w=M=x=null,v=u;do{var R=v.lane&-536870913,z=R!==v.lane;if(z?(yt&R)===R:(a&R)===R){R!==0&&R===Hi&&(ys=!0),w!==null&&(w=w.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var I=t,at=v;R=e;var zt=n;switch(at.tag){case 1:if(I=at.payload,typeof I=="function"){L=I.call(zt,L,R);break t}L=I;break t;case 3:I.flags=I.flags&-65537|128;case 0:if(I=at.payload,R=typeof I=="function"?I.call(zt,L,R):I,R==null)break t;L=S({},L,R);break t;case 2:Rn=!0}}R=v.callback,R!==null&&(t.flags|=64,z&&(t.flags|=8192),z=o.callbacks,z===null?o.callbacks=[R]:z.push(R))}else z={lane:R,tag:v.tag,payload:v.payload,callback:v.callback,next:null},w===null?(M=w=z,x=L):w=w.next=z,d|=R;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;z=v,v=z.next,z.next=null,o.lastBaseUpdate=z,o.shared.pending=null}}while(!0);w===null&&(x=L),o.baseState=x,o.firstBaseUpdate=M,o.lastBaseUpdate=w,u===null&&(o.shared.lanes=0),Vn|=d,t.lanes=d,t.memoizedState=L}}function zd(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Nd(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)zd(n[t],e)}var Xi=b(null),rr=b(0);function Od(t,e){t=mn,k(rr,t),k(Xi,e),mn=t|e.baseLanes}function vs(){k(rr,mn),k(Xi,Xi.current)}function Ss(){mn=rr.current,V(Xi),V(rr)}var Ae=b(null),Le=null;function zn(t){var e=t.alternate;k(Yt,Yt.current&1),k(Ae,t),Le===null&&(e===null||Xi.current!==null||e.memoizedState!==null)&&(Le=t)}function xs(t){k(Yt,Yt.current),k(Ae,t),Le===null&&(Le=t)}function wd(t){t.tag===22?(k(Yt,Yt.current),k(Ae,t),Le===null&&(Le=t)):Nn()}function Nn(){k(Yt,Yt.current),k(Ae,Ae.current)}function je(t){V(Ae),Le===t&&(Le=null),V(Yt)}var Yt=b(0);function or(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Mu(n)||Ru(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var on=0,ct=null,Dt=null,Qt=null,sr=!1,Qi=!1,di=!1,ur=0,qa=0,Zi=null,P0=0;function Ut(){throw Error(s(321))}function bs(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!be(t[n],e[n]))return!1;return!0}function Ts(t,e,n,a,o,u){return on=u,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?gh:Us,di=!1,u=n(a,o),di=!1,Qi&&(u=_d(e,n,a,o)),Vd(t),u}function Vd(t){C.H=Xa;var e=Dt!==null&&Dt.next!==null;if(on=0,Qt=Dt=ct=null,sr=!1,qa=0,Zi=null,e)throw Error(s(300));t===null||Zt||(t=t.dependencies,t!==null&&Il(t)&&(Zt=!0))}function _d(t,e,n,a){ct=t;var o=0;do{if(Qi&&(Zi=null),qa=0,Qi=!1,25<=o)throw Error(s(301));if(o+=1,Qt=Dt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}C.H=yh,u=e(n,a)}while(Qi);return u}function W0(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?Ya(e):e,t=t.useState()[0],(Dt!==null?Dt.memoizedState:null)!==t&&(ct.flags|=1024),e}function As(){var t=ur!==0;return ur=0,t}function js(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Es(t){if(sr){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}sr=!1}on=0,Qt=Dt=ct=null,Qi=!1,qa=ur=0,Zi=null}function oe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?ct.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Gt(){if(Dt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Qt===null?ct.memoizedState:Qt.next;if(e!==null)Qt=e,Dt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Qt===null?ct.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ya(t){var e=qa;return qa+=1,Zi===null&&(Zi=[]),t=Ed(Zi,t,e),e=ct,(Qt===null?e.memoizedState:Qt.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?gh:Us),t}function fr(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ya(t);if(t.$$typeof===B)return te(t)}throw Error(s(438,String(t)))}function Ms(t){var e=null,n=ct.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ct.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=cr(),ct.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=nt;return e.index++,n}function sn(t,e){return typeof e=="function"?e(t):e}function dr(t){var e=Gt();return Rs(e,Dt,t)}function Rs(t,e,n){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var o=t.baseQueue,u=a.pending;if(u!==null){if(o!==null){var d=o.next;o.next=u.next,u.next=d}e.baseQueue=o=u,a.pending=null}if(u=t.baseState,o===null)t.memoizedState=u;else{e=o.next;var v=d=null,x=null,M=e,w=!1;do{var L=M.lane&-536870913;if(L!==M.lane?(yt&L)===L:(on&L)===L){var R=M.revertLane;if(R===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),L===Hi&&(w=!0);else if((on&R)===R){M=M.next,R===Hi&&(w=!0);continue}else L={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},x===null?(v=x=L,d=u):x=x.next=L,ct.lanes|=R,Vn|=R;L=M.action,di&&n(u,L),u=M.hasEagerState?M.eagerState:n(u,L)}else R={lane:L,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},x===null?(v=x=R,d=u):x=x.next=R,ct.lanes|=L,Vn|=L;M=M.next}while(M!==null&&M!==e);if(x===null?d=u:x.next=v,!be(u,t.memoizedState)&&(Zt=!0,w&&(n=qi,n!==null)))throw n;t.memoizedState=u,t.baseState=d,t.baseQueue=x,a.lastRenderedState=u}return o===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Ds(t){var e=Gt(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var a=n.dispatch,o=n.pending,u=e.memoizedState;if(o!==null){n.pending=null;var d=o=o.next;do u=t(u,d.action),d=d.next;while(d!==o);be(u,e.memoizedState)||(Zt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,a]}function Ld(t,e,n){var a=ct,o=Gt(),u=St;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var d=!be((Dt||o).memoizedState,n);if(d&&(o.memoizedState=n,Zt=!0),o=o.queue,Ns(Hd.bind(null,a,o,t),[t]),o.getSnapshot!==e||d||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,Ki(9,{destroy:void 0},Bd.bind(null,a,o,n,e),null),Nt===null)throw Error(s(349));u||(on&127)!==0||Ud(a,e,n)}return n}function Ud(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ct.updateQueue,e===null?(e=cr(),ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bd(t,e,n,a){e.value=n,e.getSnapshot=a,qd(e)&&Yd(t)}function Hd(t,e,n){return n(function(){qd(e)&&Yd(t)})}function qd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!be(t,n)}catch{return!0}}function Yd(t){var e=ii(t,2);e!==null&&ye(e,t,2)}function Cs(t){var e=oe();if(typeof t=="function"){var n=t;if(t=n(),di){xn(!0);try{n()}finally{xn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:t},e}function Gd(t,e,n,a){return t.baseState=n,Rs(t,Dt,typeof a=="function"?a:sn)}function $0(t,e,n,a,o){if(mr(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};C.T!==null?n(!0):u.isTransition=!1,a(u),n=e.pending,n===null?(u.next=e.pending=u,Xd(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Xd(t,e){var n=e.action,a=e.payload,o=t.state;if(e.isTransition){var u=C.T,d={};C.T=d;try{var v=n(o,a),x=C.S;x!==null&&x(d,v),Qd(t,e,v)}catch(M){zs(t,e,M)}finally{u!==null&&d.types!==null&&(u.types=d.types),C.T=u}}else try{u=n(o,a),Qd(t,e,u)}catch(M){zs(t,e,M)}}function Qd(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Zd(t,e,a)},function(a){return zs(t,e,a)}):Zd(t,e,n)}function Zd(t,e,n){e.status="fulfilled",e.value=n,Kd(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Xd(t,n)))}function zs(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Kd(e),e=e.next;while(e!==a)}t.action=null}function Kd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function kd(t,e){return e}function Jd(t,e){if(St){var n=Nt.formState;if(n!==null){t:{var a=ct;if(St){if(Ot){e:{for(var o=Ot,u=_e;o.nodeType!==8;){if(!u){o=null;break e}if(o=Ue(o.nextSibling),o===null){o=null;break e}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Ot=Ue(o.nextSibling),a=o.data==="F!";break t}}En(a)}a=!1}a&&(e=n[0])}}return n=oe(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kd,lastRenderedState:e},n.queue=a,n=hh.bind(null,ct,a),a.dispatch=n,a=Cs(!1),u=Ls.bind(null,ct,!1,a.queue),a=oe(),o={state:e,dispatch:null,action:t,pending:null},a.queue=o,n=$0.bind(null,ct,o,u,n),o.dispatch=n,a.memoizedState=t,[e,n,!1]}function Fd(t){var e=Gt();return Pd(e,Dt,t)}function Pd(t,e,n){if(e=Rs(t,e,kd)[0],t=dr(sn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Ya(e)}catch(d){throw d===Yi?nr:d}else a=e;e=Gt();var o=e.queue,u=o.dispatch;return n!==e.memoizedState&&(ct.flags|=2048,Ki(9,{destroy:void 0},I0.bind(null,o,n),null)),[a,u,t]}function I0(t,e){t.action=e}function Wd(t){var e=Gt(),n=Dt;if(n!==null)return Pd(e,n,t);Gt(),e=e.memoizedState,n=Gt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Ki(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ct.updateQueue,e===null&&(e=cr(),ct.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function $d(){return Gt().memoizedState}function hr(t,e,n,a){var o=oe();ct.flags|=t,o.memoizedState=Ki(1|e,{destroy:void 0},n,a===void 0?null:a)}function pr(t,e,n,a){var o=Gt();a=a===void 0?null:a;var u=o.memoizedState.inst;Dt!==null&&a!==null&&bs(a,Dt.memoizedState.deps)?o.memoizedState=Ki(e,u,n,a):(ct.flags|=t,o.memoizedState=Ki(1|e,u,n,a))}function Id(t,e){hr(8390656,8,t,e)}function Ns(t,e){pr(2048,8,t,e)}function t1(t){ct.flags|=4;var e=ct.updateQueue;if(e===null)e=cr(),ct.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function th(t){var e=Gt().memoizedState;return t1({ref:e,nextImpl:t}),function(){if((At&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function eh(t,e){return pr(4,2,t,e)}function nh(t,e){return pr(4,4,t,e)}function ih(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ah(t,e,n){n=n!=null?n.concat([t]):null,pr(4,4,ih.bind(null,e,t),n)}function Os(){}function lh(t,e){var n=Gt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&bs(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function rh(t,e){var n=Gt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&bs(e,a[1]))return a[0];if(a=t(),di){xn(!0);try{t()}finally{xn(!1)}}return n.memoizedState=[a,e],a}function ws(t,e,n){return n===void 0||(on&1073741824)!==0&&(yt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=op(),ct.lanes|=t,Vn|=t,n)}function oh(t,e,n,a){return be(n,e)?n:Xi.current!==null?(t=ws(t,n,a),be(t,e)||(Zt=!0),t):(on&42)===0||(on&1073741824)!==0&&(yt&261930)===0?(Zt=!0,t.memoizedState=n):(t=op(),ct.lanes|=t,Vn|=t,e)}function sh(t,e,n,a,o){var u=Y.p;Y.p=u!==0&&8>u?u:8;var d=C.T,v={};C.T=v,Ls(t,!1,e,n);try{var x=o(),M=C.S;if(M!==null&&M(v,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var w=F0(x,a);Ga(t,e,w,Re(t))}else Ga(t,e,a,Re(t))}catch(L){Ga(t,e,{then:function(){},status:"rejected",reason:L},Re())}finally{Y.p=u,d!==null&&v.types!==null&&(d.types=v.types),C.T=d}}function e1(){}function Vs(t,e,n,a){if(t.tag!==5)throw Error(s(476));var o=uh(t).queue;sh(t,o,e,$,n===null?e1:function(){return ch(t),n(a)})}function uh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:$},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ch(t){var e=uh(t);e.next===null&&(e=t.alternate.memoizedState),Ga(t,e.next.queue,{},Re())}function _s(){return te(ll)}function fh(){return Gt().memoizedState}function dh(){return Gt().memoizedState}function n1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Re();t=Dn(n);var a=Cn(e,t,n);a!==null&&(ye(a,e,n),Ua(a,e,n)),e={cache:cs()},t.payload=e;return}e=e.return}}function i1(t,e,n){var a=Re();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mr(t)?ph(e,n):(n=Io(t,e,n,a),n!==null&&(ye(n,t,a),mh(n,e,a)))}function hh(t,e,n){var a=Re();Ga(t,e,n,a)}function Ga(t,e,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mr(t))ph(e,o);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var d=e.lastRenderedState,v=u(d,n);if(o.hasEagerState=!0,o.eagerState=v,be(v,d))return Fl(t,e,o,0),Nt===null&&Jl(),!1}catch{}if(n=Io(t,e,o,a),n!==null)return ye(n,t,a),mh(n,e,a),!0}return!1}function Ls(t,e,n,a){if(a={lane:2,revertLane:pu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},mr(t)){if(e)throw Error(s(479))}else e=Io(t,n,a,2),e!==null&&ye(e,t,2)}function mr(t){var e=t.alternate;return t===ct||e!==null&&e===ct}function ph(t,e){Qi=sr=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mh(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,xf(t,n)}}var Xa={readContext:te,use:fr,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};Xa.useEffectEvent=Ut;var gh={readContext:te,use:fr,useCallback:function(t,e){return oe().memoizedState=[t,e===void 0?null:e],t},useContext:te,useEffect:Id,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,hr(4194308,4,ih.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hr(4194308,4,t,e)},useInsertionEffect:function(t,e){hr(4,2,t,e)},useMemo:function(t,e){var n=oe();e=e===void 0?null:e;var a=t();if(di){xn(!0);try{t()}finally{xn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=oe();if(n!==void 0){var o=n(e);if(di){xn(!0);try{n(e)}finally{xn(!1)}}}else o=e;return a.memoizedState=a.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},a.queue=t,t=t.dispatch=i1.bind(null,ct,t),[a.memoizedState,t]},useRef:function(t){var e=oe();return t={current:t},e.memoizedState=t},useState:function(t){t=Cs(t);var e=t.queue,n=hh.bind(null,ct,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Os,useDeferredValue:function(t,e){var n=oe();return ws(n,t,e)},useTransition:function(){var t=Cs(!1);return t=sh.bind(null,ct,t.queue,!0,!1),oe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ct,o=oe();if(St){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Nt===null)throw Error(s(349));(yt&127)!==0||Ud(a,e,n)}o.memoizedState=n;var u={value:n,getSnapshot:e};return o.queue=u,Id(Hd.bind(null,a,u,t),[t]),a.flags|=2048,Ki(9,{destroy:void 0},Bd.bind(null,a,u,n,e),null),n},useId:function(){var t=oe(),e=Nt.identifierPrefix;if(St){var n=Je,a=ke;n=(a&~(1<<32-xe(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ur++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=P0++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:_s,useFormState:Jd,useActionState:Jd,useOptimistic:function(t){var e=oe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Ls.bind(null,ct,!0,n),n.dispatch=e,[t,e]},useMemoCache:Ms,useCacheRefresh:function(){return oe().memoizedState=n1.bind(null,ct)},useEffectEvent:function(t){var e=oe(),n={impl:t};return e.memoizedState=n,function(){if((At&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:te,use:fr,useCallback:lh,useContext:te,useEffect:Ns,useImperativeHandle:ah,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:rh,useReducer:dr,useRef:$d,useState:function(){return dr(sn)},useDebugValue:Os,useDeferredValue:function(t,e){var n=Gt();return oh(n,Dt.memoizedState,t,e)},useTransition:function(){var t=dr(sn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Ya(t),e]},useSyncExternalStore:Ld,useId:fh,useHostTransitionStatus:_s,useFormState:Fd,useActionState:Fd,useOptimistic:function(t,e){var n=Gt();return Gd(n,Dt,t,e)},useMemoCache:Ms,useCacheRefresh:dh};Us.useEffectEvent=th;var yh={readContext:te,use:fr,useCallback:lh,useContext:te,useEffect:Ns,useImperativeHandle:ah,useInsertionEffect:eh,useLayoutEffect:nh,useMemo:rh,useReducer:Ds,useRef:$d,useState:function(){return Ds(sn)},useDebugValue:Os,useDeferredValue:function(t,e){var n=Gt();return Dt===null?ws(n,t,e):oh(n,Dt.memoizedState,t,e)},useTransition:function(){var t=Ds(sn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Ya(t),e]},useSyncExternalStore:Ld,useId:fh,useHostTransitionStatus:_s,useFormState:Wd,useActionState:Wd,useOptimistic:function(t,e){var n=Gt();return Dt!==null?Gd(n,Dt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ms,useCacheRefresh:dh};yh.useEffectEvent=th;function Bs(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:S({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hs={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=Re(),o=Dn(a);o.payload=e,n!=null&&(o.callback=n),e=Cn(t,o,a),e!==null&&(ye(e,t,a),Ua(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=Re(),o=Dn(a);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Cn(t,o,a),e!==null&&(ye(e,t,a),Ua(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),a=Dn(n);a.tag=2,e!=null&&(a.callback=e),e=Cn(t,a,n),e!==null&&(ye(e,t,n),Ua(e,t,n))}};function vh(t,e,n,a,o,u,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,d):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,a)||!Ca(o,u):!0}function Sh(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&Hs.enqueueReplaceState(e,e.state,null)}function hi(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=S({},n));for(var o in t)n[o]===void 0&&(n[o]=t[o])}return n}function xh(t){kl(t)}function bh(t){console.error(t)}function Th(t){kl(t)}function gr(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Ah(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function qs(t,e,n){return n=Dn(n),n.tag=3,n.payload={element:null},n.callback=function(){gr(t,e)},n}function jh(t){return t=Dn(t),t.tag=3,t}function Eh(t,e,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=a.value;t.payload=function(){return o(u)},t.callback=function(){Ah(e,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){Ah(e,n,a),typeof o!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function a1(t,e,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&Bi(e,n,o,!0),n=Ae.current,n!==null){switch(n.tag){case 31:case 13:return Le===null?Dr():n.alternate===null&&Bt===0&&(Bt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===ir?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),fu(t,a,o)),!1;case 22:return n.flags|=65536,a===ir?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),fu(t,a,o)),!1}throw Error(s(435,n.tag))}return fu(t,a,o),Dr(),!1}if(St)return e=Ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,a!==ls&&(t=Error(s(422),{cause:a}),Oa(Oe(t,n)))):(a!==ls&&(e=Error(s(423),{cause:a}),Oa(Oe(e,n))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,a=Oe(a,n),o=qs(t.stateNode,a,o),gs(t,o),Bt!==4&&(Bt=2)),!1;var u=Error(s(520),{cause:a});if(u=Oe(u,n),Wa===null?Wa=[u]:Wa.push(u),Bt!==4&&(Bt=2),e===null)return!0;a=Oe(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=o&-o,n.lanes|=t,t=qs(n.stateNode,a,t),gs(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(_n===null||!_n.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=jh(o),Eh(o,t,n,a),gs(n,o),!1}n=n.return}while(n!==null);return!1}var Ys=Error(s(461)),Zt=!1;function ee(t,e,n,a){e.child=t===null?Cd(e,null,n,a):fi(e,t.child,n,a)}function Mh(t,e,n,a,o){n=n.render;var u=e.ref;if("ref"in a){var d={};for(var v in a)v!=="ref"&&(d[v]=a[v])}else d=a;return oi(e),a=Ts(t,e,n,d,u,o),v=As(),t!==null&&!Zt?(js(t,e,o),un(t,e,o)):(St&&v&&is(e),e.flags|=1,ee(t,e,a,o),e.child)}function Rh(t,e,n,a,o){if(t===null){var u=n.type;return typeof u=="function"&&!ts(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Dh(t,e,u,a,o)):(t=Wl(n.type,null,a,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Fs(t,o)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(d,a)&&t.ref===e.ref)return un(t,e,o)}return e.flags|=1,t=nn(u,a),t.ref=e.ref,t.return=e,e.child=t}function Dh(t,e,n,a,o){if(t!==null){var u=t.memoizedProps;if(Ca(u,a)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=a=u,Fs(t,o))(t.flags&131072)!==0&&(Zt=!0);else return e.lanes=t.lanes,un(t,e,o)}return Gs(t,e,n,a,o)}function Ch(t,e,n,a){var o=a.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(a=e.child=t.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~u}else a=0,e.child=null;return zh(t,e,u,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&er(e,u!==null?u.cachePool:null),u!==null?Od(e,u):vs(),wd(e);else return a=e.lanes=536870912,zh(t,e,u!==null?u.baseLanes|n:n,n,a)}else u!==null?(er(e,u.cachePool),Od(e,u),Nn(),e.memoizedState=null):(t!==null&&er(e,null),vs(),Nn());return ee(t,e,o,n),e.child}function Qa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function zh(t,e,n,a,o){var u=ds();return u=u===null?null:{parent:Xt._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&er(e,null),vs(),wd(e),t!==null&&Bi(t,e,a,!0),e.childLanes=o,null}function yr(t,e){return e=Sr({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Nh(t,e,n){return fi(e,t.child,null,n),t=yr(e,e.pendingProps),t.flags|=2,je(e),e.memoizedState=null,t}function l1(t,e,n){var a=e.pendingProps,o=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(St){if(a.mode==="hidden")return t=yr(e,a),e.lanes=536870912,Qa(null,t);if(xs(e),(t=Ot)?(t=Xp(t,_e),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:An!==null?{id:ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},n=pd(t),n.return=e,e.child=n,It=e,Ot=null)):t=null,t===null)throw En(e);return e.lanes=536870912,null}return yr(e,a)}var u=t.memoizedState;if(u!==null){var d=u.dehydrated;if(xs(e),o)if(e.flags&256)e.flags&=-257,e=Nh(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(Zt||Bi(t,e,n,!1),o=(n&t.childLanes)!==0,Zt||o){if(a=Nt,a!==null&&(d=bf(a,n),d!==0&&d!==u.retryLane))throw u.retryLane=d,ii(t,d),ye(a,t,d),Ys;Dr(),e=Nh(t,e,n)}else t=u.treeContext,Ot=Ue(d.nextSibling),It=e,St=!0,jn=null,_e=!1,t!==null&&yd(e,t),e=yr(e,a),e.flags|=4096;return e}return t=nn(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function vr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Gs(t,e,n,a,o){return oi(e),n=Ts(t,e,n,a,void 0,o),a=As(),t!==null&&!Zt?(js(t,e,o),un(t,e,o)):(St&&a&&is(e),e.flags|=1,ee(t,e,n,o),e.child)}function Oh(t,e,n,a,o,u){return oi(e),e.updateQueue=null,n=_d(e,a,n,o),Vd(t),a=As(),t!==null&&!Zt?(js(t,e,u),un(t,e,u)):(St&&a&&is(e),e.flags|=1,ee(t,e,n,u),e.child)}function wh(t,e,n,a,o){if(oi(e),e.stateNode===null){var u=Vi,d=n.contextType;typeof d=="object"&&d!==null&&(u=te(d)),u=new n(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Hs,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},ps(e),d=n.contextType,u.context=typeof d=="object"&&d!==null?te(d):Vi,u.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Bs(e,n,d,a),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&Hs.enqueueReplaceState(u,u.state,null),Ha(e,a,u,o),Ba(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var v=e.memoizedProps,x=hi(n,v);u.props=x;var M=u.context,w=n.contextType;d=Vi,typeof w=="object"&&w!==null&&(d=te(w));var L=n.getDerivedStateFromProps;w=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,w||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||M!==d)&&Sh(e,u,a,d),Rn=!1;var R=e.memoizedState;u.state=R,Ha(e,a,u,o),Ba(),M=e.memoizedState,v||R!==M||Rn?(typeof L=="function"&&(Bs(e,n,L,a),M=e.memoizedState),(x=Rn||vh(e,n,x,a,R,M,d))?(w||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=M),u.props=a,u.state=M,u.context=d,a=x):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,ms(t,e),d=e.memoizedProps,w=hi(n,d),u.props=w,L=e.pendingProps,R=u.context,M=n.contextType,x=Vi,typeof M=="object"&&M!==null&&(x=te(M)),v=n.getDerivedStateFromProps,(M=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==L||R!==x)&&Sh(e,u,a,x),Rn=!1,R=e.memoizedState,u.state=R,Ha(e,a,u,o),Ba();var z=e.memoizedState;d!==L||R!==z||Rn||t!==null&&t.dependencies!==null&&Il(t.dependencies)?(typeof v=="function"&&(Bs(e,n,v,a),z=e.memoizedState),(w=Rn||vh(e,n,w,a,R,z,x)||t!==null&&t.dependencies!==null&&Il(t.dependencies))?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,z,x),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,z,x)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=z),u.props=a,u.state=z,u.context=x,a=w):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,vr(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=fi(e,t.child,null,o),e.child=fi(e,null,n,o)):ee(t,e,n,o),e.memoizedState=u.state,t=e.child):t=un(t,e,o),t}function Vh(t,e,n,a){return li(),e.flags|=256,ee(t,e,n,a),e.child}var Xs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qs(t){return{baseLanes:t,cachePool:Ad()}}function Zs(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Me),t}function _h(t,e,n){var a=e.pendingProps,o=!1,u=(e.flags&128)!==0,d;if((d=u)||(d=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),d&&(o=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(St){if(o?zn(e):Nn(),(t=Ot)?(t=Xp(t,_e),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:An!==null?{id:ke,overflow:Je}:null,retryLane:536870912,hydrationErrors:null},n=pd(t),n.return=e,e.child=n,It=e,Ot=null)):t=null,t===null)throw En(e);return Ru(t)?e.lanes=32:e.lanes=536870912,null}var v=a.children;return a=a.fallback,o?(Nn(),o=e.mode,v=Sr({mode:"hidden",children:v},o),a=ai(a,o,n,null),v.return=e,a.return=e,v.sibling=a,e.child=v,a=e.child,a.memoizedState=Qs(n),a.childLanes=Zs(t,d,n),e.memoizedState=Xs,Qa(null,a)):(zn(e),Ks(e,v))}var x=t.memoizedState;if(x!==null&&(v=x.dehydrated,v!==null)){if(u)e.flags&256?(zn(e),e.flags&=-257,e=ks(t,e,n)):e.memoizedState!==null?(Nn(),e.child=t.child,e.flags|=128,e=null):(Nn(),v=a.fallback,o=e.mode,a=Sr({mode:"visible",children:a.children},o),v=ai(v,o,n,null),v.flags|=2,a.return=e,v.return=e,a.sibling=v,e.child=a,fi(e,t.child,null,n),a=e.child,a.memoizedState=Qs(n),a.childLanes=Zs(t,d,n),e.memoizedState=Xs,e=Qa(null,a));else if(zn(e),Ru(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var M=d.dgst;d=M,a=Error(s(419)),a.stack="",a.digest=d,Oa({value:a,source:null,stack:null}),e=ks(t,e,n)}else if(Zt||Bi(t,e,n,!1),d=(n&t.childLanes)!==0,Zt||d){if(d=Nt,d!==null&&(a=bf(d,n),a!==0&&a!==x.retryLane))throw x.retryLane=a,ii(t,a),ye(d,t,a),Ys;Mu(v)||Dr(),e=ks(t,e,n)}else Mu(v)?(e.flags|=192,e.child=t.child,e=null):(t=x.treeContext,Ot=Ue(v.nextSibling),It=e,St=!0,jn=null,_e=!1,t!==null&&yd(e,t),e=Ks(e,a.children),e.flags|=4096);return e}return o?(Nn(),v=a.fallback,o=e.mode,x=t.child,M=x.sibling,a=nn(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,M!==null?v=nn(M,v):(v=ai(v,o,n,null),v.flags|=2),v.return=e,a.return=e,a.sibling=v,e.child=a,Qa(null,a),a=e.child,v=t.child.memoizedState,v===null?v=Qs(n):(o=v.cachePool,o!==null?(x=Xt._currentValue,o=o.parent!==x?{parent:x,pool:x}:o):o=Ad(),v={baseLanes:v.baseLanes|n,cachePool:o}),a.memoizedState=v,a.childLanes=Zs(t,d,n),e.memoizedState=Xs,Qa(t.child,a)):(zn(e),n=t.child,t=n.sibling,n=nn(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=n,e.memoizedState=null,n)}function Ks(t,e){return e=Sr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Sr(t,e){return t=Te(22,t,null,e),t.lanes=0,t}function ks(t,e,n){return fi(e,t.child,null,n),t=Ks(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lh(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),ss(t.return,e,n)}function Js(t,e,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:u}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=o,d.treeForkCount=u)}function Uh(t,e,n){var a=e.pendingProps,o=a.revealOrder,u=a.tail;a=a.children;var d=Yt.current,v=(d&2)!==0;if(v?(d=d&1|2,e.flags|=128):d&=1,k(Yt,d),ee(t,e,a,n),a=St?Na:0,!v&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lh(t,n,e);else if(t.tag===19)Lh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(o){case"forwards":for(n=e.child,o=null;n!==null;)t=n.alternate,t!==null&&or(t)===null&&(o=n),n=n.sibling;n=o,n===null?(o=e.child,e.child=null):(o=n.sibling,n.sibling=null),Js(e,!1,o,n,u,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&or(t)===null){e.child=o;break}t=o.sibling,o.sibling=n,n=o,o=t}Js(e,!0,n,null,u,a);break;case"together":Js(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Bi(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fs(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Il(t)))}function r1(t,e,n){switch(e.tag){case 3:re(e,e.stateNode.containerInfo),Mn(e,Xt,t.memoizedState.cache),li();break;case 27:case 5:ga(e);break;case 4:re(e,e.stateNode.containerInfo);break;case 10:Mn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,xs(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(zn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?_h(t,e,n):(zn(e),t=un(t,e,n),t!==null?t.sibling:null);zn(e);break;case 19:var o=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(Bi(t,e,n,!1),a=(n&e.childLanes)!==0),o){if(a)return Uh(t,e,n);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),k(Yt,Yt.current),a)break;return null;case 22:return e.lanes=0,Ch(t,e,n,e.pendingProps);case 24:Mn(e,Xt,t.memoizedState.cache)}return un(t,e,n)}function Bh(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Zt=!0;else{if(!Fs(t,n)&&(e.flags&128)===0)return Zt=!1,r1(t,e,n);Zt=(t.flags&131072)!==0}else Zt=!1,St&&(e.flags&1048576)!==0&&gd(e,Na,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ui(e.elementType),e.type=t,typeof t=="function")ts(t)?(a=hi(t,a),e.tag=1,e=wh(null,e,t,a,n)):(e.tag=0,e=Gs(null,e,t,a,n));else{if(t!=null){var o=t.$$typeof;if(o===J){e.tag=11,e=Mh(null,e,t,a,n);break t}else if(o===Q){e.tag=14,e=Rh(null,e,t,a,n);break t}}throw e=jt(t)||t,Error(s(306,e,""))}}return e;case 0:return Gs(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,o=hi(a,e.pendingProps),wh(t,e,a,o,n);case 3:t:{if(re(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var u=e.memoizedState;o=u.element,ms(t,e),Ha(e,a,null,n);var d=e.memoizedState;if(a=d.cache,Mn(e,Xt,a),a!==u.cache&&us(e,[Xt],n,!0),Ba(),a=d.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Vh(t,e,a,n);break t}else if(a!==o){o=Oe(Error(s(424)),e),Oa(o),e=Vh(t,e,a,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ot=Ue(t.firstChild),It=e,St=!0,jn=null,_e=!0,n=Cd(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),a===o){e=un(t,e,n);break t}ee(t,e,a,n)}e=e.child}return e;case 26:return vr(t,e),t===null?(n=Fp(e.type,null,e.pendingProps,null))?e.memoizedState=n:St||(n=e.type,t=e.pendingProps,a=_r(ht.current).createElement(n),a[$t]=e,a[fe]=t,ne(a,n,t),Pt(a),e.stateNode=a):e.memoizedState=Fp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ga(e),t===null&&St&&(a=e.stateNode=Kp(e.type,e.pendingProps,ht.current),It=e,_e=!0,o=Ot,Hn(e.type)?(Du=o,Ot=Ue(a.firstChild)):Ot=o),ee(t,e,e.pendingProps.children,n),vr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&St&&((o=a=Ot)&&(a=L1(a,e.type,e.pendingProps,_e),a!==null?(e.stateNode=a,It=e,Ot=Ue(a.firstChild),_e=!1,o=!0):o=!1),o||En(e)),ga(e),o=e.type,u=e.pendingProps,d=t!==null?t.memoizedProps:null,a=u.children,Au(o,u)?a=null:d!==null&&Au(o,d)&&(e.flags|=32),e.memoizedState!==null&&(o=Ts(t,e,W0,null,null,n),ll._currentValue=o),vr(t,e),ee(t,e,a,n),e.child;case 6:return t===null&&St&&((t=n=Ot)&&(n=U1(n,e.pendingProps,_e),n!==null?(e.stateNode=n,It=e,Ot=null,t=!0):t=!1),t||En(e)),null;case 13:return _h(t,e,n);case 4:return re(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=fi(e,null,a,n):ee(t,e,a,n),e.child;case 11:return Mh(t,e,e.type,e.pendingProps,n);case 7:return ee(t,e,e.pendingProps,n),e.child;case 8:return ee(t,e,e.pendingProps.children,n),e.child;case 12:return ee(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,Mn(e,e.type,a.value),ee(t,e,a.children,n),e.child;case 9:return o=e.type._context,a=e.pendingProps.children,oi(e),o=te(o),a=a(o),e.flags|=1,ee(t,e,a,n),e.child;case 14:return Rh(t,e,e.type,e.pendingProps,n);case 15:return Dh(t,e,e.type,e.pendingProps,n);case 19:return Uh(t,e,n);case 31:return l1(t,e,n);case 22:return Ch(t,e,n,e.pendingProps);case 24:return oi(e),a=te(Xt),t===null?(o=ds(),o===null&&(o=Nt,u=cs(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),e.memoizedState={parent:a,cache:o},ps(e),Mn(e,Xt,o)):((t.lanes&n)!==0&&(ms(t,e),Ha(e,null,null,n),Ba()),o=t.memoizedState,u=e.memoizedState,o.parent!==a?(o={parent:a,cache:a},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Mn(e,Xt,a)):(a=u.cache,Mn(e,Xt,a),a!==o.cache&&us(e,[Xt],n,!0))),ee(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function cn(t){t.flags|=4}function Ps(t,e,n,a,o){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(o&335544128)===o)if(t.stateNode.complete)t.flags|=8192;else if(fp())t.flags|=8192;else throw ci=ir,hs}else t.flags&=-16777217}function Hh(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!tm(e))if(fp())t.flags|=8192;else throw ci=ir,hs}function xr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?vf():536870912,t.lanes|=e,Pi|=e)}function Za(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var o=t.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function o1(t,e,n){var a=e.pendingProps;switch(as(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return wt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),rn(Xt),qt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Ui(e)?cn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,rs())),wt(e),null;case 26:var o=e.type,u=e.memoizedState;return t===null?(cn(e),u!==null?(wt(e),Hh(e,u)):(wt(e),Ps(e,o,null,a,n))):u?u!==t.memoizedState?(cn(e),wt(e),Hh(e,u)):(wt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&cn(e),wt(e),Ps(e,o,t,a,n)),null;case 27:if(Nl(e),n=ht.current,o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&cn(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return wt(e),null}t=W.current,Ui(e)?vd(e):(t=Kp(o,a,n),e.stateNode=t,cn(e))}return wt(e),null;case 5:if(Nl(e),o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&cn(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return wt(e),null}if(u=W.current,Ui(e))vd(e);else{var d=_r(ht.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?d.createElement(o,{is:a.is}):d.createElement(o)}}u[$t]=e,u[fe]=a;t:for(d=e.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break t;for(;d.sibling===null;){if(d.return===null||d.return===e)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}e.stateNode=u;t:switch(ne(u,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&cn(e)}}return wt(e),Ps(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&cn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=ht.current,Ui(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,o=It,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}t[$t]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||_p(t.nodeValue,n)),t||En(e,!0)}else t=_r(t).createTextNode(a),t[$t]=e,e.stateNode=t}return wt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=Ui(e),n!==null){if(t===null){if(!a)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[$t]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),t=!1}else n=rs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(je(e),e):(je(e),null);if((e.flags&128)!==0)throw Error(s(558))}return wt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=Ui(e),a!==null&&a.dehydrated!==null){if(t===null){if(!o)throw Error(s(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[$t]=e}else li(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),o=!1}else o=rs(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(je(e),e):(je(e),null)}return je(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),xr(e,e.updateQueue),wt(e),null);case 4:return qt(),t===null&&vu(e.stateNode.containerInfo),wt(e),null;case 10:return rn(e.type),wt(e),null;case 19:if(V(Yt),a=e.memoizedState,a===null)return wt(e),null;if(o=(e.flags&128)!==0,u=a.rendering,u===null)if(o)Za(a,!1);else{if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=or(t),u!==null){for(e.flags|=128,Za(a,!1),t=u.updateQueue,e.updateQueue=t,xr(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)hd(n,t),n=n.sibling;return k(Yt,Yt.current&1|2),St&&an(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ve()>Er&&(e.flags|=128,o=!0,Za(a,!1),e.lanes=4194304)}else{if(!o)if(t=or(u),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,xr(e,t),Za(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!St)return wt(e),null}else 2*ve()-a.renderingStartTime>Er&&n!==536870912&&(e.flags|=128,o=!0,Za(a,!1),e.lanes=4194304);a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ve(),t.sibling=null,n=Yt.current,k(Yt,o?n&1|2:n&1),St&&an(e,a.treeForkCount),t):(wt(e),null);case 22:case 23:return je(e),Ss(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),n=e.updateQueue,n!==null&&xr(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&V(si),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),rn(Xt),wt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function s1(t,e){switch(as(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rn(Xt),qt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Nl(e),null;case 31:if(e.memoizedState!==null){if(je(e),e.alternate===null)throw Error(s(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(je(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(Yt),null;case 4:return qt(),null;case 10:return rn(e.type),null;case 22:case 23:return je(e),Ss(),t!==null&&V(si),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return rn(Xt),null;case 25:return null;default:return null}}function qh(t,e){switch(as(e),e.tag){case 3:rn(Xt),qt();break;case 26:case 27:case 5:Nl(e);break;case 4:qt();break;case 31:e.memoizedState!==null&&je(e);break;case 13:je(e);break;case 19:V(Yt);break;case 10:rn(e.type);break;case 22:case 23:je(e),Ss(),t!==null&&V(si);break;case 24:rn(Xt)}}function Ka(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&t)===t){a=void 0;var u=n.create,d=n.inst;a=u(),d.destroy=a}n=n.next}while(n!==o)}}catch(v){Rt(e,e.return,v)}}function On(t,e,n){try{var a=e.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){var d=a.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,o=e;var x=n,M=v;try{M()}catch(w){Rt(o,x,w)}}}a=a.next}while(a!==u)}}catch(w){Rt(e,e.return,w)}}function Yh(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Nd(e,n)}catch(a){Rt(t,t.return,a)}}}function Gh(t,e,n){n.props=hi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Rt(t,e,a)}}function ka(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(o){Rt(t,e,o)}}function Fe(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Rt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Rt(t,e,o)}else n.current=null}function Xh(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Rt(t,t.return,o)}}function Ws(t,e,n){try{var a=t.stateNode;z1(a,t.type,n,e),a[fe]=e}catch(o){Rt(t,t.return,o)}}function Qh(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Hn(t.type)||t.tag===4}function $s(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Hn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Is(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tn));else if(a!==4&&(a===27&&Hn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Is(t,e,n),t=t.sibling;t!==null;)Is(t,e,n),t=t.sibling}function br(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Hn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(br(t,e,n),t=t.sibling;t!==null;)br(t,e,n),t=t.sibling}function Zh(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);ne(e,a,n),e[$t]=t,e[fe]=n}catch(u){Rt(t,t.return,u)}}var fn=!1,Kt=!1,tu=!1,Kh=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function u1(t,e){if(t=t.containerInfo,bu=Gr,t=ad(t),ko(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var d=0,v=-1,x=-1,M=0,w=0,L=t,R=null;e:for(;;){for(var z;L!==n||o!==0&&L.nodeType!==3||(v=d+o),L!==u||a!==0&&L.nodeType!==3||(x=d+a),L.nodeType===3&&(d+=L.nodeValue.length),(z=L.firstChild)!==null;)R=L,L=z;for(;;){if(L===t)break e;if(R===n&&++M===o&&(v=d),R===u&&++w===a&&(x=d),(z=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=z}n=v===-1||x===-1?null:{start:v,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tu={focusedElem:t,selectionRange:n},Gr=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)o=t[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,o=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var I=hi(n.type,o);t=a.getSnapshotBeforeUpdate(I,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(at){Rt(n,n.return,at)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Eu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Eu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function kh(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:hn(t,n),a&4&&Ka(5,n);break;case 1:if(hn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(d){Rt(n,n.return,d)}else{var o=hi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){Rt(n,n.return,d)}}a&64&&Yh(n),a&512&&ka(n,n.return);break;case 3:if(hn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Nd(t,e)}catch(d){Rt(n,n.return,d)}}break;case 27:e===null&&a&4&&Zh(n);case 26:case 5:hn(t,n),e===null&&a&4&&Xh(n),a&512&&ka(n,n.return);break;case 12:hn(t,n);break;case 31:hn(t,n),a&4&&Ph(t,n);break;case 13:hn(t,n),a&4&&Wh(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=v1.bind(null,n),B1(t,n))));break;case 22:if(a=n.memoizedState!==null||fn,!a){e=e!==null&&e.memoizedState!==null||Kt,o=fn;var u=Kt;fn=a,(Kt=e)&&!u?pn(t,n,(n.subtreeFlags&8772)!==0):hn(t,n),fn=o,Kt=u}break;case 30:break;default:hn(t,n)}}function Jh(t){var e=t.alternate;e!==null&&(t.alternate=null,Jh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&zo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _t=null,he=!1;function dn(t,e,n){for(n=n.child;n!==null;)Fh(t,e,n),n=n.sibling}function Fh(t,e,n){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 26:Kt||Fe(n,e),dn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kt||Fe(n,e);var a=_t,o=he;Hn(n.type)&&(_t=n.stateNode,he=!1),dn(t,e,n),nl(n.stateNode),_t=a,he=o;break;case 5:Kt||Fe(n,e);case 6:if(a=_t,o=he,_t=null,dn(t,e,n),_t=a,he=o,_t!==null)if(he)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(n.stateNode)}catch(u){Rt(n,e,u)}else try{_t.removeChild(n.stateNode)}catch(u){Rt(n,e,u)}break;case 18:_t!==null&&(he?(t=_t,Yp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),aa(t)):Yp(_t,n.stateNode));break;case 4:a=_t,o=he,_t=n.stateNode.containerInfo,he=!0,dn(t,e,n),_t=a,he=o;break;case 0:case 11:case 14:case 15:On(2,n,e),Kt||On(4,n,e),dn(t,e,n);break;case 1:Kt||(Fe(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Gh(n,e,a)),dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:Kt=(a=Kt)||n.memoizedState!==null,dn(t,e,n),Kt=a;break;default:dn(t,e,n)}}function Ph(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{aa(t)}catch(n){Rt(e,e.return,n)}}}function Wh(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{aa(t)}catch(n){Rt(e,e.return,n)}}function c1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Kh),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Kh),e;default:throw Error(s(435,t.tag))}}function Tr(t,e){var n=c1(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var o=S1.bind(null,t,a);a.then(o,o)}})}function pe(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],u=t,d=e,v=d;t:for(;v!==null;){switch(v.tag){case 27:if(Hn(v.type)){_t=v.stateNode,he=!1;break t}break;case 5:_t=v.stateNode,he=!1;break t;case 3:case 4:_t=v.stateNode.containerInfo,he=!0;break t}v=v.return}if(_t===null)throw Error(s(160));Fh(u,d,o),_t=null,he=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)$h(e,t),e=e.sibling}var Xe=null;function $h(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),me(t),a&4&&(On(3,t,t.return),Ka(3,t),On(5,t,t.return));break;case 1:pe(e,t),me(t),a&512&&(Kt||n===null||Fe(n,n.return)),a&64&&fn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=Xe;if(pe(e,t),me(t),a&512&&(Kt||n===null||Fe(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,o=o.ownerDocument||o;e:switch(a){case"title":u=o.getElementsByTagName("title")[0],(!u||u[xa]||u[$t]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(a),o.head.insertBefore(u,o.querySelector("head > title"))),ne(u,a,n),u[$t]=t,Pt(u),a=u;break t;case"link":var d=$p("link","href",o).get(a+(n.href||""));if(d){for(var v=0;v<d.length;v++)if(u=d[v],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(v,1);break e}}u=o.createElement(a),ne(u,a,n),o.head.appendChild(u);break;case"meta":if(d=$p("meta","content",o).get(a+(n.content||""))){for(v=0;v<d.length;v++)if(u=d[v],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(v,1);break e}}u=o.createElement(a),ne(u,a,n),o.head.appendChild(u);break;default:throw Error(s(468,a))}u[$t]=t,Pt(u),a=u}t.stateNode=a}else Ip(o,t.type,t.stateNode);else t.stateNode=Wp(o,a,t.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?Ip(o,t.type,t.stateNode):Wp(o,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ws(t,t.memoizedProps,n.memoizedProps)}break;case 27:pe(e,t),me(t),a&512&&(Kt||n===null||Fe(n,n.return)),n!==null&&a&4&&Ws(t,t.memoizedProps,n.memoizedProps);break;case 5:if(pe(e,t),me(t),a&512&&(Kt||n===null||Fe(n,n.return)),t.flags&32){o=t.stateNode;try{Ri(o,"")}catch(I){Rt(t,t.return,I)}}a&4&&t.stateNode!=null&&(o=t.memoizedProps,Ws(t,o,n!==null?n.memoizedProps:o)),a&1024&&(tu=!0);break;case 6:if(pe(e,t),me(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(I){Rt(t,t.return,I)}}break;case 3:if(Br=null,o=Xe,Xe=Lr(e.containerInfo),pe(e,t),Xe=o,me(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(I){Rt(t,t.return,I)}tu&&(tu=!1,Ih(t));break;case 4:a=Xe,Xe=Lr(t.stateNode.containerInfo),pe(e,t),me(t),Xe=a;break;case 12:pe(e,t),me(t);break;case 31:pe(e,t),me(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Tr(t,a)));break;case 13:pe(e,t),me(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jr=ve()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Tr(t,a)));break;case 22:o=t.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,M=fn,w=Kt;if(fn=M||o,Kt=w||x,pe(e,t),Kt=w,fn=M,me(t),a&8192)t:for(e=t.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(n===null||x||fn||Kt||pi(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){x=n=e;try{if(u=x.stateNode,o)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=x.stateNode;var L=x.memoizedProps.style,R=L!=null&&L.hasOwnProperty("display")?L.display:null;v.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(I){Rt(x,x.return,I)}}}else if(e.tag===6){if(n===null){x=e;try{x.stateNode.nodeValue=o?"":x.memoizedProps}catch(I){Rt(x,x.return,I)}}}else if(e.tag===18){if(n===null){x=e;try{var z=x.stateNode;o?Gp(z,!0):Gp(x.stateNode,!1)}catch(I){Rt(x,x.return,I)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Tr(t,n))));break;case 19:pe(e,t),me(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Tr(t,a)));break;case 30:break;case 21:break;default:pe(e,t),me(t)}}function me(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(Qh(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,u=$s(t);br(t,u,o);break;case 5:var d=n.stateNode;n.flags&32&&(Ri(d,""),n.flags&=-33);var v=$s(t);br(t,v,d);break;case 3:case 4:var x=n.stateNode.containerInfo,M=$s(t);Is(t,M,x);break;default:throw Error(s(161))}}catch(w){Rt(t,t.return,w)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ih(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ih(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function hn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)kh(t,e.alternate,e),e=e.sibling}function pi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:On(4,e,e.return),pi(e);break;case 1:Fe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Gh(e,e.return,n),pi(e);break;case 27:nl(e.stateNode);case 26:case 5:Fe(e,e.return),pi(e);break;case 22:e.memoizedState===null&&pi(e);break;case 30:pi(e);break;default:pi(e)}t=t.sibling}}function pn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,o=t,u=e,d=u.flags;switch(u.tag){case 0:case 11:case 15:pn(o,u,n),Ka(4,u);break;case 1:if(pn(o,u,n),a=u,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(M){Rt(a,a.return,M)}if(a=u,o=a.updateQueue,o!==null){var v=a.stateNode;try{var x=o.shared.hiddenCallbacks;if(x!==null)for(o.shared.hiddenCallbacks=null,o=0;o<x.length;o++)zd(x[o],v)}catch(M){Rt(a,a.return,M)}}n&&d&64&&Yh(u),ka(u,u.return);break;case 27:Zh(u);case 26:case 5:pn(o,u,n),n&&a===null&&d&4&&Xh(u),ka(u,u.return);break;case 12:pn(o,u,n);break;case 31:pn(o,u,n),n&&d&4&&Ph(o,u);break;case 13:pn(o,u,n),n&&d&4&&Wh(o,u);break;case 22:u.memoizedState===null&&pn(o,u,n),ka(u,u.return);break;case 30:break;default:pn(o,u,n)}e=e.sibling}}function eu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&wa(n))}function nu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wa(t))}function Qe(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tp(t,e,n,a),e=e.sibling}function tp(t,e,n,a){var o=e.flags;switch(e.tag){case 0:case 11:case 15:Qe(t,e,n,a),o&2048&&Ka(9,e);break;case 1:Qe(t,e,n,a);break;case 3:Qe(t,e,n,a),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wa(t)));break;case 12:if(o&2048){Qe(t,e,n,a),t=e.stateNode;try{var u=e.memoizedProps,d=u.id,v=u.onPostCommit;typeof v=="function"&&v(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(x){Rt(e,e.return,x)}}else Qe(t,e,n,a);break;case 31:Qe(t,e,n,a);break;case 13:Qe(t,e,n,a);break;case 23:break;case 22:u=e.stateNode,d=e.alternate,e.memoizedState!==null?u._visibility&2?Qe(t,e,n,a):Ja(t,e):u._visibility&2?Qe(t,e,n,a):(u._visibility|=2,ki(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),o&2048&&eu(d,e);break;case 24:Qe(t,e,n,a),o&2048&&nu(e.alternate,e);break;default:Qe(t,e,n,a)}}function ki(t,e,n,a,o){for(o=o&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,d=e,v=n,x=a,M=d.flags;switch(d.tag){case 0:case 11:case 15:ki(u,d,v,x,o),Ka(8,d);break;case 23:break;case 22:var w=d.stateNode;d.memoizedState!==null?w._visibility&2?ki(u,d,v,x,o):Ja(u,d):(w._visibility|=2,ki(u,d,v,x,o)),o&&M&2048&&eu(d.alternate,d);break;case 24:ki(u,d,v,x,o),o&&M&2048&&nu(d.alternate,d);break;default:ki(u,d,v,x,o)}e=e.sibling}}function Ja(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,o=a.flags;switch(a.tag){case 22:Ja(n,a),o&2048&&eu(a.alternate,a);break;case 24:Ja(n,a),o&2048&&nu(a.alternate,a);break;default:Ja(n,a)}e=e.sibling}}var Fa=8192;function Ji(t,e,n){if(t.subtreeFlags&Fa)for(t=t.child;t!==null;)ep(t,e,n),t=t.sibling}function ep(t,e,n){switch(t.tag){case 26:Ji(t,e,n),t.flags&Fa&&t.memoizedState!==null&&P1(n,Xe,t.memoizedState,t.memoizedProps);break;case 5:Ji(t,e,n);break;case 3:case 4:var a=Xe;Xe=Lr(t.stateNode.containerInfo),Ji(t,e,n),Xe=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Fa,Fa=16777216,Ji(t,e,n),Fa=a):Ji(t,e,n));break;default:Ji(t,e,n)}}function np(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Pa(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,ap(a,t)}np(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ip(t),t=t.sibling}function ip(t){switch(t.tag){case 0:case 11:case 15:Pa(t),t.flags&2048&&On(9,t,t.return);break;case 3:Pa(t);break;case 12:Pa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ar(t)):Pa(t);break;default:Pa(t)}}function Ar(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Wt=a,ap(a,t)}np(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:On(8,e,e.return),Ar(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Ar(e));break;default:Ar(e)}t=t.sibling}}function ap(t,e){for(;Wt!==null;){var n=Wt;switch(n.tag){case 0:case 11:case 15:On(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:wa(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Wt=a;else t:for(n=t;Wt!==null;){a=Wt;var o=a.sibling,u=a.return;if(Jh(a),a===n){Wt=null;break t}if(o!==null){o.return=u,Wt=o;break t}Wt=u}}}var f1={getCacheForType:function(t){var e=te(Xt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return te(Xt).controller.signal}},d1=typeof WeakMap=="function"?WeakMap:Map,At=0,Nt=null,pt=null,yt=0,Mt=0,Ee=null,wn=!1,Fi=!1,iu=!1,mn=0,Bt=0,Vn=0,mi=0,au=0,Me=0,Pi=0,Wa=null,ge=null,lu=!1,jr=0,lp=0,Er=1/0,Mr=null,_n=null,Jt=0,Ln=null,Wi=null,gn=0,ru=0,ou=null,rp=null,$a=0,su=null;function Re(){return(At&2)!==0&&yt!==0?yt&-yt:C.T!==null?pu():Tf()}function op(){if(Me===0)if((yt&536870912)===0||St){var t=Vl;Vl<<=1,(Vl&3932160)===0&&(Vl=262144),Me=t}else Me=536870912;return t=Ae.current,t!==null&&(t.flags|=32),Me}function ye(t,e,n){(t===Nt&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&($i(t,0),Un(t,yt,Me,!1)),Sa(t,n),((At&2)===0||t!==Nt)&&(t===Nt&&((At&2)===0&&(mi|=n),Bt===4&&Un(t,yt,Me,!1)),Pe(t))}function sp(t,e,n){if((At&6)!==0)throw Error(s(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||va(t,e),o=a?m1(t,e):cu(t,e,!0),u=a;do{if(o===0){Fi&&!a&&Un(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!h1(n)){o=cu(t,e,!1),u=!1;continue}if(o===2){if(u=e,t.errorRecoveryDisabledLanes&u)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var v=t;o=Wa;var x=v.current.memoizedState.isDehydrated;if(x&&($i(v,d).flags|=256),d=cu(v,d,!1),d!==2){if(iu&&!x){v.errorRecoveryDisabledLanes|=u,mi|=u,o=4;break t}u=ge,ge=o,u!==null&&(ge===null?ge=u:ge.push.apply(ge,u))}o=d}if(u=!1,o!==2)continue}}if(o===1){$i(t,0),Un(t,e,0,!0);break}t:{switch(a=t,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Un(a,e,Me,!wn);break t;case 2:ge=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(o=jr+300-ve(),10<o)){if(Un(a,e,Me,!wn),Ll(a,0,!0)!==0)break t;gn=e,a.timeoutHandle=Hp(up.bind(null,a,n,ge,Mr,lu,e,Me,mi,Pi,wn,u,"Throttled",-0,0),o);break t}up(a,n,ge,Mr,lu,e,Me,mi,Pi,wn,u,null,-0,0)}}break}while(!0);Pe(t)}function up(t,e,n,a,o,u,d,v,x,M,w,L,R,z){if(t.timeoutHandle=-1,L=e.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},ep(e,u,L);var I=(u&62914560)===u?jr-ve():(u&4194048)===u?lp-ve():0;if(I=W1(L,I),I!==null){gn=u,t.cancelPendingCommit=I(yp.bind(null,t,e,u,n,a,o,d,v,x,w,L,null,R,z)),Un(t,u,d,!M);return}}yp(t,e,u,n,a,o,d,v,x)}function h1(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],u=o.getSnapshot;o=o.value;try{if(!be(u(),o))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e,n,a){e&=~au,e&=~mi,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var o=e;0<o;){var u=31-xe(o),d=1<<u;a[u]=-1,o&=~d}n!==0&&Sf(t,n,e)}function Rr(){return(At&6)===0?(Ia(0),!1):!0}function uu(){if(pt!==null){if(Mt===0)var t=pt.return;else t=pt,ln=ri=null,Es(t),Gi=null,_a=0,t=pt;for(;t!==null;)qh(t.alternate,t),t=t.return;pt=null}}function $i(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,w1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),gn=0,uu(),Nt=t,pt=n=nn(t.current,null),yt=e,Mt=0,Ee=null,wn=!1,Fi=va(t,e),iu=!1,Pi=Me=au=mi=Vn=Bt=0,ge=Wa=null,lu=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var o=31-xe(a),u=1<<o;e|=t[o],a&=~u}return mn=e,Jl(),n}function cp(t,e){ct=null,C.H=Xa,e===Yi||e===nr?(e=Md(),Mt=3):e===hs?(e=Md(),Mt=4):Mt=e===Ys?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,pt===null&&(Bt=1,gr(t,Oe(e,t.current)))}function fp(){var t=Ae.current;return t===null?!0:(yt&4194048)===yt?Le===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Le:!1}function dp(){var t=C.H;return C.H=Xa,t===null?Xa:t}function hp(){var t=C.A;return C.A=f1,t}function Dr(){Bt=4,wn||(yt&4194048)!==yt&&Ae.current!==null||(Fi=!0),(Vn&134217727)===0&&(mi&134217727)===0||Nt===null||Un(Nt,yt,Me,!1)}function cu(t,e,n){var a=At;At|=2;var o=dp(),u=hp();(Nt!==t||yt!==e)&&(Mr=null,$i(t,e)),e=!1;var d=Bt;t:do try{if(Mt!==0&&pt!==null){var v=pt,x=Ee;switch(Mt){case 8:uu(),d=6;break t;case 3:case 2:case 9:case 6:Ae.current===null&&(e=!0);var M=Mt;if(Mt=0,Ee=null,Ii(t,v,x,M),n&&Fi){d=0;break t}break;default:M=Mt,Mt=0,Ee=null,Ii(t,v,x,M)}}p1(),d=Bt;break}catch(w){cp(t,w)}while(!0);return e&&t.shellSuspendCounter++,ln=ri=null,At=a,C.H=o,C.A=u,pt===null&&(Nt=null,yt=0,Jl()),d}function p1(){for(;pt!==null;)pp(pt)}function m1(t,e){var n=At;At|=2;var a=dp(),o=hp();Nt!==t||yt!==e?(Mr=null,Er=ve()+500,$i(t,e)):Fi=va(t,e);t:do try{if(Mt!==0&&pt!==null){e=pt;var u=Ee;e:switch(Mt){case 1:Mt=0,Ee=null,Ii(t,e,u,1);break;case 2:case 9:if(jd(u)){Mt=0,Ee=null,mp(e);break}e=function(){Mt!==2&&Mt!==9||Nt!==t||(Mt=7),Pe(t)},u.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:jd(u)?(Mt=0,Ee=null,mp(e)):(Mt=0,Ee=null,Ii(t,e,u,7));break;case 5:var d=null;switch(pt.tag){case 26:d=pt.memoizedState;case 5:case 27:var v=pt;if(d?tm(d):v.stateNode.complete){Mt=0,Ee=null;var x=v.sibling;if(x!==null)pt=x;else{var M=v.return;M!==null?(pt=M,Cr(M)):pt=null}break e}}Mt=0,Ee=null,Ii(t,e,u,5);break;case 6:Mt=0,Ee=null,Ii(t,e,u,6);break;case 8:uu(),Bt=6;break t;default:throw Error(s(462))}}g1();break}catch(w){cp(t,w)}while(!0);return ln=ri=null,C.H=a,C.A=o,At=n,pt!==null?0:(Nt=null,yt=0,Jl(),Bt)}function g1(){for(;pt!==null&&!Hv();)pp(pt)}function pp(t){var e=Bh(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Cr(t):pt=e}function mp(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Oh(n,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=Oh(n,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:Es(e);default:qh(n,e),e=pt=hd(e,mn),e=Bh(n,e,mn)}t.memoizedProps=t.pendingProps,e===null?Cr(t):pt=e}function Ii(t,e,n,a){ln=ri=null,Es(e),Gi=null,_a=0;var o=e.return;try{if(a1(t,o,e,n,yt)){Bt=1,gr(t,Oe(n,t.current)),pt=null;return}}catch(u){if(o!==null)throw pt=o,u;Bt=1,gr(t,Oe(n,t.current)),pt=null;return}e.flags&32768?(St||a===1?t=!0:Fi||(yt&536870912)!==0?t=!1:(wn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Ae.current,a!==null&&a.tag===13&&(a.flags|=16384))),gp(e,t)):Cr(e)}function Cr(t){var e=t;do{if((e.flags&32768)!==0){gp(e,wn);return}t=e.return;var n=o1(e.alternate,e,mn);if(n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);Bt===0&&(Bt=5)}function gp(t,e){do{var n=s1(t.alternate,t);if(n!==null){n.flags&=32767,pt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=n}while(t!==null);Bt=6,pt=null}function yp(t,e,n,a,o,u,d,v,x){t.cancelPendingCommit=null;do zr();while(Jt!==0);if((At&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=$o,Fv(t,n,u,d,v,x),t===Nt&&(pt=Nt=null,yt=0),Wi=e,Ln=t,gn=n,ru=u,ou=o,rp=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,x1(Ol,function(){return Tp(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,o=Y.p,Y.p=2,d=At,At|=4;try{u1(t,e,n)}finally{At=d,Y.p=o,C.T=a}}Jt=1,vp(),Sp(),xp()}}function vp(){if(Jt===1){Jt=0;var t=Ln,e=Wi,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=Y.p;Y.p=2;var o=At;At|=4;try{$h(e,t);var u=Tu,d=ad(t.containerInfo),v=u.focusedElem,x=u.selectionRange;if(d!==v&&v&&v.ownerDocument&&id(v.ownerDocument.documentElement,v)){if(x!==null&&ko(v)){var M=x.start,w=x.end;if(w===void 0&&(w=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(w,v.value.length);else{var L=v.ownerDocument||document,R=L&&L.defaultView||window;if(R.getSelection){var z=R.getSelection(),I=v.textContent.length,at=Math.min(x.start,I),zt=x.end===void 0?at:Math.min(x.end,I);!z.extend&&at>zt&&(d=zt,zt=at,at=d);var j=nd(v,at),A=nd(v,zt);if(j&&A&&(z.rangeCount!==1||z.anchorNode!==j.node||z.anchorOffset!==j.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var E=L.createRange();E.setStart(j.node,j.offset),z.removeAllRanges(),at>zt?(z.addRange(E),z.extend(A.node,A.offset)):(E.setEnd(A.node,A.offset),z.addRange(E))}}}}for(L=[],z=v;z=z.parentNode;)z.nodeType===1&&L.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<L.length;v++){var _=L[v];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Gr=!!bu,Tu=bu=null}finally{At=o,Y.p=a,C.T=n}}t.current=e,Jt=2}}function Sp(){if(Jt===2){Jt=0;var t=Ln,e=Wi,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=Y.p;Y.p=2;var o=At;At|=4;try{kh(t,e.alternate,e)}finally{At=o,Y.p=a,C.T=n}}Jt=3}}function xp(){if(Jt===4||Jt===3){Jt=0,qv();var t=Ln,e=Wi,n=gn,a=rp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Jt=5:(Jt=0,Wi=Ln=null,bp(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(_n=null),Do(n),e=e.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=C.T,o=Y.p,Y.p=2,C.T=null;try{for(var u=t.onRecoverableError,d=0;d<a.length;d++){var v=a[d];u(v.value,{componentStack:v.stack})}}finally{C.T=e,Y.p=o}}(gn&3)!==0&&zr(),Pe(t),o=t.pendingLanes,(n&261930)!==0&&(o&42)!==0?t===su?$a++:($a=0,su=t):$a=0,Ia(0)}}function bp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wa(e)))}function zr(){return vp(),Sp(),xp(),Tp()}function Tp(){if(Jt!==5)return!1;var t=Ln,e=ru;ru=0;var n=Do(gn),a=C.T,o=Y.p;try{Y.p=32>n?32:n,C.T=null,n=ou,ou=null;var u=Ln,d=gn;if(Jt=0,Wi=Ln=null,gn=0,(At&6)!==0)throw Error(s(331));var v=At;if(At|=4,ip(u.current),tp(u,u.current,d,n),At=v,Ia(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(ya,u)}catch{}return!0}finally{Y.p=o,C.T=a,bp(t,e)}}function Ap(t,e,n){e=Oe(n,e),e=qs(t.stateNode,e,2),t=Cn(t,e,2),t!==null&&(Sa(t,2),Pe(t))}function Rt(t,e,n){if(t.tag===3)Ap(t,t,n);else for(;e!==null;){if(e.tag===3){Ap(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_n===null||!_n.has(a))){t=Oe(n,t),n=jh(2),a=Cn(e,n,2),a!==null&&(Eh(n,a,e,t),Sa(a,2),Pe(a));break}}e=e.return}}function fu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new d1;var o=new Set;a.set(e,o)}else o=a.get(e),o===void 0&&(o=new Set,a.set(e,o));o.has(n)||(iu=!0,o.add(n),t=y1.bind(null,t,e,n),e.then(t,t))}function y1(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Nt===t&&(yt&n)===n&&(Bt===4||Bt===3&&(yt&62914560)===yt&&300>ve()-jr?(At&2)===0&&$i(t,0):au|=n,Pi===yt&&(Pi=0)),Pe(t)}function jp(t,e){e===0&&(e=vf()),t=ii(t,e),t!==null&&(Sa(t,e),Pe(t))}function v1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jp(t,n)}function S1(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,o=t.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),jp(t,n)}function x1(t,e){return jo(t,e)}var Nr=null,ta=null,du=!1,Or=!1,hu=!1,Bn=0;function Pe(t){t!==ta&&t.next===null&&(ta===null?Nr=ta=t:ta=ta.next=t),Or=!0,du||(du=!0,T1())}function Ia(t,e){if(!hu&&Or){hu=!0;do for(var n=!1,a=Nr;a!==null;){if(t!==0){var o=a.pendingLanes;if(o===0)var u=0;else{var d=a.suspendedLanes,v=a.pingedLanes;u=(1<<31-xe(42|t)+1)-1,u&=o&~(d&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Dp(a,u))}else u=yt,u=Ll(a,a===Nt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||va(a,u)||(n=!0,Dp(a,u));a=a.next}while(n);hu=!1}}function b1(){Ep()}function Ep(){Or=du=!1;var t=0;Bn!==0&&O1()&&(t=Bn);for(var e=ve(),n=null,a=Nr;a!==null;){var o=a.next,u=Mp(a,e);u===0?(a.next=null,n===null?Nr=o:n.next=o,o===null&&(ta=n)):(n=a,(t!==0||(u&3)!==0)&&(Or=!0)),a=o}Jt!==0&&Jt!==5||Ia(t),Bn!==0&&(Bn=0)}function Mp(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,o=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var d=31-xe(u),v=1<<d,x=o[d];x===-1?((v&n)===0||(v&a)!==0)&&(o[d]=Jv(v,e)):x<=e&&(t.expiredLanes|=v),u&=~v}if(e=Nt,n=yt,n=Ll(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Eo(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||va(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Eo(a),Do(n)){case 2:case 8:n=gf;break;case 32:n=Ol;break;case 268435456:n=yf;break;default:n=Ol}return a=Rp.bind(null,t),n=jo(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Eo(a),t.callbackPriority=2,t.callbackNode=null,2}function Rp(t,e){if(Jt!==0&&Jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(zr()&&t.callbackNode!==n)return null;var a=yt;return a=Ll(t,t===Nt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(sp(t,a,e),Mp(t,ve()),t.callbackNode!=null&&t.callbackNode===n?Rp.bind(null,t):null)}function Dp(t,e){if(zr())return null;sp(t,e,!0)}function T1(){V1(function(){(At&6)!==0?jo(mf,b1):Ep()})}function pu(){if(Bn===0){var t=Hi;t===0&&(t=wl,wl<<=1,(wl&261888)===0&&(wl=256)),Bn=t}return Bn}function Cp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ql(""+t)}function zp(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function A1(t,e,n,a,o){if(e==="submit"&&n&&n.stateNode===o){var u=Cp((o[fe]||null).action),d=a.submitter;d&&(e=(e=d[fe]||null)?Cp(e.formAction):d.getAttribute("formAction"),e!==null&&(u=e,d=null));var v=new Ql("action","action",null,a,o);t.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Bn!==0){var x=d?zp(o,d):new FormData(o);Vs(n,{pending:!0,data:x,method:o.method,action:u},null,x)}}else typeof u=="function"&&(v.preventDefault(),x=d?zp(o,d):new FormData(o),Vs(n,{pending:!0,data:x,method:o.method,action:u},u,x))},currentTarget:o}]})}}for(var mu=0;mu<Wo.length;mu++){var gu=Wo[mu],j1=gu.toLowerCase(),E1=gu[0].toUpperCase()+gu.slice(1);Ge(j1,"on"+E1)}Ge(od,"onAnimationEnd"),Ge(sd,"onAnimationIteration"),Ge(ud,"onAnimationStart"),Ge("dblclick","onDoubleClick"),Ge("focusin","onFocus"),Ge("focusout","onBlur"),Ge(Y0,"onTransitionRun"),Ge(G0,"onTransitionStart"),Ge(X0,"onTransitionCancel"),Ge(cd,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function Np(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],o=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var d=a.length-1;0<=d;d--){var v=a[d],x=v.instance,M=v.currentTarget;if(v=v.listener,x!==u&&o.isPropagationStopped())break t;u=v,o.currentTarget=M;try{u(o)}catch(w){kl(w)}o.currentTarget=null,u=x}else for(d=0;d<a.length;d++){if(v=a[d],x=v.instance,M=v.currentTarget,v=v.listener,x!==u&&o.isPropagationStopped())break t;u=v,o.currentTarget=M;try{u(o)}catch(w){kl(w)}o.currentTarget=null,u=x}}}}function mt(t,e){var n=e[Co];n===void 0&&(n=e[Co]=new Set);var a=t+"__bubble";n.has(a)||(Op(e,t,2,!1),n.add(a))}function yu(t,e,n){var a=0;e&&(a|=4),Op(n,t,a,e)}var wr="_reactListening"+Math.random().toString(36).slice(2);function vu(t){if(!t[wr]){t[wr]=!0,Ef.forEach(function(n){n!=="selectionchange"&&(M1.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wr]||(e[wr]=!0,yu("selectionchange",!1,e))}}function Op(t,e,n,a){switch(om(e)){case 2:var o=tS;break;case 8:o=eS;break;default:o=wu}n=o.bind(null,e,n,t),o=void 0,!Bo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),a?o!==void 0?t.addEventListener(e,n,{capture:!0,passive:o}):t.addEventListener(e,n,!0):o!==void 0?t.addEventListener(e,n,{passive:o}):t.addEventListener(e,n,!1)}function Su(t,e,n,a,o){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var v=a.stateNode.containerInfo;if(v===o)break;if(d===4)for(d=a.return;d!==null;){var x=d.tag;if((x===3||x===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;v!==null;){if(d=Ti(v),d===null)return;if(x=d.tag,x===5||x===6||x===26||x===27){a=u=d;continue t}v=v.parentNode}}a=a.return}Uf(function(){var M=u,w=Lo(n),L=[];t:{var R=fd.get(t);if(R!==void 0){var z=Ql,I=t;switch(t){case"keypress":if(Gl(n)===0)break t;case"keydown":case"keyup":z=S0;break;case"focusin":I="focus",z=Go;break;case"focusout":I="blur",z=Go;break;case"beforeblur":case"afterblur":z=Go;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=T0;break;case od:case sd:case ud:z=c0;break;case cd:z=j0;break;case"scroll":case"scrollend":z=l0;break;case"wheel":z=M0;break;case"copy":case"cut":case"paste":z=d0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Gf;break;case"toggle":case"beforetoggle":z=D0}var at=(e&4)!==0,zt=!at&&(t==="scroll"||t==="scrollend"),j=at?R!==null?R+"Capture":null:R;at=[];for(var A=M,E;A!==null;){var _=A;if(E=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||E===null||j===null||(_=Ta(A,j),_!=null&&at.push(el(A,_,E))),zt)break;A=A.return}0<at.length&&(R=new z(R,I,null,n,w),L.push({event:R,listeners:at}))}}if((e&7)===0){t:{if(R=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",R&&n!==_o&&(I=n.relatedTarget||n.fromElement)&&(Ti(I)||I[bi]))break t;if((z||R)&&(R=w.window===w?w:(R=w.ownerDocument)?R.defaultView||R.parentWindow:window,z?(I=n.relatedTarget||n.toElement,z=M,I=I?Ti(I):null,I!==null&&(zt=h(I),at=I.tag,I!==zt||at!==5&&at!==27&&at!==6)&&(I=null)):(z=null,I=M),z!==I)){if(at=qf,_="onMouseLeave",j="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(at=Gf,_="onPointerLeave",j="onPointerEnter",A="pointer"),zt=z==null?R:ba(z),E=I==null?R:ba(I),R=new at(_,A+"leave",z,n,w),R.target=zt,R.relatedTarget=E,_=null,Ti(w)===M&&(at=new at(j,A+"enter",I,n,w),at.target=E,at.relatedTarget=zt,_=at),zt=_,z&&I)e:{for(at=R1,j=z,A=I,E=0,_=j;_;_=at(_))E++;_=0;for(var et=A;et;et=at(et))_++;for(;0<E-_;)j=at(j),E--;for(;0<_-E;)A=at(A),_--;for(;E--;){if(j===A||A!==null&&j===A.alternate){at=j;break e}j=at(j),A=at(A)}at=null}else at=null;z!==null&&wp(L,R,z,at,!1),I!==null&&zt!==null&&wp(L,zt,I,at,!0)}}t:{if(R=M?ba(M):window,z=R.nodeName&&R.nodeName.toLowerCase(),z==="select"||z==="input"&&R.type==="file")var bt=Pf;else if(Jf(R))if(Wf)bt=B0;else{bt=L0;var tt=_0}else z=R.nodeName,!z||z.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?M&&Vo(M.elementType)&&(bt=Pf):bt=U0;if(bt&&(bt=bt(t,M))){Ff(L,bt,n,w);break t}tt&&tt(t,R,M),t==="focusout"&&M&&R.type==="number"&&M.memoizedProps.value!=null&&wo(R,"number",R.value)}switch(tt=M?ba(M):window,t){case"focusin":(Jf(tt)||tt.contentEditable==="true")&&(Ni=tt,Jo=M,za=null);break;case"focusout":za=Jo=Ni=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,ld(L,n,w);break;case"selectionchange":if(q0)break;case"keydown":case"keyup":ld(L,n,w)}var ft;if(Qo)t:{switch(t){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else zi?Kf(t,n)&&(vt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(vt="onCompositionStart");vt&&(Xf&&n.locale!=="ko"&&(zi||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&zi&&(ft=Bf()):(Tn=w,Ho="value"in Tn?Tn.value:Tn.textContent,zi=!0)),tt=Vr(M,vt),0<tt.length&&(vt=new Yf(vt,t,null,n,w),L.push({event:vt,listeners:tt}),ft?vt.data=ft:(ft=kf(n),ft!==null&&(vt.data=ft)))),(ft=z0?N0(t,n):O0(t,n))&&(vt=Vr(M,"onBeforeInput"),0<vt.length&&(tt=new Yf("onBeforeInput","beforeinput",null,n,w),L.push({event:tt,listeners:vt}),tt.data=ft)),A1(L,t,M,n,w)}Np(L,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vr(t,e){for(var n=e+"Capture",a=[];t!==null;){var o=t,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=Ta(t,n),o!=null&&a.unshift(el(t,o,u)),o=Ta(t,e),o!=null&&a.push(el(t,o,u))),t.tag===3)return a;t=t.return}return[]}function R1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wp(t,e,n,a,o){for(var u=e._reactName,d=[];n!==null&&n!==a;){var v=n,x=v.alternate,M=v.stateNode;if(v=v.tag,x!==null&&x===a)break;v!==5&&v!==26&&v!==27||M===null||(x=M,o?(M=Ta(n,u),M!=null&&d.unshift(el(n,M,x))):o||(M=Ta(n,u),M!=null&&d.push(el(n,M,x)))),n=n.return}d.length!==0&&t.push({event:e,listeners:d})}var D1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(D1,`
`).replace(C1,"")}function _p(t,e){return e=Vp(e),Vp(t)===e}function Ct(t,e,n,a,o,u){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ri(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ri(t,""+a);break;case"className":Bl(t,"class",a);break;case"tabIndex":Bl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Bl(t,n,a);break;case"style":_f(t,a,u);break;case"data":if(e!=="object"){Bl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=ql(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Ct(t,e,"name",o.name,o,null),Ct(t,e,"formEncType",o.formEncType,o,null),Ct(t,e,"formMethod",o.formMethod,o,null),Ct(t,e,"formTarget",o.formTarget,o,null)):(Ct(t,e,"encType",o.encType,o,null),Ct(t,e,"method",o.method,o,null),Ct(t,e,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=ql(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=tn);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=ql(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Ul(t,"popover",a);break;case"xlinkActuate":Ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ie(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ie(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ie(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ie(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ul(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=i0.get(n)||n,Ul(t,n,a))}}function xu(t,e,n,a,o,u){switch(n){case"style":_f(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof a=="string"?Ri(t,a):(typeof a=="number"||typeof a=="bigint")&&Ri(t,""+a);break;case"onScroll":a!=null&&mt("scroll",t);break;case"onScrollEnd":a!=null&&mt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mf.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),e=n.slice(2,o?n.length-7:void 0),u=t[fe]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,o),typeof a=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,o);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):Ul(t,n,a)}}}function ne(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var a=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,u,d,n,null)}}o&&Ct(t,e,"srcSet",n.srcSet,n,null),a&&Ct(t,e,"src",n.src,n,null);return;case"input":mt("invalid",t);var v=u=d=o=null,x=null,M=null;for(a in n)if(n.hasOwnProperty(a)){var w=n[a];if(w!=null)switch(a){case"name":o=w;break;case"type":d=w;break;case"checked":x=w;break;case"defaultChecked":M=w;break;case"value":u=w;break;case"defaultValue":v=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,e));break;default:Ct(t,e,a,w,n,null)}}Nf(t,u,v,x,M,d,o,!1);return;case"select":mt("invalid",t),a=d=u=null;for(o in n)if(n.hasOwnProperty(o)&&(v=n[o],v!=null))switch(o){case"value":u=v;break;case"defaultValue":d=v;break;case"multiple":a=v;default:Ct(t,e,o,v,n,null)}e=u,n=d,t.multiple=!!a,e!=null?Mi(t,!!a,e,!1):n!=null&&Mi(t,!!a,n,!0);return;case"textarea":mt("invalid",t),u=o=a=null;for(d in n)if(n.hasOwnProperty(d)&&(v=n[d],v!=null))switch(d){case"value":a=v;break;case"defaultValue":o=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Ct(t,e,d,v,n,null)}wf(t,a,o,u);return;case"option":for(x in n)n.hasOwnProperty(x)&&(a=n[x],a!=null)&&(x==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":Ct(t,e,x,a,n,null));return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(a=0;a<tl.length;a++)mt(tl[a],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(a=n[M],a!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ct(t,e,M,a,n,null)}return;default:if(Vo(e)){for(w in n)n.hasOwnProperty(w)&&(a=n[w],a!==void 0&&xu(t,e,w,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&Ct(t,e,v,a,n,null))}function z1(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,d=null,v=null,x=null,M=null,w=null;for(z in n){var L=n[z];if(n.hasOwnProperty(z)&&L!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":x=L;default:a.hasOwnProperty(z)||Ct(t,e,z,null,a,L)}}for(var R in a){var z=a[R];if(L=n[R],a.hasOwnProperty(R)&&(z!=null||L!=null))switch(R){case"type":u=z;break;case"name":o=z;break;case"checked":M=z;break;case"defaultChecked":w=z;break;case"value":d=z;break;case"defaultValue":v=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,e));break;default:z!==L&&Ct(t,e,R,z,a,L)}}Oo(t,d,v,x,M,w,u,o);return;case"select":z=d=v=R=null;for(u in n)if(x=n[u],n.hasOwnProperty(u)&&x!=null)switch(u){case"value":break;case"multiple":z=x;default:a.hasOwnProperty(u)||Ct(t,e,u,null,a,x)}for(o in a)if(u=a[o],x=n[o],a.hasOwnProperty(o)&&(u!=null||x!=null))switch(o){case"value":R=u;break;case"defaultValue":v=u;break;case"multiple":d=u;default:u!==x&&Ct(t,e,o,u,a,x)}e=v,n=d,a=z,R!=null?Mi(t,!!n,R,!1):!!a!=!!n&&(e!=null?Mi(t,!!n,e,!0):Mi(t,!!n,n?[]:"",!1));return;case"textarea":z=R=null;for(v in n)if(o=n[v],n.hasOwnProperty(v)&&o!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ct(t,e,v,null,a,o)}for(d in a)if(o=a[d],u=n[d],a.hasOwnProperty(d)&&(o!=null||u!=null))switch(d){case"value":R=o;break;case"defaultValue":z=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&Ct(t,e,d,o,a,u)}Of(t,R,z);return;case"option":for(var I in n)R=n[I],n.hasOwnProperty(I)&&R!=null&&!a.hasOwnProperty(I)&&(I==="selected"?t.selected=!1:Ct(t,e,I,null,a,R));for(x in a)R=a[x],z=n[x],a.hasOwnProperty(x)&&R!==z&&(R!=null||z!=null)&&(x==="selected"?t.selected=R&&typeof R!="function"&&typeof R!="symbol":Ct(t,e,x,R,a,z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in n)R=n[at],n.hasOwnProperty(at)&&R!=null&&!a.hasOwnProperty(at)&&Ct(t,e,at,null,a,R);for(M in a)if(R=a[M],z=n[M],a.hasOwnProperty(M)&&R!==z&&(R!=null||z!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,e));break;default:Ct(t,e,M,R,a,z)}return;default:if(Vo(e)){for(var zt in n)R=n[zt],n.hasOwnProperty(zt)&&R!==void 0&&!a.hasOwnProperty(zt)&&xu(t,e,zt,void 0,a,R);for(w in a)R=a[w],z=n[w],!a.hasOwnProperty(w)||R===z||R===void 0&&z===void 0||xu(t,e,w,R,a,z);return}}for(var j in n)R=n[j],n.hasOwnProperty(j)&&R!=null&&!a.hasOwnProperty(j)&&Ct(t,e,j,null,a,R);for(L in a)R=a[L],z=n[L],!a.hasOwnProperty(L)||R===z||R==null&&z==null||Ct(t,e,L,R,a,z)}function Lp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function N1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],u=o.transferSize,d=o.initiatorType,v=o.duration;if(u&&v&&Lp(d)){for(d=0,v=o.responseEnd,a+=1;a<n.length;a++){var x=n[a],M=x.startTime;if(M>v)break;var w=x.transferSize,L=x.initiatorType;w&&Lp(L)&&(x=x.responseEnd,d+=w*(x<v?1:(v-M)/(x-M)))}if(--a,e+=8*(u+d)/(o.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bu=null,Tu=null;function _r(t){return t.nodeType===9?t:t.ownerDocument}function Up(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=null;function O1(){var t=window.event;return t&&t.type==="popstate"?t===ju?!1:(ju=t,!0):(ju=null,!1)}var Hp=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(_1)}:Hp;function _1(t){setTimeout(function(){throw t})}function Hn(t){return t==="head"}function Yp(t,e){var n=e,a=0;do{var o=n.nextSibling;if(t.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(o),aa(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")nl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,nl(n);for(var u=n.firstChild;u;){var d=u.nextSibling,v=u.nodeName;u[xa]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=d}}else n==="body"&&nl(t.ownerDocument.body);n=o}while(n);aa(e)}function Gp(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function Eu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Eu(n),zo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function L1(t,e,n,a){for(;t.nodeType===1;){var o=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[xa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ue(t.nextSibling),t===null)break}return null}function U1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ue(t.nextSibling),t===null))return null;return t}function Xp(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ue(t.nextSibling),t===null))return null;return t}function Mu(t){return t.data==="$?"||t.data==="$~"}function Ru(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function B1(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ue(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Du=null;function Qp(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ue(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Kp(t,e,n){switch(e=_r(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function nl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);zo(t)}var Be=new Map,kp=new Set;function Lr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var yn=Y.d;Y.d={f:H1,r:q1,D:Y1,C:G1,L:X1,m:Q1,X:K1,S:Z1,M:k1};function H1(){var t=yn.f(),e=Rr();return t||e}function q1(t){var e=Ai(t);e!==null&&e.tag===5&&e.type==="form"?ch(e):yn.r(t)}var ea=typeof document>"u"?null:document;function Jp(t,e,n){var a=ea;if(a&&typeof e=="string"&&e){var o=ze(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),kp.has(o)||(kp.add(o),t={rel:t,crossOrigin:n,href:e},a.querySelector(o)===null&&(e=a.createElement("link"),ne(e,"link",t),Pt(e),a.head.appendChild(e)))}}function Y1(t){yn.D(t),Jp("dns-prefetch",t,null)}function G1(t,e){yn.C(t,e),Jp("preconnect",t,e)}function X1(t,e,n){yn.L(t,e,n);var a=ea;if(a&&t&&e){var o='link[rel="preload"][as="'+ze(e)+'"]';e==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ze(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ze(n.imageSizes)+'"]')):o+='[href="'+ze(t)+'"]';var u=o;switch(e){case"style":u=na(t);break;case"script":u=ia(t)}Be.has(u)||(t=S({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Be.set(u,t),a.querySelector(o)!==null||e==="style"&&a.querySelector(il(u))||e==="script"&&a.querySelector(al(u))||(e=a.createElement("link"),ne(e,"link",t),Pt(e),a.head.appendChild(e)))}}function Q1(t,e){yn.m(t,e);var n=ea;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+ze(a)+'"][href="'+ze(t)+'"]',u=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ia(t)}if(!Be.has(u)&&(t=S({rel:"modulepreload",href:t},e),Be.set(u,t),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(al(u)))return}a=n.createElement("link"),ne(a,"link",t),Pt(a),n.head.appendChild(a)}}}function Z1(t,e,n){yn.S(t,e,n);var a=ea;if(a&&t){var o=ji(a).hoistableStyles,u=na(t);e=e||"default";var d=o.get(u);if(!d){var v={loading:0,preload:null};if(d=a.querySelector(il(u)))v.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Be.get(u))&&Cu(t,n);var x=d=a.createElement("link");Pt(x),ne(x,"link",t),x._p=new Promise(function(M,w){x.onload=M,x.onerror=w}),x.addEventListener("load",function(){v.loading|=1}),x.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ur(d,e,a)}d={type:"stylesheet",instance:d,count:1,state:v},o.set(u,d)}}}function K1(t,e){yn.X(t,e);var n=ea;if(n&&t){var a=ji(n).hoistableScripts,o=ia(t),u=a.get(o);u||(u=n.querySelector(al(o)),u||(t=S({src:t,async:!0},e),(e=Be.get(o))&&zu(t,e),u=n.createElement("script"),Pt(u),ne(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(o,u))}}function k1(t,e){yn.M(t,e);var n=ea;if(n&&t){var a=ji(n).hoistableScripts,o=ia(t),u=a.get(o);u||(u=n.querySelector(al(o)),u||(t=S({src:t,async:!0,type:"module"},e),(e=Be.get(o))&&zu(t,e),u=n.createElement("script"),Pt(u),ne(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(o,u))}}function Fp(t,e,n,a){var o=(o=ht.current)?Lr(o):null;if(!o)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=na(n.href),n=ji(o).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=na(n.href);var u=ji(o).hoistableStyles,d=u.get(t);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,d),(u=o.querySelector(il(t)))&&!u._p&&(d.instance=u,d.state.loading=5),Be.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Be.set(t,n),u||J1(o,t,n,d.state))),e&&a===null)throw Error(s(528,""));return d}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ia(n),n=ji(o).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function na(t){return'href="'+ze(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function Pp(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function J1(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ne(e,"link",n),Pt(e),t.head.appendChild(e))}function ia(t){return'[src="'+ze(t)+'"]'}function al(t){return"script[async]"+t}function Wp(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ze(n.href)+'"]');if(a)return e.instance=a,Pt(a),a;var o=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Pt(a),ne(a,"style",o),Ur(a,n.precedence,t),e.instance=a;case"stylesheet":o=na(n.href);var u=t.querySelector(il(o));if(u)return e.state.loading|=4,e.instance=u,Pt(u),u;a=Pp(n),(o=Be.get(o))&&Cu(a,o),u=(t.ownerDocument||t).createElement("link"),Pt(u);var d=u;return d._p=new Promise(function(v,x){d.onload=v,d.onerror=x}),ne(u,"link",a),e.state.loading|=4,Ur(u,n.precedence,t),e.instance=u;case"script":return u=ia(n.src),(o=t.querySelector(al(u)))?(e.instance=o,Pt(o),o):(a=n,(o=Be.get(u))&&(a=S({},n),zu(a,o)),t=t.ownerDocument||t,o=t.createElement("script"),Pt(o),ne(o,"link",a),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ur(a,n.precedence,t));return e.instance}function Ur(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,u=o,d=0;d<a.length;d++){var v=a[d];if(v.dataset.precedence===e)u=v;else if(u!==o)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Cu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function zu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Br=null;function $p(t,e,n){if(Br===null){var a=new Map,o=Br=new Map;o.set(n,a)}else o=Br,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),o=0;o<n.length;o++){var u=n[o];if(!(u[xa]||u[$t]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(e)||"";d=t+d;var v=a.get(d);v?v.push(u):a.set(d,[u])}}return a}function Ip(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function F1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function tm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function P1(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=na(a.href),u=e.querySelector(il(o));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Hr.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,Pt(u);return}u=e.ownerDocument||e,a=Pp(a),(o=Be.get(o))&&Cu(a,o),u=u.createElement("link"),Pt(u);var d=u;d._p=new Promise(function(v,x){d.onload=v,d.onerror=x}),ne(u,"link",a),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Hr.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Nu=0;function W1(t,e){return t.stylesheets&&t.count===0&&Yr(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&Yr(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Nu===0&&(Nu=62500*N1());var o=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yr(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Nu?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Hr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yr(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var qr=null;function Yr(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qr=new Map,e.forEach($1,t),qr=null,Hr.call(t))}function $1(t,e){if(!(e.state.loading&4)){var n=qr.get(t);if(n)var a=n.get(null);else{n=new Map,qr.set(t,n);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var d=o[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}o=e.instance,d=o.getAttribute("data-precedence"),u=n.get(d)||a,u===a&&n.set(null,o),n.set(d,o),this.count++,a=Hr.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),u?u.parentNode.insertBefore(o,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var ll={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function I1(t,e,n,a,o,u,d,v,x){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function em(t,e,n,a,o,u,d,v,x,M,w,L){return t=new I1(t,e,n,d,x,M,w,L,v),e=1,u===!0&&(e|=24),u=Te(3,null,null,e),t.current=u,u.stateNode=t,e=cs(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:e},ps(u),t}function nm(t){return t?(t=Vi,t):Vi}function im(t,e,n,a,o,u){o=nm(o),a.context===null?a.context=o:a.pendingContext=o,a=Dn(e),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=Cn(t,a,e),n!==null&&(ye(n,t,e),Ua(n,t,e))}function am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ou(t,e){am(t,e),(t=t.alternate)&&am(t,e)}function lm(t){if(t.tag===13||t.tag===31){var e=ii(t,67108864);e!==null&&ye(e,t,67108864),Ou(t,67108864)}}function rm(t){if(t.tag===13||t.tag===31){var e=Re();e=Ro(e);var n=ii(t,e);n!==null&&ye(n,t,e),Ou(t,e)}}var Gr=!0;function tS(t,e,n,a){var o=C.T;C.T=null;var u=Y.p;try{Y.p=2,wu(t,e,n,a)}finally{Y.p=u,C.T=o}}function eS(t,e,n,a){var o=C.T;C.T=null;var u=Y.p;try{Y.p=8,wu(t,e,n,a)}finally{Y.p=u,C.T=o}}function wu(t,e,n,a){if(Gr){var o=Vu(a);if(o===null)Su(t,e,a,Xr,n),sm(t,a);else if(iS(o,t,e,n,a))a.stopPropagation();else if(sm(t,a),e&4&&-1<nS.indexOf(t)){for(;o!==null;){var u=Ai(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=$n(u.pendingLanes);if(d!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var x=1<<31-xe(d);v.entanglements[1]|=x,d&=~x}Pe(u),(At&6)===0&&(Er=ve()+500,Ia(0))}}break;case 31:case 13:v=ii(u,2),v!==null&&ye(v,u,2),Rr(),Ou(u,2)}if(u=Vu(a),u===null&&Su(t,e,a,Xr,n),u===o)break;o=u}o!==null&&a.stopPropagation()}else Su(t,e,a,null,n)}}function Vu(t){return t=Lo(t),_u(t)}var Xr=null;function _u(t){if(Xr=null,t=Ti(t),t!==null){var e=h(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===31){if(t=p(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Xr=t,null}function om(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yv()){case mf:return 2;case gf:return 8;case Ol:case Gv:return 32;case yf:return 268435456;default:return 32}default:return 32}}var Lu=!1,qn=null,Yn=null,Gn=null,rl=new Map,ol=new Map,Xn=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sm(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(e.pointerId)}}function sl(t,e,n,a,o,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[o]},e!==null&&(e=Ai(e),e!==null&&lm(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function iS(t,e,n,a,o){switch(e){case"focusin":return qn=sl(qn,t,e,n,a,o),!0;case"dragenter":return Yn=sl(Yn,t,e,n,a,o),!0;case"mouseover":return Gn=sl(Gn,t,e,n,a,o),!0;case"pointerover":var u=o.pointerId;return rl.set(u,sl(rl.get(u)||null,t,e,n,a,o)),!0;case"gotpointercapture":return u=o.pointerId,ol.set(u,sl(ol.get(u)||null,t,e,n,a,o)),!0}return!1}function um(t){var e=Ti(t.target);if(e!==null){var n=h(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,Af(t.priority,function(){rm(n)});return}}else if(e===31){if(e=p(n),e!==null){t.blockedOn=e,Af(t.priority,function(){rm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vu(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);_o=a,n.target.dispatchEvent(a),_o=null}else return e=Ai(n),e!==null&&lm(e),t.blockedOn=n,!1;e.shift()}return!0}function cm(t,e,n){Qr(t)&&n.delete(e)}function aS(){Lu=!1,qn!==null&&Qr(qn)&&(qn=null),Yn!==null&&Qr(Yn)&&(Yn=null),Gn!==null&&Qr(Gn)&&(Gn=null),rl.forEach(cm),ol.forEach(cm)}function Zr(t,e){t.blockedOn===e&&(t.blockedOn=null,Lu||(Lu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,aS)))}var Kr=null;function fm(t){Kr!==t&&(Kr=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Kr===t&&(Kr=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],o=t[e+2];if(typeof a!="function"){if(_u(a||n)===null)continue;break}var u=Ai(n);u!==null&&(t.splice(e,3),e-=3,Vs(u,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function aa(t){function e(x){return Zr(x,t)}qn!==null&&Zr(qn,t),Yn!==null&&Zr(Yn,t),Gn!==null&&Zr(Gn,t),rl.forEach(e),ol.forEach(e);for(var n=0;n<Xn.length;n++){var a=Xn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)um(n),n.blockedOn===null&&Xn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],u=n[a+1],d=o[fe]||null;if(typeof u=="function")d||fm(n);else if(d){var v=null;if(u&&u.hasAttribute("formAction")){if(o=u,d=u[fe]||null)v=d.formAction;else if(_u(o)!==null)continue}else v=d.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),fm(n)}}}function dm(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function e(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),o!==null&&(o(),o=null)}}}function Uu(t){this._internalRoot=t}kr.prototype.render=Uu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,a=Re();im(n,a,t,e,null,null)},kr.prototype.unmount=Uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;im(t.current,2,null,t,null,null),Rr(),e[bi]=null}};function kr(t){this._internalRoot=t}kr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&um(t)}};var hm=l.version;if(hm!=="19.2.3")throw Error(s(527,hm,"19.2.3"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(e),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var lS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jr.isDisabled&&Jr.supportsFiber)try{ya=Jr.inject(lS),Se=Jr}catch{}}return cl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,a="",o=xh,u=bh,d=Th;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=em(t,1,!1,null,null,n,a,null,o,u,d,dm),t[bi]=e.current,vu(t),new Uu(e)},cl.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var a=!1,o="",u=xh,d=bh,v=Th,x=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),e=em(t,1,!0,e,n??null,a,o,x,u,d,v,dm),e.context=nm(null),n=e.current,a=Re(),a=Ro(a),o=Dn(a),o.callback=null,Cn(n,o,a),n=a,e.current.lanes=n,Sa(e,n),Pe(e),t[bi]=e.current,vu(t),new kr(e)},cl.version="19.2.3",cl}var Am;function gS(){if(Am)return qu.exports;Am=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),qu.exports=mS(),qu.exports}var yS=gS();const Vc=O.createContext({});function _c(i){const l=O.useRef(null);return l.current===null&&(l.current=i()),l.current}const kg=typeof window<"u",Jg=kg?O.useLayoutEffect:O.useEffect,po=O.createContext(null);function Lc(i,l){i.indexOf(l)===-1&&i.push(l)}function Uc(i,l){const r=i.indexOf(l);r>-1&&i.splice(r,1)}const $e=(i,l,r)=>r>l?l:r<i?i:r;let Bc=()=>{};const Sn={},Fg=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);function Pg(i){return typeof i=="object"&&i!==null}const Wg=i=>/^0[^.\s]+$/u.test(i);function Hc(i){let l;return()=>(l===void 0&&(l=i()),l)}const Ye=i=>i,vS=(i,l)=>r=>l(i(r)),Ml=(...i)=>i.reduce(vS),xl=(i,l,r)=>{const s=l-i;return s===0?1:(r-i)/s};class qc{constructor(){this.subscriptions=[]}add(l){return Lc(this.subscriptions,l),()=>Uc(this.subscriptions,l)}notify(l,r,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](l,r,s);else for(let h=0;h<c;h++){const f=this.subscriptions[h];f&&f(l,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const vn=i=>i*1e3,qe=i=>i/1e3;function $g(i,l){return l?i*(1e3/l):0}const Ig=(i,l,r)=>(((1-3*r+3*l)*i+(3*r-6*l))*i+3*l)*i,SS=1e-7,xS=12;function bS(i,l,r,s,c){let h,f,p=0;do f=l+(r-l)/2,h=Ig(f,s,c)-i,h>0?r=f:l=f;while(Math.abs(h)>SS&&++p<xS);return f}function Rl(i,l,r,s){if(i===l&&r===s)return Ye;const c=h=>bS(h,0,1,i,r);return h=>h===0||h===1?h:Ig(c(h),l,s)}const ty=i=>l=>l<=.5?i(2*l)/2:(2-i(2*(1-l)))/2,ey=i=>l=>1-i(1-l),ny=Rl(.33,1.53,.69,.99),Yc=ey(ny),iy=ty(Yc),ay=i=>(i*=2)<1?.5*Yc(i):.5*(2-Math.pow(2,-10*(i-1))),Gc=i=>1-Math.sin(Math.acos(i)),ly=ey(Gc),ry=ty(Gc),TS=Rl(.42,0,1,1),AS=Rl(0,0,.58,1),oy=Rl(.42,0,.58,1),jS=i=>Array.isArray(i)&&typeof i[0]!="number",sy=i=>Array.isArray(i)&&typeof i[0]=="number",ES={linear:Ye,easeIn:TS,easeInOut:oy,easeOut:AS,circIn:Gc,circInOut:ry,circOut:ly,backIn:Yc,backInOut:iy,backOut:ny,anticipate:ay},MS=i=>typeof i=="string",jm=i=>{if(sy(i)){Bc(i.length===4);const[l,r,s,c]=i;return Rl(l,r,s,c)}else if(MS(i))return ES[i];return i},Fr=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function RS(i,l){let r=new Set,s=new Set,c=!1,h=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function m(y){f.has(y)&&(g.schedule(y),i()),y(p)}const g={schedule:(y,S=!1,T=!1)=>{const N=T&&c?r:s;return S&&f.add(y),N.has(y)||N.add(y),y},cancel:y=>{s.delete(y),f.delete(y)},process:y=>{if(p=y,c){h=!0;return}c=!0,[r,s]=[s,r],r.forEach(m),r.clear(),c=!1,h&&(h=!1,g.process(y))}};return g}const DS=40;function uy(i,l){let r=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},h=()=>r=!0,f=Fr.reduce((B,J)=>(B[J]=RS(h),B),{}),{setup:p,read:m,resolveKeyframes:g,preUpdate:y,update:S,preRender:T,render:D,postRender:N}=f,U=()=>{const B=Sn.useManualTiming?c.timestamp:performance.now();r=!1,Sn.useManualTiming||(c.delta=s?1e3/60:Math.max(Math.min(B-c.timestamp,DS),1)),c.timestamp=B,c.isProcessing=!0,p.process(c),m.process(c),g.process(c),y.process(c),S.process(c),T.process(c),D.process(c),N.process(c),c.isProcessing=!1,r&&l&&(s=!1,i(U))},X=()=>{r=!0,s=!0,c.isProcessing||i(U)};return{schedule:Fr.reduce((B,J)=>{const G=f[J];return B[J]=(F,Q=!1,K=!1)=>(r||X(),G.schedule(F,Q,K)),B},{}),cancel:B=>{for(let J=0;J<Fr.length;J++)f[Fr[J]].cancel(B)},state:c,steps:f}}const{schedule:Vt,cancel:Jn,state:ie,steps:Qu}=uy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0);let eo;function CS(){eo=void 0}const se={now:()=>(eo===void 0&&se.set(ie.isProcessing||Sn.useManualTiming?ie.timestamp:performance.now()),eo),set:i=>{eo=i,queueMicrotask(CS)}},cy=i=>l=>typeof l=="string"&&l.startsWith(i),fy=cy("--"),zS=cy("var(--"),Xc=i=>zS(i)?NS.test(i.split("/*")[0].trim()):!1,NS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Em(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const ha={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},bl={...ha,transform:i=>$e(0,1,i)},Pr={...ha,default:1},ml=i=>Math.round(i*1e5)/1e5,Qc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function OS(i){return i==null}const wS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Zc=(i,l)=>r=>!!(typeof r=="string"&&wS.test(r)&&r.startsWith(i)||l&&!OS(r)&&Object.prototype.hasOwnProperty.call(r,l)),dy=(i,l,r)=>s=>{if(typeof s!="string")return s;const[c,h,f,p]=s.match(Qc);return{[i]:parseFloat(c),[l]:parseFloat(h),[r]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},VS=i=>$e(0,255,i),Zu={...ha,transform:i=>Math.round(VS(i))},vi={test:Zc("rgb","red"),parse:dy("red","green","blue"),transform:({red:i,green:l,blue:r,alpha:s=1})=>"rgba("+Zu.transform(i)+", "+Zu.transform(l)+", "+Zu.transform(r)+", "+ml(bl.transform(s))+")"};function _S(i){let l="",r="",s="",c="";return i.length>5?(l=i.substring(1,3),r=i.substring(3,5),s=i.substring(5,7),c=i.substring(7,9)):(l=i.substring(1,2),r=i.substring(2,3),s=i.substring(3,4),c=i.substring(4,5),l+=l,r+=r,s+=s,c+=c),{red:parseInt(l,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const fc={test:Zc("#"),parse:_S,transform:vi.transform},Dl=i=>({test:l=>typeof l=="string"&&l.endsWith(i)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${i}`}),Zn=Dl("deg"),We=Dl("%"),P=Dl("px"),LS=Dl("vh"),US=Dl("vw"),Mm={...We,parse:i=>We.parse(i)/100,transform:i=>We.transform(i*100)},la={test:Zc("hsl","hue"),parse:dy("hue","saturation","lightness"),transform:({hue:i,saturation:l,lightness:r,alpha:s=1})=>"hsla("+Math.round(i)+", "+We.transform(ml(l))+", "+We.transform(ml(r))+", "+ml(bl.transform(s))+")"},kt={test:i=>vi.test(i)||fc.test(i)||la.test(i),parse:i=>vi.test(i)?vi.parse(i):la.test(i)?la.parse(i):fc.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?vi.transform(i):la.transform(i),getAnimatableNone:i=>{const l=kt.parse(i);return l.alpha=0,kt.transform(l)}},BS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function HS(i){return isNaN(i)&&typeof i=="string"&&(i.match(Qc)?.length||0)+(i.match(BS)?.length||0)>0}const hy="number",py="color",qS="var",YS="var(",Rm="${}",GS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Tl(i){const l=i.toString(),r=[],s={color:[],number:[],var:[]},c=[];let h=0;const p=l.replace(GS,m=>(kt.test(m)?(s.color.push(h),c.push(py),r.push(kt.parse(m))):m.startsWith(YS)?(s.var.push(h),c.push(qS),r.push(m)):(s.number.push(h),c.push(hy),r.push(parseFloat(m))),++h,Rm)).split(Rm);return{values:r,split:p,indexes:s,types:c}}function my(i){return Tl(i).values}function gy(i){const{split:l,types:r}=Tl(i),s=l.length;return c=>{let h="";for(let f=0;f<s;f++)if(h+=l[f],c[f]!==void 0){const p=r[f];p===hy?h+=ml(c[f]):p===py?h+=kt.transform(c[f]):h+=c[f]}return h}}const XS=i=>typeof i=="number"?0:kt.test(i)?kt.getAnimatableNone(i):i;function QS(i){const l=my(i);return gy(i)(l.map(XS))}const Fn={test:HS,parse:my,createTransformer:gy,getAnimatableNone:QS};function Ku(i,l,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?i+(l-i)*6*r:r<1/2?l:r<2/3?i+(l-i)*(2/3-r)*6:i}function ZS({hue:i,saturation:l,lightness:r,alpha:s}){i/=360,l/=100,r/=100;let c=0,h=0,f=0;if(!l)c=h=f=r;else{const p=r<.5?r*(1+l):r+l-r*l,m=2*r-p;c=Ku(m,p,i+1/3),h=Ku(m,p,i),f=Ku(m,p,i-1/3)}return{red:Math.round(c*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:s}}function lo(i,l){return r=>r>0?l:i}const Lt=(i,l,r)=>i+(l-i)*r,ku=(i,l,r)=>{const s=i*i,c=r*(l*l-s)+s;return c<0?0:Math.sqrt(c)},KS=[fc,vi,la],kS=i=>KS.find(l=>l.test(i));function Dm(i){const l=kS(i);if(!l)return!1;let r=l.parse(i);return l===la&&(r=ZS(r)),r}const Cm=(i,l)=>{const r=Dm(i),s=Dm(l);if(!r||!s)return lo(i,l);const c={...r};return h=>(c.red=ku(r.red,s.red,h),c.green=ku(r.green,s.green,h),c.blue=ku(r.blue,s.blue,h),c.alpha=Lt(r.alpha,s.alpha,h),vi.transform(c))},dc=new Set(["none","hidden"]);function JS(i,l){return dc.has(i)?r=>r<=0?i:l:r=>r>=1?l:i}function FS(i,l){return r=>Lt(i,l,r)}function Kc(i){return typeof i=="number"?FS:typeof i=="string"?Xc(i)?lo:kt.test(i)?Cm:$S:Array.isArray(i)?yy:typeof i=="object"?kt.test(i)?Cm:PS:lo}function yy(i,l){const r=[...i],s=r.length,c=i.map((h,f)=>Kc(h)(h,l[f]));return h=>{for(let f=0;f<s;f++)r[f]=c[f](h);return r}}function PS(i,l){const r={...i,...l},s={};for(const c in r)i[c]!==void 0&&l[c]!==void 0&&(s[c]=Kc(i[c])(i[c],l[c]));return c=>{for(const h in s)r[h]=s[h](c);return r}}function WS(i,l){const r=[],s={color:0,var:0,number:0};for(let c=0;c<l.values.length;c++){const h=l.types[c],f=i.indexes[h][s[h]],p=i.values[f]??0;r[c]=p,s[h]++}return r}const $S=(i,l)=>{const r=Fn.createTransformer(l),s=Tl(i),c=Tl(l);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?dc.has(i)&&!c.values.length||dc.has(l)&&!s.values.length?JS(i,l):Ml(yy(WS(s,c),c.values),r):lo(i,l)};function vy(i,l,r){return typeof i=="number"&&typeof l=="number"&&typeof r=="number"?Lt(i,l,r):Kc(i)(i,l)}const IS=i=>{const l=({timestamp:r})=>i(r);return{start:(r=!0)=>Vt.update(l,r),stop:()=>Jn(l),now:()=>ie.isProcessing?ie.timestamp:se.now()}},Sy=(i,l,r=10)=>{let s="";const c=Math.max(Math.round(l/r),2);for(let h=0;h<c;h++)s+=Math.round(i(h/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},ro=2e4;function kc(i){let l=0;const r=50;let s=i.next(l);for(;!s.done&&l<ro;)l+=r,s=i.next(l);return l>=ro?1/0:l}function tx(i,l=100,r){const s=r({...i,keyframes:[0,l]}),c=Math.min(kc(s),ro);return{type:"keyframes",ease:h=>s.next(c*h).value/l,duration:qe(c)}}const ex=5;function xy(i,l,r){const s=Math.max(l-ex,0);return $g(r-i(s),l-s)}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ju=.001;function nx({duration:i=Ht.duration,bounce:l=Ht.bounce,velocity:r=Ht.velocity,mass:s=Ht.mass}){let c,h,f=1-l;f=$e(Ht.minDamping,Ht.maxDamping,f),i=$e(Ht.minDuration,Ht.maxDuration,qe(i)),f<1?(c=g=>{const y=g*f,S=y*i,T=y-r,D=hc(g,f),N=Math.exp(-S);return Ju-T/D*N},h=g=>{const S=g*f*i,T=S*r+r,D=Math.pow(f,2)*Math.pow(g,2)*i,N=Math.exp(-S),U=hc(Math.pow(g,2),f);return(-c(g)+Ju>0?-1:1)*((T-D)*N)/U}):(c=g=>{const y=Math.exp(-g*i),S=(g-r)*i+1;return-Ju+y*S},h=g=>{const y=Math.exp(-g*i),S=(r-g)*(i*i);return y*S});const p=5/i,m=ax(c,h,p);if(i=vn(i),isNaN(m))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:i};{const g=Math.pow(m,2)*s;return{stiffness:g,damping:f*2*Math.sqrt(s*g),duration:i}}}const ix=12;function ax(i,l,r){let s=r;for(let c=1;c<ix;c++)s=s-i(s)/l(s);return s}function hc(i,l){return i*Math.sqrt(1-l*l)}const lx=["duration","bounce"],rx=["stiffness","damping","mass"];function zm(i,l){return l.some(r=>i[r]!==void 0)}function ox(i){let l={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...i};if(!zm(i,rx)&&zm(i,lx))if(i.visualDuration){const r=i.visualDuration,s=2*Math.PI/(r*1.2),c=s*s,h=2*$e(.05,1,1-(i.bounce||0))*Math.sqrt(c);l={...l,mass:Ht.mass,stiffness:c,damping:h}}else{const r=nx(i);l={...l,...r,mass:Ht.mass},l.isResolvedFromDuration=!0}return l}function oo(i=Ht.visualDuration,l=Ht.bounce){const r=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:l}:i;let{restSpeed:s,restDelta:c}=r;const h=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],p={done:!1,value:h},{stiffness:m,damping:g,mass:y,duration:S,velocity:T,isResolvedFromDuration:D}=ox({...r,velocity:-qe(r.velocity||0)}),N=T||0,U=g/(2*Math.sqrt(m*y)),X=f-h,q=qe(Math.sqrt(m/y)),Z=Math.abs(X)<5;s||(s=Z?Ht.restSpeed.granular:Ht.restSpeed.default),c||(c=Z?Ht.restDelta.granular:Ht.restDelta.default);let B;if(U<1){const G=hc(q,U);B=F=>{const Q=Math.exp(-U*q*F);return f-Q*((N+U*q*X)/G*Math.sin(G*F)+X*Math.cos(G*F))}}else if(U===1)B=G=>f-Math.exp(-q*G)*(X+(N+q*X)*G);else{const G=q*Math.sqrt(U*U-1);B=F=>{const Q=Math.exp(-U*q*F),K=Math.min(G*F,300);return f-Q*((N+U*q*X)*Math.sinh(K)+G*X*Math.cosh(K))/G}}const J={calculatedDuration:D&&S||null,next:G=>{const F=B(G);if(D)p.done=G>=S;else{let Q=G===0?N:0;U<1&&(Q=G===0?vn(N):xy(B,G,F));const K=Math.abs(Q)<=s,lt=Math.abs(f-F)<=c;p.done=K&&lt}return p.value=p.done?f:F,p},toString:()=>{const G=Math.min(kc(J),ro),F=Sy(Q=>J.next(G*Q).value,G,30);return G+"ms "+F},toTransition:()=>{}};return J}oo.applyToOptions=i=>{const l=tx(i,100,oo);return i.ease=l.ease,i.duration=vn(l.duration),i.type="keyframes",i};function pc({keyframes:i,velocity:l=0,power:r=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:h=500,modifyTarget:f,min:p,max:m,restDelta:g=.5,restSpeed:y}){const S=i[0],T={done:!1,value:S},D=K=>p!==void 0&&K<p||m!==void 0&&K>m,N=K=>p===void 0?m:m===void 0||Math.abs(p-K)<Math.abs(m-K)?p:m;let U=r*l;const X=S+U,q=f===void 0?X:f(X);q!==X&&(U=q-S);const Z=K=>-U*Math.exp(-K/s),B=K=>q+Z(K),J=K=>{const lt=Z(K),nt=B(K);T.done=Math.abs(lt)<=g,T.value=T.done?q:nt};let G,F;const Q=K=>{D(T.value)&&(G=K,F=oo({keyframes:[T.value,N(T.value)],velocity:xy(B,K,T.value),damping:c,stiffness:h,restDelta:g,restSpeed:y}))};return Q(0),{calculatedDuration:null,next:K=>{let lt=!1;return!F&&G===void 0&&(lt=!0,J(K),Q(K)),G!==void 0&&K>=G?F.next(K-G):(!lt&&J(K),T)}}}function sx(i,l,r){const s=[],c=r||Sn.mix||vy,h=i.length-1;for(let f=0;f<h;f++){let p=c(i[f],i[f+1]);if(l){const m=Array.isArray(l)?l[f]||Ye:l;p=Ml(m,p)}s.push(p)}return s}function ux(i,l,{clamp:r=!0,ease:s,mixer:c}={}){const h=i.length;if(Bc(h===l.length),h===1)return()=>l[0];if(h===2&&l[0]===l[1])return()=>l[1];const f=i[0]===i[1];i[0]>i[h-1]&&(i=[...i].reverse(),l=[...l].reverse());const p=sx(l,s,c),m=p.length,g=y=>{if(f&&y<i[0])return l[0];let S=0;if(m>1)for(;S<i.length-2&&!(y<i[S+1]);S++);const T=xl(i[S],i[S+1],y);return p[S](T)};return r?y=>g($e(i[0],i[h-1],y)):g}function cx(i,l){const r=i[i.length-1];for(let s=1;s<=l;s++){const c=xl(0,l,s);i.push(Lt(r,1,c))}}function fx(i){const l=[0];return cx(l,i.length-1),l}function dx(i,l){return i.map(r=>r*l)}function hx(i,l){return i.map(()=>l||oy).splice(0,i.length-1)}function gl({duration:i=300,keyframes:l,times:r,ease:s="easeInOut"}){const c=jS(s)?s.map(jm):jm(s),h={done:!1,value:l[0]},f=dx(r&&r.length===l.length?r:fx(l),i),p=ux(f,l,{ease:Array.isArray(c)?c:hx(l,c)});return{calculatedDuration:i,next:m=>(h.value=p(m),h.done=m>=i,h)}}const px=i=>i!==null;function Jc(i,{repeat:l,repeatType:r="loop"},s,c=1){const h=i.filter(px),p=c<0||l&&r!=="loop"&&l%2===1?0:h.length-1;return!p||s===void 0?h[p]:s}const mx={decay:pc,inertia:pc,tween:gl,keyframes:gl,spring:oo};function by(i){typeof i.type=="string"&&(i.type=mx[i.type])}class Fc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,r){return this.finished.then(l,r)}}const gx=i=>i/100;class Pc extends Fc{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==se.now()&&this.tick(se.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;by(l);const{type:r=gl,repeat:s=0,repeatDelay:c=0,repeatType:h,velocity:f=0}=l;let{keyframes:p}=l;const m=r||gl;m!==gl&&typeof p[0]!="number"&&(this.mixKeyframes=Ml(gx,vy(p[0],p[1])),p=[0,100]);const g=m({...l,keyframes:p});h==="mirror"&&(this.mirroredGenerator=m({...l,keyframes:[...p].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=kc(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=g}updateTime(l){const r=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(l,r=!1){const{generator:s,totalDuration:c,mixKeyframes:h,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:g=0,keyframes:y,repeat:S,repeatType:T,repeatDelay:D,type:N,onUpdate:U,finalKeyframe:X}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-c/this.speed,this.startTime)),r?this.currentTime=l:this.updateTime(l);const q=this.currentTime-g*(this.playbackSpeed>=0?1:-1),Z=this.playbackSpeed>=0?q<0:q>c;this.currentTime=Math.max(q,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let B=this.currentTime,J=s;if(S){const K=Math.min(this.currentTime,c)/p;let lt=Math.floor(K),nt=K%1;!nt&&K>=1&&(nt=1),nt===1&&lt--,lt=Math.min(lt,S+1),lt%2&&(T==="reverse"?(nt=1-nt,D&&(nt-=D/p)):T==="mirror"&&(J=f)),B=$e(0,1,nt)*p}const G=Z?{done:!1,value:y[0]}:J.next(B);h&&(G.value=h(G.value));let{done:F}=G;!Z&&m!==null&&(F=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return Q&&N!==pc&&(G.value=Jc(y,this.options,X,this.speed)),U&&U(G.value),Q&&this.finish(),G}then(l,r){return this.finished.then(l,r)}get duration(){return qe(this.calculatedDuration)}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+qe(l)}get time(){return qe(this.currentTime)}set time(l){l=vn(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(l){this.updateTime(se.now());const r=this.playbackSpeed!==l;this.playbackSpeed=l,r&&(this.time=qe(this.currentTime))}play(){if(this.isStopped)return;const{driver:l=IS,startTime:r}=this.options;this.driver||(this.driver=l(c=>this.tick(c))),this.options.onPlay?.();const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=r??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(se.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),l.observe(this)}}function yx(i){for(let l=1;l<i.length;l++)i[l]??(i[l]=i[l-1])}const Si=i=>i*180/Math.PI,mc=i=>{const l=Si(Math.atan2(i[1],i[0]));return gc(l)},vx={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:mc,rotateZ:mc,skewX:i=>Si(Math.atan(i[1])),skewY:i=>Si(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},gc=i=>(i=i%360,i<0&&(i+=360),i),Nm=mc,Om=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),wm=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),Sx={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Om,scaleY:wm,scale:i=>(Om(i)+wm(i))/2,rotateX:i=>gc(Si(Math.atan2(i[6],i[5]))),rotateY:i=>gc(Si(Math.atan2(-i[2],i[0]))),rotateZ:Nm,rotate:Nm,skewX:i=>Si(Math.atan(i[4])),skewY:i=>Si(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function yc(i){return i.includes("scale")?1:0}function vc(i,l){if(!i||i==="none")return yc(l);const r=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(r)s=Sx,c=r;else{const p=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=vx,c=p}if(!c)return yc(l);const h=s[l],f=c[1].split(",").map(bx);return typeof h=="function"?h(f):f[h]}const xx=(i,l)=>{const{transform:r="none"}=getComputedStyle(i);return vc(r,l)};function bx(i){return parseFloat(i.trim())}const pa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ma=new Set(pa),Vm=i=>i===ha||i===P,Tx=new Set(["x","y","z"]),Ax=pa.filter(i=>!Tx.has(i));function jx(i){const l=[];return Ax.forEach(r=>{const s=i.getValue(r);s!==void 0&&(l.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),l}const Kn={width:({x:i},{paddingLeft:l="0",paddingRight:r="0"})=>i.max-i.min-parseFloat(l)-parseFloat(r),height:({y:i},{paddingTop:l="0",paddingBottom:r="0"})=>i.max-i.min-parseFloat(l)-parseFloat(r),top:(i,{top:l})=>parseFloat(l),left:(i,{left:l})=>parseFloat(l),bottom:({y:i},{top:l})=>parseFloat(l)+(i.max-i.min),right:({x:i},{left:l})=>parseFloat(l)+(i.max-i.min),x:(i,{transform:l})=>vc(l,"x"),y:(i,{transform:l})=>vc(l,"y")};Kn.translateX=Kn.x;Kn.translateY=Kn.y;const xi=new Set;let Sc=!1,xc=!1,bc=!1;function Ty(){if(xc){const i=Array.from(xi).filter(s=>s.needsMeasurement),l=new Set(i.map(s=>s.element)),r=new Map;l.forEach(s=>{const c=jx(s);c.length&&(r.set(s,c),s.render())}),i.forEach(s=>s.measureInitialState()),l.forEach(s=>{s.render();const c=r.get(s);c&&c.forEach(([h,f])=>{s.getValue(h)?.set(f)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}xc=!1,Sc=!1,xi.forEach(i=>i.complete(bc)),xi.clear()}function Ay(){xi.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(xc=!0)})}function Ex(){bc=!0,Ay(),Ty(),bc=!1}class Wc{constructor(l,r,s,c,h,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=r,this.name=s,this.motionValue=c,this.element=h,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(xi.add(this),Sc||(Sc=!0,Vt.read(Ay),Vt.resolveKeyframes(Ty))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:r,element:s,motionValue:c}=this;if(l[0]===null){const h=c?.get(),f=l[l.length-1];if(h!==void 0)l[0]=h;else if(s&&r){const p=s.readValue(r,f);p!=null&&(l[0]=p)}l[0]===void 0&&(l[0]=f),c&&h===void 0&&c.set(l[0])}yx(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),xi.delete(this)}cancel(){this.state==="scheduled"&&(xi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Mx=i=>i.startsWith("--");function Rx(i,l,r){Mx(l)?i.style.setProperty(l,r):i.style[l]=r}const Dx=Hc(()=>window.ScrollTimeline!==void 0),Cx={};function zx(i,l){const r=Hc(i);return()=>Cx[l]??r()}const jy=zx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),dl=([i,l,r,s])=>`cubic-bezier(${i}, ${l}, ${r}, ${s})`,_m={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:dl([0,.65,.55,1]),circOut:dl([.55,0,1,.45]),backIn:dl([.31,.01,.66,-.59]),backOut:dl([.33,1.53,.69,.99])};function Ey(i,l){if(i)return typeof i=="function"?jy()?Sy(i,l):"ease-out":sy(i)?dl(i):Array.isArray(i)?i.map(r=>Ey(r,l)||_m.easeOut):_m[i]}function Nx(i,l,r,{delay:s=0,duration:c=300,repeat:h=0,repeatType:f="loop",ease:p="easeOut",times:m}={},g=void 0){const y={[l]:r};m&&(y.offset=m);const S=Ey(p,c);Array.isArray(S)&&(y.easing=S);const T={delay:s,duration:c,easing:Array.isArray(S)?"linear":S,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"};return g&&(T.pseudoElement=g),i.animate(y,T)}function My(i){return typeof i=="function"&&"applyToOptions"in i}function Ox({type:i,...l}){return My(i)&&jy()?i.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class wx extends Fc{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!l)return;const{element:r,name:s,keyframes:c,pseudoElement:h,allowFlatten:f=!1,finalKeyframe:p,onComplete:m}=l;this.isPseudoElement=!!h,this.allowFlatten=f,this.options=l,Bc(typeof l.type!="string");const g=Ox(l);this.animation=Nx(r,s,c,g,h),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const y=Jc(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):Rx(r,s,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const l=this.animation.effect?.getComputedTiming?.().duration||0;return qe(Number(l))}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+qe(l)}get time(){return qe(Number(this.animation.currentTime)||0)}set time(l){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=vn(l)}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(l){this.manualStartTime=this.animation.startTime=l}attachTimeline({timeline:l,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,l&&Dx()?(this.animation.timeline=l,Ye):r(this)}}const Ry={anticipate:ay,backInOut:iy,circInOut:ry};function Vx(i){return i in Ry}function _x(i){typeof i.ease=="string"&&Vx(i.ease)&&(i.ease=Ry[i.ease])}const Fu=10;class Lx extends wx{constructor(l){_x(l),by(l),super(l),l.startTime!==void 0&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:r,onUpdate:s,onComplete:c,element:h,...f}=this.options;if(!r)return;if(l!==void 0){r.set(l);return}const p=new Pc({...f,autoplay:!1}),m=Math.max(Fu,se.now()-this.startTime),g=$e(0,Fu,m-Fu);r.setWithVelocity(p.sample(Math.max(0,m-g)).value,p.sample(m).value,g),p.stop()}}const Lm=(i,l)=>l==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Fn.test(i)||i==="0")&&!i.startsWith("url("));function Ux(i){const l=i[0];if(i.length===1)return!0;for(let r=0;r<i.length;r++)if(i[r]!==l)return!0}function Bx(i,l,r,s){const c=i[0];if(c===null)return!1;if(l==="display"||l==="visibility")return!0;const h=i[i.length-1],f=Lm(c,l),p=Lm(h,l);return!f||!p?!1:Ux(i)||(r==="spring"||My(r))&&s}function Tc(i){i.duration=0,i.type="keyframes"}const Hx=new Set(["opacity","clipPath","filter","transform"]),qx=Hc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Yx(i){const{motionValue:l,name:r,repeatDelay:s,repeatType:c,damping:h,type:f}=i;if(!(l?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:g}=l.owner.getProps();return qx()&&r&&Hx.has(r)&&(r!=="transform"||!g)&&!m&&!s&&c!=="mirror"&&h!==0&&f!=="inertia"}const Gx=40;class Xx extends Fc{constructor({autoplay:l=!0,delay:r=0,type:s="keyframes",repeat:c=0,repeatDelay:h=0,repeatType:f="loop",keyframes:p,name:m,motionValue:g,element:y,...S}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=se.now();const T={autoplay:l,delay:r,type:s,repeat:c,repeatDelay:h,repeatType:f,name:m,motionValue:g,element:y,...S},D=y?.KeyframeResolver||Wc;this.keyframeResolver=new D(p,(N,U,X)=>this.onKeyframesResolved(N,U,T,!X),m,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(l,r,s,c){this.keyframeResolver=void 0;const{name:h,type:f,velocity:p,delay:m,isHandoff:g,onUpdate:y}=s;this.resolvedAt=se.now(),Bx(l,h,f,p)||((Sn.instantAnimations||!m)&&y?.(Jc(l,s,r)),l[0]=l[l.length-1],Tc(s),s.repeat=0);const T={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>Gx?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...s,keyframes:l},D=!g&&Yx(T)?new Lx({...T,element:T.motionValue.owner.current}):new Pc(T);D.finished.then(()=>this.notifyFinished()).catch(Ye),this.pendingTimeline&&(this.stopTimeline=D.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=D}get finished(){return this._animation?this.animation.finished:this._finished}then(l,r){return this.finished.finally(l).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Ex()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Qx=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Zx(i){const l=Qx.exec(i);if(!l)return[,];const[,r,s,c]=l;return[`--${r??s}`,c]}function Dy(i,l,r=1){const[s,c]=Zx(i);if(!s)return;const h=window.getComputedStyle(l).getPropertyValue(s);if(h){const f=h.trim();return Fg(f)?parseFloat(f):f}return Xc(c)?Dy(c,l,r+1):c}function $c(i,l){return i?.[l]??i?.default??i}const Kx={type:"spring",stiffness:500,damping:25,restSpeed:10},kx=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),Jx={type:"keyframes",duration:.8},Fx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Px=(i,{keyframes:l})=>l.length>2?Jx:ma.has(i)?i.startsWith("scale")?kx(l[1]):Kx:Fx;function Wx({when:i,delay:l,delayChildren:r,staggerChildren:s,staggerDirection:c,repeat:h,repeatType:f,repeatDelay:p,from:m,elapsed:g,...y}){return!!Object.keys(y).length}const $x=i=>i!==null;function Ix(i,{repeat:l,repeatType:r="loop"},s){const c=i.filter($x),h=l&&r!=="loop"&&l%2===1?0:c.length-1;return c[h]}function Cy(i,l,r,s=0,c=1){const h=Array.from(i).sort((g,y)=>g.sortNodePosition(y)).indexOf(l),f=i.size,p=(f-1)*s;return typeof r=="function"?r(h,f):c===1?h*s:p-h*s}const Ic=(i,l,r,s={},c,h)=>f=>{const p=$c(s,i)||{},m=p.delay||s.delay||0;let{elapsed:g=0}=s;g=g-vn(m);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:l.getVelocity(),...p,delay:-g,onUpdate:T=>{l.set(T),p.onUpdate&&p.onUpdate(T)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:i,motionValue:l,element:h?void 0:c};Wx(p)||Object.assign(y,Px(i,y)),y.duration&&(y.duration=vn(y.duration)),y.repeatDelay&&(y.repeatDelay=vn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let S=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Tc(y),y.delay===0&&(S=!0)),(Sn.instantAnimations||Sn.skipAnimations)&&(S=!0,Tc(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,S&&!h&&l.get()!==void 0){const T=Ix(y.keyframes,p);if(T!==void 0){Vt.update(()=>{y.onUpdate(T),y.onComplete()});return}}return p.isSync?new Pc(y):new Xx(y)},zy=new Set(["width","height","top","left","right","bottom",...pa]),Um=30,tb=i=>!isNaN(parseFloat(i));class eb{constructor(l,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{const c=se.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(l),this.owner=r.owner}setCurrent(l){this.current=l,this.updatedAt=se.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=tb(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,r){this.events[l]||(this.events[l]=new qc);const s=this.events[l].add(r);return l==="change"?()=>{s(),Vt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,r){this.passiveEffect=l,this.stopPassiveEffect=r}set(l){this.passiveEffect?this.passiveEffect(l,this.updateAndNotify):this.updateAndNotify(l)}setWithVelocity(l,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-s}jump(l,r=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=se.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>Um)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Um);return $g(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(l){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=l(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function da(i,l){return new eb(i,l)}function Bm(i){const l=[{},{}];return i?.values.forEach((r,s)=>{l[0][s]=r.get(),l[1][s]=r.getVelocity()}),l}function tf(i,l,r,s){if(typeof l=="function"){const[c,h]=Bm(s);l=l(r!==void 0?r:i.custom,c,h)}if(typeof l=="string"&&(l=i.variants&&i.variants[l]),typeof l=="function"){const[c,h]=Bm(s);l=l(r!==void 0?r:i.custom,c,h)}return l}function fa(i,l,r){const s=i.getProps();return tf(s,l,r!==void 0?r:s.custom,i)}const Ac=i=>Array.isArray(i);function nb(i,l,r){i.hasValue(l)?i.getValue(l).set(r):i.addValue(l,da(r))}function ib(i){return Ac(i)?i[i.length-1]||0:i}function ab(i,l){const r=fa(i,l);let{transitionEnd:s={},transition:c={},...h}=r||{};h={...h,...s};for(const f in h){const p=ib(h[f]);nb(i,f,p)}}const le=i=>!!(i&&i.getVelocity);function lb(i){return!!(le(i)&&i.add)}function jc(i,l){const r=i.getValue("willChange");if(lb(r))return r.add(l);if(!r&&Sn.WillChange){const s=new Sn.WillChange("auto");i.addValue("willChange",s),s.add(l)}}function ef(i){return i.replace(/([A-Z])/g,l=>`-${l.toLowerCase()}`)}const rb="framerAppearId",Ny="data-"+ef(rb);function Oy(i){return i.props[Ny]}function ob({protectedKeys:i,needsAnimating:l},r){const s=i.hasOwnProperty(r)&&l[r]!==!0;return l[r]=!1,s}function wy(i,l,{delay:r=0,transitionOverride:s,type:c}={}){let{transition:h=i.getDefaultTransition(),transitionEnd:f,...p}=l;s&&(h=s);const m=[],g=c&&i.animationState&&i.animationState.getState()[c];for(const y in p){const S=i.getValue(y,i.latestValues[y]??null),T=p[y];if(T===void 0||g&&ob(g,y))continue;const D={delay:r,...$c(h||{},y)},N=S.get();if(N!==void 0&&!S.isAnimating&&!Array.isArray(T)&&T===N&&!D.velocity)continue;let U=!1;if(window.MotionHandoffAnimation){const q=Oy(i);if(q){const Z=window.MotionHandoffAnimation(q,y,Vt);Z!==null&&(D.startTime=Z,U=!0)}}jc(i,y),S.start(Ic(y,S,T,i.shouldReduceMotion&&zy.has(y)?{type:!1}:D,i,U));const X=S.animation;X&&m.push(X)}return f&&Promise.all(m).then(()=>{Vt.update(()=>{f&&ab(i,f)})}),m}function Ec(i,l,r={}){const s=fa(i,l,r.type==="exit"?i.presenceContext?.custom:void 0);let{transition:c=i.getDefaultTransition()||{}}=s||{};r.transitionOverride&&(c=r.transitionOverride);const h=s?()=>Promise.all(wy(i,s,r)):()=>Promise.resolve(),f=i.variantChildren&&i.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:S}=c;return sb(i,l,m,g,y,S,r)}:()=>Promise.resolve(),{when:p}=c;if(p){const[m,g]=p==="beforeChildren"?[h,f]:[f,h];return m().then(()=>g())}else return Promise.all([h(),f(r.delay)])}function sb(i,l,r=0,s=0,c=0,h=1,f){const p=[];for(const m of i.variantChildren)m.notify("AnimationStart",l),p.push(Ec(m,l,{...f,delay:r+(typeof s=="function"?0:s)+Cy(i.variantChildren,m,s,c,h)}).then(()=>m.notify("AnimationComplete",l)));return Promise.all(p)}function ub(i,l,r={}){i.notify("AnimationStart",l);let s;if(Array.isArray(l)){const c=l.map(h=>Ec(i,h,r));s=Promise.all(c)}else if(typeof l=="string")s=Ec(i,l,r);else{const c=typeof l=="function"?fa(i,l,r.custom):l;s=Promise.all(wy(i,c,r))}return s.then(()=>{i.notify("AnimationComplete",l)})}const cb={test:i=>i==="auto",parse:i=>i},Vy=i=>l=>l.test(i),_y=[ha,P,We,Zn,US,LS,cb],Hm=i=>_y.find(Vy(i));function fb(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||Wg(i):!0}const db=new Set(["brightness","contrast","saturate","opacity"]);function hb(i){const[l,r]=i.slice(0,-1).split("(");if(l==="drop-shadow")return i;const[s]=r.match(Qc)||[];if(!s)return i;const c=r.replace(s,"");let h=db.has(l)?1:0;return s!==r&&(h*=100),l+"("+h+c+")"}const pb=/\b([a-z-]*)\(.*?\)/gu,Mc={...Fn,getAnimatableNone:i=>{const l=i.match(pb);return l?l.map(hb).join(" "):i}},qm={...ha,transform:Math.round},mb={rotate:Zn,rotateX:Zn,rotateY:Zn,rotateZ:Zn,scale:Pr,scaleX:Pr,scaleY:Pr,scaleZ:Pr,skew:Zn,skewX:Zn,skewY:Zn,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:bl,originX:Mm,originY:Mm,originZ:P},nf={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,radius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,backgroundPositionX:P,backgroundPositionY:P,...mb,zIndex:qm,fillOpacity:bl,strokeOpacity:bl,numOctaves:qm},gb={...nf,color:kt,backgroundColor:kt,outlineColor:kt,fill:kt,stroke:kt,borderColor:kt,borderTopColor:kt,borderRightColor:kt,borderBottomColor:kt,borderLeftColor:kt,filter:Mc,WebkitFilter:Mc},Ly=i=>gb[i];function Uy(i,l){let r=Ly(i);return r!==Mc&&(r=Fn),r.getAnimatableNone?r.getAnimatableNone(l):void 0}const yb=new Set(["auto","none","0"]);function vb(i,l,r){let s=0,c;for(;s<i.length&&!c;){const h=i[s];typeof h=="string"&&!yb.has(h)&&Tl(h).values.length&&(c=i[s]),s++}if(c&&r)for(const h of l)i[h]=Uy(r,c)}class Sb extends Wc{constructor(l,r,s,c,h){super(l,r,s,c,h,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let y=0;y<l.length;y++){let S=l[y];if(typeof S=="string"&&(S=S.trim(),Xc(S))){const T=Dy(S,r.current);T!==void 0&&(l[y]=T),y===l.length-1&&(this.finalKeyframe=S)}}if(this.resolveNoneKeyframes(),!zy.has(s)||l.length!==2)return;const[c,h]=l,f=Hm(c),p=Hm(h),m=Em(c),g=Em(h);if(m!==g&&Kn[s]){this.needsMeasurement=!0;return}if(f!==p)if(Vm(f)&&Vm(p))for(let y=0;y<l.length;y++){const S=l[y];typeof S=="string"&&(l[y]=parseFloat(S))}else Kn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:r}=this,s=[];for(let c=0;c<l.length;c++)(l[c]===null||fb(l[c]))&&s.push(c);s.length&&vb(l,s,r)}measureInitialState(){const{element:l,unresolvedKeyframes:r,name:s}=this;if(!l||!l.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Kn[s](l.measureViewportBox(),window.getComputedStyle(l.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&l.getValue(s,c).jump(c,!1)}measureEndState(){const{element:l,name:r,unresolvedKeyframes:s}=this;if(!l||!l.current)return;const c=l.getValue(r);c&&c.jump(this.measuredOrigin,!1);const h=s.length-1,f=s[h];s[h]=Kn[r](l.measureViewportBox(),window.getComputedStyle(l.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,m])=>{l.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function xb(i,l,r){if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const c=r?.[i]??s.querySelectorAll(i);return c?Array.from(c):[]}return Array.from(i)}const By=(i,l)=>l&&typeof i=="number"?l.transform(i):i;function Hy(i){return Pg(i)&&"offsetHeight"in i}const{schedule:af}=uy(queueMicrotask,!1),Ke={x:!1,y:!1};function qy(){return Ke.x||Ke.y}function bb(i){return i==="x"||i==="y"?Ke[i]?null:(Ke[i]=!0,()=>{Ke[i]=!1}):Ke.x||Ke.y?null:(Ke.x=Ke.y=!0,()=>{Ke.x=Ke.y=!1})}function Yy(i,l){const r=xb(i),s=new AbortController,c={passive:!0,...l,signal:s.signal};return[r,c,()=>s.abort()]}function Ym(i){return!(i.pointerType==="touch"||qy())}function Tb(i,l,r={}){const[s,c,h]=Yy(i,r),f=p=>{if(!Ym(p))return;const{target:m}=p,g=l(m,p);if(typeof g!="function"||!m)return;const y=S=>{Ym(S)&&(g(S),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,c)};return s.forEach(p=>{p.addEventListener("pointerenter",f,c)}),h}const Gy=(i,l)=>l?i===l?!0:Gy(i,l.parentElement):!1,lf=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,Ab=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Xy(i){return Ab.has(i.tagName)||i.isContentEditable===!0}const no=new WeakSet;function Gm(i){return l=>{l.key==="Enter"&&i(l)}}function Pu(i,l){i.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const jb=(i,l)=>{const r=i.currentTarget;if(!r)return;const s=Gm(()=>{if(no.has(r))return;Pu(r,"down");const c=Gm(()=>{Pu(r,"up")}),h=()=>Pu(r,"cancel");r.addEventListener("keyup",c,l),r.addEventListener("blur",h,l)});r.addEventListener("keydown",s,l),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),l)};function Xm(i){return lf(i)&&!qy()}function Eb(i,l,r={}){const[s,c,h]=Yy(i,r),f=p=>{const m=p.currentTarget;if(!Xm(p))return;no.add(m);const g=l(m,p),y=(D,N)=>{window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",T),no.has(m)&&no.delete(m),Xm(D)&&typeof g=="function"&&g(D,{success:N})},S=D=>{y(D,m===window||m===document||r.useGlobalTarget||Gy(m,D.target))},T=D=>{y(D,!1)};window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",T,c)};return s.forEach(p=>{(r.useGlobalTarget?window:p).addEventListener("pointerdown",f,c),Hy(p)&&(p.addEventListener("focus",g=>jb(g,c)),!Xy(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),h}function Qy(i){return Pg(i)&&"ownerSVGElement"in i}function Mb(i){return Qy(i)&&i.tagName==="svg"}const Rb=[..._y,kt,Fn],Db=i=>Rb.find(Vy(i)),Qm=()=>({translate:0,scale:1,origin:0,originPoint:0}),ra=()=>({x:Qm(),y:Qm()}),Zm=()=>({min:0,max:0}),Ft=()=>({x:Zm(),y:Zm()}),Rc={current:null},Zy={current:!1},Cb=typeof window<"u";function zb(){if(Zy.current=!0,!!Cb)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),l=()=>Rc.current=i.matches;i.addEventListener("change",l),l()}else Rc.current=!1}const Nb=new WeakMap;function mo(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Al(i){return typeof i=="string"||Array.isArray(i)}const rf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],of=["initial",...rf];function go(i){return mo(i.animate)||of.some(l=>Al(i[l]))}function Ky(i){return!!(go(i)||i.variants)}function Ob(i,l,r){for(const s in l){const c=l[s],h=r[s];if(le(c))i.addValue(s,c);else if(le(h))i.addValue(s,da(c,{owner:i}));else if(h!==c)if(i.hasValue(s)){const f=i.getValue(s);f.liveStyle===!0?f.jump(c):f.hasAnimated||f.set(c)}else{const f=i.getStaticValue(s);i.addValue(s,da(f!==void 0?f:c,{owner:i}))}}for(const s in r)l[s]===void 0&&i.removeValue(s);return l}const Km=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let so={};function ky(i){so=i}function wb(){return so}class Vb{scrapeMotionValuesFromProps(l,r,s){return{}}constructor({parent:l,props:r,presenceContext:s,reducedMotionConfig:c,blockInitialAnimation:h,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=se.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Vt.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=f;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=g,this.parent=l,this.props=r,this.presenceContext=s,this.depth=l?l.depth+1:0,this.reducedMotionConfig=c,this.options=p,this.blockInitialAnimation=!!h,this.isControllingVariants=go(r),this.isVariantNode=Ky(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:y,...S}=this.scrapeMotionValuesFromProps(r,{},this);for(const T in S){const D=S[T];m[T]!==void 0&&le(D)&&D.set(m[T])}}mount(l){this.current=l,Nb.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Zy.current||zb(),this.shouldReduceMotion=Rc.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Jn(this.notifyUpdate),Jn(this.render),this.valueSubscriptions.forEach(l=>l()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const l in this.events)this.events[l].clear();for(const l in this.features){const r=this.features[l];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(l){this.children.add(l),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(l)}removeChild(l){this.children.delete(l),this.enteringChildren&&this.enteringChildren.delete(l)}bindToMotionValue(l,r){this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)();const s=ma.has(l);s&&this.onBindTransform&&this.onBindTransform();const c=r.on("change",f=>{this.latestValues[l]=f,this.props.onUpdate&&Vt.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;typeof window<"u"&&window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,l,r)),this.valueSubscriptions.set(l,()=>{c(),h&&h(),r.owner&&r.stop()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in so){const r=so[l];if(!r)continue;const{isEnabled:s,Feature:c}=r;if(!this.features[l]&&c&&s(this.props)&&(this.features[l]=new c(this)),this.features[l]){const h=this.features[l];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ft()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,r){this.latestValues[l]=r}update(l,r){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<Km.length;s++){const c=Km[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const h="on"+c,f=l[h];f&&(this.propEventSubscriptions[c]=this.on(c,f))}this.prevMotionValues=Ob(this,this.scrapeMotionValuesFromProps(l,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(l),()=>r.variantChildren.delete(l)}addValue(l,r){const s=this.values.get(l);r!==s&&(s&&this.removeValue(l),this.bindToMotionValue(l,r),this.values.set(l,r),this.latestValues[l]=r.get())}removeValue(l){this.values.delete(l);const r=this.valueSubscriptions.get(l);r&&(r(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,r){if(this.props.values&&this.props.values[l])return this.props.values[l];let s=this.values.get(l);return s===void 0&&r!==void 0&&(s=da(r===null?void 0:r,{owner:this}),this.addValue(l,s)),s}readValue(l,r){let s=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return s!=null&&(typeof s=="string"&&(Fg(s)||Wg(s))?s=parseFloat(s):!Db(s)&&Fn.test(r)&&(s=Uy(l,r)),this.setBaseTarget(l,le(s)?s.get():s)),le(s)?s.get():s}setBaseTarget(l,r){this.baseTarget[l]=r}getBaseTarget(l){const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const h=tf(this.props,r,this.presenceContext?.custom);h&&(s=h[l])}if(r&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,l);return c!==void 0&&!le(c)?c:this.initialValues[l]!==void 0&&s===void 0?void 0:this.baseTarget[l]}on(l,r){return this.events[l]||(this.events[l]=new qc),this.events[l].add(r)}notify(l,...r){this.events[l]&&this.events[l].notify(...r)}scheduleRenderMicrotask(){af.render(this.render)}}class Pn{constructor(l){this.isMounted=!1,this.node=l}update(){}}class Jy extends Vb{constructor(){super(...arguments),this.KeyframeResolver=Sb}sortInstanceNodePosition(l,r){return l.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(l,r){const s=l.style;return s?s[r]:void 0}removeValueFromRenderState(l,{vars:r,style:s}){delete r[l],delete s[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;le(l)&&(this.childSubscription=l.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function Fy({top:i,left:l,right:r,bottom:s}){return{x:{min:l,max:r},y:{min:i,max:s}}}function _b({x:i,y:l}){return{top:l.min,right:i.max,bottom:l.max,left:i.min}}function Lb(i,l){if(!l)return i;const r=l({x:i.left,y:i.top}),s=l({x:i.right,y:i.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function Wu(i){return i===void 0||i===1}function Dc({scale:i,scaleX:l,scaleY:r}){return!Wu(i)||!Wu(l)||!Wu(r)}function yi(i){return Dc(i)||Py(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function Py(i){return km(i.x)||km(i.y)}function km(i){return i&&i!=="0%"}function uo(i,l,r){const s=i-r,c=l*s;return r+c}function Jm(i,l,r,s,c){return c!==void 0&&(i=uo(i,c,s)),uo(i,r,s)+l}function Cc(i,l=0,r=1,s,c){i.min=Jm(i.min,l,r,s,c),i.max=Jm(i.max,l,r,s,c)}function Wy(i,{x:l,y:r}){Cc(i.x,l.translate,l.scale,l.originPoint),Cc(i.y,r.translate,r.scale,r.originPoint)}const Fm=.999999999999,Pm=1.0000000000001;function Ub(i,l,r,s=!1){const c=r.length;if(!c)return;l.x=l.y=1;let h,f;for(let p=0;p<c;p++){h=r[p],f=h.projectionDelta;const{visualElement:m}=h.options;m&&m.props.style&&m.props.style.display==="contents"||(s&&h.options.layoutScroll&&h.scroll&&h!==h.root&&sa(i,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),f&&(l.x*=f.x.scale,l.y*=f.y.scale,Wy(i,f)),s&&yi(h.latestValues)&&sa(i,h.latestValues))}l.x<Pm&&l.x>Fm&&(l.x=1),l.y<Pm&&l.y>Fm&&(l.y=1)}function oa(i,l){i.min=i.min+l,i.max=i.max+l}function Wm(i,l,r,s,c=.5){const h=Lt(i.min,i.max,c);Cc(i,l,r,h,s)}function sa(i,l){Wm(i.x,l.x,l.scaleX,l.scale,l.originX),Wm(i.y,l.y,l.scaleY,l.scale,l.originY)}function $y(i,l){return Fy(Lb(i.getBoundingClientRect(),l))}function Bb(i,l,r){const s=$y(i,r),{scroll:c}=l;return c&&(oa(s.x,c.offset.x),oa(s.y,c.offset.y)),s}const Hb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},qb=pa.length;function Yb(i,l,r){let s="",c=!0;for(let h=0;h<qb;h++){const f=pa[h],p=i[f];if(p===void 0)continue;let m=!0;if(typeof p=="number"?m=p===(f.startsWith("scale")?1:0):m=parseFloat(p)===0,!m||r){const g=By(p,nf[f]);if(!m){c=!1;const y=Hb[f]||f;s+=`${y}(${g}) `}r&&(l[f]=g)}}return s=s.trim(),r?s=r(l,c?"":s):c&&(s="none"),s}function sf(i,l,r){const{style:s,vars:c,transformOrigin:h}=i;let f=!1,p=!1;for(const m in l){const g=l[m];if(ma.has(m)){f=!0;continue}else if(fy(m)){c[m]=g;continue}else{const y=By(g,nf[m]);m.startsWith("origin")?(p=!0,h[m]=y):s[m]=y}}if(l.transform||(f||r?s.transform=Yb(l,i.transform,r):s.transform&&(s.transform="none")),p){const{originX:m="50%",originY:g="50%",originZ:y=0}=h;s.transformOrigin=`${m} ${g} ${y}`}}function Iy(i,{style:l,vars:r},s,c){const h=i.style;let f;for(f in l)h[f]=l[f];c?.applyProjectionStyles(h,s);for(f in r)h.setProperty(f,r[f])}function $m(i,l){return l.max===l.min?0:i/(l.max-l.min)*100}const fl={correct:(i,l)=>{if(!l.target)return i;if(typeof i=="string")if(P.test(i))i=parseFloat(i);else return i;const r=$m(i,l.target.x),s=$m(i,l.target.y);return`${r}% ${s}%`}},Gb={correct:(i,{treeScale:l,projectionDelta:r})=>{const s=i,c=Fn.parse(i);if(c.length>5)return s;const h=Fn.createTransformer(i),f=typeof c[0]!="number"?1:0,p=r.x.scale*l.x,m=r.y.scale*l.y;c[0+f]/=p,c[1+f]/=m;const g=Lt(p,m,.5);return typeof c[2+f]=="number"&&(c[2+f]/=g),typeof c[3+f]=="number"&&(c[3+f]/=g),h(c)}},zc={borderRadius:{...fl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fl,borderTopRightRadius:fl,borderBottomLeftRadius:fl,borderBottomRightRadius:fl,boxShadow:Gb};function tv(i,{layout:l,layoutId:r}){return ma.has(i)||i.startsWith("origin")||(l||r!==void 0)&&(!!zc[i]||i==="opacity")}function uf(i,l,r){const s=i.style,c=l?.style,h={};if(!s)return h;for(const f in s)(le(s[f])||c&&le(c[f])||tv(f,i)||r?.getValue(f)?.liveStyle!==void 0)&&(h[f]=s[f]);return h}function Xb(i){return window.getComputedStyle(i)}class Qb extends Jy{constructor(){super(...arguments),this.type="html",this.renderInstance=Iy}readValueFromInstance(l,r){if(ma.has(r))return this.projection?.isProjecting?yc(r):xx(l,r);{const s=Xb(l),c=(fy(r)?s.getPropertyValue(r):s[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(l,{transformPagePoint:r}){return $y(l,r)}build(l,r,s){sf(l,r,s.transformTemplate)}scrapeMotionValuesFromProps(l,r,s){return uf(l,r,s)}}const Zb={offset:"stroke-dashoffset",array:"stroke-dasharray"},Kb={offset:"strokeDashoffset",array:"strokeDasharray"};function kb(i,l,r=1,s=0,c=!0){i.pathLength=1;const h=c?Zb:Kb;i[h.offset]=P.transform(-s);const f=P.transform(l),p=P.transform(r);i[h.array]=`${f} ${p}`}const Jb=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ev(i,{attrX:l,attrY:r,attrScale:s,pathLength:c,pathSpacing:h=1,pathOffset:f=0,...p},m,g,y){if(sf(i,p,g),m){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:S,style:T}=i;S.transform&&(T.transform=S.transform,delete S.transform),(T.transform||S.transformOrigin)&&(T.transformOrigin=S.transformOrigin??"50% 50%",delete S.transformOrigin),T.transform&&(T.transformBox=y?.transformBox??"fill-box",delete S.transformBox);for(const D of Jb)S[D]!==void 0&&(T[D]=S[D],delete S[D]);l!==void 0&&(S.x=l),r!==void 0&&(S.y=r),s!==void 0&&(S.scale=s),c!==void 0&&kb(S,c,h,f,!1)}const nv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),iv=i=>typeof i=="string"&&i.toLowerCase()==="svg";function Fb(i,l,r,s){Iy(i,l,void 0,s);for(const c in l.attrs)i.setAttribute(nv.has(c)?c:ef(c),l.attrs[c])}function av(i,l,r){const s=uf(i,l,r);for(const c in i)if(le(i[c])||le(l[c])){const h=pa.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[h]=i[c]}return s}class Pb extends Jy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ft}getBaseTargetFromProps(l,r){return l[r]}readValueFromInstance(l,r){if(ma.has(r)){const s=Ly(r);return s&&s.default||0}return r=nv.has(r)?r:ef(r),l.getAttribute(r)}scrapeMotionValuesFromProps(l,r,s){return av(l,r,s)}build(l,r,s){ev(l,r,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(l,r,s,c){Fb(l,r,s,c)}mount(l){this.isSVGTag=iv(l.tagName),super.mount(l)}}const Wb=of.length;function lv(i){if(!i)return;if(!i.isControllingVariants){const r=i.parent?lv(i.parent)||{}:{};return i.props.initial!==void 0&&(r.initial=i.props.initial),r}const l={};for(let r=0;r<Wb;r++){const s=of[r],c=i.props[s];(Al(c)||c===!1)&&(l[s]=c)}return l}function rv(i,l){if(!Array.isArray(l))return!1;const r=l.length;if(r!==i.length)return!1;for(let s=0;s<r;s++)if(l[s]!==i[s])return!1;return!0}const $b=[...rf].reverse(),Ib=rf.length;function tT(i){return l=>Promise.all(l.map(({animation:r,options:s})=>ub(i,r,s)))}function eT(i){let l=tT(i),r=Im(),s=!0;const c=m=>(g,y)=>{const S=fa(i,y,m==="exit"?i.presenceContext?.custom:void 0);if(S){const{transition:T,transitionEnd:D,...N}=S;g={...g,...N,...D}}return g};function h(m){l=m(i)}function f(m){const{props:g}=i,y=lv(i.parent)||{},S=[],T=new Set;let D={},N=1/0;for(let X=0;X<Ib;X++){const q=$b[X],Z=r[q],B=g[q]!==void 0?g[q]:y[q],J=Al(B),G=q===m?Z.isActive:null;G===!1&&(N=X);let F=B===y[q]&&B!==g[q]&&J;if(F&&s&&i.manuallyAnimateOnMount&&(F=!1),Z.protectedKeys={...D},!Z.isActive&&G===null||!B&&!Z.prevProp||mo(B)||typeof B=="boolean")continue;const Q=nT(Z.prevProp,B);let K=Q||q===m&&Z.isActive&&!F&&J||X>N&&J,lt=!1;const nt=Array.isArray(B)?B:[B];let xt=nt.reduce(c(q),{});G===!1&&(xt={});const{prevResolvedValues:it={}}=Z,ot={...it,...xt},jt=Y=>{K=!0,T.has(Y)&&(lt=!0,T.delete(Y)),Z.needsAnimating[Y]=!0;const $=i.getValue(Y);$&&($.liveStyle=!1)};for(const Y in ot){const $=xt[Y],dt=it[Y];if(D.hasOwnProperty(Y))continue;let gt=!1;Ac($)&&Ac(dt)?gt=!rv($,dt):gt=$!==dt,gt?$!=null?jt(Y):T.add(Y):$!==void 0&&T.has(Y)?jt(Y):Z.protectedKeys[Y]=!0}Z.prevProp=B,Z.prevResolvedValues=xt,Z.isActive&&(D={...D,...xt}),s&&i.blockInitialAnimation&&(K=!1);const rt=F&&Q;K&&(!rt||lt)&&S.push(...nt.map(Y=>{const $={type:q};if(typeof Y=="string"&&s&&!rt&&i.manuallyAnimateOnMount&&i.parent){const{parent:dt}=i,gt=fa(dt,Y);if(dt.enteringChildren&&gt){const{delayChildren:b}=gt.transition||{};$.delay=Cy(dt.enteringChildren,i,b)}}return{animation:Y,options:$}}))}if(T.size){const X={};if(typeof g.initial!="boolean"){const q=fa(i,Array.isArray(g.initial)?g.initial[0]:g.initial);q&&q.transition&&(X.transition=q.transition)}T.forEach(q=>{const Z=i.getBaseTarget(q),B=i.getValue(q);B&&(B.liveStyle=!0),X[q]=Z??null}),S.push({animation:X})}let U=!!S.length;return s&&(g.initial===!1||g.initial===g.animate)&&!i.manuallyAnimateOnMount&&(U=!1),s=!1,U?l(S):Promise.resolve()}function p(m,g){if(r[m].isActive===g)return Promise.resolve();i.variantChildren?.forEach(S=>S.animationState?.setActive(m,g)),r[m].isActive=g;const y=f(m);for(const S in r)r[S].protectedKeys={};return y}return{animateChanges:f,setActive:p,setAnimateFunction:h,getState:()=>r,reset:()=>{r=Im()}}}function nT(i,l){return typeof l=="string"?l!==i:Array.isArray(l)?!rv(l,i):!1}function gi(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Im(){return{animate:gi(!0),whileInView:gi(),whileHover:gi(),whileTap:gi(),whileDrag:gi(),whileFocus:gi(),exit:gi()}}const ov=1e-4,iT=1-ov,aT=1+ov,sv=.01,lT=0-sv,rT=0+sv;function ue(i){return i.max-i.min}function oT(i,l,r){return Math.abs(i-l)<=r}function tg(i,l,r,s=.5){i.origin=s,i.originPoint=Lt(l.min,l.max,i.origin),i.scale=ue(r)/ue(l),i.translate=Lt(r.min,r.max,i.origin)-i.originPoint,(i.scale>=iT&&i.scale<=aT||isNaN(i.scale))&&(i.scale=1),(i.translate>=lT&&i.translate<=rT||isNaN(i.translate))&&(i.translate=0)}function yl(i,l,r,s){tg(i.x,l.x,r.x,s?s.originX:void 0),tg(i.y,l.y,r.y,s?s.originY:void 0)}function eg(i,l,r){i.min=r.min+l.min,i.max=i.min+ue(l)}function sT(i,l,r){eg(i.x,l.x,r.x),eg(i.y,l.y,r.y)}function ng(i,l,r){i.min=l.min-r.min,i.max=i.min+ue(l)}function co(i,l,r){ng(i.x,l.x,r.x),ng(i.y,l.y,r.y)}function ig(i,l,r,s,c){return i-=l,i=uo(i,1/r,s),c!==void 0&&(i=uo(i,1/c,s)),i}function uT(i,l=0,r=1,s=.5,c,h=i,f=i){if(We.test(l)&&(l=parseFloat(l),l=Lt(f.min,f.max,l/100)-f.min),typeof l!="number")return;let p=Lt(h.min,h.max,s);i===h&&(p-=l),i.min=ig(i.min,l,r,p,c),i.max=ig(i.max,l,r,p,c)}function ag(i,l,[r,s,c],h,f){uT(i,l[r],l[s],l[c],l.scale,h,f)}const cT=["x","scaleX","originX"],fT=["y","scaleY","originY"];function lg(i,l,r,s){ag(i.x,l,cT,r?r.x:void 0,s?s.x:void 0),ag(i.y,l,fT,r?r.y:void 0,s?s.y:void 0)}function rg(i,l){i.min=l.min,i.max=l.max}function Ze(i,l){rg(i.x,l.x),rg(i.y,l.y)}function og(i,l){i.translate=l.translate,i.scale=l.scale,i.originPoint=l.originPoint,i.origin=l.origin}function sg(i){return i.translate===0&&i.scale===1}function uv(i){return sg(i.x)&&sg(i.y)}function ug(i,l){return i.min===l.min&&i.max===l.max}function dT(i,l){return ug(i.x,l.x)&&ug(i.y,l.y)}function cg(i,l){return Math.round(i.min)===Math.round(l.min)&&Math.round(i.max)===Math.round(l.max)}function cv(i,l){return cg(i.x,l.x)&&cg(i.y,l.y)}function fg(i){return ue(i.x)/ue(i.y)}function dg(i,l){return i.translate===l.translate&&i.scale===l.scale&&i.originPoint===l.originPoint}function He(i){return[i("x"),i("y")]}function hT(i,l,r){let s="";const c=i.x.translate/l.x,h=i.y.translate/l.y,f=r?.z||0;if((c||h||f)&&(s=`translate3d(${c}px, ${h}px, ${f}px) `),(l.x!==1||l.y!==1)&&(s+=`scale(${1/l.x}, ${1/l.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:S,rotateY:T,skewX:D,skewY:N}=r;g&&(s=`perspective(${g}px) ${s}`),y&&(s+=`rotate(${y}deg) `),S&&(s+=`rotateX(${S}deg) `),T&&(s+=`rotateY(${T}deg) `),D&&(s+=`skewX(${D}deg) `),N&&(s+=`skewY(${N}deg) `)}const p=i.x.scale*l.x,m=i.y.scale*l.y;return(p!==1||m!==1)&&(s+=`scale(${p}, ${m})`),s||"none"}const fv=["TopLeft","TopRight","BottomLeft","BottomRight"],pT=fv.length,hg=i=>typeof i=="string"?parseFloat(i):i,pg=i=>typeof i=="number"||P.test(i);function mT(i,l,r,s,c,h){c?(i.opacity=Lt(0,r.opacity??1,gT(s)),i.opacityExit=Lt(l.opacity??1,0,yT(s))):h&&(i.opacity=Lt(l.opacity??1,r.opacity??1,s));for(let f=0;f<pT;f++){const p=`border${fv[f]}Radius`;let m=mg(l,p),g=mg(r,p);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||pg(m)===pg(g)?(i[p]=Math.max(Lt(hg(m),hg(g),s),0),(We.test(g)||We.test(m))&&(i[p]+="%")):i[p]=g}(l.rotate||r.rotate)&&(i.rotate=Lt(l.rotate||0,r.rotate||0,s))}function mg(i,l){return i[l]!==void 0?i[l]:i.borderRadius}const gT=dv(0,.5,ly),yT=dv(.5,.95,Ye);function dv(i,l,r){return s=>s<i?0:s>l?1:r(xl(i,l,s))}function vT(i,l){const r=se.now(),s=({timestamp:c})=>{const h=c-r;h>=l&&(Jn(s),i(h-l))};return Vt.setup(s,!0),()=>Jn(s)}function jl(i,l,r,s={passive:!0}){return i.addEventListener(l,r,s),()=>i.removeEventListener(l,r)}function io(i){return le(i)?i.get():i}function ST(i,l,r){const s=le(i)?i:da(i);return s.start(Ic("",s,l,r)),s.animation}const xT=(i,l)=>i.depth-l.depth;class bT{constructor(){this.children=[],this.isDirty=!1}add(l){Lc(this.children,l),this.isDirty=!0}remove(l){Uc(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(xT),this.isDirty=!1,this.children.forEach(l)}}class TT{constructor(){this.members=[]}add(l){Lc(this.members,l),l.scheduleRender()}remove(l){if(Uc(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(l){const r=this.members.findIndex(c=>l===c);if(r===0)return!1;let s;for(let c=r;c>=0;c--){const h=this.members[c];if(h.isPresent!==!1){s=h;break}}return s?(this.promote(s),!0):!1}promote(l,r){const s=this.lead;if(l!==s&&(this.prevLead=s,this.lead=l,l.show(),s)){s.instance&&s.scheduleRender(),l.scheduleRender(),l.resumeFrom=s,r&&(l.resumeFrom.preserveOpacity=!0),s.snapshot&&(l.snapshot=s.snapshot,l.snapshot.latestValues=s.animationValues||s.latestValues),l.root&&l.root.isUpdating&&(l.isLayoutDirty=!0);const{crossfade:c}=l.options;c===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(l=>{const{options:r,resumingFrom:s}=l;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(l=>{l.instance&&l.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ao={hasAnimatedSinceResize:!0,hasEverUpdated:!1},$u=["","X","Y","Z"],AT=1e3;let jT=0;function Iu(i,l,r,s){const{latestValues:c}=l;c[i]&&(r[i]=c[i],l.setStaticValue(i,0),s&&(s[i]=0))}function hv(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:l}=i.options;if(!l)return;const r=Oy(l);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:h}=i.options;window.MotionCancelOptimisedAnimation(r,"transform",Vt,!(c||h))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&hv(s)}function pv({attachResizeListener:i,defaultParent:l,measureScroll:r,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(f={},p=l?.()){this.id=jT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(RT),this.nodes.forEach(NT),this.nodes.forEach(OT),this.nodes.forEach(DT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new bT)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new qc),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const m=this.eventHandlers.get(f);m&&m.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Qy(f)&&!Mb(f),this.instance=f;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||p)&&(this.isLayoutDirty=!0),i){let y,S=0;const T=()=>this.root.updateBlockedByResize=!1;Vt.read(()=>{S=window.innerWidth}),i(f,()=>{const D=window.innerWidth;D!==S&&(S=D,this.root.updateBlockedByResize=!0,y&&y(),y=vT(T,250),ao.hasAnimatedSinceResize&&(ao.hasAnimatedSinceResize=!1,this.nodes.forEach(vg)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:S,hasRelativeLayoutChanged:T,layout:D})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const N=this.options.transition||g.getDefaultTransition()||UT,{onLayoutAnimationStart:U,onLayoutAnimationComplete:X}=g.getProps(),q=!this.targetLayout||!cv(this.targetLayout,D),Z=!S&&T;if(this.options.layoutRoot||this.resumeFrom||Z||S&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...$c(N,"layout"),onPlay:U,onComplete:X};(g.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(y,Z)}else S||vg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=D})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Jn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wT),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&hv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const S=this.path[y];S.shouldResetTransform=!0,S.updateScroll("snapshot"),S.options.layoutRoot&&S.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(yg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(zT),this.nodes.forEach(ET),this.nodes.forEach(MT)):this.nodes.forEach(yg),this.clearAllSnapshots();const p=se.now();ie.delta=$e(0,1e3/60,p-ie.timestamp),ie.timestamp=p,ie.isProcessing=!0,Qu.update.process(ie),Qu.preRender.process(ie),Qu.render.process(ie),ie.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,af.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(CT),this.sharedNodes.forEach(VT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Vt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ue(this.snapshot.measuredBox.x)&&!ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ft(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:m,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!uv(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;f&&this.instance&&(p||yi(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return f&&(m=this.removeTransform(m)),BT(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Ft();const p=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(HT))){const{scroll:g}=this.root;g&&(oa(p.x,g.offset.x),oa(p.y,g.offset.y))}return p}removeElementScroll(f){const p=Ft();if(Ze(p,f),this.scroll?.wasRoot)return p;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:y,options:S}=g;g!==this.root&&y&&S.layoutScroll&&(y.wasRoot&&Ze(p,f),oa(p.x,y.offset.x),oa(p.y,y.offset.y))}return p}applyTransform(f,p=!1){const m=Ft();Ze(m,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&sa(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),yi(y.latestValues)&&sa(m,y.latestValues)}return yi(this.latestValues)&&sa(m,this.latestValues),m}removeTransform(f){const p=Ft();Ze(p,f);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!yi(g.latestValues))continue;Dc(g.latestValues)&&g.updateSnapshot();const y=Ft(),S=g.measurePageBox();Ze(y,S),lg(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return yi(this.latestValues)&&lg(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ie.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:S}=this.options;if(!this.layout||!(y||S))return;this.resolvedRelativeTargetAt=ie.timestamp;const T=this.getClosestProjectingParent();T&&this.linkedParentVersion!==T.layoutVersion&&!T.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(T&&T.layout?this.createRelativeTarget(T,this.layout.layoutBox,T.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ft(),this.targetWithTransforms=Ft()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ze(this.target,this.layout.layoutBox),Wy(this.target,this.targetDelta)):Ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?this.createRelativeTarget(T,this.target,T.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Dc(this.parent.latestValues)||Py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,p,m){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ft(),this.relativeTargetOrigin=Ft(),co(this.relativeTargetOrigin,p,m),Ze(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const f=this.getLead(),p=!!this.resumingFrom||this!==f;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ie.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Ze(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,T=this.treeScale.y;Ub(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Ft());const{target:D}=f;if(!D){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(og(this.prevProjectionDelta.x,this.projectionDelta.x),og(this.prevProjectionDelta.y,this.projectionDelta.y)),yl(this.projectionDelta,this.layoutCorrected,D,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==T||!dg(this.projectionDelta.x,this.prevProjectionDelta.x)||!dg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",D))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ra(),this.projectionDelta=ra(),this.projectionDeltaWithTransform=ra()}setAnimationOrigin(f,p=!1){const m=this.snapshot,g=m?m.latestValues:{},y={...this.latestValues},S=ra();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const T=Ft(),D=m?m.source:void 0,N=this.layout?this.layout.source:void 0,U=D!==N,X=this.getStack(),q=!X||X.members.length<=1,Z=!!(U&&!q&&this.options.crossfade===!0&&!this.path.some(LT));this.animationProgress=0;let B;this.mixTargetDelta=J=>{const G=J/1e3;Sg(S.x,f.x,G),Sg(S.y,f.y,G),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(co(T,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_T(this.relativeTarget,this.relativeTargetOrigin,T,G),B&&dT(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=Ft()),Ze(B,this.relativeTarget)),U&&(this.animationValues=y,mT(y,g,this.latestValues,G,Z,q)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Jn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Vt.update(()=>{ao.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=da(0)),this.currentAnimation=ST(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(AT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:m,layout:g,latestValues:y}=f;if(!(!p||!m||!g)){if(this!==f&&this.layout&&g&&mv(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||Ft();const S=ue(this.layout.layoutBox.x);m.x.min=f.target.x.min,m.x.max=m.x.min+S;const T=ue(this.layout.layoutBox.y);m.y.min=f.target.y.min,m.y.max=m.y.min+T}Ze(p,m),sa(p,y),yl(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new TT),this.sharedNodes.get(f).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:m}=f;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const g={};m.z&&Iu("z",f,g,this.animationValues);for(let y=0;y<$u.length;y++)Iu(`rotate${$u[y]}`,f,g,this.animationValues),Iu(`skew${$u[y]}`,f,g,this.animationValues);f.render();for(const y in g)f.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=io(p?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=io(p?.pointerEvents)||""),this.hasProjected&&!yi(this.latestValues)&&(f.transform=m?m({},""):"none",this.hasProjected=!1);return}f.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let S=hT(this.projectionDeltaWithTransform,this.treeScale,y);m&&(S=m(y,S)),f.transform=S;const{x:T,y:D}=this.projectionDelta;f.transformOrigin=`${T.origin*100}% ${D.origin*100}% 0`,g.animationValues?f.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:f.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const N in zc){if(y[N]===void 0)continue;const{correct:U,applyTo:X,isCSSVariable:q}=zc[N],Z=S==="none"?y[N]:U(y[N],g);if(X){const B=X.length;for(let J=0;J<B;J++)f[X[J]]=Z}else q?this.options.visualElement.renderState.vars[N]=Z:f[N]=Z}this.options.layoutId&&(f.pointerEvents=g===this?io(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(gg),this.root.sharedNodes.clear()}}}function ET(i){i.updateLayout()}function MT(i){const l=i.resumeFrom?.snapshot||i.snapshot;if(i.isLead()&&i.layout&&l&&i.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=i.layout,{animationType:c}=i.options,h=l.source!==i.layout.source;c==="size"?He(y=>{const S=h?l.measuredBox[y]:l.layoutBox[y],T=ue(S);S.min=r[y].min,S.max=S.min+T}):mv(c,l.layoutBox,r)&&He(y=>{const S=h?l.measuredBox[y]:l.layoutBox[y],T=ue(r[y]);S.max=S.min+T,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[y].max=i.relativeTarget[y].min+T)});const f=ra();yl(f,r,l.layoutBox);const p=ra();h?yl(p,i.applyTransform(s,!0),l.measuredBox):yl(p,r,l.layoutBox);const m=!uv(f);let g=!1;if(!i.resumeFrom){const y=i.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:S,layout:T}=y;if(S&&T){const D=Ft();co(D,l.layoutBox,S.layoutBox);const N=Ft();co(N,r,T.layoutBox),cv(D,N)||(g=!0),y.options.layoutRoot&&(i.relativeTarget=N,i.relativeTargetOrigin=D,i.relativeParent=y)}}}i.notifyListeners("didUpdate",{layout:r,snapshot:l,delta:p,layoutDelta:f,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(i.isLead()){const{onExitComplete:r}=i.options;r&&r()}i.options.transition=void 0}function RT(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function DT(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function CT(i){i.clearSnapshot()}function gg(i){i.clearMeasurements()}function yg(i){i.isLayoutDirty=!1}function zT(i){const{visualElement:l}=i.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),i.resetTransform()}function vg(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function NT(i){i.resolveTargetDelta()}function OT(i){i.calcProjection()}function wT(i){i.resetSkewAndRotation()}function VT(i){i.removeLeadSnapshot()}function Sg(i,l,r){i.translate=Lt(l.translate,0,r),i.scale=Lt(l.scale,1,r),i.origin=l.origin,i.originPoint=l.originPoint}function xg(i,l,r,s){i.min=Lt(l.min,r.min,s),i.max=Lt(l.max,r.max,s)}function _T(i,l,r,s){xg(i.x,l.x,r.x,s),xg(i.y,l.y,r.y,s)}function LT(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const UT={duration:.45,ease:[.4,0,.1,1]},bg=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Tg=bg("applewebkit/")&&!bg("chrome/")?Math.round:Ye;function Ag(i){i.min=Tg(i.min),i.max=Tg(i.max)}function BT(i){Ag(i.x),Ag(i.y)}function mv(i,l,r){return i==="position"||i==="preserve-aspect"&&!oT(fg(l),fg(r),.2)}function HT(i){return i!==i.root&&i.scroll?.wasRoot}const qT=pv({attachResizeListener:(i,l)=>jl(i,"resize",l),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),tc={current:void 0},gv=pv({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!tc.current){const i=new qT({});i.mount(window),i.setOptions({layoutScroll:!0}),tc.current=i}return tc.current},resetTransform:(i,l)=>{i.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),cf=O.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function jg(i,l){if(typeof i=="function")return i(l);i!=null&&(i.current=l)}function YT(...i){return l=>{let r=!1;const s=i.map(c=>{const h=jg(c,l);return!r&&typeof h=="function"&&(r=!0),h});if(r)return()=>{for(let c=0;c<s.length;c++){const h=s[c];typeof h=="function"?h():jg(i[c],null)}}}}function GT(...i){return O.useCallback(YT(...i),i)}class XT extends O.Component{getSnapshotBeforeUpdate(l){const r=this.props.childRef.current;if(r&&l.isPresent&&!this.props.isPresent){const s=r.offsetParent,c=Hy(s)&&s.offsetWidth||0,h=this.props.sizeRef.current;h.height=r.offsetHeight||0,h.width=r.offsetWidth||0,h.top=r.offsetTop,h.left=r.offsetLeft,h.right=c-h.width-h.left}return null}componentDidUpdate(){}render(){return this.props.children}}function QT({children:i,isPresent:l,anchorX:r,root:s}){const c=O.useId(),h=O.useRef(null),f=O.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=O.useContext(cf),m=i.props?.ref??i?.ref,g=GT(h,m);return O.useInsertionEffect(()=>{const{width:y,height:S,top:T,left:D,right:N}=f.current;if(l||!h.current||!y||!S)return;const U=r==="left"?`left: ${D}`:`right: ${N}`;h.current.dataset.motionPopId=c;const X=document.createElement("style");p&&(X.nonce=p);const q=s??document.head;return q.appendChild(X),X.sheet&&X.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${S}px !important;
            ${U}px !important;
            top: ${T}px !important;
          }
        `),()=>{q.contains(X)&&q.removeChild(X)}},[l]),H.jsx(XT,{isPresent:l,childRef:h,sizeRef:f,children:O.cloneElement(i,{ref:g})})}const ZT=({children:i,initial:l,isPresent:r,onExitComplete:s,custom:c,presenceAffectsLayout:h,mode:f,anchorX:p,root:m})=>{const g=_c(KT),y=O.useId();let S=!0,T=O.useMemo(()=>(S=!1,{id:y,initial:l,isPresent:r,custom:c,onExitComplete:D=>{g.set(D,!0);for(const N of g.values())if(!N)return;s&&s()},register:D=>(g.set(D,!1),()=>g.delete(D))}),[r,g,s]);return h&&S&&(T={...T}),O.useMemo(()=>{g.forEach((D,N)=>g.set(N,!1))},[r]),O.useEffect(()=>{!r&&!g.size&&s&&s()},[r]),f==="popLayout"&&(i=H.jsx(QT,{isPresent:r,anchorX:p,root:m,children:i})),H.jsx(po.Provider,{value:T,children:i})};function KT(){return new Map}function yv(i=!0){const l=O.useContext(po);if(l===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:c}=l,h=O.useId();O.useEffect(()=>{if(i)return c(h)},[i]);const f=O.useCallback(()=>i&&s&&s(h),[h,s,i]);return!r&&s?[!1,f]:[!0]}const Wr=i=>i.key||"";function Eg(i){const l=[];return O.Children.forEach(i,r=>{O.isValidElement(r)&&l.push(r)}),l}const yo=({children:i,custom:l,initial:r=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:h="sync",propagate:f=!1,anchorX:p="left",root:m})=>{const[g,y]=yv(f),S=O.useMemo(()=>Eg(i),[i]),T=f&&!g?[]:S.map(Wr),D=O.useRef(!0),N=O.useRef(S),U=_c(()=>new Map),X=O.useRef(new Set),[q,Z]=O.useState(S),[B,J]=O.useState(S);Jg(()=>{D.current=!1,N.current=S;for(let Q=0;Q<B.length;Q++){const K=Wr(B[Q]);T.includes(K)?(U.delete(K),X.current.delete(K)):U.get(K)!==!0&&U.set(K,!1)}},[B,T.length,T.join("-")]);const G=[];if(S!==q){let Q=[...S];for(let K=0;K<B.length;K++){const lt=B[K],nt=Wr(lt);T.includes(nt)||(Q.splice(K,0,lt),G.push(lt))}return h==="wait"&&G.length&&(Q=G),J(Eg(Q)),Z(S),null}const{forceRender:F}=O.useContext(Vc);return H.jsx(H.Fragment,{children:B.map(Q=>{const K=Wr(Q),lt=f&&!g?!1:S===B||T.includes(K),nt=()=>{if(X.current.has(K))return;if(X.current.add(K),U.has(K))U.set(K,!0);else return;let xt=!0;U.forEach(it=>{it||(xt=!1)}),xt&&(F?.(),J(N.current),f&&y?.(),s&&s())};return H.jsx(ZT,{isPresent:lt,initial:!D.current||r?void 0:!1,custom:l,presenceAffectsLayout:c,mode:h,root:m,onExitComplete:lt?void 0:nt,anchorX:p,children:Q},K)})})},vv=O.createContext({strict:!1}),Mg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Rg=!1;function kT(){if(Rg)return;const i={};for(const l in Mg)i[l]={isEnabled:r=>Mg[l].some(s=>!!r[s])};ky(i),Rg=!0}function Sv(){return kT(),wb()}function JT(i){const l=Sv();for(const r in i)l[r]={...l[r],...i[r]};ky(l)}const FT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fo(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||FT.has(i)}let xv=i=>!fo(i);function PT(i){typeof i=="function"&&(xv=l=>l.startsWith("on")?!fo(l):i(l))}try{PT(require("@emotion/is-prop-valid").default)}catch{}function WT(i,l,r){const s={};for(const c in i)c==="values"&&typeof i.values=="object"||(xv(c)||r===!0&&fo(c)||!l&&!fo(c)||i.draggable&&c.startsWith("onDrag"))&&(s[c]=i[c]);return s}const vo=O.createContext({});function $T(i,l){if(go(i)){const{initial:r,animate:s}=i;return{initial:r===!1||Al(r)?r:void 0,animate:Al(s)?s:void 0}}return i.inherit!==!1?l:{}}function IT(i){const{initial:l,animate:r}=$T(i,O.useContext(vo));return O.useMemo(()=>({initial:l,animate:r}),[Dg(l),Dg(r)])}function Dg(i){return Array.isArray(i)?i.join(" "):i}const ff=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function bv(i,l,r){for(const s in l)!le(l[s])&&!tv(s,r)&&(i[s]=l[s])}function t2({transformTemplate:i},l){return O.useMemo(()=>{const r=ff();return sf(r,l,i),Object.assign({},r.vars,r.style)},[l])}function e2(i,l){const r=i.style||{},s={};return bv(s,r,i),Object.assign(s,t2(i,l)),s}function n2(i,l){const r={},s=e2(i,l);return i.drag&&i.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(r.tabIndex=0),r.style=s,r}const Tv=()=>({...ff(),attrs:{}});function i2(i,l,r,s){const c=O.useMemo(()=>{const h=Tv();return ev(h,l,iv(s),i.transformTemplate,i.style),{...h.attrs,style:{...h.style}}},[l]);if(i.style){const h={};bv(h,i.style,i),c.style={...h,...c.style}}return c}const a2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function df(i){return typeof i!="string"||i.includes("-")?!1:!!(a2.indexOf(i)>-1||/[A-Z]/u.test(i))}function l2(i,l,r,{latestValues:s},c,h=!1,f){const m=(f??df(i)?i2:n2)(l,s,c,i),g=WT(l,typeof i=="string",h),y=i!==O.Fragment?{...g,...m,ref:r}:{},{children:S}=l,T=O.useMemo(()=>le(S)?S.get():S,[S]);return O.createElement(i,{...y,children:T})}function r2({scrapeMotionValuesFromProps:i,createRenderState:l},r,s,c){return{latestValues:o2(r,s,c,i),renderState:l()}}function o2(i,l,r,s){const c={},h=s(i,{});for(const T in h)c[T]=io(h[T]);let{initial:f,animate:p}=i;const m=go(i),g=Ky(i);l&&g&&!m&&i.inherit!==!1&&(f===void 0&&(f=l.initial),p===void 0&&(p=l.animate));let y=r?r.initial===!1:!1;y=y||f===!1;const S=y?p:f;if(S&&typeof S!="boolean"&&!mo(S)){const T=Array.isArray(S)?S:[S];for(let D=0;D<T.length;D++){const N=tf(i,T[D]);if(N){const{transitionEnd:U,transition:X,...q}=N;for(const Z in q){let B=q[Z];if(Array.isArray(B)){const J=y?B.length-1:0;B=B[J]}B!==null&&(c[Z]=B)}for(const Z in U)c[Z]=U[Z]}}}return c}const Av=i=>(l,r)=>{const s=O.useContext(vo),c=O.useContext(po),h=()=>r2(i,l,s,c);return r?h():_c(h)},s2=Av({scrapeMotionValuesFromProps:uf,createRenderState:ff}),u2=Av({scrapeMotionValuesFromProps:av,createRenderState:Tv}),c2=Symbol.for("motionComponentSymbol");function f2(i,l,r){const s=O.useRef(r);O.useInsertionEffect(()=>{s.current=r});const c=O.useRef(null);return O.useCallback(h=>{h&&i.onMount?.(h),l&&(h?l.mount(h):l.unmount());const f=s.current;if(typeof f=="function")if(h){const p=f(h);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):f(h);else f&&(f.current=h)},[l])}const jv=O.createContext({});function hl(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function d2(i,l,r,s,c,h){const{visualElement:f}=O.useContext(vo),p=O.useContext(vv),m=O.useContext(po),g=O.useContext(cf).reducedMotion,y=O.useRef(null);s=s||p.renderer,!y.current&&s&&(y.current=s(i,{visualState:l,parent:f,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g,isSVG:h}));const S=y.current,T=O.useContext(jv);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&h2(y.current,r,c,T);const D=O.useRef(!1);O.useInsertionEffect(()=>{S&&D.current&&S.update(r,m)});const N=r[Ny],U=O.useRef(!!N&&!window.MotionHandoffIsComplete?.(N)&&window.MotionHasOptimisedAnimation?.(N));return Jg(()=>{S&&(D.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),U.current&&S.animationState&&S.animationState.animateChanges())}),O.useEffect(()=>{S&&(!U.current&&S.animationState&&S.animationState.animateChanges(),U.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(N)}),U.current=!1),S.enteringChildren=void 0)}),S}function h2(i,l,r,s){const{layoutId:c,layout:h,drag:f,dragConstraints:p,layoutScroll:m,layoutRoot:g,layoutCrossfade:y}=l;i.projection=new r(i.latestValues,l["data-framer-portal-id"]?void 0:Ev(i.parent)),i.projection.setOptions({layoutId:c,layout:h,alwaysMeasureLayout:!!f||p&&hl(p),visualElement:i,animationType:typeof h=="string"?h:"both",initialPromotionConfig:s,crossfade:y,layoutScroll:m,layoutRoot:g})}function Ev(i){if(i)return i.options.allowProjection!==!1?i.projection:Ev(i.parent)}function ec(i,{forwardMotionProps:l=!1,type:r}={},s,c){s&&JT(s);const h=r?r==="svg":df(i),f=h?u2:s2;function p(g,y){let S;const T={...O.useContext(cf),...g,layoutId:p2(g)},{isStatic:D}=T,N=IT(g),U=f(g,D);if(!D&&kg){m2();const X=g2(T);S=X.MeasureLayout,N.visualElement=d2(i,U,T,c,X.ProjectionNode,h)}return H.jsxs(vo.Provider,{value:N,children:[S&&N.visualElement?H.jsx(S,{visualElement:N.visualElement,...T}):null,l2(i,g,f2(U,N.visualElement,y),U,D,l,h)]})}p.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const m=O.forwardRef(p);return m[c2]=i,m}function p2({layoutId:i}){const l=O.useContext(Vc).id;return l&&i!==void 0?l+"-"+i:i}function m2(i,l){O.useContext(vv).strict}function g2(i){const l=Sv(),{drag:r,layout:s}=l;if(!r&&!s)return{};const c={...r,...s};return{MeasureLayout:r?.isEnabled(i)||s?.isEnabled(i)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function y2(i,l){if(typeof Proxy>"u")return ec;const r=new Map,s=(h,f)=>ec(h,f,i,l),c=(h,f)=>s(h,f);return new Proxy(c,{get:(h,f)=>f==="create"?s:(r.has(f)||r.set(f,ec(f,void 0,i,l)),r.get(f))})}const v2=(i,l)=>l.isSVG??df(i)?new Pb(l):new Qb(l,{allowProjection:i!==O.Fragment});class S2 extends Pn{constructor(l){super(l),l.animationState||(l.animationState=eT(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();mo(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:r}=this.node.prevProps||{};l!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let x2=0;class b2 extends Pn{constructor(){super(...arguments),this.id=x2++}update(){if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===s)return;const c=this.node.animationState.setActive("exit",!l);r&&!l&&c.then(()=>{r(this.id)})}mount(){const{register:l,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const T2={animation:{Feature:S2},exit:{Feature:b2}};function Cl(i){return{point:{x:i.pageX,y:i.pageY}}}const A2=i=>l=>lf(l)&&i(l,Cl(l));function vl(i,l,r,s){return jl(i,l,A2(r),s)}const Mv=({current:i})=>i?i.ownerDocument.defaultView:null,Cg=(i,l)=>Math.abs(i-l);function j2(i,l){const r=Cg(i.x,l.x),s=Cg(i.y,l.y);return Math.sqrt(r**2+s**2)}const zg=new Set(["auto","scroll"]);class Rv{constructor(l,r,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:h=!1,distanceThreshold:f=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=D=>{this.handleScroll(D.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=ic(this.lastMoveEventInfo,this.history),N=this.startEvent!==null,U=j2(D.offset,{x:0,y:0})>=this.distanceThreshold;if(!N&&!U)return;const{point:X}=D,{timestamp:q}=ie;this.history.push({...X,timestamp:q});const{onStart:Z,onMove:B}=this.handlers;N||(Z&&Z(this.lastMoveEvent,D),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,D)},this.handlePointerMove=(D,N)=>{this.lastMoveEvent=D,this.lastMoveEventInfo=nc(N,this.transformPagePoint),Vt.update(this.updatePoint,!0)},this.handlePointerUp=(D,N)=>{this.end();const{onEnd:U,onSessionEnd:X,resumeAnimation:q}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&q&&q(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Z=ic(D.type==="pointercancel"?this.lastMoveEventInfo:nc(N,this.transformPagePoint),this.history);this.startEvent&&U&&U(D,Z),X&&X(D,Z)},!lf(l))return;this.dragSnapToOrigin=h,this.handlers=r,this.transformPagePoint=s,this.distanceThreshold=f,this.contextWindow=c||window;const m=Cl(l),g=nc(m,this.transformPagePoint),{point:y}=g,{timestamp:S}=ie;this.history=[{...y,timestamp:S}];const{onSessionStart:T}=r;T&&T(l,ic(g,this.history)),this.removeListeners=Ml(vl(this.contextWindow,"pointermove",this.handlePointerMove),vl(this.contextWindow,"pointerup",this.handlePointerUp),vl(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(l){let r=l.parentElement;for(;r;){const s=getComputedStyle(r);(zg.has(s.overflowX)||zg.has(s.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(l){const r=this.scrollPositions.get(l);if(!r)return;const s=l===window,c=s?{x:window.scrollX,y:window.scrollY}:{x:l.scrollLeft,y:l.scrollTop},h={x:c.x-r.x,y:c.y-r.y};h.x===0&&h.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(l,c),Vt.update(this.updatePoint,!0))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Jn(this.updatePoint)}}function nc(i,l){return l?{point:l(i.point)}:i}function Ng(i,l){return{x:i.x-l.x,y:i.y-l.y}}function ic({point:i},l){return{point:i,delta:Ng(i,Dv(l)),offset:Ng(i,E2(l)),velocity:M2(l,.1)}}function E2(i){return i[0]}function Dv(i){return i[i.length-1]}function M2(i,l){if(i.length<2)return{x:0,y:0};let r=i.length-1,s=null;const c=Dv(i);for(;r>=0&&(s=i[r],!(c.timestamp-s.timestamp>vn(l)));)r--;if(!s)return{x:0,y:0};const h=qe(c.timestamp-s.timestamp);if(h===0)return{x:0,y:0};const f={x:(c.x-s.x)/h,y:(c.y-s.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function R2(i,{min:l,max:r},s){return l!==void 0&&i<l?i=s?Lt(l,i,s.min):Math.max(i,l):r!==void 0&&i>r&&(i=s?Lt(r,i,s.max):Math.min(i,r)),i}function Og(i,l,r){return{min:l!==void 0?i.min+l:void 0,max:r!==void 0?i.max+r-(i.max-i.min):void 0}}function D2(i,{top:l,left:r,bottom:s,right:c}){return{x:Og(i.x,r,c),y:Og(i.y,l,s)}}function wg(i,l){let r=l.min-i.min,s=l.max-i.max;return l.max-l.min<i.max-i.min&&([r,s]=[s,r]),{min:r,max:s}}function C2(i,l){return{x:wg(i.x,l.x),y:wg(i.y,l.y)}}function z2(i,l){let r=.5;const s=ue(i),c=ue(l);return c>s?r=xl(l.min,l.max-s,i.min):s>c&&(r=xl(i.min,i.max-c,l.min)),$e(0,1,r)}function N2(i,l){const r={};return l.min!==void 0&&(r.min=l.min-i.min),l.max!==void 0&&(r.max=l.max-i.min),r}const Nc=.35;function O2(i=Nc){return i===!1?i=0:i===!0&&(i=Nc),{x:Vg(i,"left","right"),y:Vg(i,"top","bottom")}}function Vg(i,l,r){return{min:_g(i,l),max:_g(i,r)}}function _g(i,l){return typeof i=="number"?i:i[l]||0}const w2=new WeakMap;class V2{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ft(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=l}start(l,{snapToCursor:r=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const h=S=>{r?(this.stopAnimation(),this.snapToCursor(Cl(S).point)):this.pauseAnimation()},f=(S,T)=>{this.stopAnimation();const{drag:D,dragPropagation:N,onDragStart:U}=this.getProps();if(D&&!N&&(this.openDragLock&&this.openDragLock(),this.openDragLock=bb(D),!this.openDragLock))return;this.latestPointerEvent=S,this.latestPanInfo=T,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),He(q=>{let Z=this.getAxisMotionValue(q).get()||0;if(We.test(Z)){const{projection:B}=this.visualElement;if(B&&B.layout){const J=B.layout.layoutBox[q];J&&(Z=ue(J)*(parseFloat(Z)/100))}}this.originPoint[q]=Z}),U&&Vt.postRender(()=>U(S,T)),jc(this.visualElement,"transform");const{animationState:X}=this.visualElement;X&&X.setActive("whileDrag",!0)},p=(S,T)=>{this.latestPointerEvent=S,this.latestPanInfo=T;const{dragPropagation:D,dragDirectionLock:N,onDirectionLock:U,onDrag:X}=this.getProps();if(!D&&!this.openDragLock)return;const{offset:q}=T;if(N&&this.currentDirection===null){this.currentDirection=_2(q),this.currentDirection!==null&&U&&U(this.currentDirection);return}this.updateAxis("x",T.point,q),this.updateAxis("y",T.point,q),this.visualElement.render(),X&&X(S,T)},m=(S,T)=>{this.latestPointerEvent=S,this.latestPanInfo=T,this.stop(S,T),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>He(S=>this.getAnimationState(S)==="paused"&&this.getAxisMotionValue(S).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Rv(l,{onSessionStart:h,onStart:f,onMove:p,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:Mv(this.visualElement),element:this.visualElement.current})}stop(l,r){const s=l||this.latestPointerEvent,c=r||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!c||!s)return;const{velocity:f}=c;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Vt.postRender(()=>p(s,c))}cancel(){this.isDragging=!1;const{projection:l,animationState:r}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(l,r,s){const{drag:c}=this.getProps();if(!s||!$r(l,c,this.currentDirection))return;const h=this.getAxisMotionValue(l);let f=this.originPoint[l]+s[l];this.constraints&&this.constraints[l]&&(f=R2(f,this.constraints[l],this.elastic[l])),h.set(f)}resolveConstraints(){const{dragConstraints:l,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;l&&hl(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&s?this.constraints=D2(s.layoutBox,l):this.constraints=!1,this.elastic=O2(r),c!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&He(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=N2(s.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:r}=this.getProps();if(!l||!hl(l))return!1;const s=l.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const h=Bb(s,c.root,this.visualElement.getTransformPagePoint());let f=C2(c.layout.layoutBox,h);if(r){const p=r(_b(f));this.hasMutatedConstraints=!!p,p&&(f=Fy(p))}return f}startAnimation(l){const{drag:r,dragMomentum:s,dragElastic:c,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},g=He(y=>{if(!$r(y,r,this.currentDirection))return;let S=m&&m[y]||{};f&&(S={min:0,max:0});const T=c?200:1e6,D=c?40:1e7,N={type:"inertia",velocity:s?l[y]:0,bounceStiffness:T,bounceDamping:D,timeConstant:750,restDelta:1,restSpeed:10,...h,...S};return this.startAxisValueAnimation(y,N)});return Promise.all(g).then(p)}startAxisValueAnimation(l,r){const s=this.getAxisMotionValue(l);return jc(this.visualElement,l),s.start(Ic(l,s,0,r,this.visualElement,!1))}stopAnimation(){He(l=>this.getAxisMotionValue(l).stop())}pauseAnimation(){He(l=>this.getAxisMotionValue(l).animation?.pause())}getAnimationState(l){return this.getAxisMotionValue(l).animation?.state}getAxisMotionValue(l){const r=`_drag${l.toUpperCase()}`,s=this.visualElement.getProps(),c=s[r];return c||this.visualElement.getValue(l,(s.initial?s.initial[l]:void 0)||0)}snapToCursor(l){He(r=>{const{drag:s}=this.getProps();if(!$r(r,s,this.currentDirection))return;const{projection:c}=this.visualElement,h=this.getAxisMotionValue(r);if(c&&c.layout){const{min:f,max:p}=c.layout.layoutBox[r],m=h.get()||0;h.set(l[r]-Lt(f,p,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!hl(r)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};He(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const m=p.get();c[f]=z2({min:m,max:m},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),He(f=>{if(!$r(f,l,null))return;const p=this.getAxisMotionValue(f),{min:m,max:g}=this.constraints[f];p.set(Lt(m,g,c[f]))})}addListeners(){if(!this.visualElement.current)return;w2.set(this.visualElement,this);const l=this.visualElement.current,r=vl(l,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&!Xy(m.target)&&this.start(m)}),s=()=>{const{dragConstraints:m}=this.getProps();hl(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,h=c.addEventListener("measure",s);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Vt.read(s);const f=jl(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(He(y=>{const S=this.getAxisMotionValue(y);S&&(this.originPoint[y]+=m[y].translate,S.set(S.get()+m[y].translate))}),this.visualElement.render())}));return()=>{f(),r(),h(),p&&p()}}getProps(){const l=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:h=!1,dragElastic:f=Nc,dragMomentum:p=!0}=l;return{...l,drag:r,dragDirectionLock:s,dragPropagation:c,dragConstraints:h,dragElastic:f,dragMomentum:p}}}function $r(i,l,r){return(l===!0||l===i)&&(r===null||r===i)}function _2(i,l=10){let r=null;return Math.abs(i.y)>l?r="y":Math.abs(i.x)>l&&(r="x"),r}class L2 extends Pn{constructor(l){super(l),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new V2(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}update(){const{dragControls:l}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};l!==r&&(this.removeGroupControls(),l&&(this.removeGroupControls=l.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const Lg=i=>(l,r)=>{i&&Vt.postRender(()=>i(l,r))};class U2 extends Pn{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(l){this.session=new Rv(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Mv(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:r,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:Lg(l),onStart:Lg(r),onMove:s,onEnd:(h,f)=>{delete this.session,c&&Vt.postRender(()=>c(h,f))}}}mount(){this.removePointerDownListener=vl(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let ac=!1;class B2 extends O.Component{componentDidMount(){const{visualElement:l,layoutGroup:r,switchLayoutGroup:s,layoutId:c}=this.props,{projection:h}=l;h&&(r.group&&r.group.add(h),s&&s.register&&c&&s.register(h),ac&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),ao.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:r,visualElement:s,drag:c,isPresent:h}=this.props,{projection:f}=s;return f&&(f.isPresent=h,ac=!0,c||l.layoutDependency!==r||r===void 0||l.isPresent!==h?f.willUpdate():this.safeToRemove(),l.isPresent!==h&&(h?f.promote():f.relegate()||Vt.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:l}=this.props.visualElement;l&&(l.root.didUpdate(),af.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:c}=l;ac=!0,c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function Cv(i){const[l,r]=yv(),s=O.useContext(Vc);return H.jsx(B2,{...i,layoutGroup:s,switchLayoutGroup:O.useContext(jv),isPresent:l,safeToRemove:r})}const H2={pan:{Feature:U2},drag:{Feature:L2,ProjectionNode:gv,MeasureLayout:Cv}};function Ug(i,l,r){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,h=s[c];h&&Vt.postRender(()=>h(l,Cl(l)))}class q2 extends Pn{mount(){const{current:l}=this.node;l&&(this.unmount=Tb(l,(r,s)=>(Ug(this.node,s,"Start"),c=>Ug(this.node,c,"End"))))}unmount(){}}class Y2 extends Pn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ml(jl(this.node.current,"focus",()=>this.onFocus()),jl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Bg(i,l,r){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),h=s[c];h&&Vt.postRender(()=>h(l,Cl(l)))}class G2 extends Pn{mount(){const{current:l}=this.node;l&&(this.unmount=Eb(l,(r,s)=>(Bg(this.node,s,"Start"),(c,{success:h})=>Bg(this.node,c,h?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Oc=new WeakMap,lc=new WeakMap,X2=i=>{const l=Oc.get(i.target);l&&l(i)},Q2=i=>{i.forEach(X2)};function Z2({root:i,...l}){const r=i||document;lc.has(r)||lc.set(r,{});const s=lc.get(r),c=JSON.stringify(l);return s[c]||(s[c]=new IntersectionObserver(Q2,{root:i,...l})),s[c]}function K2(i,l,r){const s=Z2(l);return Oc.set(i,r),s.observe(i),()=>{Oc.delete(i),s.unobserve(i)}}const k2={some:0,all:1};class J2 extends Pn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:l={}}=this.node.getProps(),{root:r,margin:s,amount:c="some",once:h}=l,f={root:r?r.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:k2[c]},p=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,h&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:S}=this.node.getProps(),T=g?y:S;T&&T(m)};return K2(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:r}=this.node;["amount","margin","root"].some(F2(l,r))&&this.startObserver()}unmount(){}}function F2({viewport:i={}},{viewport:l={}}={}){return r=>i[r]!==l[r]}const P2={inView:{Feature:J2},tap:{Feature:G2},focus:{Feature:Y2},hover:{Feature:q2}},W2={layout:{ProjectionNode:gv,MeasureLayout:Cv}},$2={...T2,...P2,...H2,...W2},ce=y2($2,v2);class I2{trace;initialState;initialIds;constructor(l,r){this.trace=l,this.initialState=[...r],this.initialIds=r.map((s,c)=>`item-${c}`)}get stepCount(){return this.trace.length}getStateAt(l){const r={array:[...this.initialState],itemIds:[...this.initialIds],highlightedIndices:[],sortedIndices:[],variables:{},activeLine:-1,graph:{nodes:[],edges:[]}},s=Math.min(l,this.trace.length);for(let c=0;c<s;c++)this.applyStep(r,this.trace[c]);return r}applyStep(l,r){switch(r.type){case"compare":l.highlightedIndices=r.indices,l.activeLine=-1;break;case"swap":{const[s,c]=r.indices;[l.array[s],l.array[c]]=[l.array[c],l.array[s]],l.itemIds&&([l.itemIds[s],l.itemIds[c]]=[l.itemIds[c],l.itemIds[s]]),l.highlightedIndices=[s,c];break}case"set":l.array[r.index]=r.value,l.highlightedIndices=[r.index];break;case"mark-sorted":l.sortedIndices.push(r.index),l.highlightedIndices=[];break;case"variable-update":l.variables[r.name]=r.value;break;case"highlight-line":l.activeLine=r.lineNumber;break;case"highlight-node":l.highlightedIndices=[r.id];break;case"add-node":{const s=l.graph.nodes.find(c=>c.id===r.id);s?(s.value=r.value,r.x!==void 0&&(s.x=r.x),r.y!==void 0&&(s.y=r.y),r.color!==void 0&&(s.color=r.color)):l.graph.nodes.push({id:r.id,value:r.value,x:r.x??0,y:r.y??0,color:r.color})}break;case"add-edge":{const s=l.graph.nodes.find(h=>h.id===r.source),c=l.graph.nodes.find(h=>h.id===r.target);s&&c&&(l.graph.edges.find(h=>h.id===r.id)||l.graph.edges.push({id:r.id,source:r.source,target:r.target}))}break;case"remove-edge":l.graph.edges=l.graph.edges.filter(s=>s.id!==r.id);break}}}const tA=({state:i})=>{const{array:l,highlightedIndices:r,sortedIndices:s,itemIds:c}=i,h=m=>typeof m=="number"?m:typeof m=="string"&&m.length>0?m.charCodeAt(0):0,f=l.map(h),p=Math.max(...f,1);return H.jsx("div",{className:"array-container",children:H.jsx(yo,{children:l.map((m,g)=>{const y=r.includes(g),S=s.includes(g),T=c?c[g]:g;let D="array-bar";S?D+=" sorted":y&&(D+=" highlighted");const N=`${h(m)/p*100}%`;return H.jsx(ce.div,{layout:!0,style:{height:N},className:D,title:`Index: ${g}, Value: ${m}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,backgroundColor:y?"#facc15":S?"#10b981":"#646cff",boxShadow:y?"0 0 10px #facc15":"none"},transition:{type:"spring",stiffness:500,damping:30}},T)})})})},eA=({state:i})=>{const{graph:l,highlightedIndices:r,sortedIndices:s}=i,c=l.nodes.some(y=>y.x!==void 0&&y.x!==0),h=y=>typeof y=="number"&&!isNaN(y)?y:0,f=new Map;let p=0;if(!c){const y=new Map,S=new Set;l.edges.forEach(N=>{y.has(N.source)||y.set(N.source,[]),y.get(N.source).push(N.target),S.add(N.target)}),y.forEach((N,U)=>{l.nodes.find(q=>q.id===U)&&N.sort((q,Z)=>{const B=l.nodes.find(G=>G.id===q),J=l.nodes.find(G=>G.id===Z);return!B||!J?0:B.value<J.value?-1:1})});const T=l.nodes.filter(N=>!S.has(N.id)),D=(N,U)=>{const X=y.get(N)||[],q=l.nodes.find(J=>J.id===N);if(!q)return;const Z=X.filter(J=>{const G=l.nodes.find(F=>F.id===J);return G&&G.value<q.value}),B=X.filter(J=>{const G=l.nodes.find(F=>F.id===J);return G&&G.value>=q.value});Z.forEach(J=>D(J,U+1)),f.set(N,{x:p++*50,y:50+U*60}),B.forEach(J=>D(J,U+1))};T.forEach(N=>D(N.id,0))}const m=p*50,g=f.size>0?(800-m)/2:0;return H.jsxs("div",{style:{width:"100%",height:"100%",background:"transparent",borderRadius:"8px",overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[H.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 800 600",style:{overflow:"visible"},children:[H.jsx("defs",{children:H.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[H.jsx("feGaussianBlur",{stdDeviation:"3.5",result:"coloredBlur"}),H.jsxs("feMerge",{children:[H.jsx("feMergeNode",{in:"coloredBlur"}),H.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),H.jsxs(yo,{children:[l.edges.map(y=>{const S=l.nodes.find(U=>U.id===y.source),T=l.nodes.find(U=>U.id===y.target),D=f.get(y.source)||{x:S?.x||0,y:S?.y||0},N=f.get(y.target)||{x:T?.x||0,y:T?.y||0};return!S||!T?(console.warn(`[GraphRenderer] Skipping invalid edge ${y.source} -> ${y.target}`),null):H.jsx(ce.line,{initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1,x1:h(D.x+g),y1:h(D.y),x2:h(N.x+g),y2:h(N.y)},exit:{opacity:0},stroke:"#666",strokeWidth:"2"},y.id)}),l.nodes.map(y=>{const S=r.some(N=>String(N)===String(y.id)),T=s.includes(Number(y.id)),D=f.get(y.id)||{x:y.x||0,y:y.y||0};return H.jsxs(ce.g,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,x:h(D.x+g),y:h(D.y)},transition:{type:"spring",stiffness:300,damping:25},children:[H.jsx(ce.circle,{r:"20",animate:{stroke:S?"#f59e0b":T?"#10b981":y.color||"#6366f1",strokeWidth:S?3:2,fill:S?"#333":"#1e1e1e"},style:{filter:S?"url(#glow)":"none"}}),H.jsx("text",{textAnchor:"middle",dy:".3em",fill:"#fff",fontWeight:"bold",fontSize:"12",style:{pointerEvents:"none",userSelect:"none"},children:String(y.value)})]},y.id)})]})]}),l.nodes.length===0&&H.jsx("div",{style:{position:"absolute",color:"#555"},children:"Press the play button to start the algorithm"})]})},nA=({isPlaying:i,onPlayPause:l,onReset:r,stepIndex:s,maxSteps:c,onSeek:h,speed:f,onSpeedChange:p})=>H.jsxs("div",{className:"controls-container",children:[H.jsxs("div",{className:"control-group",children:[H.jsx("button",{className:"icon-btn",onClick:r,title:"Reset",children:"⏹"}),H.jsx("button",{className:"icon-btn",onClick:l,title:i?"Pause":"Play",style:{background:i?"#444":"#10b981",borderColor:i?"#444":"#10b981"},children:i?"⏸":"▶"})]}),H.jsxs("div",{className:"control-group",style:{flex:1},children:[H.jsx("input",{type:"range",min:"0",max:c,value:s,onChange:m=>h(Number(m.target.value)),disabled:i,className:"scrubber",style:{width:"100%"}}),H.jsxs("span",{style:{minWidth:"80px",textAlign:"right",fontFamily:"monospace",fontSize:"0.9em",color:"#ccc"},children:[s," / ",c]})]}),H.jsxs("div",{className:"slider-container",style:{width:"auto"},children:[H.jsx("span",{children:"🐢"}),H.jsx("input",{type:"range",min:"1",max:"100",value:f,onChange:m=>p(Number(m.target.value)),style:{width:"80px"}}),H.jsx("span",{children:"🐇"})]})]});function Hg(i,l){(l==null||l>i.length)&&(l=i.length);for(var r=0,s=Array(l);r<l;r++)s[r]=i[r];return s}function iA(i){if(Array.isArray(i))return i}function aA(i,l,r){return(l=fA(l))in i?Object.defineProperty(i,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[l]=r,i}function lA(i,l){var r=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(r!=null){var s,c,h,f,p=[],m=!0,g=!1;try{if(h=(r=r.call(i)).next,l!==0)for(;!(m=(s=h.call(r)).done)&&(p.push(s.value),p.length!==l);m=!0);}catch(y){g=!0,c=y}finally{try{if(!m&&r.return!=null&&(f=r.return(),Object(f)!==f))return}finally{if(g)throw c}}return p}}function rA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qg(i,l){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);l&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),r.push.apply(r,s)}return r}function Yg(i){for(var l=1;l<arguments.length;l++){var r=arguments[l]!=null?arguments[l]:{};l%2?qg(Object(r),!0).forEach(function(s){aA(i,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):qg(Object(r)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(r,s))})}return i}function oA(i,l){if(i==null)return{};var r,s,c=sA(i,l);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(i);for(s=0;s<h.length;s++)r=h[s],l.indexOf(r)===-1&&{}.propertyIsEnumerable.call(i,r)&&(c[r]=i[r])}return c}function sA(i,l){if(i==null)return{};var r={};for(var s in i)if({}.hasOwnProperty.call(i,s)){if(l.indexOf(s)!==-1)continue;r[s]=i[s]}return r}function uA(i,l){return iA(i)||lA(i,l)||dA(i,l)||rA()}function cA(i,l){if(typeof i!="object"||!i)return i;var r=i[Symbol.toPrimitive];if(r!==void 0){var s=r.call(i,l);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(i)}function fA(i){var l=cA(i,"string");return typeof l=="symbol"?l:l+""}function dA(i,l){if(i){if(typeof i=="string")return Hg(i,l);var r={}.toString.call(i).slice(8,-1);return r==="Object"&&i.constructor&&(r=i.constructor.name),r==="Map"||r==="Set"?Array.from(i):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Hg(i,l):void 0}}function hA(i,l,r){return l in i?Object.defineProperty(i,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[l]=r,i}function Gg(i,l){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);l&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable})),r.push.apply(r,s)}return r}function Xg(i){for(var l=1;l<arguments.length;l++){var r=arguments[l]!=null?arguments[l]:{};l%2?Gg(Object(r),!0).forEach(function(s){hA(i,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):Gg(Object(r)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(r,s))})}return i}function pA(){for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return function(s){return l.reduceRight(function(c,h){return h(c)},s)}}function pl(i){return function l(){for(var r=this,s=arguments.length,c=new Array(s),h=0;h<s;h++)c[h]=arguments[h];return c.length>=i.length?i.apply(this,c):function(){for(var f=arguments.length,p=new Array(f),m=0;m<f;m++)p[m]=arguments[m];return l.apply(r,[].concat(c,p))}}}function ho(i){return{}.toString.call(i).includes("Object")}function mA(i){return!Object.keys(i).length}function El(i){return typeof i=="function"}function gA(i,l){return Object.prototype.hasOwnProperty.call(i,l)}function yA(i,l){return ho(l)||kn("changeType"),Object.keys(l).some(function(r){return!gA(i,r)})&&kn("changeField"),l}function vA(i){El(i)||kn("selectorType")}function SA(i){El(i)||ho(i)||kn("handlerType"),ho(i)&&Object.values(i).some(function(l){return!El(l)})&&kn("handlersType")}function xA(i){i||kn("initialIsRequired"),ho(i)||kn("initialType"),mA(i)&&kn("initialContent")}function bA(i,l){throw new Error(i[l]||i.default)}var TA={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},kn=pl(bA)(TA),Ir={changes:yA,selector:vA,handler:SA,initial:xA};function AA(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ir.initial(i),Ir.handler(l);var r={current:i},s=pl(MA)(r,l),c=pl(EA)(r),h=pl(Ir.changes)(i),f=pl(jA)(r);function p(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(y){return y};return Ir.selector(g),g(r.current)}function m(g){pA(s,c,h,f)(g)}return[p,m]}function jA(i,l){return El(l)?l(i.current):l}function EA(i,l){return i.current=Xg(Xg({},i.current),l),l}function MA(i,l,r){return El(l)?l(i.current):Object.keys(r).forEach(function(s){var c;return(c=l[s])===null||c===void 0?void 0:c.call(l,i.current[s])}),r}var RA={create:AA},DA={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function CA(i){return function l(){for(var r=this,s=arguments.length,c=new Array(s),h=0;h<s;h++)c[h]=arguments[h];return c.length>=i.length?i.apply(this,c):function(){for(var f=arguments.length,p=new Array(f),m=0;m<f;m++)p[m]=arguments[m];return l.apply(r,[].concat(c,p))}}}function zA(i){return{}.toString.call(i).includes("Object")}function NA(i){return i||Qg("configIsRequired"),zA(i)||Qg("configType"),i.urls?(OA(),{paths:{vs:i.urls.monacoBase}}):i}function OA(){console.warn(zv.deprecation)}function wA(i,l){throw new Error(i[l]||i.default)}var zv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Qg=CA(wA)(zv),VA={config:NA},_A=function(){for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return function(c){return r.reduceRight(function(h,f){return f(h)},c)}};function Nv(i,l){return Object.keys(l).forEach(function(r){l[r]instanceof Object&&i[r]&&Object.assign(l[r],Nv(i[r],l[r]))}),Yg(Yg({},i),l)}var LA={type:"cancelation",msg:"operation is manually canceled"};function rc(i){var l=!1,r=new Promise(function(s,c){i.then(function(h){return l?c(LA):s(h)}),i.catch(c)});return r.cancel=function(){return l=!0},r}var UA=["monaco"],BA=RA.create({config:DA,isInitialized:!1,resolve:null,reject:null,monaco:null}),Ov=uA(BA,2),zl=Ov[0],So=Ov[1];function HA(i){var l=VA.config(i),r=l.monaco,s=oA(l,UA);So(function(c){return{config:Nv(c.config,s),monaco:r}})}function qA(){var i=zl(function(l){var r=l.monaco,s=l.isInitialized,c=l.resolve;return{monaco:r,isInitialized:s,resolve:c}});if(!i.isInitialized){if(So({isInitialized:!0}),i.monaco)return i.resolve(i.monaco),rc(oc);if(window.monaco&&window.monaco.editor)return wv(window.monaco),i.resolve(window.monaco),rc(oc);_A(YA,XA)(QA)}return rc(oc)}function YA(i){return document.body.appendChild(i)}function GA(i){var l=document.createElement("script");return i&&(l.src=i),l}function XA(i){var l=zl(function(s){var c=s.config,h=s.reject;return{config:c,reject:h}}),r=GA("".concat(l.config.paths.vs,"/loader.js"));return r.onload=function(){return i()},r.onerror=l.reject,r}function QA(){var i=zl(function(r){var s=r.config,c=r.resolve,h=r.reject;return{config:s,resolve:c,reject:h}}),l=window.require;l.config(i.config),l(["vs/editor/editor.main"],function(r){var s=r.m||r;wv(s),i.resolve(s)},function(r){i.reject(r)})}function wv(i){zl().monaco||So({monaco:i})}function ZA(){return zl(function(i){var l=i.monaco;return l})}var oc=new Promise(function(i,l){return So({resolve:i,reject:l})}),Vv={config:HA,init:qA,__getMonacoInstance:ZA},KA={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},sc=KA,kA={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},JA=kA;function FA({children:i}){return ca.createElement("div",{style:JA.container},i)}var PA=FA,WA=PA;function $A({width:i,height:l,isEditorReady:r,loading:s,_ref:c,className:h,wrapperProps:f}){return ca.createElement("section",{style:{...sc.wrapper,width:i,height:l},...f},!r&&ca.createElement(WA,null,s),ca.createElement("div",{ref:c,style:{...sc.fullWidth,...!r&&sc.hide},className:h}))}var IA=$A,_v=O.memo(IA);function tj(i){O.useEffect(i,[])}var Lv=tj;function ej(i,l,r=!0){let s=O.useRef(!0);O.useEffect(s.current||!r?()=>{s.current=!1}:i,l)}var De=ej;function Sl(){}function ua(i,l,r,s){return nj(i,s)||ij(i,l,r,s)}function nj(i,l){return i.editor.getModel(Uv(i,l))}function ij(i,l,r,s){return i.editor.createModel(l,r,s?Uv(i,s):void 0)}function Uv(i,l){return i.Uri.parse(l)}function aj({original:i,modified:l,language:r,originalLanguage:s,modifiedLanguage:c,originalModelPath:h,modifiedModelPath:f,keepCurrentOriginalModel:p=!1,keepCurrentModifiedModel:m=!1,theme:g="light",loading:y="Loading...",options:S={},height:T="100%",width:D="100%",className:N,wrapperProps:U={},beforeMount:X=Sl,onMount:q=Sl}){let[Z,B]=O.useState(!1),[J,G]=O.useState(!0),F=O.useRef(null),Q=O.useRef(null),K=O.useRef(null),lt=O.useRef(q),nt=O.useRef(X),xt=O.useRef(!1);Lv(()=>{let rt=Vv.init();return rt.then(C=>(Q.current=C)&&G(!1)).catch(C=>C?.type!=="cancelation"&&console.error("Monaco initialization: error:",C)),()=>F.current?jt():rt.cancel()}),De(()=>{if(F.current&&Q.current){let rt=F.current.getOriginalEditor(),C=ua(Q.current,i||"",s||r||"text",h||"");C!==rt.getModel()&&rt.setModel(C)}},[h],Z),De(()=>{if(F.current&&Q.current){let rt=F.current.getModifiedEditor(),C=ua(Q.current,l||"",c||r||"text",f||"");C!==rt.getModel()&&rt.setModel(C)}},[f],Z),De(()=>{let rt=F.current.getModifiedEditor();rt.getOption(Q.current.editor.EditorOption.readOnly)?rt.setValue(l||""):l!==rt.getValue()&&(rt.executeEdits("",[{range:rt.getModel().getFullModelRange(),text:l||"",forceMoveMarkers:!0}]),rt.pushUndoStop())},[l],Z),De(()=>{F.current?.getModel()?.original.setValue(i||"")},[i],Z),De(()=>{let{original:rt,modified:C}=F.current.getModel();Q.current.editor.setModelLanguage(rt,s||r||"text"),Q.current.editor.setModelLanguage(C,c||r||"text")},[r,s,c],Z),De(()=>{Q.current?.editor.setTheme(g)},[g],Z),De(()=>{F.current?.updateOptions(S)},[S],Z);let it=O.useCallback(()=>{if(!Q.current)return;nt.current(Q.current);let rt=ua(Q.current,i||"",s||r||"text",h||""),C=ua(Q.current,l||"",c||r||"text",f||"");F.current?.setModel({original:rt,modified:C})},[r,l,c,i,s,h,f]),ot=O.useCallback(()=>{!xt.current&&K.current&&(F.current=Q.current.editor.createDiffEditor(K.current,{automaticLayout:!0,...S}),it(),Q.current?.editor.setTheme(g),B(!0),xt.current=!0)},[S,g,it]);O.useEffect(()=>{Z&&lt.current(F.current,Q.current)},[Z]),O.useEffect(()=>{!J&&!Z&&ot()},[J,Z,ot]);function jt(){let rt=F.current?.getModel();p||rt?.original?.dispose(),m||rt?.modified?.dispose(),F.current?.dispose()}return ca.createElement(_v,{width:D,height:T,isEditorReady:Z,loading:y,_ref:K,className:N,wrapperProps:U})}var lj=aj;O.memo(lj);function rj(i){let l=O.useRef();return O.useEffect(()=>{l.current=i},[i]),l.current}var oj=rj,to=new Map;function sj({defaultValue:i,defaultLanguage:l,defaultPath:r,value:s,language:c,path:h,theme:f="light",line:p,loading:m="Loading...",options:g={},overrideServices:y={},saveViewState:S=!0,keepCurrentModel:T=!1,width:D="100%",height:N="100%",className:U,wrapperProps:X={},beforeMount:q=Sl,onMount:Z=Sl,onChange:B,onValidate:J=Sl}){let[G,F]=O.useState(!1),[Q,K]=O.useState(!0),lt=O.useRef(null),nt=O.useRef(null),xt=O.useRef(null),it=O.useRef(Z),ot=O.useRef(q),jt=O.useRef(),rt=O.useRef(s),C=oj(h),Y=O.useRef(!1),$=O.useRef(!1);Lv(()=>{let b=Vv.init();return b.then(V=>(lt.current=V)&&K(!1)).catch(V=>V?.type!=="cancelation"&&console.error("Monaco initialization: error:",V)),()=>nt.current?gt():b.cancel()}),De(()=>{let b=ua(lt.current,i||s||"",l||c||"",h||r||"");b!==nt.current?.getModel()&&(S&&to.set(C,nt.current?.saveViewState()),nt.current?.setModel(b),S&&nt.current?.restoreViewState(to.get(h)))},[h],G),De(()=>{nt.current?.updateOptions(g)},[g],G),De(()=>{!nt.current||s===void 0||(nt.current.getOption(lt.current.editor.EditorOption.readOnly)?nt.current.setValue(s):s!==nt.current.getValue()&&($.current=!0,nt.current.executeEdits("",[{range:nt.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),nt.current.pushUndoStop(),$.current=!1))},[s],G),De(()=>{let b=nt.current?.getModel();b&&c&&lt.current?.editor.setModelLanguage(b,c)},[c],G),De(()=>{p!==void 0&&nt.current?.revealLine(p)},[p],G),De(()=>{lt.current?.editor.setTheme(f)},[f],G);let dt=O.useCallback(()=>{if(!(!xt.current||!lt.current)&&!Y.current){ot.current(lt.current);let b=h||r,V=ua(lt.current,s||i||"",l||c||"",b||"");nt.current=lt.current?.editor.create(xt.current,{model:V,automaticLayout:!0,...g},y),S&&nt.current.restoreViewState(to.get(b)),lt.current.editor.setTheme(f),p!==void 0&&nt.current.revealLine(p),F(!0),Y.current=!0}},[i,l,r,s,c,h,g,y,S,f,p]);O.useEffect(()=>{G&&it.current(nt.current,lt.current)},[G]),O.useEffect(()=>{!Q&&!G&&dt()},[Q,G,dt]),rt.current=s,O.useEffect(()=>{G&&B&&(jt.current?.dispose(),jt.current=nt.current?.onDidChangeModelContent(b=>{$.current||B(nt.current.getValue(),b)}))},[G,B]),O.useEffect(()=>{if(G){let b=lt.current.editor.onDidChangeMarkers(V=>{let k=nt.current.getModel()?.uri;if(k&&V.find(W=>W.path===k.path)){let W=lt.current.editor.getModelMarkers({resource:k});J?.(W)}});return()=>{b?.dispose()}}return()=>{}},[G,J]);function gt(){jt.current?.dispose(),T?S&&to.set(h,nt.current.saveViewState()):nt.current.getModel()?.dispose(),nt.current.dispose()}return ca.createElement(_v,{width:D,height:N,isEditorReady:G,loading:m,_ref:xt,className:U,wrapperProps:X})}var uj=sj,cj=O.memo(uj),fj=cj;const uc={javascript:"JavaScript",python:"Python",java:"Java",cpp:"C++"},dj=({language:i,onLanguageChange:l,disabled:r})=>{const[s,c]=O.useState(!1),h=O.useRef(null);O.useEffect(()=>{const p=m=>{h.current&&!h.current.contains(m.target)&&c(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]);const f=p=>{l(p),c(!1)};return H.jsxs("div",{ref:h,style:{position:"relative",zIndex:40},children:[H.jsxs(ce.button,{whileHover:{scale:r?1:1.02,backgroundColor:r?"#333":"#444"},whileTap:{scale:r?1:.98},onClick:()=>!r&&c(!s),style:{padding:"6px 12px",borderRadius:"6px",background:"#333",color:i?"#fff":"#888",border:"1px solid #555",cursor:r?"not-allowed":"pointer",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",fontWeight:500,minWidth:"150px",opacity:r?.6:1},children:[H.jsx("span",{children:"🌐"}),H.jsx("span",{style:{flex:1,textAlign:"left"},children:i?uc[i]:"Select language"}),H.jsx("span",{style:{fontSize:"0.8rem",opacity:.7},children:"▾"})]}),H.jsx(yo,{children:s&&!r&&H.jsx(ce.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},style:{position:"absolute",top:"120%",left:0,background:"#1a1a1a",border:"1px solid #444",borderRadius:"8px",boxShadow:"0 10px 30px rgba(0,0,0,0.5)",padding:"12px",minWidth:"150px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.keys(uc).map(p=>H.jsxs(ce.div,{onClick:()=>f(p),whileHover:{x:4,color:"#3b82f6"},style:{cursor:"pointer",fontSize:"0.9rem",color:i===p?"#3b82f6":"#ccc",padding:"6px 8px",transition:"color 0.2s",fontWeight:i===p?600:400,display:"flex",alignItems:"center",gap:"6px",borderRadius:"4px"},children:[i===p&&H.jsx("span",{style:{fontSize:"0.7rem"},children:"●"}),uc[p]]},p))})})]})},hj=({code:i,onCodeChange:l,onRun:r,activeLine:s,isPlaying:c,language:h="javascript",onLanguageChange:f})=>{const p=O.useRef(null),m=O.useRef(null),g=y=>{p.current=y,m.current=y.createDecorationsCollection()};return O.useEffect(()=>{if(!p.current||!m.current)return;const y=p.current,S=m.current;S.clear(),s!==void 0&&s>0&&(S.set([{range:{startLineNumber:s,startColumn:1,endLineNumber:s,endColumn:1},options:{isWholeLine:!0,className:"active-line-highlight",glyphMarginClassName:"active-line-glyph"}}]),y.revealLineInCenter(s))},[s]),H.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"100%",height:"100%",padding:"20px",boxSizing:"border-box"},children:[H.jsx("style",{children:`
                .active-line-highlight {
                    background-color: rgba(255, 193, 7, 0.15) !important;
                    border-left: 3px solid #ffc107 !important;
                }
                .active-line-glyph {
                    background-color: #ffc107 !important;
                    width: 5px !important;
                }
            `}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[H.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[H.jsx("span",{style:{fontWeight:600,color:"#ccc"},children:"Code Editor"}),c&&H.jsx("span",{style:{fontSize:"0.75rem",color:"#ffc107",fontWeight:500},children:"▶ Running"})]}),H.jsx("div",{children:f&&H.jsx(dj,{language:h,onLanguageChange:f,disabled:c})})]}),H.jsx("div",{style:{flex:1,border:"1px solid #444",overflow:"hidden"},children:H.jsx(fj,{height:"100%",defaultLanguage:"javascript",language:h||"javascript",theme:"vs-dark",value:i,onChange:y=>l(y||""),onMount:g,options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:14,automaticLayout:!0,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastColumn:5,scrollbar:{vertical:"hidden",horizontal:"hidden",handleMouseWheel:!0},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,readOnly:c||!1,cursorStyle:c?"line-thin":"line"}})}),H.jsx(ce.button,{whileHover:{scale:c?1:1.05},whileTap:{scale:c?1:.95},onClick:r,disabled:c,style:{alignSelf:"flex-end",padding:"8px 16px",backgroundColor:c?"#666":"#10b981",color:"white",border:"none",borderRadius:"4px",cursor:c?"not-allowed":"pointer",fontWeight:600,boxShadow:"0 2px 5px rgba(0,0,0,0.2)",opacity:c?.6:1},children:c?"Playing...":"Run Code"})]})};class pj{steps=[];stepCount=0;getTrace(){return[...this.steps]}createTimestamp(){return this.stepCount++}compare(l,r){this.steps.push({type:"compare",indices:[l,r],timestamp:this.createTimestamp()})}swap(l,r,s,c){this.steps.push({type:"swap",indices:[l,r],values:[s,c],timestamp:this.createTimestamp()})}set(l,r){this.steps.push({type:"set",index:l,value:r,timestamp:this.createTimestamp()})}markSorted(l){this.steps.push({type:"mark-sorted",index:l,timestamp:this.createTimestamp()})}setVar(l,r){this.steps.push({type:"variable-update",name:l,value:r,timestamp:this.createTimestamp()})}highlight(l){this.steps.push({type:"highlight-line",lineNumber:l,timestamp:this.createTimestamp()})}addNode(l,r,s,c,h){this.steps.push({type:"add-node",id:l,value:r,x:s,y:c,color:h,timestamp:this.createTimestamp()})}addEdge(l,r,s){this.steps.push({type:"add-edge",id:s,source:l,target:r,timestamp:this.createTimestamp()})}removeEdge(l){this.steps.push({type:"remove-edge",id:l,timestamp:this.createTimestamp()})}highlightNode(l){this.steps.push({type:"highlight-node",id:l,timestamp:this.createTimestamp()})}}class mj{language="javascript";async execute(l,r){const s=new pj,c=new Proxy([...r],{get(f,p,m){return Reflect.get(f,p,m)},set(f,p,m,g){const y=Number(p);return isNaN(y)||s.set(y,m),Reflect.set(f,p,m,g)}}),h={input:c,swap:(f,p)=>{s.swap(f,p,c[f],c[p]);const m=c[f];c[f]=c[p],c[p]=m},compare:(f,p)=>{s.compare(f,p);const m=c[f],g=c[p];return typeof m=="number"&&typeof g=="number"?m-g:m<g?-1:m>g?1:0},addNode:(f,p,m,g,y)=>s.addNode(f,p,m,g,y),addEdge:(f,p,m)=>s.addEdge(f,p,m||`${f}-${p}`),removeEdge:f=>s.removeEdge(f),highlightNode:f=>s.highlightNode(f),log:console.log};try{const f=Object.keys(h),p=Object.values(h),m=Object.getPrototypeOf(async function(){}).constructor;await new m(...f,l)(...p)}catch(f){console.error("User code execution failed",f)}return s.getTrace()}}const gj=({presets:i,onSelect:l})=>{const[r,s]=O.useState(!1),[c,h]=O.useState(""),f=O.useRef(null);O.useEffect(()=>{const y=S=>{f.current&&!f.current.contains(S.target)&&s(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const p=Object.entries(i).filter(([,y])=>y.mode==="array"),m=Object.entries(i).filter(([,y])=>y.mode==="graph"),g=(y,S)=>{h(y),l(y,S,S.mode),s(!1)};return H.jsxs("div",{ref:f,style:{position:"relative",zIndex:50},children:[H.jsxs(ce.button,{whileHover:{scale:1.02,backgroundColor:"#444"},whileTap:{scale:.98},onClick:()=>s(!r),style:{padding:"6px 12px",borderRadius:"6px",background:"#333",color:c?"#fff":"#888",border:"1px solid #555",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",fontSize:"0.9rem",fontWeight:500,minWidth:"200px"},children:[H.jsx("span",{children:"📚"}),H.jsx("span",{style:{flex:1,textAlign:"left"},children:c||"Select an algorithm"}),H.jsx("span",{style:{fontSize:"0.8rem",opacity:.7},children:"▾"})]}),H.jsx(yo,{children:r&&H.jsxs(ce.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},transition:{duration:.15},style:{position:"absolute",top:"120%",left:0,background:"rgba(24, 24, 27, 0.95)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",boxShadow:"0 20px 40px rgba(0,0,0,0.4)",padding:"16px",minWidth:"500px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",zIndex:100},children:[H.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[H.jsx("div",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"1px",color:"#666",marginBottom:"4px",borderBottom:"1px solid #333",paddingBottom:"4px"},children:"Sorting (Array)"}),p.map(([y,S])=>H.jsx(Zg,{name:y,isSelected:c===y,onClick:()=>g(y,S)},y))]}),H.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[H.jsx("div",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"1px",color:"#666",marginBottom:"4px",borderBottom:"1px solid #333",paddingBottom:"4px"},children:"Trees & Graphs"}),m.map(([y,S])=>H.jsx(Zg,{name:y,isSelected:c===y,onClick:()=>g(y,S)},y))]})]})})]})},Zg=({name:i,isSelected:l,onClick:r})=>H.jsxs(ce.div,{onClick:r,whileHover:{x:4,color:"#3b82f6"},style:{cursor:"pointer",fontSize:"0.9rem",color:l?"#3b82f6":"#ccc",padding:"4px 0",transition:"color 0.2s",fontWeight:l?600:400,display:"flex",alignItems:"center",gap:"6px"},children:[l&&H.jsx("span",{style:{fontSize:"0.7rem"},children:"●"}),i]}),cc={"Bubble Sort":{mode:"array",code:{javascript:`// Repeatedly swap telling adjacent elements
const n = input.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    compare(j, j + 1);
    if (input[j] > input[j + 1]) {
      swap(j, j + 1);
    }
  }
}`,python:`# Repeatedly swap adjacent elements
n = len(input)

for i in range(n):
    for j in range(n - i - 1):
        compare(j, j + 1)
        if input[j] > input[j + 1]:
            swap(j, j + 1)`,java:`// Repeatedly swap adjacent elements
int n = input.length;

for (int i = 0; i < n; i++) {
  for (int j = 0; j < n - i - 1; j++) {
    compare(j, j + 1);
    if (input[j] > input[j + 1]) {
      swap(j, j + 1);
    }
  }
}`,cpp:`// Repeatedly swap adjacent elements
int n = input.size();

for (int i = 0; i < n; i++) {
  for (int j = 0; j < n - i - 1; j++) {
    compare(j, j + 1);
    if (input[j] > input[j + 1]) {
      swap(j, j + 1);
    }
  }
}`}},"Selection Sort":{mode:"array",code:{javascript:`// Select minimum from unsorted part and swap to front
const n = input.length;

for (let i = 0; i < n; i++) {
  let minIdx = i;

  for (let j = i + 1; j < n; j++) {
    compare(minIdx, j);
    if (input[j] < input[minIdx]) minIdx = j;
  }

  if (minIdx !== i) swap(i, minIdx);
}`,python:`# Select minimum from unsorted part and swap to front
n = len(input)

for i in range(n):
    min_idx = i
    for j in range(i + 1, n):
        compare(min_idx, j)
        if input[j] < input[min_idx]:
            min_idx = j
    if min_idx != i:
        swap(i, min_idx)`,java:`// Select minimum from unsorted part and swap to front
int n = input.length;

for (int i = 0; i < n; i++) {
  int minIdx = i;

  for (int j = i + 1; j < n; j++) {
    compare(minIdx, j);
    if (input[j] < input[minIdx]) minIdx = j;
  }

  if (minIdx != i) swap(i, minIdx);
}`,cpp:`// Select minimum from unsorted part and swap to front
int n = input.size();

for (int i = 0; i < n; i++) {
  int minIdx = i;

  for (int j = i + 1; j < n; j++) {
    compare(minIdx, j);
    if (input[j] < input[minIdx]) minIdx = j;
  }

  if (minIdx != i) swap(i, minIdx);
}`}},"Insertion Sort":{mode:"array",code:{javascript:`// Insert each element into its correct position in sorted prefix
const n = input.length;

for (let i = 1; i < n; i++) {
  let j = i;

  while (j > 0) {
    compare(j - 1, j);
    if (input[j - 1] > input[j]) {
      swap(j - 1, j);
      j--;
    } else break;
  }
}`,python:`# Insert each element into its correct position in sorted prefix
n = len(input)

for i in range(1, n):
    j = i
    while j > 0:
        compare(j - 1, j)
        if input[j - 1] > input[j]:
            swap(j - 1, j)
            j -= 1
        else:
            break`,java:`// Insert each element into its correct position in sorted prefix
int n = input.length;

for (int i = 1; i < n; i++) {
  int j = i;
  while (j > 0) {
    compare(j - 1, j);
    if (input[j - 1] > input[j]) {
      swap(j - 1, j);
      j--;
    } else break;
  }
}`,cpp:`// Insert each element into its correct position in sorted prefix
int n = input.size();

for (int i = 1; i < n; i++) {
  int j = i;
  while (j > 0) {
    compare(j - 1, j);
    if (input[j - 1] > input[j]) {
      swap(j - 1, j);
      j--;
    } else break;
  }
}`}},"Shell Sort":{mode:"array",code:{javascript:`// Insertion sort with decreasing gaps
const n = input.length;

for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
  for (let i = gap; i < n; i++) {
    let j = i;

    while (j >= gap) {
      compare(j - gap, j);
      if (input[j - gap] > input[j]) {
        swap(j - gap, j);
        j -= gap;
      } else break;
    }
  }
}`,python:`# Insertion sort with decreasing gaps
n = len(input)
gap = n // 2

while gap > 0:
    for i in range(gap, n):
        j = i
        while j >= gap:
            compare(j - gap, j)
            if input[j - gap] > input[j]:
                swap(j - gap, j)
                j -= gap
            else:
                break
    gap //= 2`,java:`// Insertion sort with decreasing gaps
int n = input.length;

for (int gap = n / 2; gap > 0; gap /= 2) {
  for (int i = gap; i < n; i++) {
    int j = i;
    while (j >= gap) {
      compare(j - gap, j);
      if (input[j - gap] > input[j]) {
        swap(j - gap, j);
        j -= gap;
      } else break;
    }
  }
}`,cpp:`// Insertion sort with decreasing gaps
int n = input.size();

for (int gap = n / 2; gap > 0; gap /= 2) {
  for (int i = gap; i < n; i++) {
    int j = i;
    while (j >= gap) {
      compare(j - gap, j);
      if (input[j - gap] > input[j]) {
        swap(j - gap, j);
        j -= gap;
      } else break;
    }
  }
}`}},"Quick Sort":{mode:"array",code:{javascript:`// Divide array using pivot and sort partitions
function quickSort(l, r) {
  if (l >= r) return;

  let i = l, j = r;
  const pivotIndex = Math.floor((l + r) / 2);
  const pivot = input[pivotIndex];

  while (i <= j) {
    while (input[i] < pivot) { compare(i, pivotIndex); i++; }
    while (input[j] > pivot) { compare(j, pivotIndex); j--; }
    if (i <= j) {
      swap(i, j);
      i++; j--;
    }
  }

  quickSort(l, j);
  quickSort(i, r);
}

quickSort(0, input.length - 1);`,python:`# Divide array using pivot and sort partitions
def quick_sort(l, r):
    if l >= r:
        return

    i, j = l, r
    pivot_index = (l + r) // 2
    pivot = input[pivot_index]

    while i <= j:
        while input[i] < pivot:
            compare(i, pivot_index); i += 1
        while input[j] > pivot:
            compare(j, pivot_index); j -= 1
        if i <= j:
            swap(i, j)
            i += 1; j -= 1

    quick_sort(l, j)
    quick_sort(i, r)

quick_sort(0, len(input) - 1)`,java:`// Divide array using pivot and sort partitions
void quickSort(int l, int r) {
  if (l >= r) return;

  int i = l, j = r;
  int pivotIndex = (l + r) / 2;
  int pivot = input[pivotIndex];

  while (i <= j) {
    while (input[i] < pivot) { compare(i, pivotIndex); i++; }
    while (input[j] > pivot) { compare(j, pivotIndex); j--; }
    if (i <= j) {
      swap(i, j);
      i++; j--;
    }
  }

  quickSort(l, j);
  quickSort(i, r);
}

quickSort(0, input.length - 1);`,cpp:`// Divide array using pivot and sort partitions
function<void(int,int)> quickSort = [&](int l, int r) {
  if (l >= r) return;

  int i = l, j = r;
  int pivotIndex = (l + r) / 2;
  int pivot = input[pivotIndex];

  while (i <= j) {
    while (input[i] < pivot) { compare(i, pivotIndex); i++; }
    while (input[j] > pivot) { compare(j, pivotIndex); j--; }
    if (i <= j) {
      swap(i, j);
      i++; j--;
    }
  }

  quickSort(l, j);
  quickSort(i, r);
};

quickSort(0, input.size() - 1);`}},"Merge Sort":{mode:"array",code:{javascript:`// Recursively divide and merge sorted halves
function mergeSort(l, r) {
  if (l >= r) return;

  const m = Math.floor((l + r) / 2);
  mergeSort(l, m);
  mergeSort(m + 1, r);

  let i = l, j = m + 1;
  const temp = [];

  while (i <= m && j <= r) {
    compare(i, j);
    if (input[i] <= input[j]) temp.push(input[i++]);
    else temp.push(input[j++]);
  }

  while (i <= m) temp.push(input[i++]);
  while (j <= r) temp.push(input[j++]);

  for (let k = 0; k < temp.length; k++) input[l + k] = temp[k];
}

mergeSort(0, input.length - 1);`,python:`# Recursively divide and merge sorted halves
def merge_sort(l, r):
    if l >= r:
        return

    m = (l + r) // 2
    merge_sort(l, m)
    merge_sort(m + 1, r)

    i, j = l, m + 1
    temp = []

    while i <= m and j <= r:
        compare(i, j)
        if input[i] <= input[j]:
            temp.append(input[i]); i += 1
        else:
            temp.append(input[j]); j += 1

    while i <= m:
        temp.append(input[i]); i += 1
    while j <= r:
        temp.append(input[j]); j += 1

    for k in range(len(temp)):
        input[l + k] = temp[k]

merge_sort(0, len(input) - 1)`,java:`// Recursively divide and merge sorted halves
void mergeSort(int l, int r) {
  if (l >= r) return;

  int m = (l + r) / 2;
  mergeSort(l, m);
  mergeSort(m + 1, r);

  int i = l, j = m + 1, k = 0;
  int[] temp = new int[r - l + 1];

  while (i <= m && j <= r) {
    compare(i, j);
    if (input[i] <= input[j]) temp[k++] = input[i++];
    else temp[k++] = input[j++];
  }

  while (i <= m) temp[k++] = input[i++];
  while (j <= r) temp[k++] = input[j++];

  for (int t = 0; t < temp.length; t++) input[l + t] = temp[t];
}

mergeSort(0, input.length - 1);`,cpp:`// Recursively divide and merge sorted halves
function<void(int,int)> mergeSort = [&](int l, int r) {
  if (l >= r) return;

  int m = (l + r) / 2;
  mergeSort(l, m);
  mergeSort(m + 1, r);

  int i = l, j = m + 1;
  vector<int> temp;

  while (i <= m && j <= r) {
    compare(i, j);
    if (input[i] <= input[j]) temp.push_back(input[i++]);
    else temp.push_back(input[j++]);
  }

  while (i <= m) temp.push_back(input[i++]);
  while (j <= r) temp.push_back(input[j++]);

  for (int t = 0; t < temp.size(); t++) input[l + t] = temp[t];
};

mergeSort(0, input.size() - 1);`}},"Counting Sort":{mode:"array",code:{javascript:`// Count frequency of each value and rebuild array
let maxVal = input[0];
for (let i = 1; i < input.length; i++) {
  compare(0, i); // Track progress
  if (input[i] > maxVal) maxVal = input[i];
}

const count = Array(maxVal + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  compare(i, i); // Track counting
  count[input[i]]++;
}

let idx = 0;
for (let v = 0; v < count.length; v++) {
  while (count[v]-- > 0) {
    compare(idx, idx); // Track rebuilding
    input[idx++] = v;
  }
}`,python:`# Count frequency of each value and rebuild array
max_val = max(input)
count = [0] * (max_val + 1)

for x in input:
    count[x] += 1

idx = 0
for v in range(len(count)):
    while count[v] > 0:
        input[idx] = v
        idx += 1
        count[v] -= 1`,java:`// Count frequency of each value and rebuild array
int maxVal = 0;
for (int x : input) maxVal = Math.max(maxVal, x);

int[] count = new int[maxVal + 1];
for (int x : input) count[x]++;

int idx = 0;
for (int v = 0; v < count.length; v++) {
  while (count[v]-- > 0) {
    input[idx++] = v;
  }
}`,cpp:`// Count frequency of each value and rebuild array
int maxVal = *max_element(input.begin(), input.end());
vector<int> count(maxVal + 1, 0);

for (int x : input) count[x]++;

int idx = 0;
for (int v = 0; v < count.size(); v++) {
  while (count[v]-- > 0) {
    input[idx++] = v;
  }
}`}},"Radix Sort":{mode:"array",code:{javascript:`// LSD Radix sort using counting sort per digit
let maxVal = input[0];
for (let i = 1; i < input.length; i++) {
  compare(0, i); // Track finding max
  if (input[i] > maxVal) maxVal = input[i];
}

for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
  const output = Array(input.length).fill(0);
  const count = Array(10).fill(0);

  for (let i = 0; i < input.length; i++) {
    compare(i, i); // Track counting
    count[Math.floor(input[i] / exp) % 10]++;
  }
  
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];

  for (let i = input.length - 1; i >= 0; i--) {
    const d = Math.floor(input[i] / exp) % 10;
    output[--count[d]] = input[i];
  }

  for (let i = 0; i < input.length; i++) {
    compare(i, i); // Track copying back
    input[i] = output[i];
  }
}`,python:`# LSD Radix sort using counting sort per digit
max_val = max(input)
exp = 1

while max_val // exp > 0:
    output = [0] * len(input)
    count = [0] * 10

    for x in input:
        count[(x // exp) % 10] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(len(input) - 1, -1, -1):
        d = (input[i] // exp) % 10
        count[d] -= 1
        output[count[d]] = input[i]

    input[:] = output
    exp *= 10`,java:`// LSD Radix sort using counting sort per digit
int maxVal = 0;
for (int x : input) maxVal = Math.max(maxVal, x);

for (int exp = 1; maxVal / exp > 0; exp *= 10) {
  int[] output = new int[input.length];
  int[] count = new int[10];

  for (int x : input) count[(x / exp) % 10]++;
  for (int i = 1; i < 10; i++) count[i] += count[i - 1];

  for (int i = input.length - 1; i >= 0; i--) {
    int d = (input[i] / exp) % 10;
    output[--count[d]] = input[i];
  }

  System.arraycopy(output, 0, input, 0, input.length);
}`,cpp:`// LSD Radix sort using counting sort per digit
int maxVal = *max_element(input.begin(), input.end());

for (int exp = 1; maxVal / exp > 0; exp *= 10) {
  vector<int> output(input.size());
  int count[10] = {0};

  for (int x : input) count[(x / exp) % 10]++;
  for (int i = 1; i < 10; i++) count[i] += count[i - 1];

  for (int i = input.size() - 1; i >= 0; i--) {
    int d = (input[i] / exp) % 10;
    output[--count[d]] = input[i];
  }

  input = output;
}`}},"Bucket Sort":{mode:"array",code:{javascript:`// Distribute into buckets, sort each, then merge
const n = input.length;

// Find min and max for normalization
let minVal = input[0], maxVal = input[0];
for (let i = 1; i < input.length; i++) {
  compare(0, i);
  if (input[i] < minVal) minVal = input[i];
  if (input[i] > maxVal) maxVal = input[i];
}

const range = maxVal - minVal || 1;
const buckets = Array.from({ length: n }, () => []);

for (let i = 0; i < input.length; i++) {
  compare(i, i); // Track distribution
  const normalized = (input[i] - minVal) / range;
  const idx = Math.min(Math.floor(n * normalized), n - 1);
  buckets[idx].push(input[i]);
}

for (let i = 0; i < buckets.length; i++) {
  buckets[i].sort((a, b) => a - b);
}

let k = 0;
for (let i = 0; i < buckets.length; i++) {
  for (let j = 0; j < buckets[i].length; j++) {
    compare(k, k); // Track merging
    input[k++] = buckets[i][j];
  }
}`,python:`# Distribute into buckets, sort each, then merge (for [0,1) floats)
n = len(input)
buckets = [[] for _ in range(n)]

for x in input:
    idx = int(n * x)
    buckets[idx].append(x)

for b in buckets:
    b.sort()

k = 0
for b in buckets:
    for x in b:
        input[k] = x
        k += 1`,java:`// Distribute into buckets, sort each, then merge (for [0,1) floats)
int n = input.length;
ArrayList<Double>[] buckets = new ArrayList[n];

for (int i = 0; i < n; i++) buckets[i] = new ArrayList<>();

for (double x : input) {
  int idx = (int)(n * x);
  buckets[idx].add(x);
}

for (int i = 0; i < n; i++) Collections.sort(buckets[i]);

int k = 0;
for (int i = 0; i < n; i++) {
  for (double x : buckets[i]) input[k++] = x;
}`,cpp:`// Distribute into buckets, sort each, then merge (for [0,1) floats)
int n = input.size();
vector<vector<double>> buckets(n);

for (double x : input) {
  int idx = int(n * x);
  buckets[idx].push_back(x);
}

for (auto &b : buckets) sort(b.begin(), b.end());

int k = 0;
for (auto &b : buckets) {
  for (double x : b) input[k++] = x;
}`}},"Binary Insertion Sort":{mode:"array",code:{javascript:`// Use binary search to find insertion position
function findPos(x, l, r) {
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    compare(m, m);
    if (input[m] <= x) l = m + 1;
    else r = m;
  }
  return l;
}

for (let i = 1; i < input.length; i++) {
  const x = input[i];
  const pos = findPos(x, 0, i);
  let j = i;

  while (j > pos) {
    input[j] = input[j - 1];
    j--;
  }
  input[pos] = x;
}`,python:`# Use binary search to find insertion position
def find_pos(x, l, r):
    while l < r:
        m = (l + r) // 2
        compare(m, m)
        if input[m] <= x:
            l = m + 1
        else:
            r = m
    return l

for i in range(1, len(input)):
    x = input[i]
    pos = find_pos(x, 0, i)
    j = i

    while j > pos:
        input[j] = input[j - 1]
        j -= 1
    input[pos] = x`,java:`// Use binary search to find insertion position
int findPos(int x, int l, int r) {
  while (l < r) {
    int m = (l + r) / 2;
    compare(m, m);
    if (input[m] <= x) l = m + 1;
    else r = m;
  }
  return l;
}

for (int i = 1; i < input.length; i++) {
  int x = input[i];
  int pos = findPos(x, 0, i);
  int j = i;

  while (j > pos) {
    input[j] = input[j - 1];
    j--;
  }
  input[pos] = x;
}`,cpp:`// Use binary search to find insertion position
auto findPos = [&](int x, int l, int r) {
  while (l < r) {
    int m = (l + r) / 2;
    compare(m, m);
    if (input[m] <= x) l = m + 1;
    else r = m;
  }
  return l;
};

for (int i = 1; i < input.size(); i++) {
  int x = input[i];
  int pos = findPos(x, 0, i);
  int j = i;

  while (j > pos) {
    input[j] = input[j - 1];
    j--;
  }
  input[pos] = x;
}`}},"Tim Sort":{mode:"array",code:{javascript:`// Tim Sort implementation (simplified)

const RUN = 32;
const n = input.length;

// Insertion sort for small runs
function insertionSort(left, right) {
  for (let i = left + 1; i <= right; i++) {
    let j = i;
    while (j > left) {
      compare(j - 1, j);
      if (input[j - 1] > input[j]) {
        swap(j - 1, j);
        j--;
      } else break;
    }
  }
}

// Merge two sorted subarrays
function merge(l, m, r) {
  const left = input.slice(l, m + 1);
  const right = input.slice(m + 1, r + 1);

  let i = 0, j = 0, k = l;

  while (i < left.length && j < right.length) {
    compare(l + i, m + 1 + j);
    if (left[i] <= right[j]) input[k++] = left[i++];
    else input[k++] = right[j++];
  }

  while (i < left.length) input[k++] = left[i++];
  while (j < right.length) input[k++] = right[j++];
}

// Sort small runs using insertion sort
for (let i = 0; i < n; i += RUN) {
  insertionSort(i, Math.min(i + RUN - 1, n - 1));
}

// Merge runs
for (let size = RUN; size < n; size *= 2) {
  for (let left = 0; left < n; left += 2 * size) {
    const mid = left + size - 1;
    const right = Math.min(left + 2 * size - 1, n - 1);
    if (mid < right) merge(left, mid, right);
  }
}`,python:`# Tim Sort implementation (simplified)

RUN = 32
n = len(input)

def insertion_sort(left, right):
    for i in range(left + 1, right + 1):
        j = i
        while j > left:
            compare(j - 1, j)
            if input[j - 1] > input[j]:
                swap(j - 1, j)
                j -= 1
            else:
                break

def merge(l, m, r):
    left = input[l:m+1]
    right = input[m+1:r+1]

    i = j = 0
    k = l

    while i < len(left) and j < len(right):
        compare(l + i, m + 1 + j)
        if left[i] <= right[j]:
            input[k] = left[i]; i += 1
        else:
            input[k] = right[j]; j += 1
        k += 1

    while i < len(left):
        input[k] = left[i]; i += 1; k += 1
    while j < len(right):
        input[k] = right[j]; j += 1; k += 1

for i in range(0, n, RUN):
    insertion_sort(i, min(i + RUN - 1, n - 1))

size = RUN
while size < n:
    for left in range(0, n, 2 * size):
        mid = left + size - 1
        right = min(left + 2 * size - 1, n - 1)
        if mid < right:
            merge(left, mid, right)
    size *= 2`,java:`// Tim Sort implementation (simplified)

int RUN = 32;
int n = input.length;

void insertionSort(int left, int right) {
  for (int i = left + 1; i <= right; i++) {
    int j = i;
    while (j > left) {
      compare(j - 1, j);
      if (input[j - 1] > input[j]) {
        swap(j - 1, j);
        j--;
      } else break;
    }
  }
}

void merge(int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;

  int[] L = new int[n1];
  int[] R = new int[n2];

  for (int i = 0; i < n1; i++) L[i] = input[l + i];
  for (int j = 0; j < n2; j++) R[j] = input[m + 1 + j];

  int i = 0, j = 0, k = l;

  while (i < n1 && j < n2) {
    compare(l + i, m + 1 + j);
    if (L[i] <= R[j]) input[k++] = L[i++];
    else input[k++] = R[j++];
  }

  while (i < n1) input[k++] = L[i++];
  while (j < n2) input[k++] = R[j++];
}

for (int i = 0; i < n; i += RUN)
  insertionSort(i, Math.min(i + RUN - 1, n - 1));

for (int size = RUN; size < n; size *= 2) {
  for (int left = 0; left < n; left += 2 * size) {
    int mid = left + size - 1;
    int right = Math.min(left + 2 * size - 1, n - 1);
    if (mid < right) merge(left, mid, right);
  }
}`,cpp:`// Tim Sort implementation (simplified)

int RUN = 32;
int n = input.size();

auto insertionSort = [&](int left, int right) {
  for (int i = left + 1; i <= right; i++) {
    int j = i;
    while (j > left) {
      compare(j - 1, j);
      if (input[j - 1] > input[j]) {
        swap(j - 1, j);
        j--;
      } else break;
    }
  }
};

auto merge = [&](int l, int m, int r) {
  vector<int> L(input.begin() + l, input.begin() + m + 1);
  vector<int> R(input.begin() + m + 1, input.begin() + r + 1);

  int i = 0, j = 0, k = l;

  while (i < L.size() && j < R.size()) {
    compare(l + i, m + 1 + j);
    if (L[i] <= R[j]) input[k++] = L[i++];
    else input[k++] = R[j++];
  }

  while (i < L.size()) input[k++] = L[i++];
  while (j < R.size()) input[k++] = R[j++];
};

for (int i = 0; i < n; i += RUN)
  insertionSort(i, min(i + RUN - 1, n - 1));

for (int size = RUN; size < n; size *= 2) {
  for (int left = 0; left < n; left += 2 * size) {
    int mid = left + size - 1;
    int right = min(left + 2 * size - 1, n - 1);
    if (mid < right) merge(left, mid, right);
  }
}`}},"Heap Sort":{mode:"graph",code:{javascript:`// Build max heap and extract elements
// Graph Visualization Setup
function getPos(i) {
  const d = Math.floor(Math.log2(i+1));
  const off = i - (Math.pow(2, d) - 1);
  const x = 800 * (2*off + 1) / Math.pow(2, d+1);
  const y = 50 + d*60;
  return {x, y};
}

function updateNode(i) {
  const pos = getPos(i);
  addNode(i, input[i], pos.x, pos.y);
}

// Initialize Graph
for (let i = 0; i < input.length; i++) {
  updateNode(i);
  if (i > 0) addEdge(Math.floor((i-1)/2), i);
}

function visualSwap(i, j) {
  swap(i, j); // Array swap
  // Update graph values
  updateNode(i);
  updateNode(j);
  highlightNode(i); highlightNode(j);
}

const n = input.length;

function heapify(i, size) {
  while (true) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest === i) break;
    visualSwap(i, largest);
    i = largest;
  }
}

for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);

for (let i = n - 1; i > 0; i--) {
  visualSwap(0, i);
  // Mark as sorted?
  highlightNode(i); 
  heapify(0, i);
}`,python:`# Build max heap and extract elements
n = len(input)

def heapify(i, size):
    while True:
        largest = i
        l = 2*i + 1
        r = 2*i + 2

        if l < size:
            compare(l, largest)
            if input[l] > input[largest]:
                largest = l
        if r < size:
            compare(r, largest)
            if input[r] > input[largest]:
                largest = r

        if largest == i:
            break
        swap(i, largest)
        i = largest

for i in range(n//2 - 1, -1, -1):
    heapify(i, n)

for i in range(n - 1, 0, -1):
    swap(0, i)
    heapify(0, i)`,java:`// Build max heap and extract elements
int n = input.length;

void heapify(int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
}

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`,cpp:`// Build max heap and extract elements
int n = input.size();

function<void(int,int)> heapify = [&](int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
};

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`}},"Tree Sort (BST Inorder)":{mode:"graph",code:{javascript:`// Insert into BST, then inorder traversal
let idCounter = 0;

class Node {
  constructor(v) { 
    this.id = 'n' + idCounter++;
    this.v = v; 
    this.l = null; 
    this.r = null;
    addNode(this.id, v); 
  }
}

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function insert(t, v) {
  if (!t) return new Node(v);
  highlightNode(t.id);
  compare(v, t.v);
  if (v < t.v) setLeft(t, insert(t.l, v));
  else setRight(t, insert(t.r, v));
  return t;
}

function inorder(t, out) {
  if (!t) return;
  inorder(t.l, out);
  if (t) highlightNode(t.id);
  out.push(t.v);
  inorder(t.r, out);
}

let root = null;
for (let i = 0; i < input.length; i++) {
  root = insert(root, input[i]);
}

const out = [];
inorder(root, out);
for (let i = 0; i < input.length; i++) input[i] = out[i];`,python:`# Insert into BST, then inorder traversal
class Node:
    def __init__(self, v):
        self.v = v
        self.l = None
        self.r = None

def insert(t, v):
    if not t:
        return Node(v)
    compare(v, t.v)
    if v < t.v:
        t.l = insert(t.l, v)
    else:
        t.r = insert(t.r, v)
    return t

def inorder(t, out):
    if not t:
        return
    inorder(t.l, out)
    out.append(t.v)
    inorder(t.r, out)

root = None
for x in input:
    root = insert(root, x)

out = []
inorder(root, out)
input[:] = out`,java:`// Insert into BST, then inorder traversal
class Node {
  int v; Node l, r;
  Node(int v) { this.v = v; }
}

Node insert(Node t, int v) {
  if (t == null) return new Node(v);
  compare(v, t.v);
  if (v < t.v) t.l = insert(t.l, v);
  else t.r = insert(t.r, v);
  return t;
}

void inorder(Node t, List<Integer> out) {
  if (t == null) return;
  inorder(t.l, out);
  out.add(t.v);
  inorder(t.r, out);
}

Node root = null;
for (int x : input) root = insert(root, x);

ArrayList<Integer> out = new ArrayList<>();
inorder(root, out);
for (int i = 0; i < input.length; i++) input[i] = out.get(i);`,cpp:`// Insert into BST, then inorder traversal
struct Node {
  int v; Node *l, *r;
  Node(int v) : v(v), l(nullptr), r(nullptr) {}
};

function<Node*(Node*,int)> insert = [&](Node* t, int v) -> Node* {
  if (!t) return new Node(v);
  compare(v, t->v);
  if (v < t->v) t->l = insert(t->l, v);
  else t->r = insert(t->r, v);
  return t;
};

function<void(Node*, vector<int>&)> inorder = [&](Node* t, vector<int>& out) {
  if (!t) return;
  inorder(t->l, out);
  out.push_back(t->v);
  inorder(t->r, out);
};

Node* root = nullptr;
for (int x : input) root = insert(root, x);

vector<int> out;
inorder(root, out);
for (int i = 0; i < input.size(); i++) input[i] = out[i];`}},"AVL Tree Sort":{mode:"graph",code:{javascript:`// AVL Tree Sort using balanced BST
let idCounter = 0;

class Node {
  constructor(v) {
    this.id = 'n' + idCounter++;
    this.v = v;
    this.h = 1;
    this.l = null;
    this.r = null;
    addNode(this.id, v);
  }
}

function height(n) { return n ? n.h : 0; }

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function rotateRight(y) {
  const x = y.l;
  const T2 = x.r;
  setLeft(y, T2);
  setRight(x, y);
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  return x;
}

function rotateLeft(x) {
  const y = x.r;
  const T2 = y.l;
  setRight(x, T2);
  setLeft(y, x);
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  return y;
}

function balance(n) { return height(n.l) - height(n.r); }

function insert(n, v) {
  if (!n) return new Node(v);

  highlightNode(n.id);
  compare(v, n.v);
  if (v < n.v) setLeft(n, insert(n.l, v));
  else setRight(n, insert(n.r, v));

  n.h = 1 + Math.max(height(n.l), height(n.r));
  const b = balance(n);

  if (b > 1 && v < n.l.v) return rotateRight(n);
  if (b < -1 && v > n.r.v) return rotateLeft(n);
  if (b > 1 && v > n.l.v) { 
      setLeft(n, rotateLeft(n.l)); 
      return rotateRight(n); 
  }
  if (b < -1 && v < n.r.v) { 
      setRight(n, rotateRight(n.r)); 
      return rotateLeft(n); 
  }

  return n;
}

function inorder(n, out) {
  if (!n) return;
  inorder(n.l, out); 
  if(n) highlightNode(n.id);
  out.push(n.v); 
  inorder(n.r, out);
}

let root = null;
for (let i = 0; i < input.length; i++) root = insert(root, input[i]);
const out = [];
inorder(root, out);
for (let i = 0; i < input.length; i++) input[i] = out[i];`,python:`# AVL Tree Sort using balanced BST

class Node:
    def __init__(self, v):
        self.v = v
        self.h = 1
        self.l = None
        self.r = None

def height(n):
    return n.h if n else 0

def rotate_right(y):
    x = y.l
    T2 = x.r
    x.r = y
    y.l = T2
    y.h = max(height(y.l), height(y.r)) + 1
    x.h = max(height(x.l), height(x.r)) + 1
    return x

def rotate_left(x):
    y = x.r
    T2 = y.l
    y.l = x
    x.r = T2
    x.h = max(height(x.l), height(x.r)) + 1
    y.h = max(height(y.l), height(y.r)) + 1
    return y

def balance(n):
    return height(n.l) - height(n.r)

def insert(n, v):
    if not n:
        return Node(v)

    compare(v, n.v)
    if v < n.v:
        n.l = insert(n.l, v)
    else:
        n.r = insert(n.r, v)

    n.h = 1 + max(height(n.l), height(n.r))
    b = balance(n)

    if b > 1 and v < n.l.v:
        return rotate_right(n)
    if b < -1 and v > n.r.v:
        return rotate_left(n)
    if b > 1 and v > n.l.v:
        n.l = rotate_left(n.l)
        return rotate_right(n)
    if b < -1 and v < n.r.v:
        n.r = rotate_right(n.r)
        return rotate_left(n)

    return n

def inorder(n, out):
    if not n: return
    inorder(n.l, out)
    out.append(n.v)
    inorder(n.r, out)

root = None
for x in input:
    root = insert(root, x)

out = []
inorder(root, out)
input[:] = out`,java:`// AVL Tree Sort using balanced BST

class Node {
  int v, h;
  Node l, r;
  Node(int v) { this.v = v; this.h = 1; }
}

int height(Node n) { return n == null ? 0 : n.h; }

Node rotateRight(Node y) {
  Node x = y.l;
  Node T2 = x.r;
  x.r = y; y.l = T2;
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  return x;
}

Node rotateLeft(Node x) {
  Node y = x.r;
  Node T2 = y.l;
  y.l = x; x.r = T2;
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  return y;
}

int balance(Node n) { return height(n.l) - height(n.r); }

Node insert(Node n, int v) {
  if (n == null) return new Node(v);

  compare(v, n.v);
  if (v < n.v) n.l = insert(n.l, v);
  else n.r = insert(n.r, v);

  n.h = 1 + Math.max(height(n.l), height(n.r));
  int b = balance(n);

  if (b > 1 && v < n.l.v) return rotateRight(n);
  if (b < -1 && v > n.r.v) return rotateLeft(n);
  if (b > 1 && v > n.l.v) { n.l = rotateLeft(n.l); return rotateRight(n); }
  if (b < -1 && v < n.r.v) { n.r = rotateRight(n.r); return rotateLeft(n); }

  return n;
}

void inorder(Node n, List<Integer> out) {
  if (n == null) return;
  inorder(n.l, out); out.add(n.v); inorder(n.r, out);
}

Node root = null;
for (int x : input) root = insert(root, x);
ArrayList<Integer> out = new ArrayList<>();
inorder(root, out);
for (int i = 0; i < input.length; i++) input[i] = out.get(i);`,cpp:`// AVL Tree Sort using balanced BST

struct Node {
  int v, h;
  Node *l, *r;
  Node(int v): v(v), h(1), l(nullptr), r(nullptr) {}
};

int height(Node* n){ return n ? n->h : 0; }

Node* rotateRight(Node* y){
  Node* x = y->l;
  Node* T2 = x->r;
  x->r = y; y->l = T2;
  y->h = max(height(y->l), height(y->r)) + 1;
  x->h = max(height(x->l), height(x->r)) + 1;
  return x;
}

Node* rotateLeft(Node* x){
  Node* y = x->r;
  Node* T2 = y->l;
  y->l = x; x->r = T2;
  x->h = max(height(x->l), height(x->r)) + 1;
  y->h = max(height(y->l), height(y->r)) + 1;
  return y;
}

int balance(Node* n){ return height(n->l) - height(n->r); }

function<Node*(Node*,int)> insert = [&](Node* n, int v){
  if(!n) return new Node(v);
  compare(v, n->v);
  if(v < n->v) n->l = insert(n->l, v);
  else n->r = insert(n->r, v);

  n->h = 1 + max(height(n->l), height(n->r));
  int b = balance(n);

  if(b > 1 && v < n->l->v) return rotateRight(n);
  if(b < -1 && v > n->r->v) return rotateLeft(n);
  if(b > 1 && v > n->l->v){ n->l = rotateLeft(n->l); return rotateRight(n); }
  if(b < -1 && v < n->r->v){ n->r = rotateRight(n->r); return rotateLeft(n); }

  return n;
};

function<void(Node*,vector<int>&)> inorder = [&](Node* n, vector<int>& out){
  if(!n) return;
  inorder(n->l,out); out.push_back(n->v); inorder(n->r,out);
};

Node* root=nullptr;
for(int x:input) root=insert(root,x);
vector<int> out; inorder(root,out);
for(int i=0;i<input.size();i++) input[i]=out[i];`}},"Red-Black Tree Sort":{mode:"graph",code:{javascript:`// Red-Black Tree Sort (simplified insert + inorder)
let idCounter = 0;

class Node {
  constructor(v, red = true) {
    this.id = 'n' + idCounter++;
    this.v = v; 
    this.red = red;
    this.l = null; 
    this.r = null;
    addNode(this.id, v, undefined, undefined, red ? 'red' : 'black');
  }
}

function updateColor(n) {
  if (n) addNode(n.id, n.v, undefined, undefined, n.red ? 'red' : 'black');
}

function isRed(n){ return n && n.red; }

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function rotateLeft(h){
  const x = h.r;
  setRight(h, x.l);
  setLeft(x, h);
  x.red = h.red; h.red = true;
  updateColor(x); updateColor(h);
  return x;
}

function rotateRight(h){
  const x = h.l;
  setLeft(h, x.r);
  setRight(x, h);
  x.red = h.red; h.red = true;
  updateColor(x); updateColor(h);
  return x;
}

function flip(h){
  h.red = true;
  h.l.red = false;
  h.r.red = false;
  updateColor(h); updateColor(h.l); updateColor(h.r);
}

function insert(h, v){
  if(!h) return new Node(v);
  highlightNode(h.id);

  compare(v, h.v);
  if(v < h.v) setLeft(h, insert(h.l, v));
  else setRight(h, insert(h.r, v));

  if(isRed(h.r) && !isRed(h.l)) h = rotateLeft(h);
  if(isRed(h.l) && isRed(h.l.l)) h = rotateRight(h);
  if(isRed(h.l) && isRed(h.r)) flip(h);

  return h;
}

function inorder(n, out){
  if(!n) return;
  inorder(n.l,out); 
  if(n) highlightNode(n.id);
  out.push(n.v); 
  inorder(n.r,out);
}

let root=null;
for(let i=0;i<input.length;i++) root=insert(root,input[i]);
root.red=false;
updateColor(root);

const out=[];
inorder(root,out);
for(let i=0;i<input.length;i++) input[i]=out[i];`,python:`# Red-Black Tree Sort (simplified insert + inorder)

class Node:
    def __init__(self, v, red=True):
        self.v=v; self.red=red; self.l=None; self.r=None

def is_red(n): return n and n.red

def rotate_left(h):
    x=h.r; h.r=x.l; x.l=h
    x.red=h.red; h.red=True
    return x

def rotate_right(h):
    x=h.l; h.l=x.r; x.r=h
    x.red=h.red; h.red=True
    return x

def flip(h):
    h.red=True; h.l.red=False; h.r.red=False

def insert(h,v):
    if not h: return Node(v)

    compare(v,h.v)
    if v<h.v: h.l=insert(h.l,v)
    else: h.r=insert(h.r,v)

    if is_red(h.r) and not is_red(h.l): h=rotate_left(h)
    if is_red(h.l) and is_red(h.l.l): h=rotate_right(h)
    if is_red(h.l) and is_red(h.r): flip(h)

    return h

def inorder(n,out):
    if not n: return
    inorder(n.l,out); out.append(n.v); inorder(n.r,out)

root=None
for x in input: root=insert(root,x)
root.red=False

out=[]; inorder(root,out); input[:]=out`,java:`// Red-Black Tree Sort (simplified LLRB)

class Node {
  int v; boolean red;
  Node l,r;
  Node(int v){this.v=v; this.red=true;}
}

boolean isRed(Node n){ return n!=null && n.red; }

Node rotateLeft(Node h){
  Node x=h.r; h.r=x.l; x.l=h;
  x.red=h.red; h.red=true;
  return x;
}

Node rotateRight(Node h){
  Node x=h.l; h.l=x.r; x.r=h;
  x.red=h.red; h.red=true;
  return x;
}

void flip(Node h){
  h.red=true; h.l.red=false; h.r.red=false;
}

Node insert(Node h,int v){
  if(h==null) return new Node(v);

  compare(v,h.v);
  if(v<h.v) h.l=insert(h.l,v);
  else h.r=insert(h.r,v);

  if(isRed(h.r) && !isRed(h.l)) h=rotateLeft(h);
  if(isRed(h.l) && isRed(h.l.l)) h=rotateRight(h);
  if(isRed(h.l) && isRed(h.r)) flip(h);

  return h;
}

void inorder(Node n,List<Integer> out){
  if(n==null) return;
  inorder(n.l,out); out.add(n.v); inorder(n.r,out);
}

Node root=null;
for(int x:input) root=insert(root,x);
root.red=false;

ArrayList<Integer> out=new ArrayList<>();
inorder(root,out);
for(int i=0;i<input.length;i++) input[i]=out.get(i);`,cpp:`// Red-Black Tree Sort (simplified LLRB)

struct Node{
  int v; bool red;
  Node *l,*r;
  Node(int v):v(v),red(true),l(nullptr),r(nullptr){}
};

bool isRed(Node* n){ return n && n->red; }

Node* rotateLeft(Node* h){
  Node* x=h->r; h->r=x->l; x->l=h;
  x->red=h->red; h->red=true;
  return x;
}

Node* rotateRight(Node* h){
  Node* x=h->l; h->l=x->r; x->r=h;
  x->red=h->red; h->red=true;
  return x;
}

void flip(Node* h){
  h->red=true; h->l->red=false; h->r->red=false;
}

function<Node*(Node*,int)> insert=[&](Node* h,int v){
  if(!h) return new Node(v);

  compare(v,h->v);
  if(v<h->v) h->l=insert(h->l,v);
  else h->r=insert(h->r,v);

  if(isRed(h->r) && !isRed(h->l)) h=rotateLeft(h);
  if(isRed(h->l) && isRed(h->l->l)) h=rotateRight(h);
  if(isRed(h->l) && isRed(h->r)) flip(h);

  return h;
};

function<void(Node*,vector<int>&)> inorder=[&](Node* n,vector<int>& out){
  if(!n) return;
  inorder(n->l,out); out.push_back(n->v); inorder(n->r,out);
};

Node* root=nullptr;
for(int x:input) root=insert(root,x);
root->red=false;

vector<int> out; inorder(root,out);
for(int i=0;i<input.size();i++) input[i]=out[i];`}},"Splay Tree Sort":{mode:"graph",code:{javascript:`// Splay Tree Sort using splaying on insert
let idCounter = 0;

class Node {
  constructor(v){ 
    this.id = 'n' + idCounter++;
    this.v=v; 
    this.l=null; 
    this.r=null; 
    addNode(this.id, v);
  }
}

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function rotateRight(x){
  const y=x.l; 
  setLeft(x, y.r);
  setRight(y, x);
  return y;
}

function rotateLeft(x){
  const y=x.r; 
  setRight(x, y.l);
  setLeft(y, x);
  return y;
}

function splay(root,v){
  if(!root || root.v===v) return root;
  highlightNode(root.id);

  if(v < root.v){
    if(!root.l) return root;
    if(v < root.l.v){
      setLeft(root.l, splay(root.l.l,v));
      root = rotateRight(root);
    } else if(v > root.l.v){
      setRight(root.l, splay(root.l.r,v));
      if(root.l.r) setLeft(root, rotateLeft(root.l));
    }
    return root.l ? rotateRight(root) : root;
  } else {
    if(!root.r) return root;
    if(v > root.r.v){
      setRight(root.r, splay(root.r.r,v));
      root = rotateLeft(root);
    } else if(v < root.r.v){
      setLeft(root.r, splay(root.r.l,v));
      if(root.r.l) setRight(root, rotateRight(root.r));
    }
    return root.r ? rotateLeft(root) : root;
  }
}

function insert(root,v){
  if(!root) return new Node(v);
  root = splay(root,v);
  compare(v,root.v);
  if(v<root.v){
    const n=new Node(v);
    setRight(n, root);
    setLeft(n, root.l);
    setLeft(root, null);
    return n;
  }
  if(v>root.v){
    const n=new Node(v);
    setLeft(n, root);
    setRight(n, root.r);
    setRight(root, null);
    return n;
  }
  return root;
}

function inorder(n,out){
  if(!n) return;
  inorder(n.l,out); 
  if(n) highlightNode(n.id);
  out.push(n.v); 
  inorder(n.r,out);
}

let root=null;
for(let i=0;i<input.length;i++) root=insert(root,input[i]);
const out=[]; inorder(root,out);
for(let i=0;i<input.length;i++) input[i]=out[i];`,python:`# Splay Tree Sort using splaying on insert

class Node:
    def __init__(self,v):
        self.v=v; self.l=None; self.r=None

def rotate_right(x):
    y=x.l; x.l=y.r; y.r=x; return y

def rotate_left(x):
    y=x.r; x.r=y.l; y.l=x; return y

def splay(root,v):
    if not root or root.v==v: return root

    if v<root.v:
        if not root.l: return root
        if v<root.l.v:
            root.l.l=splay(root.l.l,v)
            root=rotate_right(root)
        elif v>root.l.v:
            root.l.r=splay(root.l.r,v)
            if root.l.r: root.l=rotate_left(root.l)
        return rotate_right(root) if root.l else root
    else:
        if not root.r: return root
        if v>root.r.v:
            root.r.r=splay(root.r.r,v)
            root=rotate_left(root)
        elif v<root.r.v:
            root.r.l=splay(root.r.l,v)
            if root.r.l: root.r=rotate_right(root.r)
        return rotate_left(root) if root.r else root

def insert(root,v):
    if not root: return Node(v)
    root=splay(root,v)
    compare(v,root.v)
    if v<root.v:
        n=Node(v); n.r=root; n.l=root.l; root.l=None; return n
    if v>root.v:
        n=Node(v); n.l=root; n.r=root.r; root.r=None; return n
    return root

def inorder(n,out):
    if not n: return
    inorder(n.l,out); out.append(n.v); inorder(n.r,out)

root=None
for x in input: root=insert(root,x)
out=[]; inorder(root,out); input[:]=out`,java:`// Splay Tree Sort using splaying on insert

class Node{
  int v; Node l,r;
  Node(int v){this.v=v;}
}

Node rotateRight(Node x){
  Node y=x.l; x.l=y.r; y.r=x; return y;
}

Node rotateLeft(Node x){
  Node y=x.r; x.r=y.l; y.l=x; return y;
}

Node splay(Node root,int v){
  if(root==null||root.v==v) return root;

  if(v<root.v){
    if(root.l==null) return root;
    if(v<root.l.v){
      root.l.l=splay(root.l.l,v);
      root=rotateRight(root);
    } else if(v>root.l.v){
      root.l.r=splay(root.l.r,v);
      if(root.l.r!=null) root.l=rotateLeft(root.l);
    }
    return root.l!=null?rotateRight(root):root;
  } else {
    if(root.r==null) return root;
    if(v>root.r.v){
      root.r.r=splay(root.r.r,v);
      root=rotateLeft(root);
    } else if(v<root.r.v){
      root.r.l=splay(root.r.l,v);
      if(root.r.l!=null) root.r=rotateRight(root.r);
    }
    return root.r!=null?rotateLeft(root):root;
  }
}

Node insert(Node root,int v){
  if(root==null) return new Node(v);
  root=splay(root,v);
  compare(v,root.v);
  if(v<root.v){
    Node n=new Node(v); n.r=root; n.l=root.l; root.l=null; return n;
  }
  if(v>root.v){
    Node n=new Node(v); n.l=root; n.r=root.r; root.r=null; return n;
  }
  return root;
}

void inorder(Node n,List<Integer> out){
  if(n==null) return;
  inorder(n.l,out); out.add(n.v); inorder(n.r,out);
}

Node root=null;
for(int x:input) root=insert(root,x);
ArrayList<Integer> out=new ArrayList<>();
inorder(root,out);
for(int i=0;i<input.length;i++) input[i]=out.get(i);`,cpp:`// Splay Tree Sort using splaying on insert

struct Node{
  int v; Node *l,*r;
  Node(int v):v(v),l(nullptr),r(nullptr){}
};

Node* rotateRight(Node* x){
  Node* y=x->l; x->l=y->r; y->r=x; return y;
}

Node* rotateLeft(Node* x){
  Node* y=x->r; x->r=y->l; y->l=x; return y;
}

Node* splay(Node* root,int v){
  if(!root||root->v==v) return root;

  if(v<root->v){
    if(!root->l) return root;
    if(v<root->l->v){
      root->l->l=splay(root->l->l,v);
      root=rotateRight(root);
    } else if(v>root->l->v){
      root->l->r=splay(root->l->r,v);
      if(root->l->r) root->l=rotateLeft(root->l);
    }
    return root->l?rotateRight(root):root;
  } else {
    if(!root->r) return root;
    if(v>root->r->v){
      root->r->r=splay(root->r->r,v);
      root=rotateLeft(root);
    } else if(v<root->r->v){
      root->r->l=splay(root->r->l,v);
      if(root->r->l) root->r=rotateRight(root->r);
    }
    return root->r?rotateLeft(root):root;
  }
}

Node* insert(Node* root,int v){
  if(!root) return new Node(v);
  root=splay(root,v);
  compare(v,root->v);
  if(v<root->v){
    Node* n=new Node(v); n->r=root; n->l=root->l; root->l=nullptr; return n;
  }
  if(v>root->v){
    Node* n=new Node(v); n->l=root; n->r=root->r; root->r=nullptr; return n;
  }
  return root;
}

function<void(Node*,vector<int>&)> inorder=[&](Node* n,vector<int>& out){
  if(!n) return;
  inorder(n->l,out); out.push_back(n->v); inorder(n->r,out);
};

Node* root=nullptr;
for(int x:input) root=insert(root,x);
vector<int> out; inorder(root,out);
for(int i=0;i<input.size();i++) input[i]=out[i];`}},"Bottom-Up Heap Sort":{mode:"graph",code:{javascript:`// Iterative heapify for bottom-up heap construction
// Graph Visualization Setup
function getPos(i) {
  const d = Math.floor(Math.log2(i+1));
  const off = i - (Math.pow(2, d) - 1);
  const x = 800 * (2*off + 1) / Math.pow(2, d+1);
  const y = 50 + d*60;
  return {x, y};
}

function updateNode(i) {
  const pos = getPos(i);
  addNode(i, input[i], pos.x, pos.y);
}

// Initialize Graph
for (let i = 0; i < input.length; i++) {
  updateNode(i);
  if (i > 0) addEdge(Math.floor((i-1)/2), i);
}

function visualSwap(i, j) {
  swap(i, j); // Array swap
  // Update graph values
  updateNode(i);
  updateNode(j);
  highlightNode(i); highlightNode(j);
}

const n = input.length;

function heapify(i, size) {
  while (true) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest === i) break;
    visualSwap(i, largest);
    i = largest;
  }
}

for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);

for (let i = n - 1; i > 0; i--) {
  visualSwap(0, i);
  // Mark sort
  highlightNode(i);
  heapify(0, i);
}`,python:`# Iterative heapify for bottom-up heap construction
n = len(input)

def heapify(i, size):
    while True:
        largest = i
        l = 2*i + 1
        r = 2*i + 2

        if l < size:
            compare(l, largest)
            if input[l] > input[largest]:
                largest = l
        if r < size:
            compare(r, largest)
            if input[r] > input[largest]:
                largest = r

        if largest == i:
            break
        swap(i, largest)
        i = largest

for i in range(n//2 - 1, -1, -1):
    heapify(i, n)

for i in range(n - 1, 0, -1):
    swap(0, i)
    heapify(0, i)`,java:`// Iterative heapify for bottom-up heap construction
int n = input.length;

void heapify(int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
}

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`,cpp:`// Iterative heapify for bottom-up heap construction
int n = input.size();

function<void(int,int)> heapify = [&](int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
};

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`}}},Kg=[25,10,45,15,8,30,50,5,20,35,12,40,60,2,18];function yj(){const[i,l]=O.useState(Kg),[r,s]=O.useState(Kg.join(", ")),[c,h]=O.useState(0),[f,p]=O.useState(!1),[m,g]=O.useState(50),[y,S]=O.useState("array"),[T,D]=O.useState(""),[N,U]=O.useState(T==="python"?"# Choose your language and select an algorithm from the menu above!":"// Choose your language and select an algorithm from the menu above!"),[X,q]=O.useState(null);O.useEffect(()=>{G()},[]);const Z=it=>{s(it.target.value)},B=()=>{try{const it=r.split(",").map(rt=>rt.trim()).filter(rt=>rt!=="");let ot=[];it.every(rt=>!isNaN(Number(rt)))?ot=it.map(Number):ot=it,ot.length>0&&l(ot)}catch(it){console.error("Invalid input",it)}},J=()=>{const it=Math.floor(Math.random()*10)+10,ot=Array.from({length:it},()=>Math.floor(Math.random()*100));l(ot),s(ot.join(", "))};O.useEffect(()=>{G()},[i]);const G=async()=>{let it=N;if(T&&T!=="javascript"){const ot=cc[Q];if(ot)it=typeof ot.code=="string"?ot.code:ot.code.javascript,console.log(`[Info] Running JavaScript implementation for ${Q} while viewing ${T}`);else{alert(`⚠️ Execution Not Supported

Custom ${T.toUpperCase()} code cannot be executed directly in the browser.

Please select an algorithm from the menu to run its visualization, or switch to JavaScript to write custom code.`);return}}p(!1),h(0);try{const jt=await new mj().execute(it,i),rt=new I2(jt,i);q({trace:jt,manager:rt}),p(!0)}catch(ot){console.error("Exec error",ot),alert("Error executing algorithm: "+ot)}},F=O.useMemo(()=>{if(!X)return null;const it=X.manager.getStateAt(c);return c===X.manager.stepCount&&(it.highlightedIndices=[],it.activeLine=-1),it},[X,c]),[Q,K]=O.useState(""),lt=it=>{if(!it)return;D(it);const ot=cc[Q];if(ot){const jt=typeof ot.code=="string"?ot.code:ot.code[it]||ot.code.javascript;U(jt)}else U(it==="python"?"## Choose your language and select an algorithm from the menu above!":"// Choose your language and select an algorithm from the menu above!")},nt=(it,ot,jt)=>{K(it);const rt=T||"javascript";T||D("javascript");const C=typeof ot.code=="string"?ot.code:ot.code[rt]||ot.code.javascript;U(C),S(jt)},xt=X?X.trace.length:0;return O.useEffect(()=>{let it;if(f&&c<xt){const ot=Math.max(10,1e3-m*9.5);it=setInterval(()=>{h(jt=>jt>=xt?(p(!1),jt):jt+1)},ot)}return()=>clearInterval(it)},[f,c,xt,m]),O.useEffect(()=>{f&&c>=xt&&p(!1)},[c,xt,f]),!X||!F?H.jsx("div",{children:"Loading..."}):H.jsxs("div",{className:"app-container",children:[H.jsxs("header",{className:"app-header",children:[H.jsx(ce.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Advanced Algorithm Visualizer"}),H.jsx(ce.p,{className:"subtitle",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2,duration:.5},children:"Deterministic Time-Travel Debugging"})]}),H.jsx("div",{className:"app-toolbar",children:H.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[H.jsx(gj,{presets:cc,onSelect:nt}),H.jsx("div",{style:{width:"1px",height:"24px",background:"rgba(255,255,255,0.1)"}}),H.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[H.jsx("span",{style:{fontSize:"0.9em",color:"#888"},children:"Data:"}),H.jsx("input",{value:r,onChange:Z,onBlur:B,onKeyDown:it=>it.key==="Enter"&&B(),placeholder:"10, 5, 8...",style:{width:"200px",padding:"8px 12px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.1)",background:"rgba(0,0,0,0.2)",color:"#eee",fontFamily:"JetBrains Mono, monospace",fontSize:"0.9em"}}),H.jsx("button",{onClick:B,style:{padding:"8px 16px",background:"var(--accent-primary)",border:"none",borderRadius:"6px",cursor:"pointer",color:"white",fontSize:"0.9em",fontWeight:600},children:"Set"}),H.jsx("button",{onClick:J,style:{padding:"8px 12px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"6px",cursor:"pointer",color:"#ccc",fontSize:"1.1em"},title:"Randomize",children:"🎲"})]})]})}),H.jsxs("main",{className:"app-main-split",children:[H.jsxs(ce.section,{className:"visualization-area",initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.1},style:{display:"flex",flexDirection:"column",gap:"20px"},children:[H.jsx("div",{style:{flex:1,minHeight:0,position:"relative"},children:y==="array"?H.jsx(tA,{state:F}):H.jsx(eA,{state:F})}),H.jsx(nA,{isPlaying:f,onPlayPause:()=>p(!f),onReset:()=>{p(!1),h(0)},stepIndex:c,maxSteps:xt,onSeek:h,speed:m,onSpeedChange:g})]}),H.jsx(ce.section,{className:"editor-area",initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.5,delay:.1},children:H.jsx(hj,{code:N,onCodeChange:U,onRun:G,activeLine:F?.activeLine,isPlaying:f,language:T,onLanguageChange:lt})})]})]})}class vj extends O.Component{constructor(l){super(l),this.state={hasError:!1,error:null}}static getDerivedStateFromError(l){return{hasError:!0,error:l}}componentDidCatch(l,r){console.error("Uncaught error:",l,r)}render(){return this.state.hasError?H.jsxs("div",{style:{padding:"20px",color:"red"},children:[H.jsx("h1",{children:"Something went wrong."}),H.jsx("pre",{children:this.state.error?.toString()}),H.jsx("pre",{children:this.state.error?.stack})]}):this.props.children}}yS.createRoot(document.getElementById("root")).render(H.jsx(O.StrictMode,{children:H.jsx(vj,{children:H.jsx(yj,{})})}));
