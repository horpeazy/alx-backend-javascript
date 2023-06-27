export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array.keys()) {
    const value = array[idx];
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + value;
  }

  return array;
}
