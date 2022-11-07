/**
 * Function that calculates volume of a sphere, given radius
 * @param {number} radius The radius of the object
 * @returns {number} The volume of the object
 */
const sphereVolume = function (radius) {
  // Formula: V=4/3(πr3), or in JS: ((Math.PI * (radius * radius * radius) / 3) * 4)
  return ((Math.PI * (radius * radius * radius) / 3) * 4)
}

/**
 * Function that calculates volume of a cone, given radius and height
 * @param {number} radius The radius of the object
 * @param {number} height The height of the object
 * @returns {number} The volume of the object
 */
const coneVolume = function (radius, height) {
  // Formula: V=1/3(πr2h), or in JS: (((Math.PI * (radius * radius)) * height) / 3)
  return (((Math.PI * (radius * radius)) * height) / 3)
}

/**
 * Function that calculates volume of a prism, given height, width, 
 * and depth
 * @param {number} height The height of the object
 * @param {number} width The width of the object
 * @param {number} depth The depth of the object
 * @returns {number} The volume of the object
 */
const prismVolume = function (height, width, depth) {
  // Formula: V=(wd)h, or in JS: ((width * depth) * height)
  return ((width * depth) * height)
}

/**
 * Function that calculates total volume of provided solids/shapes 
 * as objects
 * @param {Array<object>} solids Array collection of shape objects
 * @returns {number} The total volume of the objects
 */
const totalVolume = function (solids) {
  let totalVolume = 0;
  for (let solid of solids) {
    // If this object doesn't have a `volume` property, add one
    if (solid.hasOwnProperty(solid) === false) {
      solid.volume = 0;
    }
    // Calculate volume for this kind of solid and store it in '.volume'
    switch (solid.type) {
      case 'sphere':
        solid.volume = sphereVolume(solid.radius);
        break;
      case 'cone':
        solid.volume = coneVolume(solid.radius, solid.height);
        break;
      case 'prism':
        solid.volume = prismVolume(solid.height, solid.width, solid.depth);
        break;
    }
    // Add to the volume of this solid to the total volume
    totalVolume += solid.volume;
  }
  return totalVolume;
}

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]


console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);