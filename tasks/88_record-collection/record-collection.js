const collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: [
      '1999',
      'Little Red Corvette',
    ],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
};
/**
 * @example
 * //return {
 * // 2548: {
 * //   album: 'Slippery When Wet',
 * //   artist: 'Bon Jovi',
 * //   tracks: [
 * //     'Let It Rock',
 * //     'You Give Love a Bad Name',
 * //   ],
 * // },
 * // 2468: {
 * //   album: '1999',
 * //   artist: 'Prince',
 * //   tracks: [
 * //     '1999',
 * //     'Little Red Corvette',
 * //   ],
 * // },
 * // 1245: {
 * //   artist: 'Robert Palmer',
 * //   tracks: [],
 * // },
 * // 5439: {
 * //   album: 'ABBA Gold',
 * //   artist: 'ABBA',
 * // },
 * //}
 * updateRecords(5439, "artist", "ABBA")
 * function updateRecords takes an album's id, a property prop,
 * and a value to modify the data in this collection.
 * @param {Number} id, unique id number
 * @param {String} prop, property of object
 * @param {String} value, value
 * @return {String}  the entire collection object
 */
function updateRecords(id, prop, value) {
  if (prop === 'tracks' && value !== '') {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
  } else if (value === '') {
    delete collection[id][prop];
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
export {updateRecords};
