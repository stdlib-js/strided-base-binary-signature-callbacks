// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&o.call(t,e)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l=r()?function(t){var e,n,r;if(null==t)return i.call(t);n=t[c],e=u(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return r=i.call(t),e?t[c]=n:delete t[c],r}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function g(t){return"number"==typeof t}function b(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function m(t,e,n){var r=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+b(i):b(i)+t,r&&(t="-"+t)),t}var h=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function v(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!g(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=m(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=m(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===d.call(t.specifier)?d.call(n):h.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,E=String.prototype.toLowerCase,x=String.prototype.toUpperCase,_=String.prototype.replace,j=/e\+(\d)$/,S=/e-(\d)$/,O=/^(\d+)$/,T=/^(\d+)e/,k=/\.0$/,V=/\.0*e/,A=/(\..*[^0])0*e/;function F(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!g(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":w(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=_.call(n,A,"$1e"),n=_.call(n,V,"e"),n=_.call(n,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=_.call(n,j,"e+0$1"),n=_.call(n,S,"e-0$1"),t.alternate&&(n=_.call(n,O,"$1."),n=_.call(n,T,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===x.call(t.specifier)?x.call(n):E.call(n)}function I(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}var P=String.fromCharCode,N=Array.isArray;function L(t){return t!=t}function C(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function R(t){var e,n,r,i,o,u,a,c,l,f,p,s,y;if(!N(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(r=t[c],"string"==typeof r)u+=r;else{if(e=void 0!==r.precision,!(r=C(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),n=r.flags,l=0;l<n.length;l++)switch(i=n.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,L(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,L(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=v(r);break;case"s":r.maxWidth=e?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!L(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=L(o)?String(r.arg):P(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=F(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(f=r.arg,p=r.width,s=r.padRight,y=void 0,(y=p-f.length)<0?f:f=s?f+I(y):I(y)+f)),u+=r.arg||"",a+=1}return u}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function $(t){var e,n,r,i;for(n=[],i=0,r=B.exec(t);r;)(e=t.slice(i,B.lastIndex-r[0].length)).length&&n.push(e),n.push(M(r)),i=B.lastIndex,r=B.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function Y(t){var e,n;if("string"!=typeof t)throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[$(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return R.apply(null,e)}var G,W=Object.prototype,X=W.toString,Z=W.__defineGetter__,U=W.__defineSetter__,H=W.__lookupGetter__,J=W.__lookupSetter__;G=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?y:function(t,e,n){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===X.call(n))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(t,e)||J.call(t,e)?(r=t.__proto__,t.__proto__=W,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(t,e,n.get),u&&U&&U.call(t,e,n.set),t};var z=G;function D(t,e,n){z(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function q(t){return"string"==typeof t}var K=String.prototype.valueOf;var Q=r();function tt(t){return"object"==typeof t&&(t instanceof String||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function et(t){return q(t)||tt(t)}function nt(t){return"number"==typeof t}D(et,"isPrimitive",q),D(et,"isObject",tt);var rt=Number,it=rt.prototype.toString;var ot=r();function ut(t){return"object"==typeof t&&(t instanceof rt||(ot?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function at(t){return nt(t)||ut(t)}function ct(t){return t!=t}function lt(t){return nt(t)&&ct(t)}function ft(t){return ut(t)&&ct(t.valueOf())}function pt(t){return lt(t)||ft(t)}D(at,"isPrimitive",nt),D(at,"isObject",ut),D(pt,"isPrimitive",lt),D(pt,"isObject",ft);var st=Number.POSITIVE_INFINITY,yt=rt.NEGATIVE_INFINITY,gt=Math.floor;function bt(t){return gt(t)===t}function mt(t){return t<st&&t>yt&&bt(t)}function ht(t){return nt(t)&&mt(t)}function dt(t){return ut(t)&&mt(t.valueOf())}function vt(t){return ht(t)||dt(t)}D(vt,"isPrimitive",ht),D(vt,"isObject",dt);var wt=Object.prototype.propertyIsEnumerable;var Et=!wt.call("beep","0");function xt(t,e){var n;return null!=t&&(!(n=wt.call(t,e))&&Et&&et(t)?!lt(e=+e)&&ht(e)&&e>=0&&e<t.length:n)}var _t=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var jt=p?f:function(t){return null!==t&&"object"==typeof t&&!_t(t)&&"number"==typeof t.length&&bt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!xt(t,"callee")},St=Array.prototype.slice;function Ot(t){return null!==t&&"object"==typeof t}D(Ot,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!_t(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Ot));var Tt=xt((function(){}),"prototype"),kt=!xt({toString:null},"toString"),Vt=9007199254740991;function At(t,e,n){var r,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&bt(o.length)&&o.length>=0&&o.length<=Vt||q(t)))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!ht(n))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(pt(e)){for(;i<r;i++)if(pt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var Ft=/./;function It(t){return"boolean"==typeof t}var Pt=Boolean,Nt=Boolean.prototype.toString;var Lt=r();function Ct(t){return"object"==typeof t&&(t instanceof Pt||(Lt?function(t){try{return Nt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Rt(t){return It(t)||Ct(t)}D(Rt,"isPrimitive",It),D(Rt,"isObject",Ct);var Bt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,$t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yt="object"==typeof $t?$t:null,Gt="object"==typeof globalThis?globalThis:null;var Wt=function(t){if(arguments.length){if(!It(t))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Gt)return Gt;if(Bt)return Bt;if(Mt)return Mt;if(Yt)return Yt;throw new Error("unexpected error. Unable to resolve global object.")}(),Xt=Wt.document&&Wt.document.childNodes,Zt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function Jt(t){var e,n,r,i;if(("Object"===(n=l(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Ht.exec(r.toString()))return e[1]}return Ot(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}D(Ut,"REGEXP",Ht);var zt="function"==typeof Ft||"object"==typeof Zt||"function"==typeof Xt?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Jt(t).toLowerCase():e};function Dt(t){return t.constructor&&t.constructor.prototype===t}var qt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===zt(Kt))return!1;for(t in Kt)try{-1===At(qt,t)&&u(Kt,t)&&null!==Kt[t]&&"object"===zt(Kt[t])&&Dt(Kt[t])}catch(t){return!0}return!1}(),te="undefined"!=typeof window;var ee=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ne=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return jt(e)?t(St.call(e)):t(e)}:t:function(t){var e,n,r,i,o,a,c;if(i=[],jt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Ot(t))return i;n=Tt&&r}for(o in t)n&&"prototype"===o||!u(t,o)||i.push(String(o));if(kt)for(e=function(t){if(!1===te&&!Qt)return Dt(t);try{return Dt(t)}catch(t){return!1}}(t),c=0;c<ee.length;c++)a=ee[c],e&&"constructor"===a||!u(t,a)||i.push(String(a));return i};function re(t){return"function"===zt(t)}var ie,oe=Object,ue=Object.getPrototypeOf;ie=re(Object.getPrototypeOf)?ue:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ae=ie;var ce=Object.prototype;function le(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!_t(t)}(t)&&(e=function(t){return null==t?null:(t=oe(t),ae(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&re(e.constructor)&&"[object Function]"===l(e.constructor)&&u(e,"isPrototypeOf")&&re(e.isPrototypeOf)&&(e===ce||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var fe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function pe(){return fe.slice()}var se={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ye(){var t;return 0===arguments.length?se.all.slice():(t=se[arguments[0]])?t.slice():[]}function ge(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function be(t,e,n){z(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}D(ye,"enum",ge),function(t,e){var n,r,i;for(n=ne(e),i=0;i<n.length;i++)be(t,r=n[i],e[r])}(ye,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var me={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function he(){return{bool:me.bool,int8:me.int8,uint8:me.uint8,uint8c:me.uint8c,int16:me.int16,uint16:me.uint16,int32:me.int32,uint32:me.uint32,int64:me.int64,uint64:me.uint64,float32:me.float32,float64:me.float64,complex64:me.complex64,complex128:me.complex128,binary:me.binary,generic:me.generic,notype:me.notype,userdefined_type:me.userdefined_type}}D(pe,"enum",he),function(t,e){var n,r,i;for(n=ne(e),i=0;i<n.length;i++)be(t,r=n[i],e[r])}(pe,he());var de=function(t,e){var n,r,i,o,a,c,l,f=!0;if(!Ot(t))throw new TypeError(Y("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!le(e))throw new TypeError(Y("invalid argument. Options argument must be an object. Value: `%s`.",e));if(u(e,"duplicates")&&!It(f=e.duplicates))throw new TypeError(Y("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(n=ne(t)).length,a={},f)for(l=0;l<r;l++)u(a,o=t[i=n[l]])?(c=a[o],_t(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<r;l++)a[t[i=n[l]]]=i;return a}(he(),{duplicates:!1});var ve=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function we(){return ve.slice()}var Ee={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function xe(){return{bool:Ee.bool,int8:Ee.int8,uint8:Ee.uint8,uint8c:Ee.uint8c,int16:Ee.int16,uint16:Ee.uint16,int32:Ee.int32,uint32:Ee.uint32,int64:Ee.int64,uint64:Ee.uint64,float32:Ee.float32,float64:Ee.float64,complex64:Ee.complex64,complex128:Ee.complex128,binary:Ee.binary,generic:Ee.generic,notype:Ee.notype,userdefined_type:Ee.userdefined_type}}D(we,"enum",xe),function(t,e){var n,r,i;for(n=ne(e),i=0;i<n.length;i++)be(t,r=n[i],e[r])}(we,xe());var _e=xe();function je(t){var e=typeof t;return"string"===e?null===function(t){var e=_e[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=de[t];return"string"==typeof e?e:null}(t):null}var Se="function"==typeof Math.fround?Math.fround:null,Oe="function"==typeof Float32Array;var Te="function"==typeof Float32Array?Float32Array:null;var ke,Ve="function"==typeof Float32Array?Float32Array:void 0;ke=function(){var t,e,n;if("function"!=typeof Te)return!1;try{e=new Te([1,3.14,-3.14,5e40]),n=e,t=(Oe&&n instanceof Float32Array||"[object Float32Array]"===l(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===st}catch(e){t=!1}return t}()?Ve:function(){throw new Error("not implemented")};var Ae=new ke(1);var Fe="function"==typeof Se?Se:function(t){return Ae[0]=t,Ae[0]};function Ie(t,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Fe(t)}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Fe(e)}),this}function Pe(t,e){if(!(this instanceof Pe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!nt(t))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",t));if(!nt(e))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}function Ne(t){return ht(t)&&t>=0}function Le(t){return dt(t)&&t.valueOf()>=0}function Ce(t){return Ne(t)||Le(t)}D(Ie,"BYTES_PER_ELEMENT",4),D(Ie.prototype,"BYTES_PER_ELEMENT",4),D(Ie.prototype,"byteLength",8),D(Ie.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),D(Ie.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t})),D(Pe,"BYTES_PER_ELEMENT",8),D(Pe.prototype,"BYTES_PER_ELEMENT",8),D(Pe.prototype,"byteLength",16),D(Pe.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),D(Pe.prototype,"toJSON",(function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t})),D(Ce,"isPrimitive",Ne),D(Ce,"isObject",Le);var Re="number";function Be(t,e,n){var r;if(!re(t))throw new TypeError(Y("invalid argument. First argument must be a function. Value: `%s`.",t));if(!Ne(e))throw new TypeError(Y("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(!re(n))throw new TypeError(Y("invalid argument. Third argument must be a constructor function. Value: `%s`.",n));return r=[function(){return t()},function(e){typeof e===Re&&(e=new n(e,0));return t(e)},function(e,r){typeof e===Re&&(e=new n(e,0));typeof r===Re&&(r=new n(r,0));return t(e,r)},function(e,r,i){typeof e===Re&&(e=new n(e,0));typeof r===Re&&(r=new n(r,0));typeof i===Re&&(i=new n(i,0));return t(e,r,i)},function(e,r,i,o){typeof e===Re&&(e=new n(e,0));typeof r===Re&&(r=new n(r,0));typeof i===Re&&(i=new n(i,0));typeof o===Re&&(o=new n(o,0));return t(e,r,i,o)},function(e,r,i,o,u){typeof e===Re&&(e=new n(e,0));typeof r===Re&&(r=new n(r,0));typeof i===Re&&(i=new n(i,0));typeof o===Re&&(o=new n(o,0));typeof u===Re&&(u=new n(u,0));return t(e,r,i,o,u)}],e<=5?r[e]:function(){var e,r,i;for(e=[],i=0;i<arguments.length;i++)typeof(r=arguments[i])===Re&&(r=new n(r,0)),e.push(r);return t.apply(null,e)}}var Me="complex64",$e="complex128",Ye={complex64:Ie,complex128:Pe};function Ge(t,e,n,r){return r===$e?e===Me?n===$e||n===Me?t[$e]:Be(t[$e],2,Ye[$e]):e===$e&&(n===$e||n===Me)?t[$e]:Be(t[$e],2,Ye[$e]):r===Me?e===$e?n===Me||n===$e?t[$e]:Be(t[$e],2,Ye[$e]):e===Me?n===$e?t[$e]:n===Me?t[Me]:Be(t[Me],2,Ye[Me]):n===$e?Be(t[$e],2,Ye[$e]):Be(t[Me],2,Ye[Me]):"generic"===r?e===$e?n===$e||n===Me?t[$e]:Be(t[$e],2,Ye[$e]):e===Me?n===Me?t[Me]:n===$e?t[$e]:Be(t[Me],2,Ye[Me]):n===$e?Be(t[$e],2,Ye[$e]):n===Me?Be(t[Me],2,Ye[Me]):t.default:t.default}function We(t,e){var n,r,i,o,u;for(n=[],u=0;u<e.length;u+=3)r=je(e[u]),i=je(e[u+1]),o=je(e[u+2]),n.push(Ge(t,r,i,o));return n}export{We as default};
//# sourceMappingURL=mod.js.map
