/**
 * @example
 * // return 5
 * sumFibs(4)
 * function sumFibs return the sum of all odd Fibonacci numbers
 * that are less than or equal to num
 * @param {Number} num, any number
 * @return {Number} return the sum of all odd Fibonacci numbers
 */
function sumFibs(num) {
  let sum = 0;
  let start = 0;
  let next = 1;
  let current;
  for (let i = 0; i <= num; i++) {
    current = start + next;
    start = next;
    next = current;
    if (current % 2 !== 0 && current <= num) {
      sum += current;
    }
  }
  return sum + 1;
}
export {sumFibs};
