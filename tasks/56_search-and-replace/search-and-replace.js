/**
 * @example
 * // return "His name is John"
 * myReplace("His name is Tom", "Tom", "john")
 * function myReplace searches and replaces the sentence
 * using the supplied arguments and returns a new sentence
 * @param {String} str, the sentence to perform the search and replace on
 * @param {String} before, the word that will be replacing
 * @param {String} after, what will be replacing the second argument with
 * @return {String} return a new sentences
 */

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}
export {myReplace};
