// switch...case

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
}
// Output: "Guest User"

// ----------------------------------

// Simple switch statement
let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Wednesday":
    console.log("Midweek!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("It's just another day.");
}
// Output: "Start of the work week."

// ----------------------------------

/// switch statement with numeric values
let grade = 2;

switch (grade) {
  case 1:
    console.log("Poor");
    break;
  case 2:
    console.log("Average");
    break;
  case 3:
    console.log("Good");
    break;
  case 4:
    console.log("Excellent");
    break;
  default:
    console.log("Invalid grade");
}
// Output: "Average"

// ----------------------------------

// Multiple cases with the same code block
let weather = "cloudy";

switch (weather) {
  case "sunny":
  case "clear":
    console.log("It's a beautiful day!");
    break;
  case "cloudy":
  case "overcast":
    console.log("It might rain later.");
    break;
  case "rainy":
    console.log("Don't forget your umbrella!");
    break;
  default:
    console.log("Weather status unknown.");
    break;
}
// Output: "It might rain later."

// ----------------------------------

// Grouped case statements
let fruit = "apple";

switch (fruit) {
  case "apple":
  case "pear":
  case "banana":
    console.log("This is a fruit.");
    break;
  case "carrot":
  case "broccoli":
    console.log("This is a vegetable.");
    break;
  default:
    console.log("Unknown item.");
}
// Output: "This is a fruit."

// ----------------------------------

// switch with expressions
let score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: F");
}
// Output: "Grade: B"

// ----------------------------------

// switch with boolean values
let isWeekend = false;

switch (isWeekend) {
  case true:
    console.log("It's time to relax!");
    break;
  case false:
    console.log("Time to work or study!");
    break;
  default:
    console.log("Invalid input");
}
// Output: "Time to work or study!"
