const weekDays = ["sun", "mon", "tue", "wed", "thur", "fri"];
const restaurant = {
  name: "classico Italiano",
  location: "Via angelo",
  categories: ["Italia", "pizzeria", "Vegetarian", "Organic"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    [weekDays[1]]: {
      open: 11,
      close: 23,
    },
    [weekDays[2]]: {
      open: 11,
      close: 23,
    },
    [weekDays[3]]: {
      open: 0,
      close: 24,
    },
  },
};

const { openingHours: workingHours } = restaurant;

//   loop over object keys(properties)
const properties = Object.keys(workingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

//   loop over property values
const values = Object.values(workingHours);
console.log(values);

// entire object: entries==> [key,value]
const entries = Object.entries(workingHours)
for(const [key, {open, close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
