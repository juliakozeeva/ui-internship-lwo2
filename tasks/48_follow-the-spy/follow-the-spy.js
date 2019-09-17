function followTheSpy(arr) {
  function arrayRemove(arr, value) {
    return arr.filter((el) => el !== value);
  }
  const result = [];
  result.push(arr[0][0]);
  let lastPoint = arr[0][1];
  let lastRoute = arr[0];

  let count = arr.length;

  while (count > 0) {
    for (let i = 0; i< arr.length; i++) {
      if (lastPoint === arr[i][0]) {
        result.push(lastPoint);
        lastPoint = arr[i][1];
        arr = arrayRemove(arr, lastRoute);
        lastRoute = arr[i];
      }
    }
    count--;
  }
  result.push(arr[0][1]);
  return result.join(', ');
}


export {followTheSpy};
