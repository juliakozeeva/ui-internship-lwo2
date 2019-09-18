/**
 * @example
 * // return 17
 * sumPrimes(10)
 * function sumPrimes finds sum all the prime numbers up to and
 * including the provided number
 * @param {Number} num, input number
 * @return {Number} sum all the prime numbers
 */
function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
export {sumPrimes};
