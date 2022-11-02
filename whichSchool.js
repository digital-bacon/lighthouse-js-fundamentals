/*
Society is facing a new kind of problem, choice overload. We have so
many choices today, that making decisions can be too difficult. We're
going to help anyone that is trying to decide which school they
should attend, by writing some code that decides for them.

In this challenge, we will write some logic to help learners decide
which school they should attend.

The function returns one of the following strings, based on the value of age:

  - Elementary School if age is below 13
  - Secondary School if age is between 13 and 18 (both inclusive)
  - Lighthouse Labs in all other cases.

 */

/**
 * Match a student to a school based on their age.
 * @param   {number}  age - The age of the student.
 * @returns  {string}  The name of a school.
 */
const whichSchool  = function (age) {
  switch (true) {
    // Students over 18 attend Lighthouse Labs.
    case (age >= 19):
      return "Lighthouse Labs";
    // Students between 13 and 18 attend Secondary School.  
    case (age >= 13 && age <= 18):
      return "Secondary School"; 
    // Students between 1 and 13 attend Elementary School.
    case (age >= 1 && age < 13):
      return "Elementary School";
    // Students must be at least 1 year old to attend a school.
    default:
      return "You aren't old enough to attend school yet."
  }
}

/*
const whichSchool  = function (age) {
  if (age === 0) { // Students must be at least 1 year old to attend a school.
    return "You aren't old enough to attend school yet.";
  } else if (age >= 1 && age < 13) { // Students between 1 and 13 attend Elementary School.
    return "Elementary School";
  } else if (age >= 13 && age <= 18) { // Students between 13 and 18 attend Secondary School.
    return "Secondary School"; 
  } else if (age >= 19) { // Students over 18 attend Lighthouse Labs. 
    return "Lighthouse Labs";
  }
}
*/

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
