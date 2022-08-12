const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);

// FUNCTIONS RETURNING OTHER FUNCTIONS
///////////////////////////////////////////////
const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

const greetingHey = greet("hey");
greetingHey("La paix");
greetingHey("Bon");

// or call the above function like this
greet("Hello")("Kareem");
///////////////////////////////////////////////

const greetFunc = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
greetFunc("Hello")("Kagabo");