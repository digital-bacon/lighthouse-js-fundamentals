/**
 * Function that plays a number guessing game in the console
 * @param {string} [question] - The question to ask the player
 * @param {number} [solution] - The correct answer
 * @param {Array<number>} [recordedGuesses] - A record of player guesses
 * @param {boolean} [gameOver] - Gameplay ends when true 
 * @returns {Function} Returns recursively until gameOver is true
 */
const numberGuessingGame = (question, solution, recordedGuesses = []) => {
  // Message to show as a result of this round
  let roundMessage = '';

  if (typeof question === 'undefined' || question === '') question = 'Guess a number (1-100): '
  // If no solution was provided, generate a number between 1 and 100
  if (typeof solution === 'undefined') solution = Math.floor(Math.random() * 100) + 1;
  
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
        console.log(roundMessage);
        return;
      } else if (answer < solution) {
        roundMessage += 'Too Low! Try again! ';
      } else if (answer > solution) {
        roundMessage += 'Too High! Try again! ';
      };
    };
  };

  // Let the player know the result of this round
  console.log (`${roundMessage} Or type (quit) to exit`);

  // Repeat play until the game is over
  return numberGuessingGame(question, solution, recordedGuesses);
};

// Play the game!
numberGuessingGame();
