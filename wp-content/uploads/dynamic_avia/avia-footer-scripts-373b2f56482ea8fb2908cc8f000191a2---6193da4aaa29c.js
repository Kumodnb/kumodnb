!function(n,r){var t,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,t=n._,(e=n._=r()).noConflict=function(){return n._=t,e})}(this,function(){var Pn="1.13.1",P="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},U=Array.prototype,on=Object.prototype,Un="undefined"!=typeof Symbol?Symbol.prototype:null,rt=U.push,x=U.slice,S=on.toString,tt=on.hasOwnProperty,I="undefined"!=typeof ArrayBuffer,O="undefined"!=typeof DataView,L=Array.isArray,Wn=Object.keys,qn=Object.create,zn=I&&ArrayBuffer.isView,et=isNaN,ut=isFinite,Ln=!{toString:null}.propertyIsEnumerable("toString"),Cn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],it=Math.pow(2,53)-1;function o(n,r){return r=null==r?n.length-1:+r,function(){for(var i=Math.max(arguments.length-r,0),e=Array(i),t=0;t<i;t++)e[t]=arguments[t+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)};for(var u=Array(r+1),t=0;t<r;t++)u[t]=arguments[t];return u[r]=e,n.apply(this,u)}};function h(n){var r=typeof n;return"function"==r||"object"==r&&!!n};function Kn(n){return void 0===n};function Jn(n){return!0===n||!1===n||"[object Boolean]"===S.call(n)};function t(n){var r="[object "+n+"]";return function(n){return S.call(n)===r}};var en=t("String"),Dn=t("Number"),Kr=t("Date"),Jr=t("RegExp"),nt=t("Error"),Rn=t("Symbol"),Fn=t("ArrayBuffer"),k=t("Function"),D=P.document&&P.document.childNodes,e=k="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof D?function(n){return"function"==typeof n||!1}:k,A=t("Object"),Vn=O&&A(new DataView(new ArrayBuffer(8))),b="undefined"!=typeof Map&&A(new Map),un=t("DataView"),V=Vn?function(n){return null!=n&&e(n.getInt8)&&Fn(n.buffer)}:un,p=L||t("Array");function l(n,r){return null!=n&&tt.call(n,r)};var tn=t("Arguments");!function(){tn(arguments)||(tn=function(n){return l(n,"callee")})}();var rn=tn;function nr(n){return Dn(n)&&et(n)};function rr(n){return function(){return n}};function tr(n){return function(r){r=n(r);return"number"==typeof r&&0<=r&&r<=it}};function er(n){return function(r){return null==r?void 0:r[n]}};var F=er("byteLength"),Lr=tr(F),Cr=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,kn=I?function(n){return zn?zn(n)&&!V(n):Lr(n)&&Cr.test(S.call(n))}:rr(!1),i=er("length");function ur(n,r){r=function(n){for(var r={},e=n.length,t=0;t<e;++t)r[n[t]]=!0;return{contains:function(n){return r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var u=Cn.length,i=n.constructor,o=e(i)&&i.prototype||on,t="constructor";for(l(n,t)&&!r.contains(t)&&r.push(t);u--;)(t=Cn[u])in n&&n[t]!==o[t]&&!r.contains(t)&&r.push(t)};function r(n){if(!h(n))return[];if(Wn)return Wn(n);var r,t=[];for(r in n)l(n,r)&&t.push(r);return Ln&&ur(n,t),t};function ir(n,t){var o=r(t),a=o.length;if(null==n)return!a;for(var i=Object(n),u=0;u<a;u++){var e=o[u];if(t[e]!==i[e]||!(e in i))return!1};return!0};function n(r){return r instanceof n?r:this instanceof n?void(this._wrapped=r):new n(r)};function or(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,F(n))};n.VERSION=Pn,n.prototype.valueOf=n.prototype.toJSON=n.prototype.value=function(){return this._wrapped},n.prototype.toString=function(){return String(this._wrapped)};var Tn="[object DataView]";function an(t,u,i,o){if(t===u)return 0!==t||1/t==1/u;if(null==t||null==u)return!1;if(t!=t)return u!=u;var a=typeof t;return("function"==a||"object"==a||"object"==typeof u)&&function f(t,u,i,o){t instanceof n&&(t=t._wrapped);u instanceof n&&(u=u._wrapped);var c=S.call(t);if(c!==S.call(u))return!1;if(Vn&&"[object Object]"==c&&V(t)){if(!V(u))return!1;c=Tn};switch(c){case"[object RegExp]":case"[object String]":return""+t==""+u;case"[object Number]":return+t!=+t?+u!=+u:0==+t?1/+t==1/u:+t==+u;case"[object Date]":case"[object Boolean]":return+t==+u;case"[object Symbol]":return Un.valueOf.call(t)===Un.valueOf.call(u);case"[object ArrayBuffer]":case Tn:return f(or(t),or(u),i,o)};var h="[object Array]"===c;if(!h&&kn(t)){var s=F(t);if(s!==F(u))return!1;if(t.buffer===u.buffer&&t.byteOffset===u.byteOffset)return!0;h=!0};if(!h){if("object"!=typeof t||"object"!=typeof u)return!1;c=t.constructor,s=u.constructor;if(c!==s&&!(e(c)&&c instanceof c&&e(s)&&s instanceof s)&&"constructor"in t&&"constructor"in u)return!1};i=i||[];o=o||[];var a=i.length;for(;a--;)if(i[a]===t)return o[a]===u;i.push(t);o.push(u);if(h){if((a=t.length)!==u.length)return!1;for(;a--;)if(!an(t[a],u[a],i,o))return!1}
else{var p,v=r(t);if(a=v.length,r(u).length!==a)return!1;for(;a--;)if(p=v[a],!l(u,p)||!an(t[p],u[p],i,o))return!1};i.pop();o.pop();return!0}(t,u,i,o)};function M(n){if(!h(n))return[];var t,r=[];for(t in n)r.push(t);return Ln&&ur(n,r),r};function fn(n){var r=i(n);return function(t){if(null==t)return!1;var o=M(t);if(i(o))return!1;for(var u=0;u<r;u++)if(!e(t[n[u]]))return!1;return n!==In||!e(t[J])}};var J="forEach",j=["clear","delete"],T=["get","has","set"],z=j.concat(J,T),In=j.concat(T),nn=["add"].concat(j,J,"has"),Ur=b?fn(z):t("Map"),Wr=b?fn(In):t("WeakMap"),qr=b?fn(nn):t("Set"),zr=t("WeakSet");function v(n){for(var e=r(n),u=e.length,i=Array(u),t=0;t<u;t++)i[t]=n[e[t]];return i};function ar(n){for(var u={},e=r(n),t=0,i=e.length;t<i;t++)u[n[e[t]]]=e[t];return u};function cn(n){var r,t=[];for(r in n)e(n[r])&&t.push(r);return t.sort()};function ln(n,r){return function(t){var f=arguments.length;if(r&&(t=Object(t)),f<2||null==t)return t;for(var i=1;i<f;i++)for(var o=arguments[i],a=n(o),c=a.length,u=0;u<c;u++){var e=a[u];r&&void 0!==t[e]||(t[e]=o[e])};return t}};var Bn=ln(M),R=ln(r),Nn=ln(M,!0);function fr(n){if(!h(n))return{};if(qn)return qn(n);var r=function(){};r.prototype=n;n=new r;return r.prototype=null,n};function cr(n){return h(n)?p(n)?n.slice():Bn({},n):n};function lr(n){return p(n)?n:[n]};function E(r){return n.toPath(r)};function sn(n,r){for(var e=r.length,t=0;t<e;t++){if(null==n)return;n=n[r[t]]};return e?n:void 0};function sr(n,r,t){r=sn(n,E(r));return Kn(r)?t:r};function pn(n){return n};function B(n){return n=R({},n),function(r){return ir(r,n)}};function hn(n){return n=E(n),function(r){return sn(r,n)}};function N(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}};return function(){return n.apply(r,arguments)}};function pr(n,r,t){return null==n?pn:e(n)?N(n,r,t):(h(n)&&!p(n)?B:hn)(n)};function vn(n,r){return pr(n,r,1/0)};function a(r,t,e){return n.iteratee!==vn?n.iteratee(r,t):pr(r,t,e)};function hr(){};function gn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))};n.toPath=lr,n.iteratee=vn;var w=Date.now||function(){return(new Date).getTime()};function vr(n){function i(r){return n[r]};var t="(?:"+r(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,i):n}};var s={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#x27;","`":"&#x60;"},Dr=vr(s),Rr=vr(ar(s)),Fr=n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},K=/(.)^/,Vr={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Pr=/\\|'|\r|\n|\u2028|\u2029/g;function ot(n){return"\\"+Vr[n]};var Tr=/^\s*(\w|\$)+\s*$/,kr=0;function gr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);t=fr(n.prototype),u=n.apply(t,u);return h(u)?u:t};var d=o(function(n,r){var e=d.placeholder,t=function(){for(var i=0,a=r.length,o=Array(a),u=0;u<a;u++)o[u]=r[u]===e?arguments[i++]:r[u];for(;i<arguments.length;)o.push(arguments[i++]);return gr(n,t,this,this,o)};return t});d.placeholder=n;var En=o(function(n,r,t){if(!e(n))throw new TypeError("Bind must be called on a function");var u=o(function(e){return gr(n,u,r,this,t.concat(e))});return u}),u=tr(i);function g(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}
else r=1/0;for(var a=e.length,f=0,s=i(n);f<s;f++){var o=n[f];if(u(o)&&(p(o)||rn(o)))if(1<r)g(o,r-1,t,e),a=e.length;else for(var c=0,l=o.length;c<l;)e[a++]=o[c++];else t||(e[a++]=o)};return e};var Nr=o(function(n,r){var t=(r=g(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=En(n[e],n)};return n}),Mn=o(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Ir=d(Mn,n,1);function yn(n){return function(){return!n.apply(this,arguments)}};function yr(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}};P=d(yr,2);function dr(n,t,e){t=a(t,e);for(var u,o=r(n),i=0,f=o.length;i<f;i++)if(t(n[u=o[i]],u,n))return u};function mr(n){return function(r,t,e){t=a(t,e);for(var o=i(r),u=0<n?0:o-1;0<=u&&u<o;u+=n)if(t(r[u],u,r))return u;return-1}};var C=mr(1),D=mr(-1);function br(n,r,t,e){for(var c=(t=a(t,e,1))(r),u=0,f=i(n);u<f;){var o=Math.floor((u+f)/2);t(n[o])<c?u=o+1:f=o};return u};function jr(n,r,t){return function(e,u,o){var f=0,a=i(e);if("number"==typeof o)0<n?f=0<=o?o:Math.max(o+a,f):a=0<=o?Math.min(o+1,a):o+a+1;else if(t&&o&&a)return e[o=t(e,u)]===u?o:-1;if(u!=u)return 0<=(o=r(x.call(e,f,a),nr))?o+f:-1;for(o=0<n?f:a-1;0<=o&&o<a;o+=n)if(e[o]===u)return o;return-1}};var On=jr(1,C,br),k=jr(-1,D);function dn(n,r,t){t=(u(n)?C:dr)(n,r,t);if(void 0!==t&&-1!==t)return n[t]};function f(n,t,e){if(t=N(t,e),u(n))for(i=0,a=n.length;i<a;i++)t(n[i],i,n);else for(var o=r(n),i=0,a=o.length;i<a;i++)t(n[o[i]],o[i],n);return n};function y(n,t,e){t=a(t,e);for(var o=!u(n)&&r(n),c=(o||n).length,l=Array(c),i=0;i<c;i++){var f=o?o[i]:i;l[i]=t(n[f],f,n)};return l};function wr(n){return function(t,e,i,o){var a=3<=arguments.length;return function(t,e,i,o){var f=!u(t)&&r(t),l=(f||t).length,a=0<n?0:l-1;for(o||(i=t[f?f[a]:a],a+=n);0<=a&&a<l;a+=n){var c=f?f[a]:a;i=e(i,t[c],c,t)};return i}(t,N(e,o,4),i,a)}};O=wr(1),A=wr(-1);function m(n,r,t){var e=[];return r=a(r,t),f(n,function(n,t,u){r(n,t,u)&&e.push(n)}),e};function Ar(n,t,e){t=a(t,e);for(var o=!u(n)&&r(n),c=(o||n).length,i=0;i<c;i++){var f=o?o[i]:i;if(!t(n[f],f,n))return!1};return!0};function xr(n,t,e){t=a(t,e);for(var o=!u(n)&&r(n),c=(o||n).length,i=0;i<c;i++){var f=o?o[i]:i;if(t(n[f],f,n))return!0};return!1};function c(n,r,t,e){return u(n)||(n=v(n)),0<=On(n,r,t="number"!=typeof t||e?0:t)};un=o(function(n,r,t){var u,i;return e(r)?i=r:(r=E(r),u=r.slice(0,-1),r=r[r.length-1]),y(n,function(n){var e=i;if(!e){if(null==(n=u&&u.length?sn(n,u):n))return;e=n[r]};return null==e?e:e.apply(n,t)})});function mn(n,r){return y(n,hn(r))};function Sr(n,r,t){var c,i,e=-1/0,l=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var o=0,s=(n=u(n)?n:v(n)).length;o<s;o++)null!=(c=n[o])&&e<c&&(e=c);else r=a(r,t),f(n,function(n,t,u){i=r(n,t,u),(l<i||i===-1/0&&e===-1/0)&&(e=n,l=i)});return e};function Or(n,r,t){if(null==r||t)return(n=!u(n)?v(n):n)[gn(n.length-1)];var e=(u(n)?cr:v)(n),n=i(e);r=Math.max(Math.min(r,n),0);for(var c=n-1,o=0;o<r;o++){var a=gn(o,c),f=e[o];e[o]=e[a],e[a]=f};return e.slice(0,r)};function W(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=a(e,u),f(t,function(r,u){u=e(r,u,t);n(i,r,u)}),i}};var L=W(function(n,r,t){l(n,t)?n[t].push(r):n[t]=[r]}),I=W(function(n,r,t){n[t]=r}),T=W(function(n,r,t){l(n,t)?n[t]++:n[t]=1}),j=W(function(n,r,t){n[t?0:1].push(r)},!0),Br=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function at(n,r,t){return r in t};var Sn=o(function(n,r){var o={},t=r[0];if(null==n)return o;e(t)?(1<r.length&&(t=N(t,r[1])),r=M(n)):(t=at,r=g(r,!1,!1),n=Object(n));for(var i=0,f=r.length;i<f;i++){var u=r[i],a=n[u];t(a,u,n)&&(o[u]=a)};return o}),z=o(function(n,r){var u,t=r[0];return e(t)?(t=yn(t),1<r.length&&(u=r[1])):(r=y(g(r,!1,!1),String),t=function(n,t){return!c(r,t)}),Sn(n,t,u)});function Mr(n,r,t){return x.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))};function bn(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:Mr(n,n.length-r)};function q(n,r,t){return x.call(n,null==r||t?1:r)};var xn=o(function(n,r){return r=g(r,!0,!0),m(n,function(n){return!c(r,n)})}),b=o(function(n,r){return xn(n,r)});function jn(n,r,t,e){Jn(r)||(e=t,t=r,r=!1),null!=t&&(t=a(t,e));for(var o=[],s=[],f=0,p=i(n);f<p;f++){var u=n[f],l=t?t(u,f,n):u;r&&!t?(f&&s===l||o.push(u),s=l):t?c(s,l)||(s.push(l),o.push(u)):c(o,u)||o.push(u)};return o};nn=o(function(n){return jn(g(n,!0,!0))});function wn(n){for(var t=n&&Sr(n,i).length||0,e=Array(t),r=0;r<t;r++)e[r]=mn(n,r);return e};s=o(wn);function An(r,t){return r._chain?n(t).chain():t};function Er(r){return f(cn(r),function(t){var e=n[t]=r[t];n.prototype[t]=function(){var r=[this._wrapped];return rt.apply(r,arguments),An(this,e.apply(n,r))}}),n};f(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=U[r];n.prototype[r]=function(){var n=this._wrapped;return null!=n&&(t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0]),An(this,n)}}),f(["concat","join","slice"],function(r){var t=U[r];n.prototype[r]=function(){var n=this._wrapped;return An(this,n=null!=n?t.apply(n,arguments):n)}});s=Er({__proto__:null,VERSION:Pn,restArguments:o,isObject:h,isNull:function(n){return null===n},isUndefined:Kn,isBoolean:Jn,isElement:function(n){return!(!n||1!==n.nodeType)},isString:en,isNumber:Dn,isDate:Kr,isRegExp:Jr,isError:nt,isSymbol:Rn,isArrayBuffer:Fn,isDataView:V,isArray:p,isFunction:e,isArguments:rn,isFinite:function(n){return!Rn(n)&&ut(n)&&!isNaN(parseFloat(n))},isNaN:nr,isTypedArray:kn,isEmpty:function(n){if(null==n)return!0;var t=i(n);return"number"==typeof t&&(p(n)||en(n)||rn(n))?0===t:0===i(r(n))},isMatch:ir,isEqual:function(n,r){return an(n,r)},isMap:Ur,isWeakMap:Wr,isSet:qr,isWeakSet:zr,keys:r,allKeys:M,values:v,pairs:function(n){for(var e=r(n),u=e.length,i=Array(u),t=0;t<u;t++)i[t]=[e[t],n[e[t]]];return i},invert:ar,functions:cn,methods:cn,extend:Bn,extendOwn:R,assign:R,defaults:Nn,create:function(n,r){return n=fr(n),r&&R(n,r),n},clone:cr,tap:function(n,r){return r(n),n},get:sr,has:function(n,r){for(var u=(r=E(r)).length,t=0;t<u;t++){var e=r[t];if(!l(n,e))return!1;n=n[e]};return!!u},mapObject:function(n,t,e){t=a(t,e);for(var o=r(n),c=o.length,f={},i=0;i<c;i++){var u=o[i];f[u]=t(n[u],u,n)};return f},identity:pn,constant:rr,noop:hr,toPath:lr,property:hn,propertyOf:function(n){return null==n?hr:function(r){return sr(n,r)}},matcher:B,matches:B,times:function(n,r,t){var u=Array(Math.max(0,n));r=N(r,t,1);for(var e=0;e<n;e++)u[e]=r(e);return u},random:gn,now:w,escape:Dr,unescape:Rr,templateSettings:Fr,template:function(r,t,e){t=Nn({},t=!t&&e?e:t,n.templateSettings);var i,e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),o=0,u="__p+='";if(r.replace(e,function(n,t,e,i,a){return u+=r.slice(o,a).replace(Pr,ot),o=a+n.length,t?u+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?u+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(u+="';\n"+i+"\n__p+='"),n}),u+="';\n",e=t.variable){if(!Tr.test(e))throw new Error("variable is not a bare identifier: "+e)}
else u="with(obj||{}){\n"+u+"}\n",e="obj";u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{i=new Function(e,"_",u)}catch(a){throw a.source=u,a};return(t=function(r){return i.call(this,r,n)}).source="function("+e+"){\n"+u+"}",t},result:function(n,r,t){var o=(r=E(r)).length;if(!o)return e(t)?t.call(n):t;for(var i=0;i<o;i++){var u=null==n?void 0:n[r[i]];void 0===u&&(u=t,i=o),n=e(u)?u.call(n):u};return n},uniqueId:function(n){var r=++kr+"";return n?n+r:r},chain:function(r){return(r=n(r))._chain=!0,r},iteratee:vn,partial:d,bind:En,bindAll:Nr,memoize:function(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return l(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},delay:Mn,defer:Ir,throttle:function(n,r,t){var e,u,i,a,o=0;function c(){o=!1===t.leading?0:w(),e=null,a=n.apply(u,i),e||(u=i=null)};function f(){var l=w();o||!1!==t.leading||(o=l);var f=r-(l-o);return u=this,i=arguments,f<=0||r<f?(e&&(clearTimeout(e),e=null),o=l,a=n.apply(u,i),e||(u=i=null)):e||!1===t.trailing||(e=setTimeout(c,f)),a};return t=t||{},f.cancel=function(){clearTimeout(e),o=0,e=u=i=null},f},debounce:function(n,r,t){var e,f,u,a,i,c=function(){var o=w()-f;o<r?e=setTimeout(c,r-o):(e=null,t||(a=n.apply(i,u)),e||(u=i=null))},l=o(function(o){return i=this,u=o,f=w(),e||(e=setTimeout(c,r),t&&(a=n.apply(i,u))),a});return l.cancel=function(){clearTimeout(e),e=u=i=null},l},wrap:function(n,r){return d(r,n)},negate:yn,compose:function(){var n=arguments,r=n.length-1;return function(){for(var e=r,t=n[r].apply(this,arguments);e--;)t=n[e].call(this,t);return t}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:yr,once:P,findKey:dr,findIndex:C,findLastIndex:D,sortedIndex:br,indexOf:On,lastIndexOf:k,find:dn,detect:dn,findWhere:function(n,r){return dn(n,B(r))},each:f,forEach:f,map:y,collect:y,reduce:O,foldl:O,inject:O,reduceRight:A,foldr:A,filter:m,select:m,reject:function(n,r,t){return m(n,yn(a(r)),t)},every:Ar,all:Ar,some:xr,any:xr,contains:c,includes:c,include:c,invoke:un,pluck:mn,where:function(n,r){return m(n,B(r))},max:Sr,min:function(n,r,t){var o,c,e=1/0,l=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var i=0,s=(n=u(n)?n:v(n)).length;i<s;i++)null!=(o=n[i])&&o<e&&(e=o);else r=a(r,t),f(n,function(n,t,u){((c=r(n,t,u))<l||c===1/0&&e===1/0)&&(e=n,l=c)});return e},shuffle:function(n){return Or(n,1/0)},sample:Or,sortBy:function(n,r,t){var e=0;return r=a(r,t),mn(y(n,function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1};return n.index-r.index}),"value")},groupBy:L,indexBy:I,countBy:T,partition:j,toArray:function(n){return n?p(n)?x.call(n):en(n)?n.match(Br):u(n)?y(n,pn):v(n):[]},size:function(n){return null==n?0:(u(n)?n:r(n)).length},pick:Sn,omit:z,first:bn,head:bn,take:bn,initial:Mr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:q(n,Math.max(0,n.length-r))},rest:q,tail:q,drop:q,compact:function(n){return m(n,Boolean)},flatten:function(n,r){return g(n,r,!1)},without:b,uniq:jn,unique:jn,union:nn,intersection:function(n){for(var e=[],o=arguments.length,u=0,a=i(n);u<a;u++){var t=n[u];if(!c(e,t)){for(var r=1;r<o&&c(arguments[r],t);r++);r===o&&e.push(t)}};return e},difference:xn,unzip:wn,transpose:wn,zip:s,object:function(n,r){for(var e={},t=0,u=i(n);t<u;t++)r?e[n[t]]=r[t]:e[n[t][0]]=n[t][1];return e},range:function(n,r,t){null==r&&(r=n||0,n=0),t=t||(r<n?-1:1);for(var u=Math.max(Math.ceil((r-n)/t),0),i=Array(u),e=0;e<u;e++,n+=t)i[e]=n;return i},chunk:function(n,r){if(null==r||r<1)return[];for(var e=[],t=0,u=n.length;t<u;)e.push(x.call(n,t,t+=r));return e},mixin:Er,default:n});return s._=s});!function(e,t){if('function'==typeof define&&define.amd)define('hoverintent',['module'],t);else if('undefined'!=typeof exports)t(module);else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){'use strict';var t=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])};return e};e.exports=function(e,i,d){function y(e,t){return n&&(n=clearTimeout(n)),c=0,r?void 0:d.call(e,t)};function m(e){v=e.clientX,a=e.clientY};function h(e,t){if(n&&(n=clearTimeout(n)),Math.abs(f-v)+Math.abs(l-a)<o.sensitivity)return c=1,r?void 0:i.call(e,t);f=v,l=a,n=setTimeout(function(){h(e,t)},o.interval)};function E(t){return u=!0,n&&(n=clearTimeout(n)),e.removeEventListener('mousemove',m,!1),1!==c&&(f=t.clientX,l=t.clientY,e.addEventListener('mousemove',m,!1),n=setTimeout(function(){h(e,t)},o.interval)),this};function L(t){return u=!1,n&&(n=clearTimeout(n)),e.removeEventListener('mousemove',m,!1),1===c&&(n=setTimeout(function(){y(e,t)},o.timeout)),this};function p(t){u||(r=!0,i.call(e,t))};function T(t){!u&&r&&(r=!1,d.call(e,t))};function F(){e.addEventListener('focus',p,!1),e.addEventListener('blur',T,!1)};function b(){e.removeEventListener('focus',p,!1),e.removeEventListener('blur',T,!1)};var v,a,f,l,u=!1,r=!1,s={},c=0,n=0,o={sensitivity:7,interval:100,timeout:0,handleFocus:!1};return s.options=function(e){var n=e.handleFocus!==o.handleFocus;return o=t({},o,e),n&&(o.handleFocus?F():b()),s},s.remove=function(){e&&(e.removeEventListener('mouseover',E,!1),e.removeEventListener('mouseout',L,!1),b())},e&&(e.addEventListener('mouseover',E,!1),e.addEventListener('mouseout',L,!1)),s}});(function(o){'use strict';var a=o('.has-background, .has-text-color');a.each(function(t){var a=o(this);if(!(a.hasClass('has-background')||a.hasClass('has-text-color'))){return};var c=a.attr('class').split(/\s+/),r='',e='';if(a.hasClass('has-background')){o.each(c,function(t,o){o=o.trim().toLowerCase();if(0==o.indexOf('has-col-')&&-1!=o.indexOf('-background-color')){r=o.replace('has-col-','');r=r.replace('-background-color','');r=r.replace(/-|[^0-9a-fA-F]/g,'');if(r.length==3||r.length==6){a.css({'background-color':'','border-color':''});e='undefined'!=typeof a.attr('style')?a.attr('style'):'';a.attr('style',e+' background-color: #'+r+'; border-color: #'+r+';')}}})};if(a.hasClass('has-text-color')){o.each(c,function(t,o){o=o.trim().toLowerCase();if(0==o.indexOf('has-col-')&&-1==o.indexOf('-background-color')&&-1!=o.indexOf('-color')){var r=o.replace('has-col-','');r=r.replace('-color','');r=r.replace(/-|[^0-9a-fA-F]/g,'');if(r.length==3||r.length==6){a.css('color','');e='undefined'!=typeof a.attr('style')?a.attr('style'):'';a.attr('style',e+' color: #'+r+';')}}})}})})(jQuery);