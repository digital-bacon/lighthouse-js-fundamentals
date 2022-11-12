const sphereVolume = (radius) => 
 (Math.PI * (Math.pow(radius, 3)) / 3) * 4;

const coneVolume = (radius, height) => 
 ((Math.PI * (Math.pow(radius, 2))) * height) / 3;

const prismVolume = (height, width, depth) => 
  (width * depth) * height;

const calculate = (logic, ...args) => logic(...args);

const volumeCalculations = {
  cone: (...args) => calculate(coneVolume, ...args), // ...args: radius, height
  prism: (...args) => calculate(prismVolume, ...args), // ...args: height, width, depth
  sphere: (...args) => calculate(sphereVolume, ...args), // ...args: radius
}

/**
 * Function that calculates total volume of provided solids/shapes 
 * as objects
 * @param {Array<object>} solids Array collection of shape objects
 * @returns {number} The total volume of the objects
 */
const totalVolume = function (solids) {
  return solids.reduce((subTotal, solid) => {
    subTotal += solid.type === 'cone' ? volumeCalculations[solid.type](solid.radius, solid.height) : 0;
    subTotal += solid.type === 'prism' ? volumeCalculations[solid.type](solid.height, solid.width, solid.depth) : 0;
    subTotal += solid.type === 'sphere' ? volumeCalculations[solid.type](solid.radius) : 0;
    return subTotal;
  }, 0);
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(4186 < calculate(sphereVolume, 10) && calculate(sphereVolume, 10) < 4189);
console.log(45 < calculate(coneVolume, 3, 5) && calculate(coneVolume, 3, 5) < 49);
console.log(calculate(prismVolume, 3, 4, 5) === 60);
console.log(272000 < calculate(totalVolume, duck) && calculate(totalVolume, duck) < 275000);