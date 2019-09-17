/**
 * function uniteUnique takes two or more arrays and
 * returns a new array of unique values
 * in the order of the original provided arrays
 * @param  {Array} arrays of number
 * @return {Array} a new array of unique values
 */

function uniteUnique(...arrays) {
  const totalArray = [].concat(...arrays);
  return Array.from(new Set(totalArray));
}

export {uniteUnique};

