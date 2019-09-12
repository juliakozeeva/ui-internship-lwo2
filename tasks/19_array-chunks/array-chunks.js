function arrayChunks(arr, size) {
  const newArray = [];
  while (arr.length) {
    let chunk = arr.splice(0, size);
    newArray.push(chunk);
  }
  return newArray;
}
export {arrayChunks};
