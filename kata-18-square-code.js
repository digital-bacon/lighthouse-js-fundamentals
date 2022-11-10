/**
 * Function that encodes a given message using square code
 * @param {*} message The message to encode
 * @returns {string} The encoded message
 */
const squareCode = function(message) {
  /* 
  In Square Code, the spaces are removed from the english text and 
  the characters are written into a square (or rectangle).
  */
  // Add a way to remember the encoded message
  let encodedMessage = '';
  // Remove spaces
  message = message.replace(/\s{1}/g, '');
  // Determine how many rows and characters per row to form a square
  const charactersPerRow = Math.round(Math.sqrt(message.length));
  // Add a way to store the square encoded message in rows
  let messageAcrossRows = [];
  // Add an appropriate number of empty rows for our encoded message
  for (let i = 1; i <= charactersPerRow; i++) {
    messageAcrossRows.push([]);
  }

  return messageAcrossRows;
};

console.log(squareCode("chill out"))

// // Expected output: clu hlt io  
// result(squareCode("chill out"),`clu hlt io`);

// // Expected output: fto ehg ee dd
// result(squareCode("feed the dog"),`fto ehg ee dd`);

// // Expected output: hae and via ecy
// result(squareCode("have a nice day"),`hae and via ecy`);

// // Expected output: imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
// result(squareCode("if man was meant to stay on the ground god would have given us roots"),`imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau`);

function result(output, expected) {
  if (output === expected) {
    console.log(`\x1b[32mTEST PASSED\n\x1b[36mresult:\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  } else {
    console.log(`\x1b[33mTEST FAILED\n\x1b[36mresult\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  }
}