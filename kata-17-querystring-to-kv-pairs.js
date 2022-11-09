/**
 * Function that accepts a querystring and returns key value pairs
 * @param {string} text - the querystring to decode
 * @returns {<{key: string, value: string}>} key value pairs
 */
const urlDecode = function(text) {
  // Put your solution here
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
EXPECTED OUTPUT:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/