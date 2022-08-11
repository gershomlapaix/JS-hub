const gersh = {
  firstName: "Gersh",
  lastName: "La paix",
  birthYear: 2002,
  job: "Software engineer",
  friends: ["Nesta", "Patrick", "Gerome"],
  calcAge: function () {
    this.age = 2033 - this.birthYear;
    
    // IMPORTANT TO GRASP, cz this will work
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    return this.age;
  },
  // arrow function
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  }, // won't work, bcz 'this' points to the global window
};

gersh.greet();
gersh.calcAge()
