
/**
 * Function that concatenates arrays and sorts the resulting array
 * @param {...Array.*} arrays The arrays to merge
 * @returns {Array.<*>} The resulting concatenated and sorted array.
 */
const merge = (...arrays) => {
  let newArray = [...arrays];
  // Convert it to a single dimensional array
  newArray = newArray.flat();
  return newArray;
}

/*

[4, 5, 1, 9, 7]
loop 1
4 [4] ** NO MORE NUMBERS TO CHECK / EMPTY ARRAY
5 > 4 ... [4, 5] ** NO MORE NUMBERS TO CHECK
1 > 4 ... [1, 4, 5] ** INSERT BEFORE 5
9 > 1... 9 > 4 ... 9 > 5 ... [1, 4, 5, 9] ** NO MORE NUMBERS TO CHECK
7 > 1... 7 > 4 ... 7 > 5 ... 7 > 9 [1, 4, 5, 7, 9] ** INSERT BEFORE 9

*/

// merge([ 5, 6, 2], [ 7, 4, 1, 3 ])

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);