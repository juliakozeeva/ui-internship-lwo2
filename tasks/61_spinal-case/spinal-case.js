/**
 * @example
 * // return "this-is-spinal-tap"
 * spinalCase('This Is Spinal Tap')
 * function spinalCase converts a string to spinal case
 * @param {String} str with spaces
 * @return {String} string with '-' case
 */
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}
export {spinalCase};
