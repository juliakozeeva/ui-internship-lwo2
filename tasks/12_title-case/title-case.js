function titleCase(str) {
  str = str.toLowerCase();
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  str = words.join(' ');
  return str;
}

export {titleCase};
