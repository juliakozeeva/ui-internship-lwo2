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
  }
  /**
   * Get the size of stack
   * @return {Number} size of stack
   */
  get size() {
    let last = this.last;
    let result = 0;
    while (last !== null) {
      result++;
      last = last.prev;
    }
    return result;
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
   */
  push(value) {
    const node = new Node({value, prev: null});
    node.prev = this.last;
    this.last = node;
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
  }
}
export {Stack};
