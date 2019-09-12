function arrayChunks(arr, size) {
  let newArray = [];
  while (arr.length) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;
}
export {arrayChunks};
