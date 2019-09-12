function largestOfFour(arr) {
  const largestArray = [];
  for (let i = 0; i < arr.length; i++) {
    const maxItem = Math.max(...arr[i]);
    largestArray.push(maxItem);
  }
  return largestArray;
}
export {largestOfFour};
