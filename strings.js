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

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing some parts of the string
const priceGB = "288,97#";
const priceUS = priceGB.replace("#", "$").replace(",", ".");
console.log("The price in US will be " + priceUS);

// global replacement
const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replace("door", "gate"));
// enhanced
console.log(announcement.replace(/door/g, "gate"));


// BOOLEANS
const plane = `Airbus A320neo`
console.log(plane.includes('A32'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    console.log(`Part of new AIRBUS family`);
}