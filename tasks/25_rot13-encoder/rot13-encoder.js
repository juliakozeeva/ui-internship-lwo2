function rot13Encoder(str) {
  let decoded = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-M]/.test(str[i])) {
      decoded += String.fromCharCode(str.charCodeAt(i)+26-13);
    } else if (/[N-Z]/.test(str[i])) {
      decoded += String.fromCharCode(str.charCodeAt(i)-13);
    } else decoded += str[i];
  }
  return decoded;
}

export {rot13Encoder};

