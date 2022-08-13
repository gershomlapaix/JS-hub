const Person = function (firstName, birthYear) {
  // create the properties with the same names on the new object
  console.log(this);

  this.firstName = firstName;
  this.birthYear = birthYear;
};

const gersh = new Person("La paix", 2002);

console.log(gersh instanceof Person);

//  add methods
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  
  console.log(Person.prototype);
  gersh['calcAge']()