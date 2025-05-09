/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( '@stdlib/strided-base-dtype-resolve-str' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var wrap = require( '@stdlib/complex-base-wrap-function' );


// VARIABLES //

var C64 = 'complex64';
var C128 = 'complex128';
var CTORS = {
	'complex64': Complex64,
	'complex128': Complex128
};


// FUNCTIONS //

/**
* Resolves a callback based on provided dtypes.
*
* @private
* @param {Object} table - callback table
* @param {Function} table.default - default callback
* @param {Function} table.complex64 - callback for single-precision complex floating-point numbers
* @param {Function} table.complex128 - callback for double-precision complex floating-point numbers
* @param {string} t1 - dtype for first argument
* @param {string} t2 - dtype for second argument
* @param {string} t3 - dtype for return value
* @returns {Function} callback
*/
function resolveCallback( table, t1, t2, t3 ) {
	// The following branches attempt to follow type promotion rules; however, some accommodations are made for completeness...

	// Signature: ??_z
	if ( t3 === C128 ) {
		// c?_z
		if ( t1 === C64 ) {
			// cz_z or cc_z
			if ( t2 === C128 || t2 === C64 ) {
				return table[ C128 ]; // Signature: cz_z_as_zz_z or cc_z_as_zz_z
			}
			// cd_z
			return wrap( table[ C128 ], 2, CTORS[ C128 ] ); // Signature: cd_z_as_zz_z
		}
		// z?_z
		if ( t1 === C128 ) {
			// zz_z or zc_z
			if ( t2 === C128 || t2 === C64 ) {
				return table[ C128 ]; // Signature: zz_z or zc_z_as_zz_z
			}
			// zd_z
			return wrap( table[ C128 ], 2, CTORS[ C128 ] ); // Signature: zd_z_as_zz_z
		}
		// dc_z, dz_z, or dd_z
		return wrap( table[ C128 ], 2, CTORS[ C128 ] ); // Signature: dc_z_as_zz_z, dz_z_as_zz_z, or dd_z_as_zz_z
	}
	// Signature: ??_c
	if ( t3 === C64 ) {
		// z?_c
		if ( t1 === C128 ) {
			// zc_c or zz_c (note: according to type promotion rules `zz_c` should not happen, as `z` does not promote to `c`, but we accommodate here anyway)
			if ( t2 === C64 || t2 === C128 ) {
				return table[ C128 ]; // Signature: zc_c_as_zz_z or zz_c_as_zz_z
			}
			// zd_c (note: according to type promotion rules `zd_c` should not happen, as neither `z` nor `d` promote to `c`, but we accommodate here anyway)
			return wrap( table[ C128 ], 2, CTORS[ C128 ] ); // Signature: zd_c_as_zz_z
		}
		// c?_c
		if ( t1 === C64 ) {
			// cz_c (note: according to type promotion rules `cz_c` should not happen, as `z` does not promote to `c`, but we accommodate here anyway)
			if ( t2 === C128 ) {
				return table[ C128 ]; // Signature: cz_c_as_zz_z
			}
			// cc_c
			if ( t2 === C64 ) {
				return table[ C64 ]; // Signature: cc_c
			}
			// cd_c (note: in JavaScript, real values are double-precision, but we downcast `d` to `c`, as, according to type promotion rules `cd_c` should not happen, as `d` does not promote to `c`, but `cf_c` can happen)
			return wrap( table[ C64 ], 2, CTORS[ C64 ] ); // Signature: cd_c_as_cc_c (cf_c_as_cc_c)
		}
		// dz_c
		if ( t2 === C128 ) {
			// Note: according to type promotion rules `dz_c` should not happen, as neither `z` nor `d` promote to `c`, but we accommodate here anyway
			return wrap( table[ C128 ], 2, CTORS[ C128 ] ); // Signature: zd_c_as_zz_z
		}
		// dc_c
		if ( t2 === C64 ) {
			// Note: in JavaScript, real values are double-precision, but we downcast `d` to `c`, as, according to type promotion rules `dc_c` should not happen, as `d` does not promote to `c`, but `fc_c` can happen
			return wrap( table[ C64 ], 2, CTORS[ C64 ] ); // Signature: dc_c_as_cc_c (fc_c_as_cc_c)
		}
		// dd_c (note: in JavaScript, real values are double-precision, but we downcast `d` to `c`, as, according to type promotion rules `dd_c` should not happen, as `d` does not promote to `c`, but `ff_c` can happen)
		return wrap( table[ C64 ], 2, CTORS[ C64 ] ); // Signature: dd_c_as_cc_c (ff_c_as_cc_c)
	}
	// Signature: ??_o
	if ( t3 === 'generic' ) {
		// z?_o
		if ( t1 === C128 ) {
			// zz_o or zc_o
			if ( t2 === C128 || t2 === C64 ) {
				return table[ C128 ]; // Signature: zz_o_as_zz_z or zc_o_as_zz_z
			}
			// zd_o
			return wrap( table[ C128 ], 2, CTORS[ C128 ] ); // Signature: zd_o_as_zz_z
		}
		// c?_o
		if ( t1 === C64 ) {
			// cc_o
			if ( t2 === C64 ) {
				return table[ C64 ]; // Signature: cc_o_as_cc_c
			}
			// cz_o
			if ( t2 === C128 ) {
				return table[ C128 ]; // Signature: cz_o_as_zz_z
			}
			// cd_o
			return wrap( table[ C64 ], 2, CTORS[ C64 ] ); // Signature: cd_o_as_cc_c
		}
		// dz_o
		if ( t2 === C128 ) {
			return wrap( table[ C128 ], 2, CTORS[ C128 ] ); // Signature: dz_o_as_zz_z
		}
		// dc_o
		if ( t2 === C64 ) {
			return wrap( table[ C64 ], 2, CTORS[ C64 ] ); // Signature: dc_o_as_cc_c
		}
		// dd_o
		return table.default;
	}
	return table.default;
}


// MAIN //

/**
* Assigns callbacks to binary interfaces according to type promotion rules.
*
* ## Notes
*
* -   The function assumes that the provided signature array has the following properties:
*
*     -   a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
*     -   for each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
*     -   all signatures follow type promotion rules.
*
* -   Based on type promotion rules, we can simply use the callback for `float64` (i.e., the assumed "default") for all interfaces not involving complex numbers, even for `float32`, as we shouldn't need to explicitly downcast strided array values. The only time we need to return `float32` values is when input arrays are already `float32` or of a type which can be safely represented in `float32` without concern for truncation.
*
* @param {Object} table - callback table
* @param {Function} table.default - default callback
* @param {Function} table.complex64 - callback for single-precision complex floating-point numbers
* @param {Function} table.complex128 - callback for double-precision complex floating-point numbers
* @param {ArrayLikeObject} signatures - strided array containing binary interface signatures
* @returns {Array<Function>} list of callbacks
*
* @example
* var signatures = require( '@stdlib/strided-base-binary-dtype-signatures' );
* var add = require( '@stdlib/number-float64-base-add' );
* var cadd = require( '@stdlib/complex-float64-base-add' );
* var caddf = require( '@stdlib/complex-float32-base-add' );
*
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes, dtypes );
* // returns [...]
*
* var table = {
*     'default': add,
*     'complex64': caddf,
*     'complex128': cadd
* };
*
* var list = callbacks( table, sigs );
* // returns [...]
*/
function callbacks( table, signatures ) {
	var out;
	var t1;
	var t2;
	var t3;
	var i;

	out = [];
	for ( i = 0; i < signatures.length; i += 3 ) {
		t1 = resolve( signatures[ i ] );
		t2 = resolve( signatures[ i+1 ] );
		t3 = resolve( signatures[ i+2 ] );
		out.push( resolveCallback( table, t1, t2, t3 ) );
	}
	return out;
}


// EXPORTS //

module.exports = callbacks;
