/**
 * Class representing a Cell
 */
class Cell {
  /**
   * Create a cell
   * @param {Number} value, value of cell
   * @param {null} next, next value
   */
  constructor({value, next = null}) {
    this.value = value;
    this.next = next;
  }
}
/**
 * Class representing a Linked List
 */
class LinkedList {
  /**
   * Create empty linked list
   */
  constructor() {
    this.head = null;
    this.amount = 0;
  }
  /**
   * Get the  last cell of linked list
   * @return {Number} value of last cell from linked list
   */
  get tail() {
    if (this.head === null) {
      return this.head;
    }
    let result = this.head;
    while (result.next !== null) {
      result = result.next;
    }
    return result;
  }
  /**
   * Get all cell value of linked list
   * @param {Function} callback, function with every cell when
   * passed into iterate method
   */
  iterate(callback) {
    let cell = this.head;
    while (cell !== null) {
      callback(cell);
      cell = cell.next;
    }
  }
  /**
   * Add value to linked list
   * @param {Number} value, integer
   */
  push(value) {
    const cell = new Cell({value, next: null});
    if (this.head === null) {
      this.head = cell;
      ++this.amount;
      return;
    }
    this.tail.next = cell;
    ++this.amount;
  }
  /**
   * Remove cell from the end
   */
  pop() {
    let cell = this.head;
    if (cell === null) return;
    if (cell.next === null) {
      this.head = null;
      return;
    }
    while (cell.next.next !== null) {
      cell = cell.next;
    }
    cell.next = null;
    this.amount--;
  }
  /**
   * Has to insert new Cell after one with specified value
   * @param {Number} valueToInsertAfter, previous cell value
   * @param {Number} valueToInsert, cell value
   * @return {Boolean} should return false when trying to insert
   *  after not existed value
   */
  insertAfter(valueToInsertAfter, valueToInsert) {
    let cellToInsertAfter = this.head;
    const newCell = new Cell({value: valueToInsert});
    while (cellToInsertAfter!== null && cellToInsertAfter.value
       !== valueToInsertAfter) {
      cellToInsertAfter = cellToInsertAfter.next;
    }
    if (cellToInsertAfter === null) {
      return false;
    }
    let tempNextCell = cellToInsertAfter.next;
    cellToInsertAfter.next = newCell;
    newCell.next = tempNextCell;
    ++this.amount;
    return true;
  }
  /**
   *  Should remove item from the list if one exist
   * @param {Number} valueToRemove, value to be removed
   * @return {Boolean} should return true if passed value is removed
   */
  removeItem(valueToRemove) {
    let cellToRemove = this.head;
    let beforeToRemove = null;
    while (cellToRemove.value !== valueToRemove) {
      beforeToRemove = cellToRemove;
      cellToRemove = cellToRemove.next;
      if (cellToRemove === null) return false;
    }
    beforeToRemove.next = cellToRemove.next;
    this.amount--;
    return true;
  }
}

export {LinkedList};
