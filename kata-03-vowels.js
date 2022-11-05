/* 

CHALLENGE:
In this exercise, we will be counting the number of vowels that appear 
in a given string. For this exercise, consider the following to be 
vowels: a, e, i, o, and u.


INSTRUCTION:
Create a function named numberOfVowels that will receive a string and 
return the number of vowels in that string.


EXPECTED OUTPUT:
console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("lighthouse labs")); // 5
console.log(numberOfVowels("aeiou")); // 5


CONSTRAINTS:
1. Consider the following to be vowels: a, e, i, o, and u.


ALGORITHM:
We need a way to return a string containing only the vowels from the 
original string.
  - string.replace(regex, '')
    - this will return a string with only the vowels found in the 
    source string
  - use regex expression /[aeiou]/g
    - translates to: find all letters in this range, and do so 
    globally (across the entire string)
We can then return the number of vowels by subtracting the length
of the new string from the source string.

*/

/**
 * Function that returns the number of vowels in a string
 * @param {string} data The string 
 * @returns {number} The number of vowels in the string
 */
const numberOfVowels = function(data) {

};

console.log(numberOfVowels("orange"), "=?", 3)
console.log(numberOfVowels("lighthouse labs"), "=?", 5)
console.log(numberOfVowels("aeiou"), "=?", 5)

// RegEx testing
let fruit = "apple";
let regex = /[aeiou]/g;
console.log(fruit.replace(regex, ''));