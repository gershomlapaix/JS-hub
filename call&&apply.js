const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // using object literal syntax to create functions
  book(fligthNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${fligthNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${fligthNum}` });
  },
};

lufthansa["book"](239, "La paix Gersh");
console.log(lufthansa);

const euroWings = {
  airline: "Eurowings",
  iataCode: "LH",
  bookings: [],
};

// call method
const book = lufthansa.book;
// make "this" point to another object
book.call(euroWings, 23, "Sarah WIlliams");
console.log(euroWings);

book.call(lufthansa, 239, "Mary cooper");
console.log(lufthansa);

// apply method
const flightData = [583, "Liberi Clarance"];
book.apply(euroWings, flightData);
console.log(euroWings);

book.call(euroWings, ...flightData); // straightforward

// bind method
const swiss = {
  irline: "Swiss air lines",
  iataCode: "LX",
  bookings: [],
};
