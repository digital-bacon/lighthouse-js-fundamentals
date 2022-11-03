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
The function should, when given two arrays, concatenate the arrays
together.

concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	// output: [ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	// output: [ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]);	// output: [ 9, 7, 2 ]
concat([ 5, 10 ], []);	// output: [ 5, 10 ]

CONSTRAINTS:
1. The function will only accept arrays.
2. A single, concatenated array will be returned from the function.

ALGORITHM:
- Call concat() with arrays provided as arguments.
- Inside concat()
  - Declare a new array variable named newArray and set it's value to
  `...arrays`.
- Because the new array will be an array with multiple nested arrays, 
use `newArray.flat()` to convert it to a single dimensional array.
*/

/**
 * Function that concatenates arrays together
 * @param {...Array} arrays The arrays to merge
 * @returns {Array<*>} The resulting concatenated array.
 */
 const concat = (...arrays) => {
  let newArray = [...arrays];
  // Convert it to a single dimensional array
  return newArray.flat();
 }

// Test cases
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);