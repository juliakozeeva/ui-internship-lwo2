function removeFalsyValues(arr) {
  arr = arr.filter(function(element) {
    return element;
  });
  return arr;
}
export {removeFalsyValues};
