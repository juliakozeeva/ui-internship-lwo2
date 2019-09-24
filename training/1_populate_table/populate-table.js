/**
 * @example
 * // returns a table with filled data from the passed array
 * populateTable ([
 * {
 *   id: 1,
 *   name: 'Andrii',
 *   age: 22,
 *   isWorkExperience: true
 * },
 * {
 *   id: 2,
 *   name: 'Anna',
 *   age: 21,
 *   isWorkExperience: false
 * },
 * {
 *   id: 3,
 *   name: 'Marta',
 *   age: 23,
 *   isWorkExperience: true
 *  },
 * ])
 * function populateTable takes array of objects and builds the table
 * @param {Array} arr, array of objects
 */
function populateTable(arr) {
  let tableString = '<table>';
  const body = document.getElementsByTagName('body')[0];
  const div = document.createElement('div');
  tableString += '<thead>';
  tableString += '<tr>';
  const keys = Object.keys(arr[0]);
  for (const key of keys) {
    tableString += '<th>';
    tableString += key;
    tableString += '</th>';
  }
  tableString += '</thead>';
  for (const row of arr) {
    tableString += '<tr>';
    for (const key of keys) {
      tableString += '<td>';
      if (row[key] === true) {
        row[key] = 'yes';
      } else if (row[key] === false) {
        row[key] = 'no';
      }
      const content = row[key];
      tableString += content;
      tableString += '</td>';
    }
    tableString += '</tr>';
  }
  tableString += '</table>';
  div.innerHTML = tableString;
  body.appendChild(div);
}

export {populateTable};


