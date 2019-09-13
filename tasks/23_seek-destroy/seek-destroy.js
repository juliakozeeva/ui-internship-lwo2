function destroyer(arr, ...args) {
  return arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });
}
export {destroyer};
