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

//   Any object has access to the prototype object
gersh["calcAge"]();

console.log(gersh.__proto__);
console.log(Person.prototype === gersh.__proto__);

console.log(Person.prototype.isPrototypeOf(gersh));
console.log(Person.prototype.isPrototypeOf(Person));

// define a static method
Person.hey = function () {
  console.log(`Hey there!`);
};

Person.hey();
// gersh.hey()   // this will not work

/*   ----  INHERITANCE ----    */
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// implementing inheritance(linking prototypes)
Student.prototype = Object.create(Person.prototype);

// define some methods to the student constructor function
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2004, "Computer Science");
mike.introduce();

mike.calcAge()