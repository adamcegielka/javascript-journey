// Exercise - Stars

showStars(11);

function showStars(rows) {
  let pattern = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
    pattern = ""; // Reset pattern for the next row
  }
}
