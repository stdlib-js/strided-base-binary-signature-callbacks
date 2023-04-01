// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[f],n=u(t,f);try{t[f]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[f]=e:delete t[f],r}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===c(t)}var l=function(){return a(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,s=Object.defineProperty,b=Object.prototype,m=b.toString,v=b.__defineGetter__,g=b.__defineSetter__,h=b.__lookupGetter__,w=b.__lookupSetter__;y=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?s:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===m.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===m.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(h.call(t,n)||w.call(t,n)?(r=t.__proto__,t.__proto__=b,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&v&&v.call(t,n,e.get),u&&g&&g.call(t,n,e.set),t};var d=y;function j(t,n,e){d(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function E(t){return"string"==typeof t}var _=String.prototype.valueOf;var O=r();function S(t){return"object"==typeof t&&(t instanceof String||(O?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object String]"===c(t)))}function T(t){return E(t)||S(t)}function x(t){return"number"==typeof t}j(T,"isPrimitive",E),j(T,"isObject",S);var P=Number,A=P.prototype.toString;var I=r();function V(t){return"object"==typeof t&&(t instanceof P||(I?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===c(t)))}function F(t){return x(t)||V(t)}function N(t){return t!=t}function B(t){return x(t)&&N(t)}function k(t){return V(t)&&N(t.valueOf())}function L(t){return B(t)||k(t)}j(F,"isPrimitive",x),j(F,"isObject",V),j(L,"isPrimitive",B),j(L,"isObject",k);var M=Number.POSITIVE_INFINITY,Y=P.NEGATIVE_INFINITY,C=Math.floor;function R(t){return C(t)===t}function G(t){return t<M&&t>Y&&R(t)}function X(t){return x(t)&&G(t)}function H(t){return V(t)&&G(t.valueOf())}function J(t){return X(t)||H(t)}j(J,"isPrimitive",X),j(J,"isObject",H);var W=Object.prototype.propertyIsEnumerable;var D=!W.call("beep","0");function U(t,n){var e;return null!=t&&(!(e=W.call(t,n))&&D&&T(t)?!B(n=+n)&&X(n)&&n>=0&&n<t.length:e)}var q=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};var z=l?a:function(t){return null!==t&&"object"==typeof t&&!q(t)&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!U(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}j(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!q(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Q));var Z=U((function(){}),"prototype"),$=!U({toString:null},"toString");function tt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,n,e){var r,o;if(!tt(t)&&!E(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!X(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(L(n)){for(;o<r;o++)if(L(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var et=/./;function rt(t){return"boolean"==typeof t}var ot=Boolean.prototype.toString;var it=r();function ut(t){return"object"==typeof t&&(t instanceof Boolean||(it?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function ft(t){return rt(t)||ut(t)}function ct(){return new Function("return this;")()}j(ft,"isPrimitive",rt),j(ft,"isObject",ut);var at="object"==typeof self?self:null,lt="object"==typeof window?window:null,pt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof pt?pt:null;var st=function(t){if(arguments.length){if(!rt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ct()}if(at)return at;if(lt)return lt;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=st.document&&st.document.childNodes,mt=Int8Array;function vt(){return/^\s*function\s*([^(]*)/i}var gt=/^\s*function\s*([^(]*)/i;function ht(t){var n,e,r,o;if(("Object"===(e=c(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=gt.exec(r.toString()))return n[1]}return Q(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}j(vt,"REGEXP",gt);var wt="function"==typeof et||"object"==typeof mt||"function"==typeof bt?function(t){return ht(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?ht(t).toLowerCase():n};function dt(t){return t.constructor&&t.constructor.prototype===t}var jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===wt(Et))return!1;for(t in Et)try{-1===nt(jt,t)&&u(Et,t)&&null!==Et[t]&&"object"===wt(Et[t])&&dt(Et[t])}catch(t){return!0}return!1}(),Ot="undefined"!=typeof window;var St=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Tt=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return z(n)?t(K.call(n)):t(n)}:t:function(t){var n,e,r,o,i,f,c;if(o=[],z(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Q(t))return o;e=Z&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if($)for(n=function(t){if(!1===Ot&&!_t)return dt(t);try{return dt(t)}catch(t){return!1}}(t),c=0;c<St.length;c++)f=St[c],n&&"constructor"===f||!u(t,f)||o.push(String(f));return o};function xt(t){return"function"===wt(t)}var Pt,At=Object.getPrototypeOf;Pt=xt(Object.getPrototypeOf)?At:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===c(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var It=Pt;var Vt=Object.prototype;function Ft(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!q(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),It(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&xt(n.constructor)&&"[object Function]"===c(n.constructor)&&u(n,"isPrototypeOf")&&xt(n.isPrototypeOf)&&(n===Vt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Nt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Bt(){return Nt.slice()}var kt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return kt.slice()}function Mt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yt(t,n,e){d(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}j(Lt,"enum",Mt),function(t,n){var e,r,o;for(e=Tt(n),o=0;o<e.length;o++)Yt(t,r=e[o],n[r])}(Lt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ct={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Rt(){return{bool:Ct.bool,int8:Ct.int8,uint8:Ct.uint8,uint8c:Ct.uint8c,int16:Ct.int16,uint16:Ct.uint16,int32:Ct.int32,uint32:Ct.uint32,int64:Ct.int64,uint64:Ct.uint64,float32:Ct.float32,float64:Ct.float64,complex64:Ct.complex64,complex128:Ct.complex128,binary:Ct.binary,generic:Ct.generic,notype:Ct.notype,userdefined_type:Ct.userdefined_type}}j(Bt,"enum",Rt),function(t,n){var e,r,o;for(e=Tt(n),o=0;o<e.length;o++)Yt(t,r=e[o],n[r])}(Bt,Rt());var Gt=function(t,n){var e,r,o,i,f,c,a,l=!0;if(!Q(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Ft(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!rt(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Tt(t)).length,f={},l)for(a=0;a<r;a++)u(f,i=t[o=e[a]])?(c=f[i],q(c)?f[i].push(o):f[i]=[c,o]):f[i]=o;else for(a=0;a<r;a++)f[t[o=e[a]]]=o;return f}(Rt(),{duplicates:!1});var Xt=Rt();function Ht(t){var n=typeof t;return"string"===n?function(t){var n=Xt[t];return"number"==typeof n?n:null}(t)?t:null:"number"===n?function(t){var n=Gt[t];return"string"==typeof n?n:null}(t):null}var Jt="function"==typeof Math.fround?Math.fround:null,Wt="function"==typeof Float32Array;var Dt="function"==typeof Float32Array?Float32Array:null;var Ut,qt="function"==typeof Float32Array?Float32Array:void 0;Ut=function(){var t,n,e;if("function"!=typeof Dt)return!1;try{n=new Dt([1,3.14,-3.14,5e40]),e=n,t=(Wt&&e instanceof Float32Array||"[object Float32Array]"===c(e))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===M}catch(n){t=!1}return t}()?qt:function(){throw new Error("not implemented")};var zt=new Ut(1);var Kt="function"==typeof Jt?Jt:function(t){return zt[0]=t,zt[0]};function Qt(t,n){if(!(this instanceof Qt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!x(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!x(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return d(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Kt(t)}),d(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Kt(n)}),this}function Zt(t,n){if(!(this instanceof Zt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!x(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!x(n))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+n+"`.");return d(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),d(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:n}),this}function $t(t){return X(t)&&t>=0}function tn(t){return H(t)&&t.valueOf()>=0}function nn(t){return $t(t)||tn(t)}j(Qt,"BYTES_PER_ELEMENT",4),j(Qt.prototype,"BYTES_PER_ELEMENT",4),j(Qt.prototype,"byteLength",8),j(Qt.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),j(Qt.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),j(Zt,"BYTES_PER_ELEMENT",8),j(Zt.prototype,"BYTES_PER_ELEMENT",8),j(Zt.prototype,"byteLength",16),j(Zt.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),j(Zt.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),j(nn,"isPrimitive",$t),j(nn,"isObject",tn);var en="number";function rn(t,n,e){var r;if(!xt(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");if(!$t(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!xt(e))throw new TypeError("invalid argument. Third argument must be a constructor function. Value: `"+e+"`.");return r=[function(){return t()},function(n){typeof n===en&&(n=new e(n,0));return t(n)},function(n,r){typeof n===en&&(n=new e(n,0));typeof r===en&&(r=new e(r,0));return t(n,r)},function(n,r,o){typeof n===en&&(n=new e(n,0));typeof r===en&&(r=new e(r,0));typeof o===en&&(o=new e(o,0));return t(n,r,o)},function(n,r,o,i){typeof n===en&&(n=new e(n,0));typeof r===en&&(r=new e(r,0));typeof o===en&&(o=new e(o,0));typeof i===en&&(i=new e(i,0));return t(n,r,o,i)},function(n,r,o,i,u){typeof n===en&&(n=new e(n,0));typeof r===en&&(r=new e(r,0));typeof o===en&&(o=new e(o,0));typeof i===en&&(i=new e(i,0));typeof u===en&&(u=new e(u,0));return t(n,r,o,i,u)}],n<=5?r[n]:function(){var n,r,o;for(n=[],o=0;o<arguments.length;o++)typeof(r=arguments[o])===en&&(r=new e(r,0)),n.push(r);return t.apply(null,n)}}var on="complex64",un="complex128",fn={complex64:Qt,complex128:Zt};function cn(t,n,e,r){return r===un?n===on?e===un||e===on?t[un]:rn(t[un],2,fn[un]):n===un&&(e===un||e===on)?t[un]:rn(t[un],2,fn[un]):r===on?n===un?e===on||e===un?t[un]:rn(t[un],2,fn[un]):n===on?e===un?t[un]:e===on?t[on]:rn(t[on],2,fn[on]):e===un?rn(t[un],2,fn[un]):rn(t[on],2,fn[on]):"generic"===r?n===un?e===un||e===on?t[un]:rn(t[un],2,fn[un]):n===on?e===on?t[on]:e===un?t[un]:rn(t[on],2,fn[on]):e===un?rn(t[un],2,fn[un]):e===on?rn(t[on],2,fn[on]):t.default:t.default}function an(t,n){var e,r,o,i,u;for(e=[],u=0;u<n.length;u+=3)r=Ht(n[u]),o=Ht(n[u+1]),i=Ht(n[u+2]),e.push(cn(t,r,o,i));return e}export{an as default};
//# sourceMappingURL=mod.js.map
