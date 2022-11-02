/**
 * Function to test if a number is odd.
 * @param {number} num - Any number.
 * @returns {boolean} - Indicates if the number is odd.
 */
const isOdd = function (num) {
  return num % 2 != 0;
}

// Print test cases.
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));