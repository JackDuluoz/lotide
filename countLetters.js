const countLetters = function(sentence) {
  let output = {};
  let duplicate = sentence;
  for (let letter of sentence) {
    let count = 0;
    if (letter !== " ") {
      for (let d of duplicate) {
        if (letter === d) {
          count = count + 1;
        }
      }
      output[letter] = count;
    }
  }
  return output;
};

module.exports = countLetters

// console.log(countLetters("lighthouse labs in the house"));