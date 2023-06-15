function calculateNumber(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error('NaN');
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
