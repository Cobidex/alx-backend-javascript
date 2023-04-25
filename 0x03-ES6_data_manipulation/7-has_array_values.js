export default function hasValuesFromArray(set, arr) {
  for (const element in arr) {
    if (!(element in set)) return false;
  }
  return true;
}
