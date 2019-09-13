function maxProduct(arr) {
  let maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] * arr[i + 1] > maxValue) {
      maxValue = arr[i] * arr[i + 1];
    }
  }
  return maxValue;
}
export {maxProduct};
