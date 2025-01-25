// Logical Operator with Non-booleans
/* eslint-disable no-constant-binary-expression */

// AND (&&) Operator with Non-Booleans
// Returns TRUE if both operands are TRUE
console.log(true && true); // Output: true
console.log(false && true); // Output: false

// Example:
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // Output: true

// ---------------------------------------------

// OR (||) Operator with Non-Booleans
// Returns TRUE if one of operands are TRUE
console.log(true || true); // Output: true
console.log(false || true); // Output: true

// Example:
let highIncome1 = true;
let goodCreditScore1 = false;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;

console.log(eligibleForLoan1); // Output: true

// ---------------------------------------------

// NOT (!) Operator with Non-Booleans
let x = !true;
console.log(x); // Output: false

// Example:
let highIncome2 = false;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;

console.log("Eligible", eligibleForLoan2); // Output: Eligible false

let applicationRefused = !eligibleForLoan2;
console.log("Application Refused", applicationRefused); // Output: Application Refused true
