/**
 * @example
 * // return 5
 * addTogether(2, 3)
 * function addTogether sums two arguments together
 * @param {Number} first, number
 * @param {Number} second, number
 * @return {Number} sum of numbers
 */
function addTogether(first, second) {
  if (arguments.length === 1) {
    if (typeof first !== 'number') {
      return undefined;
    } else {
      return ((value) => {
        if (typeof value !== 'number') {
          return undefined;
        } else {
          return first + value;
        }
      });
    }
  } else {
    if (typeof first !== 'number' || typeof second !== 'number' ) {
      return undefined;
    } else {
      return first + second;
    }
  }
}
export {addTogether};

