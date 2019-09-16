/**
 * stringExpansion return the expansion of that string:
 * The numeric values represent the occurrence of each letter
 * preceding that numeric value
 * @param  {String} str
 * @param  {RegExp} regLetter
 * @param  {RegExp} regNumber
 * @param {String} newStr
 * @param {Number}  charIndex
 * @return  {String} Returns the value
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
      while ((regLetter.test(str[i+charIndex])) && (i+charIndex)<str.length) {
        newStr += str[i+charIndex].repeat(Number(str[i]));
        charIndex++;
      }
    }
  }
  return newStr;
}

export {stringExpansion};
