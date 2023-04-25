export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  const array = [...set]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(startString.length));
  return array.join('-');
}
