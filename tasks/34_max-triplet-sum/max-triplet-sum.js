// c is variable for triplet = 3, quartet = 4, quintet = 5 sum
function maxTripletSum(array, c = 3) {
  if (array.length >= c) {
    const newArray = array.sort(function(a, b) {
      return b - a;
    });
    const noDublicate = Array.from( new Set(newArray));
    return noDublicate.slice(0, c).reduce((a, b) => a + b);
  }
}
export {maxTripletSum};
