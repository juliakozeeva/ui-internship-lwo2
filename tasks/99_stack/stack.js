/**
 * Class representing a Node
 */
class Node {
  /**
   * Create a node
   * @param {Number} value, value of node
   * @param {null} prev, previous value
   */
  constructor({value, prev = null}) {
    this.value = value;
    this.prev = prev;
  }
}
/**
 * Class representing a Stack
 */
class Stack {
  /**
   * Create empty stack
   */
  constructor() {
    this.last = null;
    this.size = 0;
  }
  /**
   * Сheck stack for empty
   * @return {null} 0 for empty stack
   */
  get isEmpty() {
    return this.last === null;
  }
  /**
   * Add value to stack
   * @param {Number} value, integer
   * @return {Number} size of stack
   */
  push(value) {
    const node = new Node({value, prev: null});
    node.prev = this.last;
    this.last = node;
    return ++this.size;
  }
  /**
   * Remove top value from stack
   * @return {Number} top value from stack
   */
  pop() {
    const top = this.last;
    if (top !== null) {
      this.last = top.prev;
      return top.value;
    }
    this.size--;
  }
}
export {Stack};
