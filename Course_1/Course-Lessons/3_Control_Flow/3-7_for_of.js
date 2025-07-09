// For...Of Loop

let array = ['apple', 'banana', 'cherry'];

for (let fruit of array) {
    console.log(fruit);
}

//  Iterating through letters in a string
const word = "hello";

for (const char of word) {
  console.log(char);
}

// no duplicates
const uniqueItems = new Set(['a', 'b', 'a', 'c']);

for (const item of uniqueItems) {
  console.log(item);
}
