/**
 * @example
 * // return ‘We are doing some JavaScript exercises.’
 * insert('We are doing some exercises.','JavaScript ',18)
 * function insert inserts a string within a string at a particular position
 * @param {String} str, string into which to insert a line
 * @param {String} insertable, insertable line
 * @param {Number} position, for line to be inserted
 * @return {String} result string
 */
function insert(str, insertable, position = 0) {
  if (typeof(insertable) === 'undefined') {
    return str;
  }
  return str.slice(0, position) + insertable + str.slice(position);
}

export {insert};
