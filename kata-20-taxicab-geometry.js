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
  
  // To remember starting taxi cab position
  let cabPositionStart = [0, 6]
  // To remember current taxi cab position
  let cabPositionCurrent = cabPositionStart.slice();
  // To remember taxi cab direction of movement
  let cabDirection = 'North'
  // To remember taxi cab travel distance from start point
  let blocksAway = {};
  // Use human readable coordinate references for array indexes [0, 1]
  const x = 0;
  const y = 1;

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
    // Calculate cab location after travel
    switch (cabDirection) {
      case 'North':
        cabPositionCurrent[y] -= distances[i];
        break;
      case 'East':
        cabPositionCurrent[x] += distances[i];
        break;
      case 'South':
        cabPositionCurrent[y] += distances[i];
        break;
      case 'West':
        cabPositionCurrent[x] -= distances[i];
        break;
    };
  };
  
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