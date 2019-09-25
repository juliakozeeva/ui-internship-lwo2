/**
 * @example
 * // return ‘c’
 * addedChar('aabbcc', 'aacccbbcc')
 * function addedChar takes two strings and return the added character
 * @param {String} str1, string to compare
 * @param {String} str2, string with three added characters
 * @return {String} char which was added
 */
function addedChar(str1, str2) {
  let diff = str2;
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    diff = diff.replace(char, '');
  }
  return diff[0];
}
export {addedChar};
