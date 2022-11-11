/**
 * Function that, when given a list of instructors, creates a single 
 * object to organize them based on their course.
 * @param {Array<{name: string, course: string}>} instructors - Instructor 
 * names and the course they teach
 * @returns {{course: Array<string>}} Courses with names of instructors
 */
 const organizeInstructors = function(instructors) {

  const sorted = instructors.reduce((collector, current) => {
      if (collector.hasOwnProperty(current.course)) {
        collector[current.course].push(current.name)
      } else {
        collector[current.course] = [current.name]
      }
      return collector;
    }, {} )

  return sorted;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));