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
  for (let row = 0; row < 8; row ++) {
    gameBoard.push([]);
    for (let column = 0; column < 8; column ++) {
      gameBoard[row].push(0);
    }
  }
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