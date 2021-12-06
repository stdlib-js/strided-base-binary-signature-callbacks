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

# Callbacks

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Assign callbacks to binary interfaces according to type [promotion rules][@stdlib/ndarray/promotion-rules].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-binary-signature-callbacks
```

</section>

<section class="usage">

## Usage

```javascript
var callbacks = require( '@stdlib/strided-base-binary-signature-callbacks' );
```

#### callbacks( table, signatures )

Assigns callbacks to binary interfaces according to type type [promotion rules][@stdlib/ndarray/promotion-rules].

```javascript
var signatures = require( '@stdlib/strided-base-binary-dtype-signatures' );
var add = require( '@stdlib/math-base-ops-add' );
var cadd = require( '@stdlib/math-base-ops-cadd' );
var caddf = require( '@stdlib/math-base-ops-caddf' );

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
-   **signatures**: options.

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
var dtypes = require( '@stdlib/strided-dtypes' );
var signatures = require( '@stdlib/strided-base-binary-dtype-signatures' );
var add = require( '@stdlib/math-base-ops-add' );
var cadd = require( '@stdlib/math-base-ops-cadd' );
var caddf = require( '@stdlib/math-base-ops-caddf' );
var callbacks = require( '@stdlib/strided-base-binary-signature-callbacks' );

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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-binary-signature-callbacks.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-binary-signature-callbacks

[test-image]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-binary-signature-callbacks/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-binary-signature-callbacks?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-binary-signature-callbacks.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-binary-signature-callbacks/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-binary-signature-callbacks/main/LICENSE

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
