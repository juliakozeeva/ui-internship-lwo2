function findFriend(arr) {
  const redMask = 'red';
  const blueMask = 'blue';
  let counter = 0;
  for (let i = 2; i < arr.length - 2; i++) {
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
  if (arr[0] === redMask) {
    if (arr[1] === blueMask && arr[2] === blueMask) {
      counter++;
    }
  }
  if (arr[1] === redMask) {
    if (arr[0] === blueMask && arr[2] === blueMask) {
      counter++;
    }
  }
  if (arr[arr.length-1] === redMask ) {
    if (arr[arr.length-2] === blueMask && arr[arr.length-3] === blueMask) {
      counter++;
    }
  }
  if (arr[arr.length-2] === redMask) {
    if (arr[arr.length-1] === blueMask && arr[arr.length-3] === blueMask) {
      counter++;
    }
  }
  return counter;
}

export {findFriend};
