// Arrays - Finding Elements (Reference Types)

const objects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
  { name: "Eve", age: 22 },
];

// Finding elements in an array of objects using find
const foundObject = objects.find((obj) => obj.name === "Charlie");
console.log(`Found object: ${JSON.stringify(foundObject)}`); // { name: "Charlie", age: 35 }

// Finding elements that do not exist
const notFoundObject = objects.find((obj) => obj.name === "Frank");
console.log(`Not found object: ${notFoundObject}`); // undefined

// Finding elements using find function
const foundByAge = objects.find((obj) => obj.age > 30);
console.log(`First object with age > 30: ${JSON.stringify(foundByAge)}`); // { name: "Charlie", age: 35 }

// Finding elements using findIndex
const foundIndex = objects.findIndex((obj) => obj.age > 30);
console.log(`Index of first object with age > 30: ${foundIndex}`); // 2

// Finding elements using filter
const filteredObjects = objects.filter((obj) => obj.age < 30);
console.log(`Objects with age < 30: ${JSON.stringify(filteredObjects)}`); // [{ name: "Bob", age: 25 }, { name: "David", age: 28 }, { name: "Eve", age: 22 }]

// Finding elements using forEach
objects.forEach((obj, index) => {
  console.log(`Object at index ${index}: ${JSON.stringify(obj)}`);
});

// Finding elements using map
const objectNames = objects.map((obj) => obj.name);
console.log(`Names of objects: ${objectNames}`); // ["Alice", "Bob", "Charlie", "David", "Eve"]

// Finding elements using reduce
const totalAge = objects.reduce((acc, obj) => acc + obj.age, 0);
console.log(`Total age of all objects: ${totalAge}`); // 160

// Finding elements using includes (for reference types, we need to check object equality)
const hasAlice = objects.some((obj) => obj.name === "Alice");
console.log(`Does the array include Alice? ${hasAlice}`); // true
