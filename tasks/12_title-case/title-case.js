function titleCase(str) {
  const newStr = str.toLowerCase();
  const words = newStr.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

export {titleCase};
