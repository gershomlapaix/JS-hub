const Person = function (firstName, birthYear) {
  // create the properties with the same names on the new object
  console.log(this);

  this.firstName = firstName;
  this.birthYear = birthYear;
};

const gersh = new Person("La paix", 2002);

console.log(gersh instanceof Person);

