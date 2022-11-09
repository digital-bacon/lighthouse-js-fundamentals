/**
 * Function that converts a string to camelCase
 * @param {string} input The string to convert to camelCase
 * @returns {string} The converted string
 */
 const camelCase = function(input) {
  let newString = input.trim();
  /*
  matches a pattern:
   - if a space \s
   - is followed by any alphabetical character
   - g for global search (find all)
  */
   const regex = /(\s)[a-z]/g;
  newString = input.replace(regex, (input) => input.toUpperCase().replace(/ /gi, ''));
  return newString;
};

const pascalCase = function(input) {
  let newString = input.trim();
  /*
  matches a pattern:
   - if the beginning of the string ^ or | alternatively, space \s
   - is followed by any alphabetical character
   - g for global search (find all)
  */
  const regex = /(^|\s)[a-z]/g;
  newString = input.replace(regex, (input) => input.toUpperCase().replace(/ /gi, ''));
  return newString;
};

const snakeCase = function(input) {
  // Replace all non-alphabetical characters 
  // Then replace all spaces with an underscore
  let newString = input.trim();
  /*
  matches a pattern:
   - finds any character not matching alphabetical or space
   - g for global search (find all)
   - i for case insensitive
  */
  let regex = /[^a-z\s]/gi;
  newString = input.replace(regex, '');
  /*
  matches a pattern:
   - finds any space
   - g for global search (find all)
   - i for case insensitive
  */
  regex = /\s/gi;
  newString = newString.replace(regex, '_');
  return newString;
};

const kebabCase = function(input) {
  // Replace all non-alphabetical characters 
  // Then replace all spaces with an underscore
  let newString = input.trim();
  /*
  matches a pattern:
   - finds any character not matching alphabetical or space
   - g for global search (find all)
   - i for case insensitive
  */
  let regex = /[^a-z\s]/gi;
  newString = input.replace(regex, '');
  /*
  matches a pattern:
   - finds any space
   - g for global search (find all)
   - i for case insensitive
  */
  regex = /\s/gi;
  newString = newString.replace(regex, '-');
  return newString;
};

const titleCase = function(input) {
  let newString = input.trim();
   /*
  matches a pattern:
   - if the beginning of the string ^ or | alternatively, space \s
   - is followed by any alphabetical character
   - g for global search (find all)
  */
  const regex = /(^|\s)[a-z]/g;
  newString = input.replace(regex, (input) => input.toUpperCase());
  return newString;
};

const vowelCase = function(input) {
  let newString = input.trim();
  const regex = /[aeiou]/g;
  newString = input.replace(regex, (input) => input.toUpperCase());
  return newString;
};



console.log(camelCase("this is a string", "camel"));
console.log(pascalCase("this is a string", "pascal"));
console.log(snakeCase("this is a string", "snake"));
console.log(kebabCase("this is a string", "kebab"));
console.log(titleCase("this is a string", "title"));
console.log(vowelCase("this is a string", "vowel"));