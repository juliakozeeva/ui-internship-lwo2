function truncateString(str, num) {
  let res = '';
  if (str.length > num) {
    res = num > 3 ? str.slice(0, num - 3) + '...' : str.slice(0, num) + '...';
    return res;
  }
  return str;
}
export {truncateString};
