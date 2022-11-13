const calculate = (logic, ...args) => logic(...args);

const volumeFormulas = {
  sphere: (radius) => (Math.PI * (Math.pow(radius, 3)) / 3) * 4,
  cone: (radius, height) => ((Math.PI * (Math.pow(radius, 2))) * height) / 3,
  prism: (height, width, depth) => (width * depth) * height,
}

const calculateVolume = (solidType, ...args) => (calculate(volumeFormulas[solidType], ...args))

/**
 * Function that calculates total volume of provided solids/shapes 
 * as objects
 * @param {Array<object>} solids Array collection of shape objects
 * @returns {number} The total volume of the objects
 */
const totalVolume = (solids) => {
  return solids.reduce((subTotal, solid) => {
    if (solid.type === 'cone') subTotal += calculateVolume(solid.type, solid.radius, solid.height);
    if (solid.type === 'prism') subTotal += calculateVolume(solid.type, solid.height, solid.width, solid.depth);
    if (solid.type === 'sphere') subTotal += calculateVolume(solid.type, solid.radius);
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

console.log(4186 < calculateVolume('sphere', 10) && calculateVolume('sphere', 10) < 4189);
console.log(45 < calculateVolume('cone', 3, 5) && calculateVolume('cone', 3, 5) < 49);
console.log(calculateVolume('prism', 3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);