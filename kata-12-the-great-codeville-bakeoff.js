/**
 * Function that returns the name of a recipe that can be made with 
 * ingredients on hand. Receives a list of ingredients found at two
 * bakery locations, as well as a recipe list
 * @param {Array<string>} bakeryA - A collection of ingredients found 
 * at this location
 * @param {Array<string>} bakeryB - A collection of ingredients found 
 * at this location
 * @param {Array.<{name: string, ingredients: Array}>} recipes - A 
 * collection of recipes and the required ingredients
 * @returns {string} Name of the recipe that can be made
 */
const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  // Data set of bakery locations and ingredients in stock
  const locations = [
    {
      name: 'bakeryA',
      ingredientInventory: bakeryA,
    },
    {
      name: 'bakeryB',
      ingredientInventory: bakeryB,
    }
  ];

  // A collection of shopping lists
  const shoppingLists = [];

  // Loop through recipes, and build shopping lists for each
  for (let recipe in recipes) {
    let localIndex = -1;
    // Create a shopping list for this recipe
    const myShoppingList = new ShoppingList(recipes[recipe].name, [], recipes[recipe].ingredients)
    // Check if we have ingredients already on-hand in our bakery locations
    for (let location of locations) {
      // Find a specific ingredient
      for (let ingredient in myShoppingList.needIngredients) {
        localIndex = location.ingredientInventory.indexOf(myShoppingList.needIngredients[ingredient]);
        // Ingredient was found at this location
        if (localIndex > -1) {
          // Add this ingredient and location it was found to our found ingredients
          myShoppingList.haveIngredients.push(
            {
              ingredient: myShoppingList.needIngredients[ingredient],
              location: location.name,
            }
          );
          // Remove this ingredient from the needed ingredients list
          myShoppingList.needIngredients.splice(ingredient, 1);
        };
      };
    };
    // Add this shopping list to the collection of shopping lists
    shoppingLists.push(myShoppingList);
  };

  // Collect the names of all recipes that we can make with ingredients on hand
  const canMakeRecipes = [];
  for (let list of shoppingLists) {
    if (list.needIngredients.length === 0) {
      canMakeRecipes.push(list.recipeName);
    }
  }
  
  // Return the name of a recipe we can make with ingredients on hand
  return canMakeRecipes.length > 0 ? canMakeRecipes[0] : '';
    
  // A shopping list for a recipe
  function ShoppingList (name, haveIngredients, needIngredients) {
    this.recipeName = name,
    this.haveIngredients = haveIngredients,
    this.needIngredients = needIngredients
  };

};

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

We needIngredients a way to find the index of an item in an array (bakery ingredient arrays)`
  - findIndexInArray()
    - returns -1 if not found
    - returns index # of matched item if found
We needIngredients a way to 

*/