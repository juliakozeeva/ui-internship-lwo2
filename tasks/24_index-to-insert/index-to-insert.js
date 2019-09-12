function getIndexToInsert(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}
export {getIndexToInsert};
