/**
 * @example
 * // return '1,2,3,4,5'
 * validate_bet([5, 90], "1 2 3 4 5")
 * function validate_bet to check if the bet is valid or not
 * @param {Array} game, array of unique numbers between 1 and M (both included)
 * @param {String} text, text message with numbers
 * @return {Array | String}, array if text message is valide or 'None'
 */
// eslint-disable-next-line camelcase
function validate_bet(game, text) {
  if (text.match(/[^,\s\d]/g)) {
    return 'None';
  }
  const arr = text.split(/(?:,| )+/);
  const newArr = arr.map((el) => parseInt(el, 10));
  const max = newArr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  const min = newArr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  if (newArr.length === game[0] && max <= game[1] && min >= 1) {
    return newArr.sort((a, b) => a - b);
  }
  return 'None';
}
// eslint-disable-next-line camelcase
export {validate_bet};

