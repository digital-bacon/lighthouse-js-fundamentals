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

  // When speaking of array indexes, use [x, y] instead of [0, 1]
  const x = 0;
  const y = 1;

  // Get the location of players on the board
  const playerPositions = []
  for (let row = 0; row < generatedBoard.length; row ++) {
    for (let column = 0; column < generatedBoard[row].length; column ++) {
      if (generatedBoard[row][column] === 1) {
        playerPositions.push([row, column]);
      }
    };
  };
  
  // Assume only two players on the board, player and queen
  const coordinatesPlayer = playerPositions[0];
  const coordinatesQueen = playerPositions[1];
  
  const analyzeThreat = new AnalyzeThreat('queen', coordinatesQueen, coordinatesPlayer);

  return analyzeThreat.opponent.canAttack;

  /**
   * Function that creates an object with player threat information
   * @param {string} opponentType - the game piece of the opponent
   * @param {Array<number, number} opponentCoordinates - the location of the opponent
   * @param {Array<number, number} playerCoordinates - the location of the player
   * @returns {<Object>} Object with player threat information
   */
  function AnalyzeThreat(opponentType, opponentCoordinates, playerCoordinates) {
    this.player = {
      x: playerCoordinates[0],
      y: playerCoordinates[1]
    },
    this.attackSets = {
      queen: ['same diagonal', 'same row', 'same column'],
    }
    this.opponent = {
      x: opponentCoordinates[0],
      y: opponentCoordinates[1],
      type: opponentType,
    },
    this.getAttackSet = (playerType) => {return this.attackSets[playerType]},
    this.canBeAttackedBy = (type) => {
      for (const attack of this.attackSets[type]) {
        switch (attack) {
          case ('same diagonal'):
            if (this.player.x === this.opponent.x) return true;
          case ('same row'):
            if (this.player.x === this.opponent.x) return true;
          case ('same column'):
            if ((this.player.x + this.player.y) === (this.opponent.x + this.opponent.y)) return true;
        };
      };
      return false;
    },
    this.opponent.canAttack = this.canBeAttackedBy(opponentType)
  };

};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/* 
EXPECTED OUTPUT:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

*/