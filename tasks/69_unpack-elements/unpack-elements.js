/**
 * @example
 * // return [1,2,3,4]
 * unpackArray([1, [2], [3, [[4]]]])
 * function unpackArray flattens a nested array
 * @param {Array} arr, array of numbers of different nesting
 * @return {Array} array without nesting
 */
function unpackArray(arr) {
  const result = [];
  function flatten(arr) {
    if (!Array.isArray(arr)) {
      result.push(arr);
    } else {
      for (let i=0; i<arr.length; i++) {
        flatten(arr[i]);
      }
    }
  } flatten(arr);
  return result;
  // return arr.flat(Infinity);
}
export {unpackArray};
