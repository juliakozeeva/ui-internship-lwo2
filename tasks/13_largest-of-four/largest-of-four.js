function largestOfFour(arr) {
  const largestArray = [];
  for (let i = 0; i < arr.length; i++) {
    let maxItem = Math.max(...arr[i]);
    largestArray.push(maxItem);
  }
  return largestArray;
}
export {largestOfFour};
