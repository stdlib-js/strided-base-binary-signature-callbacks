"use strict";var s=function(u,n){return function(){return n||u((n={exports:{}}).exports,n),n.exports}};var q=s(function(S,C){
var p=require('@stdlib/strided-base-dtype-resolve-str/dist'),d=require('@stdlib/complex-float32-ctor/dist'),h=require('@stdlib/complex-float64-ctor/dist'),f=require('@stdlib/complex-base-wrap-function/dist'),i="complex64",r="complex128",v={complex64:d,complex128:h};function k(u,n,e,o){return o===r?(n===i||n===r)&&(e===r||e===i)?u[r]:f(u[r],2,v[r]):o===i?n===r?e===i||e===r?u[r]:f(u[r],2,v[r]):n===i?e===r?u[r]:e===i?u[i]:f(u[i],2,v[i]):e===r?f(u[r],2,v[r]):f(u[i],2,v[i]):o==="generic"?n===r?e===r||e===i?u[r]:f(u[r],2,v[r]):n===i?e===i?u[i]:e===r?u[r]:f(u[i],2,v[i]):e===r?f(u[r],2,v[r]):e===i?f(u[i],2,v[i]):u.default:u.default}function w(u,n){var e,o,x,m,c;for(e=[],c=0;c<n.length;c+=3)o=p(n[c]),x=p(n[c+1]),m=p(n[c+2]),e.push(k(u,o,x,m));return e}C.exports=w
});var O=q();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
