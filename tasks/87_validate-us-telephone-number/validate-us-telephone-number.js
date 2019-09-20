/**
 * @example
 * // return true
 * telephoneCheck("1 555-555-5555")
 * function telephoneCheck function checks if the passed string is
 * a valid US phone number
 * @param {String} str, string of telephone number
 * @return {Boolean} true if the passed string is a valid US phone number
 * or false if not
 */
function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s'\-']?\d{3}[\s'\-']?\d{4}$/g;
  return regex.test(str);
}

export {telephoneCheck};
