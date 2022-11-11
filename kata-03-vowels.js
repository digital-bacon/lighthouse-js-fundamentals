
/**
 * Function that returns the number of vowels in a string
 * @param {string} data The string 
 * @returns {number} The number of vowels in the string
 */
const numberOfVowels = function(data) {
  let totalVowels = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const character of data) {
    for (const vowel of vowels) {
      if (character.toLowerCase() === vowel) totalVowels++
    }
  }
  return totalVowels;
};

// /**
//  * Function that returns the number of vowels in a string
//  * @param {string} data The string 
//  * @returns {number} The number of vowels in the string
//  */
//  const numberOfVowels = function(data) {
//   let totalVowels = 0;
//   const regex = /[^aeiou]/g; // pattern matches everything but vowels
//   // Replace everything but vowels
//   const vowelsRemoved = data.replace(regex, '');
//   totalVowels = vowelsRemoved.length;
//   // Return the total vowels found in the new string
//   return totalVowels;
// };

console.log(numberOfVowels("orange"), "=?", 3)
console.log(numberOfVowels("lighthouse labs"), "=?", 5)
console.log(numberOfVowels("aeiou"), "=?", 5)