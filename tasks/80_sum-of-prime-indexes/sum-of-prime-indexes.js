/**
 * @example
 * // return a boolean
 * isPrime(x)
 * function isPrime checks prime numbers
 * @param {Number} x, a number to check if it is prime
 * @return {Boolean} true if number is prime, false if not
 */
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
/**
 * @example
 * // return 7
 * sumPrimeIndexedElements([1, 2, 3, 4])
 * function sumPrimeIndexedElements returns sum of elements
 * occupying prime-numbered indices
 * @param {Array} arr, integer array
 * @return {Number} sum of elements
 */
function sumPrimeIndexedElements(arr) {
  let sum = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sum += arr[i];
    }
  }
  return sum;
}

export {sumPrimeIndexedElements};
