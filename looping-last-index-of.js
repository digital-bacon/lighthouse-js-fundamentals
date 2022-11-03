/* 
In this challenge, we will be building a function that determines the 
last index of an item in an array.

Define a function `lastIndexOf`.

EXPECTED OUTPUT:
When this function is given an array and a value, it should return the 
index of the last time the value occurs in the array. If the value 
never occurs, the function should return -1.

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	// 3
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	// 4
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	// -1
lastIndexOf([ 5, 5, 5 ], 5);	// 2
lastIndexOf([], 3);	// -1

JavaScript has a `.indexOf` function (which does something similar), 
but you may not use it in this exercise.

CONSTRAINTS:
1. Do not use the built-in JS method, `.indexOf`.
2. The function should return the index of the last time the value 
occurs in the array.
3. The function will only accept an array as @array.

BREAK IT DOWN:
- 

ALGORITHM:
- 

*/

/**
 * Function that returns the index of the last time an item occurs in an array
 * @param {Array<*>} arrayToSearch The array to check
 * @param {*} itemToFind The item to find in the array
 * @returns {number} Index of the last time the item occurs in the array
 */
 const lastIndexOf = (arrayToSearch, itemToFind) => {
  
 }

// Test cases
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
