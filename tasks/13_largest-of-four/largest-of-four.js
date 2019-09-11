function largestOfFour(arr) {
  let largestArray = [];
  for (let i = 0; i < arr.length; i++) {
    largestArray.push(Math.max(...arr[i]));
  }
  return largestArray;
}
export {largestOfFour};
