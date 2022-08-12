// SET: collection of unique values
const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta"]);

console.log(orderSet);
console.log(new Set("La paix"));

console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic bread");
orderSet.add("Garlic bread");
orderSet.delete("Risotto");
console.log(orderSet);
// orderSet.clear() // remove all the elements from the set
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

console.log(orderSet.size);

// ANOTHER example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
// remove the dulplicates
const staffUnique = [...new Set(staff)]; // convert to an array using spread operator(it works for all iterables)
console.log(staffUnique);
