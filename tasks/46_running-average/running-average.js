function runningAverage() {
  const saveInput = [];
  return function(num) {
    saveInput.push(num);
    return saveInput.reduce((a, b) => a + b) / saveInput.length;
  };
}
export {runningAverage};
