/**
 * @example
 * // return [ 3, 4, 5 ]
 * getSymmetric([1, 2, 3], [5, 2, 4, 1])
 * @param {Array} first, first array from args
 * @param {Array} second, second array from args
 * @return {Array} symmetric difference of each arrays
 */
function getSymmetric(first, second) {
  return first.concat(second)
      .filter((el) => !second.includes(el) || !first.includes(el))
      .sort((a, b) => a - b);
}
/**
 * @example
 * // return [3, 4, 5]
 * sym([1, 2, 3], [5, 2, 1, 4])
 * function sym takes two or more arrays and returns an array
 * of the symmetric difference of the provided arrays
 * @param  {Array} args, indefinite number of arrays
 * @return {Array}, symmetric difference of arrays
 */
function sym(...args) {
  const uniqEl = [];
  args.forEach(function(element) {
    uniqEl.push(Array.from(new Set(element)));
  });
  return uniqEl.reduce(function(acc, val) {
    return getSymmetric(acc, val);
  }, []);
}

export {sym};
