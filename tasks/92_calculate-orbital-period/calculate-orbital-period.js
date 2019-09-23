const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;
/**
 * @example
 * // return [{name: "sputnik", orbitalPeriod: 86400}]
 * orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
 * function orbitalPeriod returns a new array that transforms
 * the element's average altitude into their orbital periods
 * @param {Array} arr, array of objects
 * @return {Array} new array that transforms average altitude in orbital period
 */
function orbitalPeriod(arr) {
  for (let prop in arr) {
    if (arr.hasOwnProperty(prop)) {
      const orbitalPeriod = Math.round(
          2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt
          + EARTH_RADIUS, 3) / GM)
      );
      delete arr[prop].avgAlt;
      arr[prop].orbitalPeriod = orbitalPeriod;
    }
  }
  return arr;
}

export {orbitalPeriod};
