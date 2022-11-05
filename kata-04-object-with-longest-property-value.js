/* 

CHALLENGE:
In this exercise, we will be given a list of instructors and have to 
determine which instructor has the longest name.


INSTRUCTION:
Create a function named instructorWithLongestName that will receive an 
array of instructor objects, and return the object that has the 
longest name. If there are two instructors with the longest name, 
return the first one.


EXPECTED OUTPUT:
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); // {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); // {name: "Domascus", course: "Web"}



CONSTRAINTS:
1. If two instructors have the longest name, return the first one.


ALGORITHM:


*/

/**
 * Function that returns the object with the longest name property value
 * @param {Array,<Object>} instructors An array containing instructor objects
 * @returns {Object} The object with the longest name property value
 */
 const instructorWithLongestName = function(instructors) {
  
  return instructors[indexOfLongest('name', instructors)];

  /**
   * Function that returns the index of the object with the longest 
   * value for a given property name
   * @param {string} propertyName 
   * @param {Array,<Object>} arrayOfObjects 
   * @returns {number} Representing the array index of the object
   */
  function indexOfLongest(propertyName = "", arrayOfObjects = []) {
    let indexOfLongest = 0;
    // Read the provided collection of objects
    for (let i = 0; i < arrayOfObjects.length; i++) {
      // Does this object have the longest property so far?
      if (
          arrayOfObjects[i][propertyName].length >= 
          arrayOfObjects[indexOfLongest][propertyName].length
          ) {
        // New longest value found -- remember where to find it
        indexOfLongest = i; 
      }
    }
    return indexOfLongest;
  }
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]), "=?", {name: "Jeremiah", course: "Web"})
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]), "=?", {name: "Domascus", course: "Web"})
