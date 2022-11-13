
/**
 * Function that returns the coordinates of an available parking 
 * spot for a vehicle, or returns false if there is no available spot
 * @param {Array<Array<string>>} spots - An array of parking spots 
 * with each parking row represented by a nested array, and each 
 * parking spot represented by a letter depicting the spot type
 * @param {string} vehicle - The type of vehicle requiring a spot
 * @returns {Array<number,number> | boolean} An array with available 
 * parking spot `[x, y]` coordinates, or `false` if no spots available
 */
const whereCanIPark = function (spots, vehicle) {
  let parkingLocation;
  let parkingSpot; // The x coordinate of available parking spot
  let parkingRow; // The y coordinate of available parking spot
  let spotWasFound = false;
  const validSpotTypes = getSpotTypes(vehicle);

  // Look row-by-row for the first parking spot for this vehicle
  loopParkingRows:
  for (parkingRow = 0; parkingRow < spots.length; parkingRow++) {
    // Check each spot in this row for a type usable by this vehicle
    loopParkingSpots:
    for (const spotType of validSpotTypes) {
      parkingSpot = findIndexInArray(spots[parkingRow], spotType.toUpperCase());
      if (parkingSpot > -1) { // A spot was found!
        spotWasFound = true;
        break loopParkingSpots; // Stop looking for a spot in this row
      };
    };
    if (spotWasFound) {
      // Remember where we found the parking location
      parkingLocation = [];
      parkingLocation.push(parkingSpot); // The x coordinate
      parkingLocation.push(parkingRow); // The y coordinate
      break loopParkingRows; // Stop searching parking rows for spots
    };
  };
  if (typeof parkingLocation === 'undefined') parkingLocation = false;
  return parkingLocation;

  /**
   * 
   * @param {string} vehicle - The type of vehicle, all lowercase
   * @returns {Array<string>} An array of spot types this vehicle can park in
   */
  function getSpotTypes(vehicle) {
    let spotTypes = []
    switch (vehicle) {
      case 'regular':
        spotTypes.push('r');
        break;
      case 'small':
        spotTypes.push('r');
        spotTypes.push('s');
        break;
      case 'motorcycle':
        spotTypes.push('r');
        spotTypes.push('s');
        spotTypes.push('m');
        break;
      default:
        // no spot matches
    }
    return spotTypes;
  };
};

 /**
   * Function that finds the index of an item in an array
   * @param {Array} searchIn - The array to search
   * @param {*} itemToFind - The item to find
   * @returns {number} The index position where the substring was found
   */
  function findIndexInArray(searchIn, itemToFind) {
    let index = -1; // returns -1 if item not found
    loopArray:
    for (let i = 0; i < searchIn.length; i++) {
      if (searchIn[i] === itemToFind) {
        index = i;
        break loopArray;
      }
    }
    return index;
  }

// TEST CASES:

// Expected output: [4, 0]
result(
  parseResult(
    deepEqual(
      whereCanIPark(
        [
          // COLUMNS ARE X
          // 0    1    2    3    4    5
          ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
          ['s', 'M', 's', 'S', 'r', 'M'], // 1
          ['s', 'M', 's', 'S', 'r', 'm'], // 2
          ['S', 'r', 's', 'm', 'r', 'M'], // 3
          ['S', 'r', 's', 'm', 'r', 'M'], // 4
          ['S', 'r', 'S', 'M', 'M', 'S']  // 5
        ],
        'regular'
      ), [4, 0] // expected output
    ), true, `[4, 0]` // expected output, literal form
  ), `[4, 0]` // expected output, literal form
);

// Expected output: false
result(
  parseResult(
    deepEqual(
      whereCanIPark(
        [
          ['M', 'M', 'M', 'M'],
          ['M', 's', 'M', 'M'],
          ['M', 'M', 'M', 'M'],
          ['M', 'M', 'r', 'M']
        ],
        'small'
      ), false // expected output
    ), true, `false` // expected output, literal form
  ), `false` // expected output, literal form
);

// Expected output: false
result(
  parseResult(
    deepEqual(
      whereCanIPark(
        [
          ['s', 's', 's', 's', 's', 's'],
          ['s', 'm', 's', 'S', 'r', 's'],
          ['s', 'm', 's', 'S', 'r', 's'],
          ['S', 'r', 's', 'm', 'r', 's'],
          ['S', 'r', 's', 'm', 'R', 's'],
          ['S', 'r', 'S', 'M', 'm', 'S']
        ],
        'motorcycle'
      ), [3, 1] // expected output
    ), true, `[3, 1]` // expected output, literal form
  ), `[3, 1]` // expected output, literal form
);

// TEST CASE DEPENDENCIES:

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