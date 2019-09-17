function uniqueInOrder(arr) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  if (arr[arr.length - 1] !== result[result.length - 1]) {
    result.push(arr[arr.length - 1]);
  }
  return result;
}

export {uniqueInOrder};
