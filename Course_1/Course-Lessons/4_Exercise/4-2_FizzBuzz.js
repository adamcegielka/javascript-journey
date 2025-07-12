// Exercise - FizzBuzz

// Devisible by 3: Fizz
// Devisible by 5: Buzz
// Devisible by 3 and 5: FizzBuzz
// Not devisible by 3 or 5: return the number
// Not a number: return NaN

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return NaN;
  }

  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else {
    return input;
  }
}
