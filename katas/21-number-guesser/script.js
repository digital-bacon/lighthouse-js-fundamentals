/**
 * Function that generates a random number within a range
 * @param {number} min - The minimum number to return
 * @param {number} max - The maximum number to return
 * @returns {number} The random number that was generated
 */
const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const numberGuessingGame = (question, solution, recordedGuesses = [], gameOver = false) => {
  // Message to show as a result of this round
  let roundMessage = '';
  
  // If the game is over, return the result of gameplay
  if (gameOver) {
    return;
  };
  if (typeof question === 'undefined' || question === '') question = 'Guess a number (1-100): '
  if (typeof solution === 'undefined') solution = randomNumber(1, 100);
  
  // Required to allow reading input from the command line
  let prompt = require("prompt-sync")();

  // Prompt the player for a response with a question
  console.log (`${question}`);
  let answer = prompt('> ');

  // Give the user a way to quit playing!
  if (answer === 'quit') return;

  // Convert the answer to a number
  answer = parseInt(answer);

  // Validate player answer
  if (Number.isNaN(answer)) {
    roundMessage = 'Not a number! Try again! ';
  } else {
    // Remember the player's answer if it's not the same as the last
    const totalGuesses = recordedGuesses.length;
    if (totalGuesses > 0 && answer === recordedGuesses[totalGuesses - 1]) {
      // Answer is not unique -- let the player know
      roundMessage += 'Already Guessed! Try again!';
    } else {
      // Answer is unique, remember it!
      recordedGuesses.push(answer);
      // Is the number correct?
      if (answer === solution) {
        roundMessage += `You got it! You took ${totalGuesses + 1} attempt${(totalGuesses + 1) > 1 ? 's' : ''}! `;
        gameOver = true;
      } else if (answer < solution) {
        roundMessage += 'Too Low! Try again! ';
      } else if (answer > solution) {
        roundMessage += 'Too High! Try again! ';
      };
    }
  }

  // Let the player know the result of this round
  if (gameOver === false) {
    console.log (`${roundMessage} Or type (quit) to exit`);
  } else {
    console.log (`${roundMessage}`)
  }

}

numberGuessingGame();
