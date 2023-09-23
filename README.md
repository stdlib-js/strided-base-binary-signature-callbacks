<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Callbacks

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Assign callbacks to binary interfaces according to type [promotion rules][@stdlib/ndarray/promotion-rules].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import callbacks from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-signature-callbacks@v0.1.0-deno/mod.js';
```

#### callbacks( table, signatures )

Assigns callbacks to binary interfaces according to type [promotion rules][@stdlib/ndarray/promotion-rules].

```javascript
import signatures from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-dtype-signatures@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import cadd from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cadd@deno/mod.js';
import caddf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-caddf@deno/mod.js';

var dtypes = [
    'float64',
    'float32',
    'int32',
    'uint8'
];

var sigs = signatures( dtypes, dtypes, dtypes );
// returns [...]

var table = {
    'default': add,
    'complex64': caddf,
    'complex128': cadd
};

var list = callbacks( table, sigs );
// returns [...]
```

The function accepts the following arguments:

-   **table**: callback table.
-   **signatures**: strided array containing binary interface signatures.

A callback `table` should have the following properties:

-   **default**: default callback.
-   **complex64**: callback for single-precision complex floating-point numbers.
-   **complex128**: callback for double-precision complex floating-point numbers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function assumes that the provided signature array has the following properties:

    -   a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
    -   for each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
    -   all signatures follow type [promotion rules][@stdlib/ndarray/promotion-rules].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-dtypes@deno/mod.js';
import signatures from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-dtype-signatures@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import cadd from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cadd@deno/mod.js';
import caddf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-caddf@deno/mod.js';
import callbacks from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary-signature-callbacks@v0.1.0-deno/mod.js';

// Get the list of supported strided array data types:
var dt = dtypes();

// Generate binary interface signatures:
var sigs = signatures( dt, dt, dt );

// Define a callback table:
var table = {
    'default': add,
    'complex64': caddf,
    'complex128': cadd
};

// Generate a list of callbacks according to type promotion rules:
var clbks = callbacks( table, sigs );
// returns [...]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-binary-signature-callbacks.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-binary-signature-callbacks

[test-image]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-binary-signature-callbacks/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-binary-signature-callbacks?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-binary-signature-callbacks.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-binary-signature-callbacks/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-binary-signature-callbacks/main/LICENSE

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/stdlib/tree/deno

</section>

<!-- /.links -->
