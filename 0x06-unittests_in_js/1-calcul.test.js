const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the rounded sum of two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', -1, 3.7), 3);
      assert.strictEqual(calculateNumber('SUM', 1, -3.7), -3);
      assert.strictEqual(calculateNumber('SUM', -1, -3.7), -5);
    });
    it('should throw an error when NaN is passed', () => {
      assert.throws(() => calculateNumber('SUM', 'NaN', 3.7), Error);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return the rounded subtraction of two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 3.7), -5);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, -3.7), 5);
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -3.7), 3);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the rounded division of two numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
      assert.strictEqual(calculateNumber('DIVIDE', -1, 3.7), -0.25);
      assert.strictEqual(calculateNumber('DIVIDE', 1, -3.7), -0.25);
      assert.strictEqual(calculateNumber('DIVIDE', -1, -3.7), 0.25);
    });

    it('should return "Error" when the rounded value of b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -1.7, 0), 'Error');
    });
  });
});
