// Functions
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: "Hello, World!"

// --
function greetAdam(name) {
  console.log("Hello " + name);
}

greetAdam("Adam"); // Output: "Hello Adam"
greetAdam("Ewa"); // Output: "Hello Ewa"

// Functions with parameters and return value
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(5, 10);
console.log(sum); // Output: 15

// --
function person(firstName, lastName) {
  console.log("Hi " + firstName + " " + lastName);
}

person("Adam", "Brick"); // Output: Hi Adam Brick
