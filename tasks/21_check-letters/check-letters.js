function checkLetters(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) < 0) return false;
  }
  return true;
}

export {checkLetters};
