/**
 * @example
 * // return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
 * pairElement("ATCGA")
 * function pairElement takes each character, gets its pair,
 * and returns the results as a 2d array
 * @param {String} str, input string
 * @return {Array} 2d array
 */
function pairElement(str) {
  const pairs = {
    C: 'G',
    G: 'C',
    A: 'T',
    T: 'A',
  };
  const dna = str.split('');
  return dna.map((index) => [index, pairs[index]]);
}
export {pairElement};
