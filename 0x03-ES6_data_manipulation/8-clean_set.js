export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  const array = [...set]
    .filter((string) => {
      if (string && string.startsWith(startString)) return string;
    })
    .map((string) => string.slice(startString.length));
  return array.join('-');
}
