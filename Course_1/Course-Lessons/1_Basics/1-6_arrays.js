// Arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers[0]); // Output: 1 (first element of the array)
console.log(numbers.length); // Output: 5 (length of the array)

let selectedColors = ["red", "blue", "black"];
console.log(selectedColors); // Output: ["red", "blue", "black"]
console.log(selectedColors[1]); // Output: blue
selectedColors[3] = "green";
console.log(selectedColors); // Output: ["red", "blue", "black", "green"]
selectedColors[3] = 3;
console.log(selectedColors); // Output: ["red", "blue", "black", 3]
console.log(selectedColors.length); // Output: 4

// Arrays of objects
let students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 23 },
];

console.log(students);
// Output: [ { name: "Alice", age: 20 }, { name: "Bob", age: 22 }, { name: "Charlie", age: 23 } ]

console.log(students[1].name); // Output: "Bob" (accessing the object in the array)
