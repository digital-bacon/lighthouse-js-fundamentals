/**
 * Function that tests for deep equality in array values
 * @param  {...Array} array 
 * @returns {boolean}
 */
const arrayEquality = (...array) => {
  let result = true;
  let firstElement = array.shift(array[0]);
  // If the first value is an array, evaluate all others as arrays
  if (Array.isArray(firstElement)) {
    for (let arrayIndex in array) {
      for (let firstElementIndex in firstElement) {
        if (firstElement[firstElementIndex] !== array[arrayIndex][firstElementIndex]) {
          result = false;
          break;
        }
      }
      if (result === false) break;
    }
  // Evaluate all others as primitives
  } else {
    for (let arrayIndex in array) {
      if (firstElement !== array[arrayIndex]) {
        result = false;
        break;
      }
    }
  }
  return result;
}

/**
 * Function that generates a chess board as an 8 x 8 array. Queen 
 * locations are denoted with a value of `1` and all others `0`
 * @param {Array<number, number} whiteQueen - location as `[x, y]`
 * @param {Array<number, number} blackQueen - location as `[x, y]`
 * @returns {Array<Array<number>>} The playing board with queen 
 * locations marked
 */
const generateBoard = (whiteQueen, blackQueen) => {
  // Generate an 8 x 8 game board
  let gameBoard = [];
  const coordinatesMatch = arrayEquality;
  for (let row = 0; row < 8; row ++) {
    gameBoard.push([]);
    for (let column = 0; column < 8; column ++) {
      if (coordinatesMatch(whiteQueen, [row, column]) || coordinatesMatch(blackQueen, [row, column])) {
        gameBoard[row].push(1);
      } else {
        gameBoard[row].push(0);
      };
    };
  };
  return gameBoard;
}

/**
 * Function that receives a chess board with queen locations marked 
 * with `1`, and analyzes if the queen's are in a position to attack 
 * one another.
 * @param {Array<Array<number>>} generatedBoard The playing board with 
 * queen locations marked
 * @returns {boolean} The result of the analysis
 */
const queenThreat = (generatedBoard) => {
  /*
  * Any player matching this pattern is a threat, 
  * where x and y represent coordinates
  *   - queens are on the same row
  *     (queen1.x === queen2.x)
  *   - queens are on the same column
  *     (queen1.y === queen2.y)
  *   - player coordinates are equal in sum
  *     ((queen1.x + queen1.y) === (queen2.x + queen2.y))
  */
  const queen1 = [0, 1];
  const queen2 = [0, 0];
  const x = 0;
  const y = 1;
  // queens are on the same row
  if (queen1[x] === queen2[x]) {
    console.log('Queens are on the same row!')
  }

}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/* 
EXPECTED OUTPUT:

[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false

*/