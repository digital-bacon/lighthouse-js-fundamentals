/* 
Welcome to Codeville, a small but thriving town in Serverside, Canada.
The town election is coming up, and citizens are excited to get to 
voting! The dutiful City of Codeville staff has finalized most of the 
details, except for one thing: where will citizens vote?

There are hundreds of buildings in town, but there are very specific 
requirements for what constitutes an acceptable voting station. With 
very little time to decide, the city needs our help to sort through the
building data.

We'll write a chooseStations(stations) function that takes in an array
of possible voting stations, and then only returns the names of the 
stations that are appropriate.

CONSTRAINTS: 
1. A voting station must have a capacity of at least 20. 
2. A voting station must be a school or a community centre. 
3. The challenge requires a `chooseStations(stations)` function that 
takes in a provided array of possible voting stations, and then only 
returns the names of the stations that are appropriate.

EXPECTED OUTPUT:
Calling `chooseStations(stations);` should output an array:
['Bright Lights Elementary', 'Moose Mountain Community Centre']

ALGORITHM:
- `chooseStations(stations)` is called with the stations array as an
argument.
- within `chooseStations()`:
  - Add a way to store the eligible stations, which will be output by
  this function  
    - Create an empty array variable named eligibleStations.
  - Iterate through the array items with a for...of statement.
  - Verify the current station as eligible as a voting station:
    - Use an if...else statement to test capacity meets requirements.
      - if less than 20, use a continue statement to go to skip this 
      station.
    - Use an if...else statement to test if venue type meets 
    requirements.
      - if not a school or community centre, use a continue statement
      to go to skip this station.
    - If this station passes all validation, then add it's name to the 
    `eligibleStations` array.
      - Use an array.push() method.
  - Return the eligibleStations array.
*/

/**
 * A function that takes in an array of possible voting stations, and 
 * then only returns the names of the stations that are appropriate.
 * @param {Array.<string,number,string>} stations Name of venue, capacity, venue type
 * @returns {Array.<string>} With the names of qualified venues
 */
const chooseStations = function (stations) {
  // Add a way to store the eligible stations.
  const eligibleStations = [];
  // Verify the voting stations as eligible.
  for (const station of stations) {
    // A voting station must have a capacity of at least 20.
    if (station[1] < 20) continue; // continue will skip this station.
    // A voting station must be a school or a community centre. 
    if (station[2] !== "school" && station[2] !== "community centre") continue; // continue will skip this station.
    // Station is eligible, add it to the eligible stations.
    eligibleStations.push(station[0]);
  }
  // Return the eligible stations.
  return eligibleStations;
}

// Dataset of potential voting stations, as an array of array objects.
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// Get an array of the qualified voting stations.
chooseStations(stations);