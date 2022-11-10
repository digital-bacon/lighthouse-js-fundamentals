/**
 * Function that encodes a given message using square code
 * @param {*} message The message to encode
 * @returns {string} The encoded message
 */
const squareCode = function(message) {
  
};

// Expected output: clu hlt io  
console.log(result(squareCode("chill out"),`clu hlt io `);

// Expected output: fto ehg ee dd
console.log(result(squareCode("feed the dog"),`fto ehg ee dd`);

// Expected output: hae and via ecy
console.log(result(squareCode("have a nice day"),`hae and via ecy`);

// Expected output: imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
console.log(result(squareCode("if man was meant to stay on the ground god would have given us roots"),`imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau`);

function result(output, expected) {
  if (output === expected) {
    console.log(`\x1b[32mTEST PASSED\n\x1b[36mresult:\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  } else {
    console.log(`\x1b[33mTEST FAILED\n\x1b[36mresult\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  }
}