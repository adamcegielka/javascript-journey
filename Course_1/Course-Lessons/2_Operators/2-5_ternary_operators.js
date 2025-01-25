// Ternary Operator

// Example 1: Simple Conditional Check
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."

// Example 2: Assigning Different Values Based on a Condition
let isMember = true;
let discount = isMember ? 10 : 0;
console.log(discount); // Output: 10

// Example 3: Nested Ternary Operator
let score = 75;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // Output: "C"

// Example 4: Ternary Operator with Function Calls
function greet(isMorning) {
  return isMorning ? "Good morning!" : "Good evening!";
}

console.log(greet(true)); // Output: "Good morning!"
console.log(greet(false)); // Output: "Good evening!"

// Example 5: Ternary Operator as a Short Conditional Statement
let num = 10;
num % 2 === 0 ? console.log("Even") : console.log("Odd"); // Output: "Even"

// --------------------------------------

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type); // Output: gold
