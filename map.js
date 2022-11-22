// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = []
  for (let item of array) {
  results.push(callback(item))
  }
  return results
}

module.exports = map

// const results1 = map(words, word => word[0]);
// console.log(results1);

// const results2 = map(words, word => word.length);
// console.log(results2);

// const results3 = map(words, word => word);
// console.log(results3);