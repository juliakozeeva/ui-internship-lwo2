/**
 * @example
 * // return "II"
 * convertToRoman(2)
 * function convertToRoman convert the given number into a roman numeral
 * @param {Number} num, arabic number
 * @return {String} string of roman number
 */

function convertToRoman(num) {
  const roman = {M: 1000, CM: 900, D: 500, CD: 400, C: 100,
    XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  let result = '';
  for (let key in roman) {
    if (roman.hasOwnProperty(key)) {
      while (num >= roman[key]) {
        result += key;
        num -= roman[key];
      }
    }
  }
  return result;
}

export {convertToRoman};
