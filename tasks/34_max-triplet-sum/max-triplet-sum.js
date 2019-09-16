// c is variable for triplet = 3, quartet = 4, quintet = 5 sum
function maxTripletSum(array, c = 3) {
  if (array.length <= 3) {
    return [];
  }
  if (array.length > c) {
    const newArray = array.sort(function(a, b) {
      return b - a;
    });
    let tripletSum = 0;
    let cycle = 0;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === newArray[i+1]) {
        continue;
      }
      tripletSum += newArray[i];
      cycle++;
      if (cycle === c) {
        break;
      }
    }
    return tripletSum;
  }
}
export {maxTripletSum};
