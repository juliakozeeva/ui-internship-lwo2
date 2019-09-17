function numberToReversedArray(number) {
  return number.toString().split('').reverse().map(Number);
}

export {numberToReversedArray};

