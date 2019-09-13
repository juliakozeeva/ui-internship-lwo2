function rowWeights(array) {
  return array.reduce(function(weights, value, index) {
    weights[index % 2] += value;
    return weights;
  },
  [0, 0]);
}
export {rowWeights};
