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
- 
*/

// Dataset of potential voting stations, as an array of array objects.
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// Output the qualified voting stations.
//chooseStations(stations);