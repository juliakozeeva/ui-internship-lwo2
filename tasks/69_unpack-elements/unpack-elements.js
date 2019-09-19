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
  flatten(arr, result);
  return result;
  // hacking solution
  // return arr.flat(Infinity);
}
/**
 * @example
 * // return [1,2,3,4]
 * flatten([1, [2], [3, [[4]]]], [])
 * @param {Array} arr,  array of numbers of different nesting
 * @param {Array} result, empty array
 */
function flatten(arr, result) {
  arr.forEach(function(item) {
    result.push(...(Array.isArray(item) ? unpackArray(item) : [item]));
  });
}

export {unpackArray};
