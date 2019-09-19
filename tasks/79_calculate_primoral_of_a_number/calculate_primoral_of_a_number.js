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
 * // return 30030
 * numPrimorial(6)
 * function numPrimorial calculates the primorial of a number
 * @param {Number} num, input number
 * @return {Number} primorial number obtained by multiplying
 */
function numPrimorial(num) {
  let mult = 1;
  let x = 2;
  let iter = 0;
  while (iter < num) {
    if (isPrime(x)) {
      mult *= x;
      iter++;
    }
    x++;
  }
  return mult;
}

export {numPrimorial};

