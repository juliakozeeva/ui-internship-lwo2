/**
 * stringExpansion return the expansion of that string:
 * The numeric values represent the occurrence of each letter
 * preceding that numeric value
 * @param  {String} str that includes alphanumeric characters
 * @return  {String} Returns string without numeric characters
 */
function stringExpansion(str) {
  const regLetter = new RegExp(/^[A-Za-z]+$/);
  const regNumber = new RegExp(/[^0-9]+$/);
  if (regLetter.test(str)) {
    return str;
  }
  return str.replace(/\d\D+/g, (item)=> {
    const digit = item.replace(regNumber, '');
    const letters = item.replace(regLetter, '');
    return letters.split('').map((item)=>item.repeat(digit)).join('');
  }).replace(/\d/g, '');
}

export {stringExpansion};
