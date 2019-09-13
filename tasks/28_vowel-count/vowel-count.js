function getVowelCount(str) {
  const regex = /[aeiou]/gi;
  const vowelsCount = str.match(regex);
  return vowelsCount === null ? 0 : vowelsCount.length;
}
export {getVowelCount};
