// Objects - Enumerating Properties of an Object

// We will use a simple object and show different methods to access its properties.

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  draw() {
    console.log("Draw");
  },
};

// Using for...in loop to enumerate properties
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Using for...of loop with Object.keys()
for (let key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}
// Using Object.entries() to get key-value pairs
for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Using Object.keys() to get keys only
for (let key of Object.keys(person)) {
  console.log(key);
}
// Using Object.values() to get values only
for (let value of Object.values(person)) {
  console.log(value);
}
// Using Object.getOwnPropertyNames() to get all properties
for (let prop of Object.getOwnPropertyNames(person)) {
  console.log(prop);
}
