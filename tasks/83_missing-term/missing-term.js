/**
 * @example
 * // return 7
 * findMissing([1, 3, 5, 9, 11])
 * function findMissing finds the missing term
 * in array of an arithmetic progression
 * @param {Array} arr, array with missing term
 * @return {Number} missing number
 */
function findMissing(arr) {
  const diff = (arr[arr.length - 1] - arr[0]) / (arr.length);
  const newArray = arr.find((el, index) => el !== (arr[0] + index * diff));
  return newArray - diff;
}
export {findMissing};
