/**
 * @example
 * // return 'BBbbB'
 * fatFingers("abABaBabAb")
 * function fatFingers gets a string that Freddy wants to type,
 *  emulate the keyboard misses where each A supposedly
 *  pressed is replaced with CapsLock, and returns
 *  the string that Freddy actually types
 * @param {String} str, string that Freddy wants to type
 * @return {String} the string that Freddy actually types
 */
function fatFingers(str) {
  let result = '';
  let reverse = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      reverse ? reverse = false : reverse = true;
    }
    if (reverse) {
      if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
      } else {
        result += str[i].toUpperCase();
      }
    } else {
      result += str[i];
    }
  }
  const reg = /a/gi;
  return result.replace(reg, '');
}

export {fatFingers};
