/**
 * @example
 * // return 6
 * expressionMatter(2, 1, 2)
 * function expressionMatter returns the largest number obtained
 *  after inserting the following operators and brackets: +, *, ()
 * @param {Number} a, integer
 * @param {Number} b, integer
 * @param {Number} c, integer
 * @return {Number} sum of integers
 */
function expressionMatter(a, b, c) {
  const placingSigns = [
    (a * (b + c)),
    (a * b * c),
    ((a + b) * c),
    (a + b + c),
  ];
  return Math.max(...placingSigns);
}

export {expressionMatter};

