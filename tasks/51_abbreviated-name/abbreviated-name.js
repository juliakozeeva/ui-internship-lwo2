/**
 * function abbreviated convert a fullname in abbreviated
 * @param {String} name, fullname string
 * @returns {String} returns string abbreviated of fullname
 */

function abbreviated(name) {
  const words = name.split(' ');
  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0] + '.';
    }
  }
  return words.join(' ');
}

export {abbreviated};
