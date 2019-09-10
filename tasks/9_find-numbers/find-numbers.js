function getNumbers(str) {
  let regex = /\d+/g;
  return str.match(regex);
}
export {getNumbers};
