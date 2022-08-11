const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

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
};

// shallow arrays
const mainMenuCopy = [...restaurant['mainMenu']]
console.log(mainMenuCopy);

// Iterables
const str = "La paix"
const myNameLetters = [...str]
console.log(myNameLetters);

