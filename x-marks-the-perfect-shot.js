/* 
Congratulations, you've been elected as the Mayor of Codeville! 
Codeville's biggest event of the year, the Harvest Festival, will be 
coming up soon! Each year, the Harvest Festival kicks off with a 
parade - and you want to make sure this is a show the townspeople will 
remember forever.

You've hired Daria Ducksworth, the town's best photographer, to 
capture the magic of the Harvest Festival Parade. She needs to track 
the coordinates of the floats to help her capture their best angles.

CONSTRAINTS: 
1. The parade can move only 1 grid space at a time.
2. Grid coordinates are stated as [x,y].
3. The parade starts at grid coordinates [0,0].
4. Moves are translated to the grid as follows:
  - North = +1 on the x axis.
  - South = -1 on the x axis.
  - East = +1 on the y axis.
  - West = -1 on the y axis.

EXPECTED OUTPUT:
The finalPosition function should return the array:
[-1, 4]

ALGORITHM:
- `finalPosition(moves)` is called with the moves array as an argument.
- Add a way to perform movement calculation.
  - Create a function named calcMovement with parameters `direction` 
  and `coordinates`.
    - the function will read the direction provided, and then update
    the provided coordinates accordingly.
        - North = +1 on the x axis.
          - calculated as `coordinates[1] += 1`
        - South = -1 on the x axis.
          - calculated as `coordinates[1] -= 1`
        - East = +1 on the y axis.
          - calculated as `coordinates[0] += 1`
        - West = -1 on the y axis. 
    - the function will return the result of the calculation as an 
    array representing [x,y] coordinates.
- within `finalPosition()`:
  - Add a way to store the final x,y coordinates which will be output 
  by this function  
    - Create an array variable named coordinates with initial value of 
    [0,0] to match the default starting position.
    - Iterate through the provided moves argument array.
      - Call `calcMovement(move, coordinates)` on each array item, and return the result
      to `coordinates`.
  - Return 'coordinates'.
*/

/**
 * A function that calculates parade movements and returns an array 
 * representing the position of the parade after completing all of the 
 * provided moves.
 * @param {Array.<string>} moves Parade movements, values can be 'north', 'east', 'south', 'west'
 * @returns {Array.<number,number>} With the [x,y] coordinates after all movements have been calculated
 */
 const finalPosition = function (moves) {
  // Current position as x,y coordinates.
   let coordinates = [0, 0];
  // Calculate moves.
   for (const move of moves) {
     coordinates = calcMovement(move, coordinates);
   }
  // Print the current location to console.
   return coordinates;
 }

/**
 * 
 * @param {string} direction Values can be 'north', 'east', 'south', 'west'
 * @param {Array.<number,number>} coordinates With initaly [x,y] coordinates
 * @returns {Array.<number,number>} With the [x,y] coordinates after all movements have been calculated
 */
 function calcMovement (direction, coordinates) {
  switch (true) {
  case (direction === 'north') : coordinates[1] += 1; break; // Move 1 grid square north.
  case (direction === 'south') : coordinates[1] -= 1; break; // Move 1 grid square south.
  case (direction === 'east') : coordinates[0] += 1; break; // Move 1 grid square east.
  case (direction === 'west') : coordinates[0] -= 1; break; // Move 1 grid square west.
  default: break;
  }
  return coordinates;
}

// Dataset of parade movements.
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

// Get an array indicating the final [x,y] coordinates of the parade.
finalPosition(moves);