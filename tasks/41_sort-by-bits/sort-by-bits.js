function sortByBits(arr) {
  return arr.sort((a, b) => {
    const compare = countOfBits(a) - countOfBits(b);
    if (!compare) {
      return a - b;
    }
    return compare;
  });
}
function countOfBits(num) {
  return num.toString(2).replace(/0/g, '').length;
}
export {sortByBits};

