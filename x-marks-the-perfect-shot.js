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
- 
*/

/**
 * A function that calculates parade movements and returns an array 
 * representing the position of the parade after completing all of the 
 * provided moves.
 * @param {Array.<string>} moves Parade movements, values can be 'north', 'east', 'south', 'west'
 * @returns {Array.<number>} With the [x,y] coordinates after all movements have been calculated
 */
 const finalPosition = function (moves) {
  // Your code in here ...
}

// Dataset of parade movements.
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

// Get an array indicating the final [x,y] coordinates of the parade.
finalPosition(moves);