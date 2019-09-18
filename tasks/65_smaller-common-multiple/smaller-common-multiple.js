/**
 * @example
 * // return 60
 * smallestCommons([1, 5])
 * function smallestCommons finds the smallest common multiple
 *  of the provided parameters that can be evenly divided by both
 * @param {Array} arr, array of two numbers
 * @return {Number} number that can be evenly divided by both elements of array
 */
function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let smallestCommon = min * max;
  let hasRest = false;
  while (!hasRest) {
    for (let i = min; i <= max; i++) {
      if (smallestCommon % i !== 0) {
        smallestCommon += max;
        hasRest = false;
        break;
      } else {
        hasRest = true;
      }
    }
  }

  return smallestCommon;
}
export {smallestCommons};
