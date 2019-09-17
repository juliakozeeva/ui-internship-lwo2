/**
 * function translatePigLatin translate the provided string to pig latin
 * @param {String} str, word for translate
 * @return {String} return translate word
 */

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) {
    return str + 'way';
  }
  const consonantFirst = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantFirst.length) + consonantFirst + 'ay';
}

export {translatePigLatin};
