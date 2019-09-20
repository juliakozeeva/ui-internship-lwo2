/**
 * @example
 * // return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"],
 * // [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
 * updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"],
 * [0, "Microphone"]], [[1, "Hair Pin"], [1,* "Half-Eaten Apple"],
 * [1, "Bowling Ball"], [1, "Toothpaste"]])
 * function updateInventory compares and updates the current
 *  number of items in inventory stored in a 2D array.
 * @param {Array} arr1, current inventory
 * @param {Array} arr2, new inventory
 * @return {Array} updated inventory in alphabetical order by item
 */
function updateInventory(arr1, arr2) {
  const inventory = Array.prototype.concat.apply([], arr1);
  for (let i = 0; i < arr2.length; i++) {
    const quantity = arr2[i][0];
    const name = arr2[i][1];
    const position = inventory.indexOf(name);
    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += quantity;
    } else {
      arr1.push([quantity, name]);
    }
  }
  arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));
  return arr1;
}
export {updateInventory};
