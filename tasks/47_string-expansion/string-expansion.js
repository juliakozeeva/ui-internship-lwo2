function stringExpansion(str) {
  const regLetter = new RegExp(/^[A-Za-z]+$/);
  const regNumber = new RegExp(/^[0-9]$/);
  if (regLetter.test(str)) {
    return str;
  }
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (regNumber.test(str[i])) {
      let j = 1;
      while ((regLetter.test(str[i+j])) && (i+j)<str.length) {
        newStr += str[i+j].repeat(Number(str[i]));
        j++;
      }
    }
  }
  return newStr;
}

export {stringExpansion};
