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

// CONVENTION
const question = new Map([
  ["Question", "What is the best programming language"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);

// converting objects to map
console.log(Object.entries(restaurant["openingHours"]));
const hoursMap = new Map(Object.entries(restaurant["openingHours"]));
console.log(hoursMap);

// Quiz app
console.log(question.get("Question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'))
console.log(answer);
console.log(question.get(question.get('Correct') === answer));

//  converting a map to an array
console.log([...question]);

// more
console.log([...question.keys()]);
console.log([...question.values()]);