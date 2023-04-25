export default createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const view = new DataView(array, 0);

  if (position >= length) throw new Error('Position outside range');

  view.setInt8(position, value);

  return view;
}
