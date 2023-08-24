const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');


describe('Test suites', function() {
  describe('test for type SUM', function() {
    it('checks that it behaves as expected', function() {
      expect(calculateNumber('SUM', 1.0, 1.0)).to.equal(2);     
    })  
	  
    it('checks for decimal and int', function() {
      expect(calculateNumber('SUM', 1.4, 2)).to.equal(3)
    })

    it('checks for two decimals', function() {
      expect(calculateNumber('SUM', 1.5, 1.6)).to.equal(4);
    })

    it('checks for large numbers', function() {
      expect(calculateNumber('SUM', Number.MAX_VALUE, 46)).to.equal(Number.MAX_VALUE);
    })

    it('checks for negative numbers', function() {
      expect(calculateNumber('SUM', -1.4, 3)).to.equal(2);
    })

    it('checks for two negative numbers', function() {
      expect(calculateNumber('SUM', -3.2, -1.0)).to.equal(-4);
    })

    it('checks that it handles zeros', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    })

    it('checks for invalid type case', function() {
      expect(calculateNumber('sum', 1, 2)).to.equal('Error');
    })
  })

  describe('test for type SUBTRACT', function() {
    it('checks for floating point number on both', function() {
      expect(calculateNumber('SUBTRACT', 2.0, 1.0)).to.equal(1);
    })

    it('checks for fractional number on b', function() {
      expect(calculateNumber('SUBTRACT', 3.0, 1.5)).to.equal(1);
    })

    it('checks for fractional number on a', function() {
      expect(calculateNumber('SUBTRACT', 3.4, 1.0)).to.equal(2);
    })

    it('checks for fractional number on both', function() {
      expect(calculateNumber('SUBTRACT', 6.7, 3.4)).to.equal(4);
    })

    it('checks for negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -8.1, -2.0)).to.equal(-6);
    })

    it('checks for zeros', function() {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    })

    it('checks for large numbers', function() {
      expect(calculateNumber('SUBTRACT', Number.MAX_VALUE, 4.3)).to.equal(Number.MAX_VALUE);
    })

    it('handles edge cases', function() {
      expect(calculateNumber('SUBTRACT', 3.5, -3.5)).to.equal(7);
    })

    it('checks for invalid type case', function() {
      expect(calculateNumber('subtract', 3, 2)).to.equal('Error');
    })
  })

  describe('test for type DIVIDE', function() {
    it('checks for floating point numbers', function() {
      expect(calculateNumber('DIVIDE', 2, 1)).to.equal(2);
    })

    it('checks for fractional number on b', function() {
      expect(calculateNumber('DIVIDE', 4, 2.4)).to.equal(2);
    })

    it('checks for fractional number on a', function() {
      expect(calculateNumber('DIVIDE', 8.4, 2)).to.equal(4);
    })

    it('checks for fractional numbers on both', function() {
      expect(calculateNumber('DIVIDE', 9.4, 2.8)).to.equal(3);
    })

    it('checks for zeros', function() {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    })

    it('checks for zero on a', function() {
      expect(calculateNumber('DIVIDE', 0, 2)).to.equal(0);
    })

    it('checks for zero on b', function() {
      expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    })

    it('checks for large numbers', function() {
      expect(calculateNumber('DIVIDE', 1000000, 2)).to.equal(500000);
    })

    it('checks for invalid type case', function() {
      expect(calculateNumber('divide', 4, 3)).to.equal('Error');
    })
  })
})
