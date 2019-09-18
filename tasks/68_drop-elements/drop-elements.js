/**
 * @example
 * // return [3, 4]
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;})
 * function dropElements drops the elements of an array,
 * starting from the front, until the predicate returns true
 * @param {Array} arr, array of numbers
 * @param {Function} func, function for testing the first elements
 * @return {Array} return the rest of the array, otherwise return an empty array
 */
function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}
export {dropElements};
