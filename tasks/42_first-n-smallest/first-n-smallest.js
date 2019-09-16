function firstNSmallest(array, n) {
  const result = [];
  const sortedArr = array.slice().sort((a, b) => a - b);
  const smallestNumbers = sortedArr.slice(0, n);
  array.forEach((num) => {
    if (smallestNumbers.includes(num)) {
      result.push(num);
    }
  });

  return result.slice(0, n);
}

export {firstNSmallest};
