function getVowelCount(str) {
  let regex = /[aeiou]/gi;
  let vowelsCount = str.match(regex);
  return vowelsCount === null ? 0 : vowelsCount.length;
}
export {getVowelCount};
