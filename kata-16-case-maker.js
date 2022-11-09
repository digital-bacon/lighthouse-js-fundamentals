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

console.log(makeCase("this is a string", "camel"))
console.log(makeCase("this is a string", "pascal"))
console.log(makeCase("this is a string", "snake"))
console.log(makeCase("this is a string", "kebab"))
console.log(makeCase("this is a string", "title"))
console.log(makeCase("this is a string", "vowel"))
console.log(makeCase("this is a string", "consonant"))
console.log(makeCase("this is a string", "upper"))
console.log(makeCase("THIS IS A STRING", "lower"))
// console.log(makeCase("this is a string", ["upper", "snake"]))


