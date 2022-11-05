/* 
Some of the following katas deal with arrays and looping! If you're
having some trouble completing these, you might find it helpful to
revisit some of the previous exercises, such as "Looping and
Repetition","Array Operations and Properties", and "Looping Over
Arrays". JavaScript does have some built-in helper functions for
working with arrays such as .sort, .map, .filter, and others, but we
highly recommend avoiding those functions while working through the
prep katas.


CHALLENGE:
In this exercise, we will be given an array of 2 or more numbers. We
will then have to find the two largest numbers in that array, and sum
them together.


EXPECTED OUTPUT:
const sumLargestNumbers = function(data) {

  // Put your solution here
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126


INSTRUCTION:
Create a function named `sumLargestNumbers` that will receive an 
array of numbers and return the sum of the two largest numbers in that 
array.


CONSTRAINTS:
1. Do not use built-in helper functions like `.sort`, `.map`, `.filter`

ALGORITHM:
We need a way to find the largest value in a data collection
- Create a way to remember the largest number found so far
- Create a way to remember the position of the largest number found 
so far from the data collection
STEP 1. Read through the data collection
  - If the value of the current record is larger than the largest 
  number found so far, update the largest number found so far to 
  reflect this number, and also record where to find it in the data 
  collection
STEP 2.When done reading through the records
  - Go back to the largest number we found in the records
  - Remove the number from the data collection
  - Remember the number somewhere else so we can come back to it 
  later
- Repeat the two steps above to find the second largest number.
- Add the two largest numbers together and return the result.

*/

/**
 * Function that returns the sum of the two largest numbers in an array
 * @param {Array.<number>} data An array of numbers
 * @returns {number} The sum of the two largest numbers
 */
 const sumLargestNumbers = function(data = []) {
   let largestNumbers = [];
   let index = -1;
  
  // Find the largest number
  index = indexOfLargest(data);
  // Remove the largest number we found and remember it
  largestNumbers.push(data.splice(index, 1));

  // Find the next largest number
  index = indexOfLargest(data);
  // Remove the largest number we found and remember it
  largestNumbers.push(data.splice(index, 1));

   // Make the array single dimensional, so we can work on it
   largestNumbers = largestNumbers.flat();

   // Add up all the values in the array
   return sumAll(largestNumbers);

  /**
   * Function that returns the sum of all numbers in an array
   * @param {Array.<number>} array An array of numbers
   * @returns {number} The sum of all numbers in the array
   */
   function sumAll(array) {
    let sum = 0; 
    for (let number of array) {
       sum += number;
     }
    return sum;
   }

  /**
   * Function that returns the index of the largest number in an array
   * @param {Array.<number>} array An array of numbers
   * @returns {number} The index of the largest number in the array
   */
   function indexOfLargest(array) {
     let indexOfLargest = 0;
     for (let i = 0; i < array.length; i++) {
       if (array[i] >= array[indexOfLargest]) {
         indexOfLargest = i; // Remember where this largest number can be found.
       }
     }
     return indexOfLargest;
   }
 }

 console.log(sumLargestNumbers([1, 10]), "=?", 11);
 console.log(sumLargestNumbers([1, 2, 3]), "=?", 5);
 console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]), "=?", 126);
 console.log(sumLargestNumbers([2]), "=?", 2);
 console.log(sumLargestNumbers([]), "=?", 0);