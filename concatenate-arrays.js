/* 
We've sent out two researchers to determine, on a scale of 1-10, how
much people like lighthouses and they are hitting the streets of Canada
to find out what people think.


Both researchers have stored their numbers in array for each
location. This means that we have two different arrays of data for
every single location, but we only want a single array for each
location. We're going to have to concatenate the arrays from both
researchers into a single array.


Instruction: Define a function called `concat`

EXPECTED OUTPUT:
The function should, when given two arrays, concatenate the arrays together.

concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	// output: [ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	// output: [ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]);	// output: [ 9, 7, 2 ]
concat([ 5, 10 ], []);	// output: [ 5, 10 ]

JavaScript has a `.indexOf` function (which does something similar), 
but you may not use it in this exercise.

CONSTRAINTS:
1. 

ALGORITHM:
- 
*/

/**
 * Function that concatenates arrays together
 * @param {...Array} arrays The arrays to merge
 * @returns {Array<*>} The resulting concatenated array.
 */
 const concat = (...arrays) => {
  
 }

// Test cases
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);