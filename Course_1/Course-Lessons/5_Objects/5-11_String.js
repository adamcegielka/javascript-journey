// Objects - String

const str1 = "Hello, World!"; // Using single quotes
const str2 = "JavaScript is fun!"; // Using double quotes
const str3 = `Template literals are great!`; // Using backticks

// String primitives
const strPrim = "Welcome to the JavaScript course!";
console.log(strPrim);

// String object
const strObj = new String("This is a string object.");
console.log(strObj);

// String methods
const greeting = "Hello, everyone!";
console.log(greeting.length); // Output: 16
console.log(greeting.toUpperCase()); // Output: HELLO, EVERYONE!
console.log(greeting.replace("everyone", "students")); // Output: Hello, students!

// Escaping characters
const escapedStr = 'He said, "JavaScript is awesome!"';
console.log(escapedStr); // Output: He said, "JavaScript is awesome!"
// New line character
const newLineStr = "This is the first line.\nThis is the second line.";
console.log(newLineStr);
// Splitting strings
const sentence = "Learning JavaScript is fun!";
const words = sentence.split(" ");
console.log(words); // Output: [ 'Learning', 'JavaScript', 'is', 'fun!' ]

// 1. length: Returns the length of the string.
console.log(str1.length); // Output: 13

// 2. toUpperCase(): Converts the string to uppercase.
console.log(str2.toUpperCase()); // Output: JAVASCRIPT IS FUN!

// 3. toLowerCase(): Converts the string to lowercase.
console.log(str3.toLowerCase()); // Output: template literals are great!

// 4. charAt(index): Returns the character at the specified index.
console.log(str1.charAt(0)); // Output: H

// 5. indexOf(substring): Returns the index of the first occurrence of the specified substring.
console.log(str2.indexOf("fun")); // Output: 15

// 6. substring(start, end): Returns a substring from the string.
console.log(str1.substring(0, 5)); // Output: Hello

// 7. split(separator): Splits the string into an array of substrings based on the specified separator.
console.log(str2.split(" ")); // Output: [ 'JavaScript', 'is', 'fun!' ]
