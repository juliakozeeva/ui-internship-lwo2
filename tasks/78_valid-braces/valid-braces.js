/**
 * @example
 * // return true
 * validBraces("(){}[]")
 * function validBraces takes a string of braces, and determines
 * if the order of the braces is valid
 * @param {String} braces, a string of braces
 * @return {Boolean} a boolean
 */
function validBraces(braces) {
  const stack = [];
  const matches = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < braces.length; i++) {
    if (matches[braces[i]]) {
      stack.push(braces[i]);
    } else {
      if (braces[i] !== matches[stack.pop()]) {
        return false;
      }
    }
  }
  return true;
}
export {validBraces};
