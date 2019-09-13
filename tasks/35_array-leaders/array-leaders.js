function arrayLeaders(arr) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr.slice(i+1).reduce((a, b) => a+b, 0)) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

export {arrayLeaders};
