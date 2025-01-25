// Logical Operator with Non-Booleans
/* eslint-disable no-constant-binary-expression */

// OR (||) Operator with Non-Booleans
let result = "" || "Default Value";
console.log(result); // Output: "Default Value"

// AND (&&) Operator with Non-Booleans
let x = "Hello" && 42;
console.log(x); // Output: 42

// NOT (!) Operator with Non-Booleans
let z = !"Non-empty string";
console.log(z); // Output: false

// Combining || and && with Non-Booleans
let value = null || ("First truthy" && "Second truthy");
console.log(value); // Output: "Second truthy"

// Falsy (false)
// undefined
// null
// 0
// false
// ""
// NaN

// Anything that is not Falsy -> Truthy

console.log(false || 1 || 2); // Output: 1
console.log(false || (1 && 2)); // Output: 2

// Example:
let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // Output: blue
