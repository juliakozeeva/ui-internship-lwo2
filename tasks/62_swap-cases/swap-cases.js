/**
 * @example
 * // return hELLO wORLD
 * swapCases('Hello World')
 * function swapCases takes a string and converts upper case letters
 *  to lower case, and lower case letters to upper case
 * @param {String} str which has lower and upper case letters
 * @return {String} string which has upper and lower case letters
 */
function swapCases(str) {
  return str.split('')
      .map((el) => el === el.toUpperCase() ? el.toLowerCase() :
    el.toUpperCase()).join('');
}

export {swapCases};


