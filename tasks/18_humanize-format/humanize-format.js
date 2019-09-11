function humanizeFormat(number) {
  if (typeof number === 'number') {
    number += '';
  } else {
    return '';
  }
  switch (number.slice(-1)) {
    case '1':
      return number + 'st';
    case '2':
      return number + 'nd';
    case '3':
      return number + 'rd';
    default:
      return number + 'th';
  }
}

export {humanizeFormat};
