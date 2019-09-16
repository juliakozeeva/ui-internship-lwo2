function sortByBits(arr) {
  function countOfBits(num) {
    return num.toString(2).replace(/0/g, '').length;
  }
  return arr.sort((a, b) => {
    const compare = countOfBits(a) - countOfBits(b);
    if (!compare) {
      return a - b;
    }
    return compare;
  });
}
export {sortByBits};

