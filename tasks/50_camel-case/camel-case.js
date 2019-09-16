// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  let arr = this.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
};
