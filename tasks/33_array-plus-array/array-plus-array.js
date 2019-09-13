function arrayPlusArray(arr1, arr2) {
  const arr3 = [];
  const mathLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < mathLength; i++) {
    arr3.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return arr3;
}

export {arrayPlusArray};
