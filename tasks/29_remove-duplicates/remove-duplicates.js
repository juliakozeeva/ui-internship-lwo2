function removeDuplicates(a) {
  return a.filter((item, index) => a.indexOf(item) === index);
}
export {removeDuplicates};
