// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-str@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-wrap-function@v0.2.2-esm/index.mjs";var o="complex64",m="complex128",d={complex64:t,complex128:s};function l(e,t,s,l){return l===m?t===o?s===m||s===o?e[m]:r(e[m],2,d[m]):t===m&&(s===m||s===o)?e[m]:r(e[m],2,d[m]):l===o?t===m?s===o||s===m?e[m]:r(e[m],2,d[m]):t===o?s===m?e[m]:s===o?e[o]:r(e[o],2,d[o]):s===m?r(e[m],2,d[m]):r(e[o],2,d[o]):"generic"===l?t===m?s===m||s===o?e[m]:r(e[m],2,d[m]):t===o?s===o?e[o]:s===m?e[m]:r(e[o],2,d[o]):s===m?r(e[m],2,d[m]):s===o?r(e[o],2,d[o]):e.default:e.default}function n(t,s){var r,o,m,d,n;for(r=[],n=0;n<s.length;n+=3)o=e(s[n]),m=e(s[n+1]),d=e(s[n+2]),r.push(l(t,o,m,d));return r}export{n as default};
//# sourceMappingURL=index.mjs.map
