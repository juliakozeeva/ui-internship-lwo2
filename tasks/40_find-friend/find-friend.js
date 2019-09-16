function findFriend(arr) {
  const redMask = 'red';
  const blueMask = 'blue';
  let counter = 0;
  arr.forEach((curr, i) => {
    if (
      (curr === redMask && arr[i + 1] === blueMask && arr[i + 2] === blueMask)
       ||
      (curr === redMask && arr[i - 1] === blueMask && arr[i + 1] === blueMask)
       ||
      (curr === redMask && arr[i - 1] === blueMask && arr[i - 2] === blueMask)
    ) {
      counter += 1;
    }
  });
  return counter;
}

export {findFriend};
