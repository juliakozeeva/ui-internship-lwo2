function firstNSmallest(array, n) {
  const sortedArr = array.slice().sort((a, b) => a - b);
  const smallestNumbers = sortedArr.slice(0, n);
  return array.filter((num) => smallestNumbers.includes(num)).slice(0, n);
}

export {firstNSmallest};
