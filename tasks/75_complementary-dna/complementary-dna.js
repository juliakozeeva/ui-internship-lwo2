/**
 * @example
 * // return TAACG
 * pairElement('ATTGC')
 * function DNAStrand gets the other complementary side
 * @param {String} dna, input string
 * @return {String} complementary string
 */
function DNAStrand(dna) {
  const pairs = {
    C: 'G',
    G: 'C',
    A: 'T',
    T: 'A',
  };
  let complementary = dna.split('');
  return complementary.map((x) => pairs[x]).join('').toString();
}

export {DNAStrand};

