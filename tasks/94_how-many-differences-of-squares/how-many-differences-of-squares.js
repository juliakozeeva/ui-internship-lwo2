/**
 * @example
 * // return 3
 * squares(4)
 * function squares takes a positive integer n and returns
 *  the amount of numbers between 1 and n (inclusive) that
 *  can be represented as the difference of two perfect squares
 * @param {Number} n, a positive integer
 * @return {Number} amount of numbers that represented
 *  as the difference of two perfect squares
 */
function squares(n) {
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i % 4 !== 2) {
      count++;
    }
  }
  return count;
}

export {squares};
