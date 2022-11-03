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
1. The function takes 3 integer parameters: @start, @end, and @step.
2. The function should return an array of numbers from @start to @end 
counting by @step.
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
- We need a way to iterate by @step, rather than 1 at a time.
  - change the incrementor from `i++` to `i += step`.
- We need a way to ensure the provided arguments match the constraints
  - @start, @end, or @step being non-integers
    - Use a Number.isInteger() object method
      - Number.isInteger(@start) // true if integer
      - Number.isInteger(@end) // true if integer
      - Number.isInteger(@step) // true if integer
  - @start, @end, or @step being undefined
    - completed with the above operation to test as integers
  - @start being greater than @end
    - use a greater than comparison operator
      - @start > @end
  - @step being 0, or negative
    - use an equal to or lesser than comparison operator
      - @step <= 0

ALGORITHM:
- Call range()
- Within range():
  - Create an empty array named result to hold the result of the operations
  - Perform input validation on the provided arguments. Return result 
  immediately if any of these tests fail
    - @start, @end, or @step must be integers and cannot be undefined
      - Use a Number.isInteger() object method
        - Number.isInteger(@start) // true if integer
        - Number.isInteger(@end) // true if integer
        - Number.isInteger(@step) // true if integer
    - @start being greater than @end
      - use a greater than comparison operator
        - @start > @end
    - @step being 0, or negative
      - use an equal to or lesser than comparison operator
        - @step <= 0
  - Use a for loop to generate an array with an initial value matching 
  @start, the stop condition matching @end, and increment the value of 
  @step in each loop.
  - Assign the loop counter as the array value
  - return the array

*/

/**
 * 
 * @param {number} start A positive or negative integer
 * @param {number} end A positive or negative integer
 * @param {number} step A positive or negative integer 
 * @returns {Array<...numbers>} An array of numbers from start to end counting by step
 */
 const range = (start, end, step) => {
  let result = []; // The result of the operations
  // Perform validation of provided arguments
  if (validate(start) === false) return result;
  // Validation passed
  // Create an array of numbers from start to end counting by step
  for (let i = start; i <= end; (i += step)) {
    result.push(i);
  }
  return result;
  // A helper function that performs validation.
  function validate() {
    switch (true) {
    case (Number.isInteger(start)):
    case (Number.isInteger(end)):
    case (Number.isInteger(step)):
    case (start > end):
    case (step <= 0):
      return true;
    default:
      return false;
    }
  }
 }

// Test cases, using valid arguments
console.log(range(0, 10, 2), "=?", [ 0, 2, 4, 6, 8, 10 ]);
console.log(range(10, 30, 5), "=?", [ 10, 15, 20, 25, 30 ]);
console.log(range(-5, 2, 3), "=?", [ -5, -2, 1 ]);
// Test cases, using invalid arguments
console.log(range(-5, "2", 3), "=?", [ ]); // Tests for strings as numbers
console.log(range(-5.2, 2, 3), "=?", [ ]); // Tests for non-integer numbers
console.log(range(undefined, 2, 3), "=?", [ ]); // Tests for undefined
console.log(range(5, 2, 3), "=?", [ ]); // Tests for start that's greater than end
console.log(range(5, 2, 0), "=?", [ ]); // Tests for end that's zero
