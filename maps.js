// Map: a data structure that is used to map values to the keys

// creating map
const rest = new Map();

// insert values using set()
rest.set("name", "classico italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italia", "pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are closed");

//   retrieving the values of the map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1')); // undefined

const time = 8
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
// delete
rest.delete(2)   // delete the second location
console.log(rest.size);

rest.clear()

// tricky
const arr = [1,2]
rest.set(arr, 'Test')
console.log(rest.get(arr));