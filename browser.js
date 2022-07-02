// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).callbacks=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r=function(t){return Object.keys(Object(t))},e=r;var n=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,f=a;var c=function(t){return f.call(t)},l=Object.prototype.hasOwnProperty;var p=function(t,r){return null!=t&&l.call(t,r)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,m=a;var b=c,g=function(t){var r,e,n;if(null==t)return m.call(t);e=t[y],r=s(t,y);try{t[y]=void 0}catch(r){return m.call(t)}return n=m.call(t),r?t[y]=e:delete t[y],n},h=u()?g:b,d=h;var w,j=function(t){return"[object Arguments]"===d(t)},E=j;w=function(){return E(arguments)}();var O=w,_="function"==typeof Object.defineProperty?Object.defineProperty:null;var P=function(){try{return _({},"x",{}),!0}catch(t){return!1}},S=Object.defineProperty,T=Object.prototype,x=T.toString,A=T.__defineGetter__,I=T.__defineSetter__,V=T.__lookupGetter__,F=T.__lookupSetter__;var N=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===x.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===x.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(V.call(t,r)||F.call(t,r)?(n=t.__proto__,t.__proto__=T,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&A&&A.call(t,r,e.get),u&&I&&I.call(t,r,e.set),t},k=S,B=N,L=P()?k:B,M=L;var R=function(t,r,e){M(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},Y=R;var C=function(t){return"string"==typeof t},G=String.prototype.valueOf;var X=h,D=function(t){try{return G.call(t),!0}catch(t){return!1}},H=u();var J=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===X(t)))},W=C,z=J;var U=Y,q=function(t){return W(t)||z(t)},K=J;U(q,"isPrimitive",C),U(q,"isObject",K);var Q=q;var Z=function(t){return"number"==typeof t},$=Number,tt=$.prototype.toString;var rt=h,et=$,nt=function(t){try{return tt.call(t),!0}catch(t){return!1}},ot=u();var it=function(t){return"object"==typeof t&&(t instanceof et||(ot?nt(t):"[object Number]"===rt(t)))},ut=Z,at=it;var ft=Y,ct=function(t){return ut(t)||at(t)},lt=it;ft(ct,"isPrimitive",Z),ft(ct,"isObject",lt);var pt=ct;var vt=function(t){return t!=t},st=pt.isPrimitive,yt=vt;var mt=function(t){return st(t)&&yt(t)},bt=pt.isObject,gt=vt;var ht=function(t){return bt(t)&&gt(t.valueOf())},dt=mt,wt=ht;var jt=Y,Et=function(t){return dt(t)||wt(t)},Ot=ht;jt(Et,"isPrimitive",mt),jt(Et,"isObject",Ot);var _t=Et,Pt=Number.POSITIVE_INFINITY,St=$.NEGATIVE_INFINITY,Tt=Math.floor;var xt=function(t){return Tt(t)===t},At=Pt,It=St,Vt=xt;var Ft=function(t){return t<At&&t>It&&Vt(t)},Nt=pt.isPrimitive,kt=Ft;var Bt=function(t){return Nt(t)&&kt(t)},Lt=pt.isObject,Mt=Ft;var Rt=function(t){return Lt(t)&&Mt(t.valueOf())},Yt=Bt,Ct=Rt;var Gt=Y,Xt=function(t){return Yt(t)||Ct(t)},Dt=Rt;Gt(Xt,"isPrimitive",Bt),Gt(Xt,"isObject",Dt);var Ht,Jt=Xt,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var zt=Q,Ut=_t.isPrimitive,qt=Jt.isPrimitive,Kt=Wt,Qt=Ht;var Zt=function(t,r){var e;return null!=t&&(!(e=Kt.call(t,r))&&Qt&&zt(t)?!Ut(r=+r)&&qt(r)&&r>=0&&r<t.length:e)},$t=Zt,tr=h;var rr=Array.isArray?Array.isArray:function(t){return"[object Array]"===tr(t)},er=p,nr=$t,or=rr,ir=xt;var ur=O?j:function(t){return null!==t&&"object"==typeof t&&!or(t)&&"number"==typeof t.length&&ir(t.length)&&t.length>=0&&t.length<=4294967295&&er(t,"callee")&&!nr(t,"callee")},ar=ur,fr=r,cr=Array.prototype.slice;var lr=function(t){return ar(t)?fr(cr.call(t)):fr(t)},pr=rr;var vr=function(t){return null!==t&&"object"==typeof t};Y(vr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!pr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(vr));var sr=vr;var yr=$t((function(){}),"prototype"),mr=!$t({toString:null},"toString"),br=xt;var gr=_t,hr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&br(t.length)&&t.length>=0&&t.length<=9007199254740991},dr=Q.isPrimitive,wr=Jt.isPrimitive;var jr=function(t,r,e){var n,o;if(!hr(t)&&!dr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!wr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(gr(r)){for(;o<n;o++)if(gr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},Er=jr,Or=/./;var _r=function(t){return"boolean"==typeof t},Pr=Boolean.prototype.toString;var Sr=h,Tr=function(t){try{return Pr.call(t),!0}catch(t){return!1}},xr=u();var Ar=function(t){return"object"==typeof t&&(t instanceof Boolean||(xr?Tr(t):"[object Boolean]"===Sr(t)))},Ir=_r,Vr=Ar;var Fr=Y,Nr=function(t){return Ir(t)||Vr(t)},kr=Ar;Fr(Nr,"isPrimitive",_r),Fr(Nr,"isObject",kr);var Br=Nr;var Lr=function(){return new Function("return this;")()},Mr="object"==typeof self?self:null,Rr="object"==typeof window?window:null,Yr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Cr="object"==typeof Yr?Yr:null;module.exports=Cr;var Gr=Br.isPrimitive,Xr=Lr,Dr=Mr,Hr=Rr,Jr=t(Object.freeze({__proto__:null}));var Wr=function(t){if(arguments.length){if(!Gr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Xr()}if(Dr)return Dr;if(Hr)return Hr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")},zr=Wr(),Ur=zr.document&&zr.document.childNodes,qr=Int8Array,Kr=Or,Qr=Ur,Zr=qr;var $r=function(){return"function"==typeof Kr||"object"==typeof Zr||"function"==typeof Qr};var te=function(){return/^\s*function\s*([^(]*)/i},re=te;Y(re,"REGEXP",te());var ee=sr;var ne=h,oe=re.REGEXP,ie=function(t){return ee(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ue=function(t){var r,e,n;if(("Object"===(e=ne(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=oe.exec(n.toString()))return r[1]}return ie(t)?"Buffer":e},ae=ue;var fe=ue;var ce=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ae(t).toLowerCase():r},le=function(t){return fe(t).toLowerCase()},pe=$r()?le:ce;var ve,se=function(t){return t.constructor&&t.constructor.prototype===t},ye="undefined"==typeof window?void 0:window,me=p,be=Er,ge=pe,he=se,de=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],we=ye;ve=function(){var t;if("undefined"===ge(we))return!1;for(t in we)try{-1===be(de,t)&&me(we,t)&&null!==we[t]&&"object"===ge(we[t])&&he(we[t])}catch(t){return!0}return!1}();var je="undefined"!=typeof window,Ee=ve,Oe=se,_e=je;var Pe=sr,Se=p,Te=ur,xe=yr,Ae=mr,Ie=function(t){if(!1===_e&&!Ee)return Oe(t);try{return Oe(t)}catch(t){return!1}},Ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Fe=r,Ne=lr,ke=function(t){var r,e,n,o,i,u,a;if(o=[],Te(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!Se(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1===(n="function"==typeof t)&&!Pe(t))return o;e=xe&&n}for(i in t)e&&"prototype"===i||!Se(t,i)||o.push(String(i));if(Ae)for(r=Ie(t),a=0;a<Ve.length;a++)u=Ve[a],r&&"constructor"===u||!Se(t,u)||o.push(String(u));return o},Be=o?n()?Ne:Fe:ke,Le=rr;var Me=function(t){return"object"==typeof t&&null!==t&&!Le(t)},Re=pe;var Ye=function(t){return"function"===Re(t)},Ce=Object.getPrototypeOf;var Ge=function(t){return t.__proto__},Xe=h,De=Ge;var He=function(t){var r=De(t);return r||null===r?r:"[object Function]"===Xe(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Je=Ce,We=He,ze=Ye(Object.getPrototypeOf)?Je:We;var Ue=Me,qe=Ye,Ke=function(t){return null==t?null:(t=Object(t),ze(t))},Qe=p,Ze=h,$e=Object.prototype;var tn=function(t){var r;return!!Ue(t)&&(!(r=Ke(t))||!Qe(t,"constructor")&&Qe(r,"constructor")&&qe(r.constructor)&&"[object Function]"===Ze(r.constructor)&&Qe(r,"isPrototypeOf")&&qe(r.isPrototypeOf)&&(r===$e||function(t){var r;for(r in t)if(!Qe(t,r))return!1;return!0}(t)))},rn=Be,en=rr,nn=tn,on=sr,un=Br.isPrimitive,an=p;var fn=function(t,r){var e,n,o,i,u,a,f,c=!0;if(!on(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!nn(r))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+r+"`.");if(an(r,"duplicates")&&(c=r.duplicates,!un(c)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+c+"`.")}if(n=(e=rn(t)).length,u={},c)for(f=0;f<n;f++)i=t[o=e[f]],an(u,i)?(a=u[i],en(a)?u[i].push(o):u[i]=[a,o]):u[i]=o;else for(f=0;f<n;f++)u[t[o=e[f]]]=o;return u},cn=fn,ln=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pn=function(){return ln.slice()},vn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var sn=L;var yn=function(t,r,e){sn(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},mn=yn,bn=mn,gn=Be;var hn=function(t,r){var e,n,o;for(e=gn(r),o=0;o<e.length;o++)n=e[o],bn(t,n,r[n]);return t},dn=function(){return vn.slice()},wn=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},jn=hn;Y(dn,"enum",wn),jn(dn,wn());var En=(0,dn.enum)();var On=mn,_n=Be;var Pn=function(t,r){var e,n,o;for(e=_n(r),o=0;o<e.length;o++)n=e[o],On(t,n,r[n]);return t},Sn=pn,Tn=function(){return{bool:En.bool,int8:En.int8,uint8:En.uint8,uint8c:En.uint8c,int16:En.int16,uint16:En.uint16,int32:En.int32,uint32:En.uint32,int64:En.int64,uint64:En.uint64,float32:En.float32,float64:En.float64,complex64:En.complex64,complex128:En.complex128,binary:En.binary,generic:En.generic,notype:En.notype,userdefined_type:En.userdefined_type}},xn=Pn;Y(Sn,"enum",Tn),xn(Sn,Tn());var An=Sn,In=cn((0,An.enum)(),{duplicates:!1});var Vn=function(t){var r=In[t];return"string"==typeof r?r:null},Fn=(0,An.enum)();var Nn=Vn,kn=function(t){var r=Fn[t];return"number"==typeof r?r:null};var Bn=function(t){var r=typeof t;return"string"===r?kn(t)?t:null:"number"===r?Nn(t):null},Ln="function"==typeof Math.fround?Math.fround:null,Mn=h,Rn="function"==typeof Float32Array;var Yn="function"==typeof Float32Array?Float32Array:null,Cn=function(t){return Rn&&t instanceof Float32Array||"[object Float32Array]"===Mn(t)},Gn=Pt,Xn=Yn;var Dn=function(){var t,r;if("function"!=typeof Xn)return!1;try{r=new Xn([1,3.14,-3.14,5e40]),t=Cn(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Gn}catch(r){t=!1}return t};var Hn="function"==typeof Float32Array?Float32Array:void 0,Jn=function(){throw new Error("not implemented")},Wn=new(Dn()?Hn:Jn)(1);var zn=Ln;"function"!=typeof zn&&(zn=function(t){return Wn[0]=t,Wn[0]});var Un=pt.isPrimitive,qn=L,Kn=Y,Qn=zn,Zn=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},$n=function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t};function to(t,r){if(!(this instanceof to))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Un(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!Un(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return qn(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Qn(t)}),qn(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Qn(r)}),this}Kn(to,"BYTES_PER_ELEMENT",4),Kn(to.prototype,"BYTES_PER_ELEMENT",4),Kn(to.prototype,"byteLength",8),Kn(to.prototype,"toString",Zn),Kn(to.prototype,"toJSON",$n);var ro=to;var eo=pt.isPrimitive,no=L,oo=Y,io=function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"},uo=function(){var t={type:"Complex128"};return t.re=this.re,t.im=this.im,t};function ao(t,r){if(!(this instanceof ao))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!eo(t))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+t+"`.");if(!eo(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return no(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:t}),no(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}oo(ao,"BYTES_PER_ELEMENT",8),oo(ao.prototype,"BYTES_PER_ELEMENT",8),oo(ao.prototype,"byteLength",16),oo(ao.prototype,"toString",io),oo(ao.prototype,"toJSON",uo);var fo=ao,co=Jt.isPrimitive;var lo=function(t){return co(t)&&t>=0},po=Jt.isObject;var vo=function(t){return po(t)&&t.valueOf()>=0},so=lo,yo=vo;var mo=Y,bo=function(t){return so(t)||yo(t)},go=vo;mo(bo,"isPrimitive",lo),mo(bo,"isObject",go);var ho=Ye,wo=bo.isPrimitive,jo="number";var Eo=function(t,r,e){var n;if(!ho(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");if(!wo(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(!ho(e))throw new TypeError("invalid argument. Third argument must be a constructor function. Value: `"+e+"`.");return n=[function(){return t()},function(r){typeof r===jo&&(r=new e(r,0));return t(r)},function(r,n){typeof r===jo&&(r=new e(r,0));typeof n===jo&&(n=new e(n,0));return t(r,n)},function(r,n,o){typeof r===jo&&(r=new e(r,0));typeof n===jo&&(n=new e(n,0));typeof o===jo&&(o=new e(o,0));return t(r,n,o)},function(r,n,o,i){typeof r===jo&&(r=new e(r,0));typeof n===jo&&(n=new e(n,0));typeof o===jo&&(o=new e(o,0));typeof i===jo&&(i=new e(i,0));return t(r,n,o,i)},function(r,n,o,i,u){typeof r===jo&&(r=new e(r,0));typeof n===jo&&(n=new e(n,0));typeof o===jo&&(o=new e(o,0));typeof i===jo&&(i=new e(i,0));typeof u===jo&&(u=new e(u,0));return t(r,n,o,i,u)}],r<=5?n[r]:function(){var r,n,o;for(r=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===jo&&(n=new e(n,0)),r.push(n);return t.apply(null,r)}},Oo=Eo,_o="complex64",Po="complex128",So={complex64:ro,complex128:fo};function To(t,r,e,n){if(n===_o||n===Po)return r===e&&e===n?t[n]:Oo(t[n],2,So[n]);if("generic"===n){if(r===Po||e===Po)return r===e?t[r]:Oo(t[Po],2,So[Po]);if(r===_o||e===_o)return r===e?t[r]:Oo(t[_o],2,So[_o])}return t.default}return function(t,r){var e,n,o,i,u;for(e=[],u=0;u<r.length;u+=3)n=Bn(r[u]),o=Bn(r[u+1]),i=Bn(r[u+2]),e.push(To(t,n,o,i));return e}}));
//# sourceMappingURL=browser.js.map
