"use strict";

// ARRAYS
const restaurant = {
  name: "classico Italiano",
  location: "Via angelo",
  categories: ["Italia", "pizzeria", "Vegetarian", "Organic"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thur: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 8,
      close: 24,
    },
  },
  order: function (starterIndex, catIndex) {
    return [this.mainMenu[starterIndex], this.categories[catIndex]];
  },
  // destructuring in the functions
  orderDelivery: function ({ restaurantName, location }) {
    console.log(
      `Order from ${restaurantName} restaurant located at ${location}`
    );
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive the returned values from the functions
const [food, loc] = restaurant["order"](2, 0);
console.log(food, loc);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// give the proerties different names
const {
  name: restaurantName,
  openingHours: hours,
  categories: availableCategories,
} = restaurant;

console.log(restaurant, hours, categories);

// default values
const { menu = [], mainMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Nested objects
const {
  thur: { open: morningHour, close: doorClosed },
} = openingHours;
console.log(morningHour, doorClosed);

// destructure in functions
restaurant["orderDelivery"]({ restaurantName, location:loc });
