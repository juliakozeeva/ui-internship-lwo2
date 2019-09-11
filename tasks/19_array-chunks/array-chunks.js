function arrayChunks(arr, size) {
  let newArray = [];
  for (let i = 0; i < arr.length; i+=size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}
export {arrayChunks};
