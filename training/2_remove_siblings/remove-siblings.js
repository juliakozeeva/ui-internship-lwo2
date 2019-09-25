/**
 * @example
 * // return 1
 * removeSiblings(document.querySelector('.target'))
 * function removeSiblings takes HTML element and removes all siblings
 * @param {Object} node, HTML element
 */
function removeSiblings(node) {
  let sibling = node.parentNode.firstChild;
  while (sibling) {
    let nextSibling = sibling.nextSibling;
    if (sibling !== node) {
      document.body.removeChild(sibling);
    }
    sibling = nextSibling;
  }
}
export {removeSiblings};
