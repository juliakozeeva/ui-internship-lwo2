function getAverage(marks) {
  let sum = marks.reduce(function(a, b) {
    return a + b;
  });
  return Math.floor(sum / marks.length);
}

export {getAverage};
