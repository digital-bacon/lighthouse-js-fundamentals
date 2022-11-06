
/**
 * 
 * @param {Array<Array<string>>} spots - An array of parking spots 
 * with each parking row represented by a nested array, and each 
 * parking spot represented by a letter depicting the spot type
 * @param {string} vehicle - The type of vehicle requiring a spot
 * @returns {Array<number,number> | boolean} An array with available 
 * parking spot `[x, y]` coordinates, or `false` if no spots available.
 */
const whereCanIPark = function (spots, vehicle) {
  let parkingLocation;
  let parkingSpot; // The x coordinate of available parking spot
  let parkingRow; // The y coordinate of available parking spot
  let spotWasFound = false;
  let validSpotTypes = getSpotTypes(vehicle);

  // Look row-by-row for the first parking spot for this vehicle
  for (parkingRow = 0; parkingRow < spots.length; parkingRow++) {
    // Check each spot in this row for a type usable by this vehicle
    for (let spotType of validSpotTypes) {
      parkingSpot = findIndexOf(spots[parkingRow], spotType.toUpperCase());
      if (parkingSpot > -1) { // A spot was found!
        spotWasFound = true;
        break; // Stop looking for a spot in this row
      }
    }
    if (spotWasFound) {
      // Remember where we found the parking location
      parkingLocation = [];
      parkingLocation.push(parkingSpot); // The x coordinate
      parkingLocation.push(parkingRow); // The y coordinate
      break; // Stop searching parking rows for spots
    }
  }
  if (typeof parkingLocation === 'undefined') parkingLocation = false;
  return parkingLocation

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
  }

  /**
   * Function that finds the index of an item in a string or array
   * @param {string | Array} searchIn - The string or array to search
   * @param {*} itemToFind - The item to find
   * @returns {number} The index position where the substring was found
   */
  function findIndexOf(searchIn, itemToFind) {
    let index = -1; // returns -1 if substring not found
    for (let i = 0; i < searchIn.length; i++) {
      if (typeof searchIn === 'string') {
        // Find a match to the first letter of @itemToFind
        if (searchIn[i] === itemToFind[0] && searchIn.length - i >= itemToFind.length) {  // First letter matched
          // Look ahead by retrieving text matching the length of @itemToFind
          lookAhead = slice(searchIn, i, i + itemToFind.length);
          // Check if the text ahead matches @itemToFind
          if (lookAhead === itemToFind) {
            index = i;
            break;
          };
        }
      } else if (searchIn[i] === itemToFind) {
        index = i;
        break;
      }
    }
    return index;
  }
};

console.log(whereCanIPark(
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
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))