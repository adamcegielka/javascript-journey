// Combining and Slicing Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Method 1: Using concat
const combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Method 2: Using Slice
const slicedArray = combinedArray.slice(2, 5);
console.log(slicedArray); // [3, 4, 5]

const slice = combinedArray.slice(4);
console.log(slice); // [5, 6]
