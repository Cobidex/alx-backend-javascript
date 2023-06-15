const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the rounded sum of two numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(-1.8, 2), 0);
    assert.strictEqual(calculateNumber(1.8, -2), 0);
    assert.strictEqual(calculateNumber(-1.8, -2), -4);
    assert.strictEqual(calculateNumber(1.5, 0.4), 2);
  });
  it('should throw error if string passed', () => {
    assert.throws(() => calculateNumber('st', 3), Error);
  });
});
