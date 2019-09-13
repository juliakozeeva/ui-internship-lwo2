function numberToReversedArray(number) {
  return number.toString().split('').reverse().map((x)=> Number(x));
}

export {numberToReversedArray};

