/**
 * @example
 * // return 9
 * greatestCommonDivisor(36, 45)
 * function greatestCommonDivisor accepts two numbers and
 * returns their greatest common divisor
 * @param {Number} a, first number
 * @param {Number} b, second number
 * @return {Number} greatest common divisor
 */
function greatestCommonDivisor(a, b) {
  let rest;
  while ((a % b) > 0) {
    rest = a % b;
    a = b;
    b = rest;
  }
  return b;
}

export {greatestCommonDivisor};
