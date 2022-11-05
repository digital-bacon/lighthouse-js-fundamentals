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
For this kata, we'll be adding only the numbers in the array which 
match the given condition.

INSTRUCTION:
Create a function named conditionalSum that will be given an array of 
numbers and a condition, in this case odd or even. Given this 
condition, add up only the values which match that condition. If no 
values match the condition, return 0.


EXPECTED OUTPUT:
console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0


CONSTRAINTS:
1. Do not use built-in helper functions like `.sort`, `.map`, `.filter`
2. Add up only the numbers that match the condition.
3. If no values match the condition, return 0;


ALGORITHM:
We need a way to add all numbers in a data collection
- Read each number in the data collection
- Add each number to the sum of the last


*/

/**
 * Function that returns the sum of numbers that match a condition
 * @param {Array.<number>} data An array of numbers
 * @param {string} condition The condition to match
 * @returns {number} The sum of all numbers that match the condition
 */
 const conditionalSum = function(values, condition) {

  return sumAll(values);

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

 }

console.log(conditionalSum([1, 2, 3, 4, 5], "even"), "=?", 6)
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"), "=?", 9)
console.log(conditionalSum([13, 88, 12, 44, 99], "even"), "=?", 144)
console.log(conditionalSum([], "odd"), "=?", 0)