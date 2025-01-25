// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

console.log(1 | 2); // Output: 3 // Bitwise OR
console.log(1 & 2); // Output: 0 // Bitwise AND

// --------------------------------

// Bitwise AND (&)
let a = 5; // In binary: 0101
let b = 3; // In binary: 0011
let result1 = a & b;

console.log(result1); // Output: 1 (binary: 0001)

// Bitwise OR (|)
let c = 5; // In binary: 0101
let d = 3; // In binary: 0011
let result2 = c | d;

console.log(result2); // Output: 7 (binary: 0111)

// Bitwise XOR (^)
let e = 5; // In binary: 0101
let f = 3; // In binary: 0011
let result3 = e ^ f;

console.log(result3); // Output: 6 (binary: 0110)

// Bitwise NOT (~)
let g = 5; // In binary: 0000000000000101
let result4 = ~g;

console.log(result4); // Output: -6

// Bitwise Left Shift (<<)
let h = 5; // In binary: 0101
let result5 = h << 2;

console.log(result5); // Output: 20 (binary: 10100)

// Bitwise Right Shift (>>)
let k = 20; // In binary: 10100
let result6 = k >> 2;

console.log(result6); // Output: 5 (binary: 0101)

// Zero-fill Right Shift (>>>)
let l = -20;
let result7 = l >>> 2;

console.log(result7); // Output: 1073741819

/*
& (AND): Returns 1 for bits that are both 1.
| (OR): Returns 1 if at least one of the bits is 1.
^ (XOR): Returns 1 for bits that are different.
~ (NOT): Flips all the bits.
<< (Left Shift): Shifts bits to the left, filling with 0.
>> (Right Shift): Shifts bits to the right, preserving the sign bit.
>>> (Zero-fill Right Shift): Shifts bits to the right and fills with 0.
*/
