function appendToEachArrayValue(array, appendString) {
  const arrayItems = array.keys()
  for (let idx of arrayItems) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
