/**
 * Function that returns final position after a movement on an x, y grid
 * @param {string} direction - Cardinal directions of travel
 * @param {Array<number>} distance - Distance to move on the grid
 * @param {Array<number,number>} coordinates With inital [x, y] coordinates
 * @returns {Array<number,number>} With the [x, y] coordinates after all movements have been calculated
 */
 const calculateGridMovement = (direction, distance = 1, coordinates = [0, 0]) => {
  // Use human readable coordinate references for array indexes [0, 1]
  const x = 0;
  const y = 1;
  switch (true) {
    case (direction.toLowerCase() === 'north') : coordinates[y] -= distance; break; // Move north.
    case (direction.toLowerCase() === 'south') : coordinates[y] += distance; break; // Move south.
    case (direction.toLowerCase() === 'east') : coordinates[x] += distance; break; // Move east.
    case (direction.toLowerCase() === 'west') : coordinates[x] -= distance; break; // Move west.
    default: break;
  };
  return coordinates;
}

/**
 * Function that calculates the distance a cab is from it's starting 
 * point when provided with directions for travel
 * @param {Array<string, number>} directions - A list of turns and 
 * travel distances for a cab
 * @returns {<string: number>}
 */
const blocksAway = function(directions) {
  
  // To remember starting taxi cab position
  let cabPositionStart = [6, 0];
  // To remember current taxi cab position
  let cabPositionCurrent = cabPositionStart.slice();
  // To remember taxi cab direction of movement
  let cabDirection = 'North';
  // To remember taxi cab travel distance from start point
  let blocksAway = {};
  // Use human readable coordinate references for array indexes [0, 1]
  const x = 0;
  const y = 1;

  // Transcribe the directions into two lists: turns, and distances
  let turns = [];
  let distances = [];
  for (const direction in directions) {
    if (direction % 2) {
      distances.push(directions[direction]);
    } else {
      turns.push(directions[direction]);
    };
  };

  // Ensure the cab only travels East or North
  // !! Design constraint !! Removing allows omnidirectional travel
  if (turns[0] === 'left') cabDirection = 'East';

  // Follow the directions and calculate cab movement
  for (let turn in turns) {
    // Convert turns from left/right to cardinal directions
    switch (cabDirection) {
      case 'North':
        turns[turn] = turns[turn] === 'left' ? 'West' : 'East';
        break;
      case 'East':
        turns[turn] = turns[turn] === 'left' ? 'North' : 'South';
        break;
      case 'South':
        turns[turn] = turns[turn] === 'left' ? 'East' : 'West';
        break;
      case 'West':
        turns[turn] = turns[turn] === 'left' ? 'South' : 'North';
        break;
    };
    cabDirection = turns[turn];
  };

  // Calculate new cab position after travel
  for (let i = 0; i < turns.length; i++) {
    cabPositionCurrent = calculateGridMovement(turns[i], distances[i], cabPositionCurrent);
  };

  // Calculate the blocks away from the start position
  // Reference as East/West
  let keyName = '';
  if (cabPositionStart[x] <= cabPositionCurrent[x]) {
    keyName = "East";
  } else {
    keyName = "West";
  };
  // Remember the reference direction and measure in blocks
  blocksAway[keyName.toLowerCase()] = Math.abs(cabPositionStart[x] - cabPositionCurrent[x]);

  // Reference as North/South
  if (cabPositionStart[y] >= cabPositionCurrent[y]) {
    keyName = "North";
  } else {
    keyName = "South";
  };
  // Remember the reference direction and measure in blocks
  blocksAway[keyName.toLowerCase()] = Math.abs(cabPositionStart[y] - cabPositionCurrent[y]);

  // Report blocks away
  return blocksAway;
};


// Expected output: {east: 1, north: 3}
result(
  parseResult(
    deepEqual(
      blocksAway(["right", 2, "left", 3, "left", 1]
      ), {east: 1, north: 3}
    ), true, `{east: 1, north: 3}`
  ), `{east: 1, north: 3}`
);

// Expected output: {east: 3, north: 3}
result(
  parseResult(
    deepEqual(
      blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]
      ), {east: 3, north: 3}
    ), true, `{east: 3, north: 3}`
  ), `{east: 3, north: 3}`
);

// Expected output: {east: 0, north: 0}
result(
  parseResult(
    deepEqual(
      blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]
      ), {east: 0, north: 0}
    ), true, `{east: 0, north: 0}`
  ), `{east: 0, north: 0}`
);

function result(output, expected) {
  if (output === expected) {
    console.log(`\n\x1b[32mTEST PASSED\n\x1b[36mresult:\n\x1b[0m`, output, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  } else {
    console.log(`\n\x1b[33mTEST FAILED\n\x1b[36mresult:\n\x1b[0m`, output, `\n\x1b[36mexpected:\x1b[0m\n`, expected, `\n\n----------`);
  };
};

function parseResult(result, expectation, output) {
  if (result === expectation) return output;
};

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  };
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    };
  };
  return true;
};
function isObject(object) {
  return object != null && typeof object === 'object';
};