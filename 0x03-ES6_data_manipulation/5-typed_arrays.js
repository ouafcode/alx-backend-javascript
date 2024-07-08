export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const int8array = new Int8Array(length);
  int8array[position] = value;
  return new DataView(int8array.buffer);
}
