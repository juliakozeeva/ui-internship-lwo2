function minNumberToPrime(arr) {
  let res = 0;
  let sum = arr.reduce((a, b) => a + b);
  while (!isPrime(sum)) {
    sum++;
    res++;
  }
  return res;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
export {minNumberToPrime};

