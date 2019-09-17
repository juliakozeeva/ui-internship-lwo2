function reverseStringInRange(str, range) {
  const newStr = str.split('');
  const firstPart = newStr.slice(0, range[0]);
  const reversePart = newStr.slice(range[0], range[1] + 1).reverse();
  const lastPart = newStr.slice(range[1] + 1);
  return firstPart.concat(reversePart).concat(lastPart).join('');
}

export {reverseStringInRange};
