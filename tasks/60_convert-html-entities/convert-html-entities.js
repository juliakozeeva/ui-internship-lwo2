/**
 * @example
 * // return "Dolce &amp; Gabbana"
 * convertHTML("Dolce & Gabbana")
 * function convertHTML converts the characters
 * in a string to their corresponding HTML entities
 * @param {String} str with inccorect HTML entities
 * @return {String} return string with correct HTML entities
 */

function convertHTML(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  };
  for (let key in htmlEntities) {
    if (htmlEntities.hasOwnProperty(key)) {
      const regex = new RegExp(key, 'g');
      str = str.replace(regex, htmlEntities[key]);
    }
  }
  return str;
}

export {convertHTML};
