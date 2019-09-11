function truncateString(str, num) {
  let res = '';
  if (str.length > num) {
    if (num > 3) {
      res = str.slice(0, num - 3) + '...';
    } else {
      res = str.slice(0, num) + '...';
    }
    return res;
  }
  return str;
}
export {truncateString};
