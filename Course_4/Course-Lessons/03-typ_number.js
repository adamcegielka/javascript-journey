// Typ Number

let x = 7;
let y = 4;

let addition = x + y;
console.log("Addition: " + addition); // Output: 11

let subtraction = x - y;
console.log("Subtraction: " + subtraction); // Output: 3

let multiplication = x * y;
console.log("Multiplication: " + multiplication); // Output: 28

let exponentiation = x ** y;
console.log("Exponentiation: " + exponentiation); // Output: 2401

let division = x / y;
console.log("Division: " + division); // Output: 1.75

let modulus = x % y;
console.log("Modulus: " + modulus); // Output: 3

// -----------------------

let textNumber = "123";
console.log(textNumber + 2); // Output: 1232
console.log(textNumber - 2); // Output: 121
console.log(textNumber * 2); // Output: 246
console.log(textNumber / 2); // Output: 61.5

console.log(parseInt(textNumber) + 2); // Output: 125

// -----------------------

console.log(x == y); // Output: false
console.log(x == "7"); // Output: true
console.log(x === y); // Output: false
console.log(x === "7"); // Output: false
console.log(x !== y); // Output: true
console.log(x >= y); // Output: true
console.log(x <= y); // Output: false
console.log(x > y); // Output: true
console.log(x < y); // Output: false

// Match

console.log(Math.floor(5.9)); // Output: 5
console.log(Math.round(5.6)); // Output: 6
console.log(Math.abs(-5.6)); // Output: 5.6
