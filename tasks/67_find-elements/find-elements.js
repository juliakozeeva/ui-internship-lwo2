/**
 * @example
 * // return 8
 * findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
 * function findElement looks through first argument and returns the first
 *  element in the array that passes a truth test (second argument)
 * @param {Array} arr, array of numbers
 * @param {Funcion} func, function that includes a condition
 * @return {Number} returns the first element in the array
 */
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
export {findElement};
