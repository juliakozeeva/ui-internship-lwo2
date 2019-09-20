/**
 * @example
 * // return [
 * // 'MON - WED: 11:00 - 23:00',
 * //'THU - FRI: 12:00 - 23:00',
 * //'SAT: 10:00 - 23:00',
 * //'SUN: 11:00 - 23:00'
 * // ];
 * formatWorkingHours([
 * {
 *    "day": "sat",
 *     "from": "10:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "mon",
 *     "from": "11:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "tue",
 *     "from": "11:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "wed",
 *     "from": "11:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "thu",
 *     "from": "12:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "fri",
 *     "from": "12:00",
 *     "to": "23:00"
 * },
 * {
 *     "day": "sun",
 *     "from": "11:00",
 *     "to": "23:00"
 * }
 * ];)
 * function formatWorkingHours which formats a working hours schedule,
 * given as an array of objects, in a human-friendly way
 * @param {Array} workdays, unsorted array of objects
 * @return {Array} array of objects
 */
function formatWorkingHours(workdays) {
  if (workdays.length === 0) {
    return [];
  } else {
    const workdaysSort = [];
    const result = [];
    let row = 0;
    let i;
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    for (i = 0; i < days.length; i++) {
      workdaysSort[i] = workdays.find((d) => d.day === days[i]);
    }
    for (i = 0; i < workdaysSort.length; i++) {
      if (workdaysSort[i]) {
        let str = workdaysSort[i].day;
        let str2 = '';
        while (i < workdaysSort.length - 1
          && workdaysSort[i].from === workdaysSort[i + 1].from
          && workdaysSort[i].to === workdaysSort[i + 1].to) {
          str2 = ' - ' + workdaysSort[i + 1].day;
          i++;
        }
        str += str2;
        result[row] = str.toUpperCase() + ': ' + workdaysSort[i].from
         + ' - ' + workdaysSort[i].to;
        row++;
      }
    }
    return result;
  }
}
export {formatWorkingHours};
