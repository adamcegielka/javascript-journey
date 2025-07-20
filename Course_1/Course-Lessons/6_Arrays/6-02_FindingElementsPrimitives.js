// Arrays - Finding Elements Primitives

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Finding elements in an array using indexOf
const index = fruits.indexOf("Cherry");
console.log(`Index of Cherry: ${index}`); // 2

// Finding elements that do not exist
const notFoundIndex = fruits.indexOf("Fig");
console.log(`Index of Fig: ${notFoundIndex}`); // -1

// Finding elements using lastIndexOf
const lastIndex = fruits.lastIndexOf("Banana");
console.log(`Last index of Banana: ${lastIndex}`); // 1

// Finding elements using includes
const hasBanana = fruits.includes("Banana");
console.log(`Does the array include Banana? ${hasBanana}`); // true

// Check if an element exists using indexOf
const isCherryPresent = fruits.indexOf("Cherry") !== -1;
console.log(`Is Cherry present? ${isCherryPresent}`); // true

// Finding elements using find
const foundFruit = fruits.find((fruit) => fruit.startsWith("D"));
console.log(`First fruit starting with D: ${foundFruit}`); // Date

// Finding elements using findIndex
const foundIndex = fruits.findIndex((fruit) => fruit.startsWith("E"));
console.log(`Index of first fruit starting with E: ${foundIndex}`); // 4

// Finding elements using filter
const filteredFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(`Fruits with more than 5 characters: ${filteredFruits}`); // ["Banana", "Cherry", "Elderberry"]

// Finding elements using forEach
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});

// Finding elements using map
const fruitLengths = fruits.map((fruit) => fruit.length);
console.log(`Lengths of each fruit: ${fruitLengths}`); // [5, 6, 6, 4, 10]

// Finding elements using reduce
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(`Total length of all fruits: ${totalLength}`); // 31
