// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-str@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-wrap-function@esm/index.mjs";var i="complex64",n="complex128",m={complex64:t,complex128:r};function o(e,t,r,o){if(o===i||o===n)return t===r&&r===o?e[o]:s(e[o],2,m[o]);if("generic"===o){if(t===n||r===n)return t===r?e[t]:s(e[n],2,m[n]);if(t===i||r===i)return t===r?e[t]:s(e[i],2,m[i])}return e.default}function d(t,r){var s,i,n,m,d;for(s=[],d=0;d<r.length;d+=3)i=e(r[d]),n=e(r[d+1]),m=e(r[d+2]),s.push(o(t,i,n,m));return s}export{d as default};
//# sourceMappingURL=index.mjs.map
