// Arrays - Adding Elements

const fruits = ["Apple", "Banana", "Cherry"];

// Adding elements to the end of the array
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// Adding elements to the beginning of the array
fruits.unshift("Mango");
console.log(fruits); // ["Mango", "Apple", "Banana", "Cherry", "Date"]

// Adding elements at a specific index
fruits.splice(2, 0, "Orange");
console.log(fruits); // ["Mango", "Apple", "Orange", "Banana", "Cherry", "Date"]

// Adding multiple elements at once
fruits.splice(3, 0, "Grapes", "Pineapple");
console.log(fruits); // ["Mango", "Apple", "Orange", "Grapes", "Pineapple", "Banana", "Cherry", "Date"]

// Adding elements using the spread operator
const moreFruits = ["Kiwi", "Peach"];
fruits.push(...moreFruits); // Spread operator to add multiple elements
console.log(fruits); // ["Mango", "Apple", "Orange", "Grapes", "Pineapple", "Banana", "Cherry", "Date", "Kiwi", "Peach"]

// Adding elements conditionally
if (!fruits.includes("Watermelon")) {
  fruits.push("Watermelon"); // Only add if not already present
}
console.log(fruits); // ["Mango", "Apple", "Orange", "Grapes", "Pineapple", "Banana", "Cherry", "Date", "Kiwi", "Peach", "Watermelon"]

// Adding elements based on a condition
if (fruits.length < 15) {
  fruits.push("Papaya"); // Add "Papaya" if the array has less than 15 elements
}
console.log(fruits); // ["Mango", "Apple", "Orange", "Grapes", "Pineapple", "Banana", "Cherry", "Date", "Kiwi", "Peach", "Watermelon", "Papaya"]

// Adding elements with a function
function addFruitIfNotExists(fruit) {
  if (!fruits.includes(fruit)) {
    fruits.push(fruit);
  }
}
addFruitIfNotExists("Strawberry");
console.log(fruits); // ["Mango", "Apple", "Orange", "Grapes", "Pineapple", "Banana", "Cherry", "Date", "Kiwi", "Peach", "Watermelon", "Papaya", "Strawberry"]

// Adding elements with a loop
for (let i = 0; i < 3; i++) {
  fruits.push(`Fruit${i + 1}`); // Adding "Fruit1", "Fruit2", "Fruit3"
}
console.log(fruits); // ["Mango", "Apple", "Orange", "Grapes", "Pineapple", "Banana", "Cherry", "Date", "Kiwi", "Peach", "Watermelon", "Papaya", "Strawberry", "Fruit1", "Fruit2", "Fruit3"]
