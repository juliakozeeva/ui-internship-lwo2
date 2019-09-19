/**
 * @example
 * // return '01101110 01100110 01101001 01110010 01100101'
 * binaryEncode("fire")
 * function binaryEncode returns an binary string of passed English sentance
 * @param {String} str, string
 * @return {String} binary string
 */
function binaryEncode(str) {
  if (typeof(str) === 'undefined') {
    return 'string';
  }
  const array = str.split('').map((el) => el.charCodeAt(0).toString(2) + '')
      .map((el) => '0'.repeat(8 - el.length) + el);
  return array.join(' ');
}
export {binaryEncode};
