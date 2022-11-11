// --------------------------
//   Abstraction
// --------------------------
const area = (width, depth) => {
  // Formula: V=(wd)h, or in JS: ((width * depth) * height)
  return (width * depth);
};

const sphereVolume = (radius) => {
  // Formula: V=4/3(πr3), or in JS: ((Math.PI * (radius * radius * radius) / 3) * 4)
  return ((Math.PI * (radius * radius * radius) / 3) * 4);
};

const coneVolume = (radius, height) => {
  // Formula: V=1/3(πr2h), or in JS: (((Math.PI * (radius * radius)) * height) / 3)
  return (((Math.PI * (radius * radius)) * height) / 3);
};

const prismVolume = (height, width, depth) => {
  // Formula: V=(wd)h, or in JS: ((width * depth) * height)
  return (calculate(area, width, depth) * height);
};

const calculate = (logic, ...args) => {
  return logic(...args);
}

console.log(calculate(sphereVolume, 10));
console.log(calculate(coneVolume, 3, 5));
console.log(calculate(prismVolume, 3, 4, 5));

// And an example with mapping, to show the power of this approach
const prisms = [[3, 4, 5], [4, 2, 10], [5, 2, 7]] // 3 prisms
// Output an array with the volume of each prism
console.log(prisms.map(element => calculate(prismVolume,element[0], element[1], element[2])))