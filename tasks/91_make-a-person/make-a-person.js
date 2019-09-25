/**
 * Class representing a Person
 */
class Person {
  /**
   * Create a person
   * @param {String} name, the name value
   */
  constructor(name) {
    this.fullname = name.split(' ');
  }
  /**
   * Get the first name value
   * @return {String} The fullname[0] value
   */
  getFirstName() {
    return this.fullname[0];
  }
  /**
   * Get the last name value
   * @return {String} The fullname[1] value
   */
  getLastName() {
    return this.fullname[1];
  }
  /**
   * Get the full name value
   * @return {String} The fullname value
   */
  getFullName() {
    return this.fullname.join(' ');
  }
  /**
   * Set the first name value
   * @param {String} first, the first name value
   * @return {String} The fullname value
   */
  setFirstName(first) {
    this.fullname[0] = first;
    return this.fullname.join(' ');
  }
  /**
   * Set the last name value
   * @param {String} last, the last name value
   * @return {String} The fullname value
   */
  setLastName(last) {
    this.fullname[1] = last;
    return this.fullname.join(' ');
  }
  /**
   * Set the first and last name value
   * @param {String} firstAndLast, the first and last name value
   * @return {String} The fullname value
   */
  setFullName(firstAndLast) {
    this.fullname = firstAndLast.split(' ');
    return this.fullname.join(' ');
  }
}

export {Person};
