const makeCase = function(input, cases) {
  let regex;
  let newString = input;
  if (Array.isArray(cases) === false) cases = [cases];
  for (const caseType of cases) {
    newString = convertToCase(newString, caseType);
  }

  function convertToCase(input, caseType) {
    switch(caseType) {
      case "upper":
        regex = /[a-z]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
      case "lower":
        regex = /[A-Z]/g;
        input = input.replace(regex, (input) => input.toLowerCase());
        break;
      case "camel":
        regex = /(\s)[a-z]/g;
        input = input.replace(regex, (input) => input.toUpperCase().replace(/ /gi, ''));
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
      case "kebab":
        regex = /[^a-z\s]/gi;
        input = input.replace(regex, '');
        regex = /\s/gi;
        input = input.replace(regex, '-');
        break;
      case "title":
        regex = /(^|\s)[a-z]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
      case "vowel":
        regex = /[aeiou]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
      case "consonant":
        regex = /[bcdfghjklmnpqrstvwxyz]/g;
        input = input.replace(regex, (input) => input.toUpperCase());
        break;
    }
    return input;
  }
  return newString;
}

// console.log(makeCase("this is a string", ["upper", "snake"]))

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