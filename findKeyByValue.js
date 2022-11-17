const findKeyByValue = function(object, value) {
  let genre = undefined;
  for (let key in object) {
    if (object[key] === value) {
      genre = key;
      return genre;
    }
  }
  return genre;
};
const bestTVShowsByGenre = {
  alternative: "The Expanse",
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  adult: "The Expanse"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));