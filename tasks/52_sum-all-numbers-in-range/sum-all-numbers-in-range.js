/**
 * sumAll function return the sum of range two numbers
 * @param {Array} arr of two numbers
 * @return {Number} sum of all numbers in range
 */

function sumAll(arr) {
  const fullArray = [];
  const max = arr.reduce((a, b) => Math.max(a, b));
  const min = arr.reduce((a, b) => Math.min(a, b));
  for (let i = min; i <= max; i++) {
    fullArray.push(i);
  }
  return fullArray.reduce((sum, value) => sum + value);
}

export {sumAll};
