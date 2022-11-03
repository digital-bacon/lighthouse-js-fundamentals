/* 
Creating a long array of repeating numbers can be a time consuming 
task. Imagine creating an array of every even number from 0 to 100. In 
this challenge, we will build a function that creates an array like 
this for a given start, end, and step parameter.

Define a function called range

EXPECTED OUTPUT:
When the function is given 3 integer arguments, the output should be
as follows.

range(0, 10, 2);	// [ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	// [ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	// [ -5, -2, 1 ]

CONSTRAINTS:
1. The function takes 3 integer parameters: start, end, and step.
2. The function should return an array of numbers from start to end 
counting by step.
3. The function should return an empty array [] if given incorrect 
parameters, such as:
  - @start, @end, or @step being undefined
  - @start being greater than @end
  - @step being 0, or negative

BREAK IT DOWN:
- We need a way to create an array of numbers with every number 
between two numbers.
  - Use a for loop to generate an array with an initial value matching 
  the start number, the stop condition matching the end number, and 
  increment by 1 in each loop. 
    - Assign the loop counter as the array value

ALGORITHM:
- Call range()
- Within range():
  - Create an empty array named result to hold the result of the operations
  - Use a for loop to generate an array with an initial value matching 
  the start number, the stop condition matching the end number, and 
  increment by 1 in each loop.
  - Assign the loop counter as the array value
  - return the array

*/

/**
 * 
 * @param {number} start A positive or negative integer
 * @param {*} end A positive or negative integer
 * @param {*} step A positive or negative integer 
 * @returns {Array<numbers>} An array of numbers from start to end counting by step
 */
 const range = (start, end, step) => {

 }

// Test cases
console.log(range(0, 10, 2), "=?", [ 0, 2, 4, 6, 8, 10 ]);
console.log(range(10, 30, 5), "=?", [ 10, 15, 20, 25, 30 ]);
console.log(range(-5, 2, 3), "=?", [ -5, -2, 1 ]);