// If...else

let hour = 10;

if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
else console.log("Good Evening!");
// Output: "Good Morning!"

// ----------------------------------

// Basic if statement
let temperatureIn = 30;

if (temperatureIn > 25) {
  console.log("It's hot inside!");
}
// Output: "It's hot inside!"

// ----------------------------------

// if...else statement
let temperatureOut = 20;

if (temperatureOut > 25) {
  console.log("It's hot outside!");
} else {
  console.log("It's cool outside!");
}
// Output: "It's cool outside!"

// ----------------------------------

// if...else if...else statement
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: "Grade: B"

// ----------------------------------

// Nested if statement
let isRaining = true;
let temperature = 15;

if (isRaining) {
  if (temperature < 20) {
    console.log("It's cold and raining. Wear a jacket!");
  } else {
    console.log("It's warm but raining. Take an umbrella!");
  }
}
// Output: "It's cold and raining. Wear a jacket!"

// ----------------------------------

// if statement without else
let number = 8;

if (number % 2 === 0) {
  console.log("The number is even.");
}
// Output: "The number is even."

// ----------------------------------

// if...else with multiple conditions
let age = 18;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}
// Output: "You can drive."

// ----------------------------------

// Using if with a boolean value
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
// Output: "Please log in."
