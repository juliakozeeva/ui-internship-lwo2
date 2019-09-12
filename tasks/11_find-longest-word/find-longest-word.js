function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = words.reduce(function(longest, current) {
    if (longest.length < current.length) {
      return current;
    } else {
      return longest;
    }
  });
  return longestWord.length;
}

export {findLongestWord};
