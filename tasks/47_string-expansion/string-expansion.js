/**
 * stringExpansion return the expansion of that string:
 * The numeric values represent the occurrence of each letter
 * preceding that numeric value
 * @param  {String} str that includes alphanumeric characters
 * @return  {String} Returns string without numeric characters
 */
function stringExpansion(str) {
  const regLetter = new RegExp(/^[A-Za-z]+$/);
  const regNumber = new RegExp(/^[0-9]$/);
  if (regLetter.test(str)) {
    return str;
  }
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (regNumber.test(str[i])) {
      let charIndex = 1;
      while ((regLetter.test(str[i + charIndex]))
      && (i + charIndex) < str.length) {
        newStr += str[i + charIndex].repeat(Number(str[i]));
        charIndex++;
      }
    }
  }
  return newStr;
}

export {stringExpansion};
