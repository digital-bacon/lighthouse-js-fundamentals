/**
 * Function that, when given a list of instructors, creates a single 
 * object to organize them based on their course.
 * @param {Array<{name: string, course: string}>} instructors - Instructor 
 * names and the course they teach
 * @returns {{course: Array<string>}} Courses with names of instructors
 */
const organizeInstructors = function(instructors) {
  
  const sortedInstructors = new SortInstructors(instructors);
  return sortedInstructors.sortedByCourse;
  
  /**
   * Constructor function that receives a transaction amount and 
   * payment received, and parses suggested change
   * @param {Array<{name: string, course: string}>} instructors - Instructor 
   * names and the course they teach
   */
   function SortInstructors(instructors) {
    this.sortByCourse = function() {
      // Add a way to remember the sorted records
      const sorted = {};
      // Look at each instructor record
      for (let instructor of instructors) {
       // Does this course already exist in the sorted collection?
        if (sorted.hasOwnProperty(instructor.course) === false) {
          sorted[`${instructor.course}`] = []; // Add the course
        };
        // List this instructor among this course's instructors
        sorted[`${instructor.course}`].push(instructor.name);
      }
      return sorted;
    },
    this.sortedByCourse = this.sortByCourse()
  };
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