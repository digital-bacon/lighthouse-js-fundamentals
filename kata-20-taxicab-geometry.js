/*

Movements:
Left = turn counter-clockwise
Right = turn clockwise
1 block = 1 grid space

Constraints:
1. The driver always starts in the same position, SW corner of grid
2. The output will always be East and North from start.

Array [5, 6]


*/

const blocksAway = function(directions) {
  
  // To remember taxi cab position
  let cabPosition = [0, 6]
  // To remember taxi cab direction of movement
  let cabDirection = 'North'
  // To remember taxi cab travel distance from start point
  let blocksAway = {};

  // Transcribe the directions into two lists: turns, and distances
  let turns = []
  let distances = []
  for (const direction in directions) {
    if (direction % 2) {
      distances.push(directions[direction]);
    } else {
      turns.push(directions[direction]);
    }
  }

  // Follow the directions provided, and see where we end up
  for (let i = 0; i < turns.length; i++) {
    // Change cab direction when turning
    switch (cabDirection) {
      case 'North':
        cabDirection = turns[i] === 'left' ? 'West' : 'East';
        break;
      case 'East':
        cabDirection = turns[i] === 'left' ? 'North' : 'South';
        break;
      case 'South':
        cabDirection = turns[i] === 'left' ? 'East' : 'West';
        break;
      case 'West':
        cabDirection = turns[i] === 'left' ? 'South' : 'North';
        break;
    }
    console.log(`turn: ${turns[i]}, distance: ${distances[i]}, direction: ${cabDirection}`);
  }
  
  // Report blocks away
  return blocksAway;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// Expected output:
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}