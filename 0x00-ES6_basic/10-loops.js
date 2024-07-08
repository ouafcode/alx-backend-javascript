export default function appendToEachArrayValue(array, appendString) {
  const arr1 = [];
  for (const idx of array) {
    arr1.push(appendString + idx);
  }

  return arr1;
}
