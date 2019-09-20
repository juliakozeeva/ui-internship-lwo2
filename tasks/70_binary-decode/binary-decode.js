/**
 * @example
 * // return 'fire!'
 * binaryDecode('01101110 01100110 01101001 01110010 01100101 00100001')
 * function binaryDecode returns an English translated sentence
 * of the passed binary string
 * @param {String} str, binary string
 * @return {String} english translated string
 */
function binaryDecode(str) {
  if (typeof(str) === 'undefined') {
    return '';
  }
  return String.fromCharCode(...str.split(' ').map((el) => parseInt(el, 2)));
}

export {binaryDecode};
