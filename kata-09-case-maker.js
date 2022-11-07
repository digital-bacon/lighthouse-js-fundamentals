/**
 * Function that converts a string to camelCase
 * @param {string} input The string to convert to camelCase
 * @returns {string} The converted string
 */
const camelCase = function(input) {
  let newString = '';
  let capitalizeNext = false;
  // Find spaces, and capitalize next
  for (let i = 0; i < input.length; i++) {
    // Find a match to the character in @itemToFind
    if (input[i] === ' ') {
      capitalizeNext = true; // Flag next letter for capitalization
    } else if (capitalizeNext) {
      newString += input[i].toUpperCase();
      capitalizeNext = false; // Reset flag
    } else {
      newString += input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));