/**
 * Function that generates a random number within a range
 * @param {number} min - The minimum number to return
 * @param {number} max - The maximum number to return
 * @returns {number} The random number that was generated
 */
const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const numberGuessingGame = (question, solution, recordedGuesses = [], gameOver = false) => {
  // If the game is over, return the result of gameplay
  if (gameOver) {
    return;
  };
  if (typeof question === 'undefined') question = 'Guess a number (1-100): '
  if (typeof solution === 'undefined') solution = randomNumber(1, 100);
  
  // Required to allow reading input from the command line
  let prompt = require("prompt-sync")();

  // Prompt the player for a response with a question
  let answer = prompt(question + solution);

  // Validate player answer
  if (parseInt(answer) === NaN) console.log('Not a number! Try again!');

}

numberGuessingGame();
