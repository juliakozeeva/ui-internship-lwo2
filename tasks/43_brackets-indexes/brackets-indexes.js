function findCloseIndex(string, index) {
  let count = 0;
  let indexCount = -1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      count++;
      if (i === index) {
        indexCount = count;
      }
    } else if (string[i] === ')') {
      if (count === indexCount) {
        return i;
      }
      count--;
    }
  }
  return -1;
}

export {findCloseIndex};
