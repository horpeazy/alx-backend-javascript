const assert = require('chai').assert;
const calculateNumber = require('./2-calcul_chai.js');


describe('Test suites', function() {
  describe('test for type SUM', function() {
    it('checks that it behaves as expected', function() {
      assert.equal(calculateNumber('SUM', 1.0, 1.0), 2);     
    })  
	  
    it('checks for decimal and int', function() {
      assert.equal(calculateNumber('SUM', 1.4, 2), 3)
    })

    it('checks for two decimals', function() {
      assert.equal(calculateNumber('SUM', 1.5, 1.6), 4);
    })

    it('checks for large numbers', function() {
      assert.equal(calculateNumber('SUM', Number.MAX_VALUE, 46), Number.MAX_VALUE);
    })

    it('checks for negative numbers', function() {
      assert.equal(calculateNumber('SUM', -1.4, 3), 2);
    })

    it('checks for two negative numbers', function() {
      assert.equal(calculateNumber('SUM', -3.2, -1.0), -4);
    })

    it('checks that it handles zeros', function() {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    })

    it('checks for invalid type case', function() {
      assert.equal(calculateNumber('sum', 1, 2), 'Error');
    })
  })

  describe('test for type SUBTRACT', function() {
    it('checks for floating point number on both', function() {
      assert.equal(calculateNumber('SUBTRACT', 2.0, 1.0), 1);
    })

    it('checks for fractional number on b', function() {
      assert.equal(calculateNumber('SUBTRACT', 3.0, 1.5), 1);
    })

    it('checks for fractional number on a', function() {
      assert.equal(calculateNumber('SUBTRACT', 3.4, 1.0), 2);
    })

    it('checks for fractional number on both', function() {
      assert.equal(calculateNumber('SUBTRACT', 6.7, 3.4), 4);
    })

    it('checks for negative numbers', function() {
      assert.equal(calculateNumber('SUBTRACT', -8.1, -2.0), -6);
    })

    it('checks for zeros', function() {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    })

    it('checks for large numbers', function() {
      assert.equal(calculateNumber('SUBTRACT', Number.MAX_VALUE, 4.3), Number.MAX_VALUE);
    })

    it('handles edge cases', function() {
      assert.equal(calculateNumber('SUBTRACT', 3.5, -3.5), 7);
    })

    it('checks for invalid type case', function() {
      assert.equal(calculateNumber('subtract', 3, 2), 'Error');
    })
  })

  describe('test for type DIVIDE', function() {
    it('checks for floating point numbers', function() {
      assert.equal(calculateNumber('DIVIDE', 2, 1), 2);
    })

    it('checks for fractional number on b', function() {
      assert.equal(calculateNumber('DIVIDE', 4, 2.4), 2);
    })

    it('checks for fractional number on a', function() {
      assert.equal(calculateNumber('DIVIDE', 8.4, 2), 4);
    })

    it('checks for fractional numbers on both', function() {
      assert.equal(calculateNumber('DIVIDE', 9.4, 2.8), 3);
    })

    it('checks for zeros', function() {
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    })

    it('checks for zero on a', function() {
      assert.equal(calculateNumber('DIVIDE', 0, 2), 0);
    })

    it('checks for zero on b', function() {
      assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
    })

    it('checks for large numbers', function() {
      assert.equal(calculateNumber('DIVIDE', 1000000, 2), 500000);
    })

    it('checks for invalid type case', function() {
      assert.equal(calculateNumber('divide', 4, 3), 'Error');
    })
  })
})
