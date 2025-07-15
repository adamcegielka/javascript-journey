// Objects - Constructor Functions

// Constructor functions are a way to create objects using the `new` keyword.
// They allow you to define a blueprint for creating multiple instances of an object.

// Camel Notation is used for constructor function names: oneTwoThree
// Pascal Notation is used for class names: OneTwoThree

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25
