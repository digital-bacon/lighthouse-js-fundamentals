/**
 * Function that, when given a list of instructors, creates a single 
 * object to organize them based on their course.
 * @param {Array<{name: string, course: string}>} instructors - Instructor 
 * names and the course they teach
 * @returns {{course: Array<string>}} Courses with names of instructors
 */
const organizeInstructors = function(instructors) {
  // To collect sorted records
  const sorted = {};
  for (const instructor of instructors) {
    // Does this course already exist in the sorted collection?
    if ('course' in sorted === false) {
      sorted[instructor.course] = []; // Add the course
    };
    // List this instructor among this course's instructors
    sorted[instructor.course].push(instructor.name);
  };
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
