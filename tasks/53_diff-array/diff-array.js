/**
 * function diffArray compare two arrays and return a new array with any items
 *  only found in one of arrays
 * @param {*} arr1 of any tipes
 * @param {*} arr2 of any tipes
 * @return {Array} return the symmetric difference of the two arrays
 */

function diffArray(arr1, arr2) {
  return arr1.concat(arr2)
      .filter((el) => !arr2.includes(el) || !arr1.includes(el));
}
export {diffArray};

