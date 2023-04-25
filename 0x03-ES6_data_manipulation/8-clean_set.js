export default function cleanSet(set, startString) {
  const array = [...set]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(startString.length));
  return array.join('-');
}
