/**
 * @example
 * //return true
 * palindrome('eye')
 * function palindrome checks if a string is a palindrome
 * @param {String} str, input string
 * @return {Boolean} a boolean
 */
function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const backword = str.split('').reverse().join('');
  return backword === str ? true : false;
}
export {palindrome};

