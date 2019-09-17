/**
 * function whatIsInAName looks through first argument and returns an array
 * of all objects that have matching property of second argument
 * @param {Object} collection, array of objects
 * @param {Object} source, value pairs
 * @return {Array} array of objects
 */
function whatIsInAName(collection, source) {
  const arr = [];
  const targetKey = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    const hasKeys = targetKey.every((item) =>
      collection[i].hasOwnProperty(item));
    if (hasKeys && collection[i][targetKey] === source[targetKey]) {
      arr.push(collection[i]);
    }
  }
  return arr;
}
export {whatIsInAName};
