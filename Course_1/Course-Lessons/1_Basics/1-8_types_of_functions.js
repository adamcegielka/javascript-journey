// Function Declaration
function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // Output: "Hello, World!"

// ---
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number); // Output: 4

console.log(square(3)); // Output: 9

// ----------------------------------

// Function Expression
const greet = function () {
  console.log("Hi there!");
};

greet(); // Output: "Hi there!"

// ----------------------------------

// Arrow Function
const add = (a, b) => a + b;

console.log(add(5, 10)); // Output: 15

// ----------------------------------

// Anonymous Function
setTimeout(function () {
  console.log("This is an anonymous function.");
}, 1000); // Output: "This is an anonymous function." (after 1 second)

// ----------------------------------

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE function runs immediately!");
})(); // Output: "IIFE function runs immediately!"

// ----------------------------------

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Output: "Alice"
console.log(person1.age); // Output: 30

// ----------------------------------

// Function with Default Parameters
function greetPerson(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetPerson(); // Output: "Hello, Guest!"
greetPerson("John"); // Output: "Hello, John!"

// ----------------------------------

// Recursive Function
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
