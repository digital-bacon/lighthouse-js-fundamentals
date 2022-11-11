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
  return (calculate(area, height, width) * height);
};

const calculate = (logic, ...args) => {
  return logic(...args);
}

console.log(calculate(sphereVolume, 10));
console.log(calculate(coneVolume, 3, 5));
console.log(calculate(prismVolume, 3, 4, 5));