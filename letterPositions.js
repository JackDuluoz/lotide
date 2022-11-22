const letterPositions = function(sentence) {
  let output = {};
  let duplicate = sentence;
  for (let letter of sentence) {
    let indices = [];
    if (letter !== " ") {
      for (let d = 0; d < duplicate.length; d++) {
        if (letter === duplicate[d]) {
          indices.push(d);
        }
      }
      output[letter] = [indices];
    }
  }
  return output;
};

module.exports = letterPositions

console.log(letterPositions("Hello Michael"));