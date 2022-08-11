// object declaration and initialization
const gersh = {
  firstName: "Gersh",
  lastName: "La paix",
  birthYear: 2002,
  job: "Software engineer",
  friends: ["Nesta", "Patrick", "Gerome"],
  // add methods(functions)

  /*
calcAge: function (birthYear) {
    return 2033 - birthYear;
  },
*/

  /*
calcAge: function () {
    return 2033 - this.birthYear;
  },
*/
  calcAge: function () {
    this.age = 2033 - this.birthYear;
    return this.age;
  },
};

// RETRIEVAL

console.log(gersh.lastName); //  use dot notation
console.log(gersh["firstName"]); // using bracket notation

// computation
const nameKey = "Name";
console.log(gersh["first" + nameKey]);

// another usage of bracket notation ==> prompting
const interestedIn = prompt(
  "What's your interest in me? Choose among fname, lname, job, age, and friends"
);

if (gersh[interestedIn]) {
  console.log(gersh[interestedIn]);
} else {
  console.log("Wrong");
}

// add more properties
gersh.location = "Rwanda";
gersh["linkedIn"] = "gershom";

console.log("New object");
console.log(gersh);

// call the object methods

// console.log(`My age is ${gersh['calcAge'](2002)}`);
// console.log(`My age in 2033 will be ${gersh["calcAge"]()}`);
console.log(`My age in 2033 will be ${gersh["age"]}`);
