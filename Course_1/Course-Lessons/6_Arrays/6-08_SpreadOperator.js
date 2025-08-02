// The Spread Operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Method 1: Using spread operator to combine arrays
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

const copy = [...combinedArray];
console.log(copy); // [1, 2, 3, 4, 5, 6]
