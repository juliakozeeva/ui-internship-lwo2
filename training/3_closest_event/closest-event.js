/**
 * @example
 * // return 'Challenger Spacecraft Explodes'
 * closestEvent([
 * { date: '2005-08-23', name: 'Hurricane Katrina' },
 * { date: '2004-12-26', name: 'Indian Ocean Earthquake and Tsunami Disaster' },
 * { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
 * { date: '2009-01-15', name: 'Hudson River Plane Crash' },
 * { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
 * { date: '2001-09-11', name: 'September 11 Attacks' },
 * { date: '1986-04-26', name: 'Chernobyl Nuclear Disaster' },
 * { date: '2011-03-16', name: 'Fukushima Nuclear Disaster' }
 * ], new Date(1970, 0, 1))
 * function closestEvent takes array of objects containing some events
 * and return the name of the event that is closest to that date
 * @param {Array} events, array of objects
 * @param {Date} date, date to search
 * @return {String} the name of the event that is closest to that date
 */
function closestEvent(events, date) {
  const days = [];
  events.forEach((element) => {
    const date = element.date.split('-');
    days.push(date.map((item) => parseInt(item)));
  });
  let indexOfEvent = 0;
  let minDiff = diffDays(days[0], date);
  for (let i = 1; i < days.length; i++) {
    let current = diffDays(days[i], date);
    if (current < minDiff) {
      indexOfEvent = i;
      minDiff = current;
    }
  }
  return events[indexOfEvent].name;
}
/**
 * @example
 * // return 13018
 * diffDays([ 2005, 8, 23 ], new Date(1970, 0, 1))
 * function diffDays finds the difference between two dates in days
 * @param {Array} arr, every element from array of event dates
 * @param {Date} date, date to search
 * @return {Number} difference between two dates in days
 */
function diffDays(arr, date) {
  return Math.abs(Math.ceil((new Date(arr[0], arr[1] - 1, arr[2])
   - date) / (1000 * 60 * 60 * 24)));
}

export {closestEvent};
