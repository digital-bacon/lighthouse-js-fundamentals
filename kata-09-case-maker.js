/**
 * Function that converts a string to camelCase
 * @param {string} input The string to convert to camelCase
 * @returns {string} The converted string
 */
 const camelCase = function(input) {
  let newString = '';
  let trimmed = input.trim(); // Remove leading and trailing spaces
  // Store each word in a collection for easier reference
  let words = trimmed.split(' ');
  // Check each word in the collection
  for (let word in words) {
    // Don't do anything with the first word
    if (parseInt(word) > 0) {
      // Drop spaces
      if (words[word] === ' ') {
        words.splice(word, 1);
        continue;
      } else {
        // Make this word uppercase
        words[word] = words[word][0].toUpperCase() + words[word].slice(1)
      }
    }
    // Export the words that we've converted
    newString += words[word];
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));