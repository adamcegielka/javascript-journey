// Exercise - Landscape or Portrait

console.log(isLandscape(800, 600)); // true
console.log(isLandscape(600, 800)); // false

function isLandscape(width, height) {
  if (width > height) {
    return true;
  } else {
    return false;
  }
}
