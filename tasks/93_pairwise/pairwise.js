/**
 * @example
 * // return 11
 * pairwise([1, 4, 2, 3, 0, 5], 7)
 * function pairwise finds element pairs whose sum equal
 * the second argument arg and return the sum of their indices
 * @param {Array} arr, array of integers
 * @param {Number} arg, second argument
 * @return {Number} the sum of the array indices
 *  which equal to the second argument
 */
function pairwise(arr, arg) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        sum += i + j;
        arr[i] = arr[j] = arg + 2;
      }
    }
  }
  return sum;
}

export {pairwise};

