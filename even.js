/**
 * Function to test if a number is even.
 * @param {number} num - Any number.
 * @returns {boolean} - Indicates if the number is even.
 */
const isEven = function (num) {
  return num % 2 === 0;
}

// Test cases.
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);
// Print test cases.
console.log(tenIsEven);
console.log(elevenIsEven);