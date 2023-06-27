export default function appendToEachArrayValue(array, appendString) {
  const arrayItems = array.keys();
  for (const idx of arrayItems) {
    const value = array[idx];
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + value;
  }

  return array;
}
