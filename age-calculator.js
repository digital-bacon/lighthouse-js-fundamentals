/* 
We've been given access to a database that contains all of the users 
for the PlentyOfDevs dating site. This database contains every user's 
date of birth, but users have complained about having to figure out 
someone's age using just their date of birth. In this challenge, we 
will write a function that determines someone's age, given their date 
of birth.

Define a function called ageCalculator. This function should take 3 
parameters:

  - @name – a string representing someone's name
  - @yearOfBirth – a number representing their year of birth
  - @currentYear – a number representing the current year

EXPECTED OUTPUT:
The ageCalculator function should return a string explaining how old 
the person is. For example, if we called: 
`ageCalculator("Suzie", 1983, 2015);`, the return value should be as 
follows. "Suzie is 32 years old."

ALGORITHM:
- Within ageCalculator()
  - Calculate the current age by subtracting @yearOfBirth from 
  @currentYear
  - Add the person's name and other words to the result.
  - Return the result.
*/

/**
 * A function that returns a string explaining how old a person is.
 * @param {string} name A person's name
 * @param {number} yearOfBirth The year the person was born
 * @param {number} currentYear The calendar year
 * @returns {string>} A string explaining how old a person is
 */
 const ageCalculator = (name, yearOfBirth, currentYear) => {
  return (`${name} is ${currentYear - yearOfBirth} years old.`);
 }

// Test case.
// Should print "Suzie is 32 years old."
console.log(ageCalculator("Suzie", 1983, 2015));

// Additional test cases.
// Should print "Miranda is 32 years old."
console.log(ageCalculator("Miranda", 1983, 2015));
// Should print "Ferdinand is 27 years old."
console.log(ageCalculator("Ferdinand", 1988, 2015));