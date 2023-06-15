const chai = require('chai');
const calculateNumber = require('./1-calcul');

const expect = chai.expect;

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the rounded sum of two numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', -1, 3.7)).to.equal(3);
      expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
      expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
    });
    it('should throw an error when NaN is passed', () => {
      expect(() => calculateNumber('SUM', 'NaN', 3.7)).to.throw();
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the rounded subtraction of two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', -1, 3.7)).to.equal(-5);
      expect(calculateNumber('SUBTRACT', 1, -3.7)).to.equal(5);
      expect(calculateNumber('SUBTRACT', -1, -3.7)).to.equal(3);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the rounded division of two numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', -1, 3.7)).to.equal(-0.25);
      expect(calculateNumber('DIVIDE', 1, -3.7)).to.equal(-0.25);
      expect(calculateNumber('DIVIDE', -1, -3.7)).to.equal(0.25);
    });

    it('should return "Error" when the rounded value of b is 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -1.7, 0)).to.equal('Error');
    });
  });
});
