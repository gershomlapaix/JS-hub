// OR( the first value is true, no need to evaluate the second)
console.log(3 || "La paix");
console.log("" || "La paix");
console.log(true || 0);
console.log(null || undefined);
console.log(undefined || 0 || "Hello" || 23);

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

const guests = restaurant.numGuests || 10;
console.log(guests);

// AND
console.log("\n\n\n");
console.log(0 && "La paix"); // the falsy value will be evaluated
console.log(7 && "Gersh"); // the last will be evaluated
console.log('Hello' && 42 && null && 'Gersh');


// NULLISH COALESCING OPERATOR

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect  = restaurant.numGuests ?? 10
console.log(guestCorrect);


// OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);  // IF property 'mon" exists, call upon 'open'
