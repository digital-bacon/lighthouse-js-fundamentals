/**
 * Function that generates a random number within a range
 * @param {number} min - The minimum number to return
 * @param {number} max - The maximum number to return
 * @returns {number} The random number that was generated
 */
const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const numberGuessingGame = (question, solution, recordedGuesses = [], guessesAllowed) => {
  if (typeof question === "undefined") question = "Guess a number (1-100): "
  if (typeof solution === "undefined") solution = randomNumber(1, 100);
  // Prompt the user for a response with a question
  let prompt = require("prompt-sync")();
  let answer = prompt(question);
  console.log(`You answered: ${answer}`);
}

numberGuessingGame();
