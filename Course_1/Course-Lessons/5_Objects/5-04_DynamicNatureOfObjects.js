// Objects - Dynamic Nature of Objects

// This lesson explores the dynamic nature of objects in JavaScript.
// Objects can be modified at runtime, allowing properties to be added, changed, or deleted.

const person = {
  name: "John",
  age: 30,
};

person.city = "New York"; // Adding a new property
console.log(person); // { name: 'John', age: 30, city: 'New York' }

person.draw = function () {
  console.log(`${this.name} is drawing.`);
};

delete person.age; // Deleting a property
delete person.draw; // Deleting a method
console.log(person); // { name: 'John', city: 'New York' }
