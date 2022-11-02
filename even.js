/**
 * Function to test if a number is even.
 * @param {number} num - Any number.
 * @returns {boolean} - Indicates if the number is even.
 */
const isEven = function (num) {
  return num % 2 === 0;
}

// Print test cases.
console.log(isEven(10));
console.log(isEven(11));