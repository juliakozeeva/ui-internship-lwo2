/**
 * function findLetter finds the missing letter
 * in the passed letter range and returns it
 * @param {String} str, string with missing letter or not
 * @return {String} missing letter
 * @return {undefined} return undefined, if letter is not missing
 */
function findLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
export {findLetter};

