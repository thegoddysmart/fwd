export default {
    encode: (offset, string) => {
      const result = string
        .split('') // this will slit our string into an array of characters
        .map((char) => {
          if (char.match(/[A-Z]/)) {
            const charCode = char.charCodeAt(0);
            const encryptedCharCode = ((charCode - 65 + offset) % 26) + 65;
            return String.fromCharCode(encryptedCharCode);
          } else if (char.match(/[a-z]/)) {
            const charCode = char.charCodeAt(0);
            const encryptedCharCode = ((charCode - 97 + offset) % 26) + 97;
            return String.fromCharCode(encryptedCharCode);
          } else if (char.match(/[0-9]/)) {
            const charCode = char.charCodeAt(0);
            const encryptedCharCode = ((charCode - 48 + offset) % 10) + 48;
            return String.fromCharCode(encryptedCharCode);
          } else {
            return char;
          }
        })
        .join(''); // this will then join the characters back into a string
  
      return result;
    },
  
    decode: (offset, string) => {
      const result = string
        .split('') // this will slit our string into an array of characters
        .map((char) => {
          if (char.match(/[A-Z]/)) {
            const charCode = char.charCodeAt(0);
            const decryptedCharCode = ((charCode - 65 - offset + 26) % 26) + 65;
            return String.fromCharCode(decryptedCharCode);
          } else if (char.match(/[a-z]/)) {
            const charCode = char.charCodeAt(0);
            const decryptedCharCode = ((charCode - 97 - offset + 26) % 26) + 97;
            return String.fromCharCode(decryptedCharCode);
          } else if (char.match(/[0-9]/)) {
            const charCode = char.charCodeAt(0);
            const decryptedCharCode = ((charCode - 48 - offset + 10) % 10) + 48;
            return String.fromCharCode(decryptedCharCode);
          } else {
            return char;
          }
        })
        .join(''); // this will then join the characters back into a string
  
      return result;
    }
  };
  