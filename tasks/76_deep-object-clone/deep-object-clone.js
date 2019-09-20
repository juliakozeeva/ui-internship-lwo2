/**
 * @example
 * // return { a: 1, b: { c:10 } }
 * pairElement({ a: 1, b: { c:10 } })
 * function deepClone to copy an argument object
 * @param {Object} obj, object for cloning
 * @return {Object} copy original object
 */
function deepClone(obj) {
  const clone = {};
  for (let i in obj) {
    if (obj[i] != null && typeof(obj[i])=='object'
    || typeof(obj[i])=='function') {
      clone[i] = deepClone(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
}
export {deepClone};
