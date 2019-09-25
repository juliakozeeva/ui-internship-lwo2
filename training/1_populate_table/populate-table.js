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
  const table = document.createElement('table');
  const header = document.createElement('tr');
  const keys = Object.keys(arr[0]);
  for (const key of keys) {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(key));
    header.appendChild(th);
  }
  table.appendChild(header);
  for (const row of arr) {
    const tr = document.createElement('tr');
    for (const key of keys) {
      const td = document.createElement('td');
      if (row[key] === true) {
        row[key] = 'yes';
      } else if (row[key] === false) {
        row[key] = 'no';
      }
      const content = row[key];
      td.appendChild(document.createTextNode(content));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

export {populateTable};


