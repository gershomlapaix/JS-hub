// const Person  = class{}   // alternative expression of the class

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    // it will be on the prototype property of the objects to be created later, but not on the objects themselves
    console.log(2037 - this.birthYear);
  }

  //   Assessor properties(useful in validations)
  get age() {
    return 2038 - this.birthYear;
  }

  //   when setting a property that's already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name}'s not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //   static methods
  static hey() {
    console.log(`Hey there!!`);
  }
}

const gersh = new PersonCl("La paix", 2002);
gersh.calcAge();
console.log(gersh.__proto__ === PersonCl.prototype);

// important to know(prototypal inheritance still)

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

gersh.greet();

// call upon getters and setters
console.log(gersh.age);
console.log(gersh.fullName);

// call static method
PersonCl.hey();

/*  ---- INHERITANCE----*/
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // always first
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
}

const Mathew = new StudentCl('Mathew Kkk', 2000, 'SPE')
Mathew.introduce()

/**
 * Important points
 *
 * 1. Classes are not hoisted
 * 2. Classes are first-classes citizens(can be passed into the functions and also be returned from the functions)
 * 3. Classes are executed in strict mode
 * */
