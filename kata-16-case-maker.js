/**
 * Function that converts strings to one or more case formats
 * @param {string} input - The string to convert
 * @param {Array<string>, string} cases - A case type or collection of 
 * case types including `camel`,  `consonant`,  `kebab`,  `lower`, `pascal`,  `snake`,  `title`,  `upper`,  `vowel`
 * @returns {string} - The result of the conversion
 */
const makeCase = function(input, cases) {
  const casePriority = []
  casePriority.push("camel") 
  casePriority.push("pascal") 
  casePriority.push("snake") 
  casePriority.push("kebab") 
  casePriority.push("title")
  casePriority.push("vowel")
  casePriority.push("consonant")
  casePriority.push("upper")
  casePriority.push("lower")

  // We don't want leading or trailing whitespace
  let newString = input.trim();
  
  // Convert requested cases to an array so we can loop throught them
  if (Array.isArray(cases) === false) cases = [cases];

  // Process cases in the order of priority outlined in `casePriority`
  for (const priority of casePriority) {
    for (const caseType of cases) {
      if (caseType === priority) {
        // Perform the case conversion
        newString = convertToCase(newString, caseType);
      }
    }
  };

  function convertToCase(input, caseType) {
    let regex;
    switch(caseType) {
      case "camel":
        regex = /(\s)[a-z]/g;
        input = input.replace(regex, (input) => input.toUpperCase().replace(/ /gi, ''));
        break;
      case "consonant":
        regex = /[bcdfghjklmnpqrstvwxyz]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
      case "kebab":
        regex = /[^a-z\s]/gi;
        input = input.replace(regex, '');
        regex = /\s/gi;
        input = input.replace(regex, '-');
        break;
      case "lower":
        regex = /[A-Z]/g;
        input = input.replace(regex, (input) => input.toLowerCase());
        break;
      case "pascal":
        regex = /(^|\s)[a-z]/g;
        input = input.replace(regex, (input) => input.toUpperCase().replace(/ /gi, ''));
        break;
      case "snake":
        regex = /[^a-z\s]/gi;
        input = input.replace(regex, '');
        regex = /\s/gi;
        input = input.replace(regex, '_');
        break;
      case "title":
        regex = /(^|\s)[a-z]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
      case "upper":
        regex = /[a-z]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
      case "vowel":
        regex = /[aeiou]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
    };
    return input;
  }
  return newString;
};

const result = (output, expected) => {
  if (output === expected) {
    console.log(`\x1b[32mTEST PASSED\n\x1b[36mresult:\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  } else {
    console.log(`\x1b[33mTEST FAILED\n\x1b[36mresult\t\t${output}\n\x1b[0mexpected:\t${expected}\n----------`);
  }
}

result(makeCase("this is a string", "camel"), "thisIsAString")
result(makeCase("this is a string", "pascal"), "ThisIsAString")
result(makeCase("this is a string", "snake"), "this_is_a_string")
result(makeCase("this is a string", "kebab"), "this-is-a-string")
result(makeCase("this is a string", "title"), "This Is A String")
result(makeCase("this is a string", "vowel"), "thIs Is A strIng")
result(makeCase("this is a string", "consonant"), "THiS iS a STRiNG")
result(makeCase("this is a string", "upper"), "THIS IS A STRING")
result(makeCase("THIS IS A STRING", "lower"), "this is a string")
result(makeCase("this is a string", ["upper", "snake"]), "THIS_IS_A_STRING")