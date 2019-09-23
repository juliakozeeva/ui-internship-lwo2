/**
 * @example
 * //return 12
 * leastCommonMultiple(6, 4)
 * function leastCommonMultiple accepts two numbers and
 * returns their least common multiple
 * @param {Number} a, first number
 * @param {Number} b, second number
 * @return {Number} least common multiple
 */
function leastCommonMultiple(a, b) {
  return (a * b) / euclideanAlgorithm(a, b);
}
/**
 * @example
 * // return 2
 * euclideanAlgorithm(6, 4)
 * function euclideanAlgorithm accepts two numbers and
 * returns their greatest common divisor
 * @param {Number} a, first number
 * @param {Number} b, second number
 * @return {Number} greatest common divisor
 */
function euclideanAlgorithm(a, b) {
  let rest;
  while ((a % b) > 0) {
    rest = a % b;
    a = b;
    b = rest;
  }
  return b;
}
export {leastCommonMultiple};
