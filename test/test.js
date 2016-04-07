'use strict';

const assert = require('chai').assert;
const symbold = require('../index.js');

describe('Symbold', () => {
	it('Return a array', () => {
		assert.typeOf(symbold, 'array');
	});

	it('Each symbol should be string', () => {
		for (let i = 0; i < symbold.length; i++) {
			assert.typeOf(symbold[i], 'string');
		}
	});
});
