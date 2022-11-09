/**
 * Function that converts a string to camelCase
 * @param {string} input The string to convert to camelCase
 * @returns {string} The converted string
 */
 const camelCase = function(input) {
  let newString = input.trim();
  /*
  matches a pattern:
   - finds a space
   - followed by any a-z char
   - g for global search (find all)
   - i for case insensitive
  */
  const regex = /\s[a-z]/gi;
  newString = input.replace(regex, (input) => input.toUpperCase().replace(/ /gi, ''));
  return newString;
};

const pascalCase = function(input) {
  let newString = input.trim();
  /*
  matches a pattern:
   - finds a space
   - followed by any a-z char
   - g for global search (find all)
   - i for case insensitive
  */
  const regex = /\s[a-z]/gi;
  newString = input.replace(regex, (input) => input.toUpperCase().replace(/ /gi, ''));
  newString = newString[0].toUpperCase() + newString.slice(1);
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
  const regex = /\s[a-z]/gi;
  newString = input.replace(regex, (input) => input.toUpperCase());
  newString = newString[0].toUpperCase() + newString.slice(1);
  return newString;
};



console.log(camelCase("this is a string", "camel"));
console.log(pascalCase("this is a string", "pascal"));
console.log(snakeCase("this is a string", "snake"));
console.log(kebabCase("this is a string", "kebab"));
console.log(titleCase("this is a string", "title"));