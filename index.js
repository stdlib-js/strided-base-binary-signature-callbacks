// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).callbacks=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var f,a=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[c]=e:delete t[c],r}:function(t){return o.call(t)};function l(t){return"[object Arguments]"===a(t)}f=function(){return l(arguments)}();var p=f,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,b=Object.defineProperty,m=Object.prototype,v=m.toString,g=m.__defineGetter__,h=m.__defineSetter__,d=m.__lookupGetter__,w=m.__lookupSetter__;s=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===v.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(d.call(t,n)||w.call(t,n)?(r=t.__proto__,t.__proto__=m,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&g&&g.call(t,n,e.get),u&&h&&h.call(t,n,e.set),t};var j=s;function E(t,n,e){j(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=r();function T(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===a(t)))}function x(t){return _(t)||T(t)}function P(t){return"number"==typeof t}E(x,"isPrimitive",_),E(x,"isObject",T);var A=Number,I=A.prototype.toString;var V=r();function F(t){return"object"==typeof t&&(t instanceof A||(V?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Number]"===a(t)))}function N(t){return P(t)||F(t)}function k(t){return t!=t}function B(t){return P(t)&&k(t)}function L(t){return F(t)&&k(t.valueOf())}function M(t){return B(t)||L(t)}E(N,"isPrimitive",P),E(N,"isObject",F),E(M,"isPrimitive",B),E(M,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=A.NEGATIVE_INFINITY,R=Math.floor;function G(t){return R(t)===t}function X(t){return t<Y&&t>C&&G(t)}function H(t){return P(t)&&X(t)}function J(t){return F(t)&&X(t.valueOf())}function W(t){return H(t)||J(t)}E(W,"isPrimitive",H),E(W,"isObject",J);var D=Object.prototype.propertyIsEnumerable;var U=!D.call("beep","0");function q(t,n){var e;return null!=t&&(!(e=D.call(t,n))&&U&&x(t)?!B(n=+n)&&H(n)&&n>=0&&n<t.length:e)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===a(t)};var K=p?l:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!q(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}E(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!z(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Z));var $=q((function(){}),"prototype"),tt=!q({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,n,e){var r,o;if(!nt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!H(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(M(n)){for(;o<r;o++)if(M(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var rt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=r();function ct(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===a(t)))}function ft(t){return ot(t)||ct(t)}function at(){return new Function("return this;")()}E(ft,"isPrimitive",ot),E(ft,"isObject",ct);var lt="object"==typeof self?self:null,pt="object"==typeof window?window:null,yt="object"==typeof global?global:null;var st=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return at()}if(lt)return lt;if(pt)return pt;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=st.document&&st.document.childNodes,mt=Int8Array;function vt(){return/^\s*function\s*([^(]*)/i}var gt=/^\s*function\s*([^(]*)/i;function ht(t){var n,e,r,o;if(("Object"===(e=a(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=gt.exec(r.toString()))return n[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}E(vt,"REGEXP",gt);var dt="function"==typeof rt||"object"==typeof mt||"function"==typeof bt?function(t){return ht(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?ht(t).toLowerCase():n};function wt(t){return t.constructor&&t.constructor.prototype===t}var jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===dt(Et))return!1;for(t in Et)try{-1===et(jt,t)&&u(Et,t)&&null!==Et[t]&&"object"===dt(Et[t])&&wt(Et[t])}catch(t){return!0}return!1}(),Ot="undefined"!=typeof window;var St,Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];St=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return K(n)?t(Q.call(n)):t(n)}:t:function(t){var n,e,r,o,i,c,f;if(o=[],K(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!Z(t))return o;e=$&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(n=function(t){if(!1===Ot&&!_t)return wt(t);try{return wt(t)}catch(t){return!1}}(t),f=0;f<Tt.length;f++)c=Tt[f],n&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var xt=St;function Pt(t){return"function"===dt(t)}var At,It=Object.getPrototypeOf;At=Pt(Object.getPrototypeOf)?It:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===a(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Vt=At;var Ft=Object.prototype;function Nt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!z(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Vt(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Pt(n.constructor)&&"[object Function]"===a(n.constructor)&&u(n,"isPrototypeOf")&&Pt(n.isPrototypeOf)&&(n===Ft||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var kt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Bt(){return kt.slice()}var Lt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Mt(){return Lt.slice()}function Yt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ct(t,n,e){j(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}E(Mt,"enum",Yt),function(t,n){var e,r,o;for(e=xt(n),o=0;o<e.length;o++)Ct(t,r=e[o],n[r])}(Mt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Rt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Gt(){return{bool:Rt.bool,int8:Rt.int8,uint8:Rt.uint8,uint8c:Rt.uint8c,int16:Rt.int16,uint16:Rt.uint16,int32:Rt.int32,uint32:Rt.uint32,int64:Rt.int64,uint64:Rt.uint64,float32:Rt.float32,float64:Rt.float64,complex64:Rt.complex64,complex128:Rt.complex128,binary:Rt.binary,generic:Rt.generic,notype:Rt.notype,userdefined_type:Rt.userdefined_type}}E(Bt,"enum",Gt),function(t,n){var e,r,o;for(e=xt(n),o=0;o<e.length;o++)Ct(t,r=e[o],n[r])}(Bt,Gt());var Xt=function(t,n){var e,r,o,i,c,f,a,l=!0;if(!Z(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Nt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!ot(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=xt(t)).length,c={},l)for(a=0;a<r;a++)u(c,i=t[o=e[a]])?(f=c[i],z(f)?c[i].push(o):c[i]=[f,o]):c[i]=o;else for(a=0;a<r;a++)c[t[o=e[a]]]=o;return c}(Gt(),{duplicates:!1});var Ht=Gt();function Jt(t){var n=typeof t;return"string"===n?function(t){var n=Ht[t];return"number"==typeof n?n:null}(t)?t:null:"number"===n?function(t){var n=Xt[t];return"string"==typeof n?n:null}(t):null}var Wt="function"==typeof Math.fround?Math.fround:null,Dt="function"==typeof Float32Array;var Ut="function"==typeof Float32Array?Float32Array:null;var qt,zt="function"==typeof Float32Array?Float32Array:void 0;qt=function(){var t,n,e;if("function"!=typeof Ut)return!1;try{n=new Ut([1,3.14,-3.14,5e40]),e=n,t=(Dt&&e instanceof Float32Array||"[object Float32Array]"===a(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Y}catch(n){t=!1}return t}()?zt:function(){throw new Error("not implemented")};var Kt=new qt(1);var Qt="function"==typeof Wt?Wt:function(t){return Kt[0]=t,Kt[0]};function Zt(t,n){if(!(this instanceof Zt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!P(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!P(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return j(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Qt(t)}),j(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Qt(n)}),this}function $t(t,n){if(!(this instanceof $t))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!P(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!P(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return j(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),j(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n}),this}function tn(t){return H(t)&&t>=0}function nn(t){return J(t)&&t.valueOf()>=0}function en(t){return tn(t)||nn(t)}E(Zt,"BYTES_PER_ELEMENT",4),E(Zt.prototype,"BYTES_PER_ELEMENT",4),E(Zt.prototype,"byteLength",8),E(Zt.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),E(Zt.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),E($t,"BYTES_PER_ELEMENT",8),E($t.prototype,"BYTES_PER_ELEMENT",8),E($t.prototype,"byteLength",16),E($t.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),E($t.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),E(en,"isPrimitive",tn),E(en,"isObject",nn);var rn="number";function on(t,n,e){var r;if(!Pt(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");if(!tn(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!Pt(e))throw new TypeError("invalid argument. Third argument must be a constructor function. Value: `"+e+"`.");return r=[function(){return t()},function(n){typeof n===rn&&(n=new e(n,0));return t(n)},function(n,r){typeof n===rn&&(n=new e(n,0));typeof r===rn&&(r=new e(r,0));return t(n,r)},function(n,r,o){typeof n===rn&&(n=new e(n,0));typeof r===rn&&(r=new e(r,0));typeof o===rn&&(o=new e(o,0));return t(n,r,o)},function(n,r,o,i){typeof n===rn&&(n=new e(n,0));typeof r===rn&&(r=new e(r,0));typeof o===rn&&(o=new e(o,0));typeof i===rn&&(i=new e(i,0));return t(n,r,o,i)},function(n,r,o,i,u){typeof n===rn&&(n=new e(n,0));typeof r===rn&&(r=new e(r,0));typeof o===rn&&(o=new e(o,0));typeof i===rn&&(i=new e(i,0));typeof u===rn&&(u=new e(u,0));return t(n,r,o,i,u)}],n<=5?r[n]:function(){var n,r,o;for(n=[],o=0;o<arguments.length;o++)typeof(r=arguments[o])===rn&&(r=new e(r,0)),n.push(r);return t.apply(null,n)}}var un="complex64",cn="complex128",fn={complex64:Zt,complex128:$t};function an(t,n,e,r){return r===cn?n===un?e===cn||e===un?t[cn]:on(t[cn],2,fn[cn]):n===cn&&(e===cn||e===un)?t[cn]:on(t[cn],2,fn[cn]):r===un?n===cn?e===un||e===cn?t[cn]:on(t[cn],2,fn[cn]):n===un?e===cn?t[cn]:e===un?t[un]:on(t[un],2,fn[un]):e===cn?on(t[cn],2,fn[cn]):on(t[un],2,fn[un]):"generic"===r?n===cn?e===cn||e===un?t[cn]:on(t[cn],2,fn[cn]):n===un?e===un?t[un]:e===cn?t[cn]:on(t[un],2,fn[un]):e===cn?on(t[cn],2,fn[cn]):e===un?on(t[un],2,fn[un]):t.default:t.default}return function(t,n){var e,r,o,i,u;for(e=[],u=0;u<n.length;u+=3)r=Jt(n[u]),o=Jt(n[u+1]),i=Jt(n[u+2]),e.push(an(t,r,o,i));return e}}));
//# sourceMappingURL=index.js.map
