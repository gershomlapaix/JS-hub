const [a, b, ...others] = [12, 4, 5, 3, 55, 52];
console.log(a, b, others);

// The rest element must be the last element

// OBJECTS
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
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

const { sat, ...weekDays } = restaurant['openingHours'];
console.log(weekDays);

// FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }

  return sum;
};

console.log(`The sum of 1 , 3,5 is ${add(1,3,5)}`);