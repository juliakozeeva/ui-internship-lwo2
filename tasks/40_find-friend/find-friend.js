function findFriend(arr) {
  const redMask = 'red';
  const blueMask = 'blue';
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === redMask) {
      if (arr[i-1] === blueMask && arr[i+1] === blueMask) {
        counter++;
      } else if (arr[i-1] === blueMask && arr[i-2] === blueMask) {
        counter++;
      } else if (arr[i+1] === blueMask && arr[i+2] === blueMask) {
        counter++;
      }
    }
  }
  return counter;
}

export {findFriend};
