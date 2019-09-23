/**
 * @example
 * // return outputs to the log: 1 2 99 100
 * traverseTree({
 * value: 1,
 * children: [
 *     {
 *         value: 2,
 *         children: []
 *     }, {
 *         value: 99,
 *         children: [
 *             {
 *                 value: 100,
 *                 children: []
 *             }
 *         ]
 *     }
 * ]
 * }, callback(argument) { console.log(argument); })
 * function traverseTree that is able to traverse an n-niry tree
 * @param {Object} tree, a tree itself
 * @param {Function} callback, callback function as arguments
 */
function traverseTree(tree, callback) {
  if (tree.children.length) {
    tree.children.forEach((child) => traverseTree(child, callback));
  }
  callback(tree);
}

export {traverseTree};
