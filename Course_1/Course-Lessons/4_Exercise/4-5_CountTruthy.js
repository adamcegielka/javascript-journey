// Exercise - Count Truthy

const array = [0, null, undefined, "", 2, 3, NaN, "Hello", false, true];
console.log(countTruthy(array));

// Falsy, 0, null, undefined, '', NaN, false
function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}
