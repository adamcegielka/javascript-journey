// Joining Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const joinedArray = array1.join(", ") + ", " + array2.join(", ");
console.log(joinedArray); // "1, 2, 3, 4, 5, 6"

const message = "The joined array is";
const fullMessage = `${message}: ${joinedArray}`;
console.log(fullMessage); // "The joined array: 1, 2, 3, 4, 5, 6"

const parts = message.split(" ");
const joinedParts = parts.join("-");
console.log(joinedParts); // "The-joined-array-is"
