// Objects - Cloning an Object

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  draw() {
    console.log("Draw");
  },
};

person.draw();
console.log(person);
console.log(person.name);

// Cloning an object using Object.assign
const personClone = Object.assign({}, person);
console.log(personClone);

// Cloning an object using the spread operator
const personClone2 = { ...person };
console.log(personClone2);

// Cloning an object using JSON methods
const personClone3 = JSON.parse(JSON.stringify(person));
console.log(personClone3);

// Modifying the clone
personClone.name = "Bob";
console.log(personClone.name); // Output: "Bob"
console.log(person.name); // Output: "Alice" (original object remains unchanged)
