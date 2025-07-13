// Objects - Basics

// Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to represent data and methods.

const person = {
  name: "John",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};

// Accessing properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false

// Calling a method
person.greet(); // Output: Hello, my name is John and I am 30 years old.

// Adding a new property
person.city = "New York";
console.log(person.city); // Output: New York

// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31

// Deleting a property
delete person.isStudent;
console.log(person.isStudent); // Output: undefined
