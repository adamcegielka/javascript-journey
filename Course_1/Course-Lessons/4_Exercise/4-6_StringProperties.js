// Exercise - String Properties

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genre: "Science Fiction",
  rating: 8.8,
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

/*
function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") 
      console.log(key, obj[key]);
}
*/
