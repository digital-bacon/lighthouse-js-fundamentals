const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  const shoppingList = {
    recipeName: '',
    bakeryA: [],
    bakeryB: [],
    pickup: [],
  }

  for (let recipe in recipes) {
    let localIndex = -1;
    shoppingList.recipeName = recipes[recipe].name;
    shoppingList.bakeryA = [];
    shoppingList.bakeryB = [];
    shoppingList.pickup = recipes[recipe].ingredients;

    for (let ingredient in shoppingList.pickup) {
      localIndex = bakeryA.indexOf(shoppingList.pickup[ingredient]);
      if (localIndex > -1) { // Ingredient found at Bakery A!
        shoppingList.bakeryA.push(shoppingList.pickup[ingredient]);
        shoppingList.pickup.splice(ingredient, 1);
      }
    }

    for (let ingredient in shoppingList.pickup) {
      localIndex = bakeryB.indexOf(shoppingList.pickup[ingredient]);
      if (localIndex > -1) { // Ingredient found at Bakery A!
        shoppingList.bakeryB.push(shoppingList.pickup[ingredient]);
        shoppingList.pickup.splice(ingredient, 1);
      }
    }

    if (shoppingList.pickup.length === 0) {
      break;
    }

  }

  return shoppingList.pickup.length === 0 ? shoppingList.recipeName : '';


   /**
   * Function that finds the index of an item in an array
   * @param {Array} searchIn - The array to search
   * @param {*} itemToFind - The item to find
   * @returns {number} The index position where the substring was found
   */
    function findIndexInArray(searchIn, itemToFind) {
      let index = -1; // returns -1 if item not found
      for (let i = 0; i < searchIn.length; i++) {
        if (searchIn[i] === itemToFind) {
          index = i;
          break;
        }
      }
      return index;
    }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

/*

We need a way to find the index of an item in an array (bakery ingredient arrays)`
  - findIndexInArray()
    - returns -1 if not found
    - returns index # of matched item if found
We need a way to 

*/