// PART 1
const airline = "TAP Air Portugal";

// basic
console.log("B9B9B".length);
console.log("B9B9B"[0]);
console.log(airline.lastIndexOf("P"));
console.log(airline.indexOf("Portugal"));

// slice method:: to get new string
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// get the first word of the sentence
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // ge tthe last word

// counting start from the end
console.log(airline.slice(-2));

// PART 2

// fixing capitalization in the name
const passenger = "la paIx";
// ----
const passengerLower = passenger.toLowerCase();
const fixedPassenger =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(fixedPassenger);

// comparing emails
const email = "lapaix@gmail.com";
const loginEmail = "   Lapaix@gmail.com \n";

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(email === normalizedEmail)


// replacing s