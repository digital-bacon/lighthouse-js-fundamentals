/**
 * Function that converts a string to camelCase
 * @param {string} input The string to convert to camelCase
 * @returns {string} The converted string
 */
const camelCase = function(input) {
  let newString = '';
  let capitalizeNext = false;
  // Find spaces, remove them, and capitalize next letter
  for (let i = 0; i < input.length; i++) {
    // Space was found
    if (input[i] === ' ') {
      capitalizeNext = true; // Flag next letter for capitalization
      continue; // Do not add the space to the newString
    } else if (capitalizeNext) {
      // Add this letter to newString, but capitalize it first
      newString += input[i].toUpperCase();
      capitalizeNext = false; // Reset flag
    } else {
    // Add this letter to newString as-is with no changes
    newString += input[i];
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));