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

var bench = require( '@stdlib/bench-harness' );
var isArray = require( '@stdlib/assert-is-array' );
var dtypes = require( '@stdlib/strided-dtypes' );
var signatures = require( '@stdlib/strided-base-binary-dtype-signatures' );
var cadd = require( '@stdlib/complex-float64-base-add' );
var caddf = require( '@stdlib/complex-float32-base-add' );
var add = require( '@stdlib/number-float64-base-add' );
var pkg = require( './../package.json' ).name;
var callbacks = require( './../lib' );


// VARIABLES //

var TABLE = {
	'default': add,
	'complex64': caddf,
	'complex128': cadd
};


// MAIN //

bench( pkg+'::strings', function benchmark( b ) {
	var sigs;
	var out;
	var v1;
	var v2;
	var v3;
	var i;

	v1 = dtypes();
	v2 = dtypes();
	v3 = dtypes();
	sigs = signatures( v1, v2, v3, {
		'enums': false
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = callbacks( TABLE, sigs );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::enums', function benchmark( b ) {
	var sigs;
	var out;
	var v1;
	var v2;
	var v3;
	var i;

	v1 = dtypes();
	v2 = dtypes();
	v3 = dtypes();
	sigs = signatures( v1, v2, v3, {
		'enums': true
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = callbacks( TABLE, sigs );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
