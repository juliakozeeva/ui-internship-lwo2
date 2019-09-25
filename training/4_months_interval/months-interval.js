/**
 * @example
 * // return ['January']
 * monthsInterval(new Date(2017, 0, 1), new Date(2017, 0, 1))
 * function monthsInterval gets 2 dates, returns the names
 * of the months that are present between them (inclusive)
 * @param {Date} date1, first date
 * @param {Date} date2, second date
 * @return {Array} array of months
 */
function monthsInterval(date1, date2) {
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  if (Math.abs(date1.getFullYear() - date2.getFullYear()) > 1) {
    return month;
  }
  const result = [];
  let min = Math.min(date1.getMonth(), date2.getMonth());
  let max = Math.max(date1.getMonth(), date2.getMonth());
  if (date1.getFullYear() === date2.getFullYear()) {
    while (min <= max) {
      result.push(month[min]);
      min++;
    }
  } else {
    if (date1.getMonth() === date2.getMonth()) {
      return month;
    }
    let count = 0;
    while (count <= min) {
      result.push(month[count]);
      count++;
    }
    while (max <= 11) {
      result.push(month[max]);
      max++;
    }
    return result;
  }
  return result;
}

export {monthsInterval};
