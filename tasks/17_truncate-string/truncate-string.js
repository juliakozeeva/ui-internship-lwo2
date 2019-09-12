function truncateString(str, num) {
  if (str.length > num) {
    const res = num > 3 ?
     str.slice(0, num - 3) + '...' : str.slice(0, num) + '...';
    return res;
  }
  return str;
}
export {truncateString};
