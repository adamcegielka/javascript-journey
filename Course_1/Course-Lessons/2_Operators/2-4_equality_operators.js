/* eslint-disable no-constant-binary-expression */

// Loose Equality (==)
console.log(5 == "5"); // Output: true
console.log(0 == false); // Output: true
console.log(null == undefined); // Output: true

// Strict Equality (===) (Type + Value)
console.log(5 === "5"); // Output: false
console.log(0 === false); // Output: false
console.log(null === undefined); // Output: false
console.log(5 === 5); // Output: true

// Loose Inequality (!=)
console.log(5 != "5"); // Output: false
console.log(0 != false); // Output: false
console.log(null != undefined); // Output: false
console.log(10 != "10"); // Output: false

// Strict Inequality (!==)
console.log(5 !== "5"); // Output: true
console.log(0 !== false); // Output: true
console.log(null !== undefined); // Output: true
console.log(5 !== 5); // Output: false

/*
==: Loose equality, compares values after type coercion (e.g., 5 == '5' is true).
===: Strict equality, compares values and types (e.g., 5 === '5' is false).
!=: Loose inequality, compares values after type coercion (e.g., 5 != '5' is false).
!==: Strict inequality, compares values and types without type coercion (e.g., 5 !== '5' is true).
*/
