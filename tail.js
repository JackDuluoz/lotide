const assertEqual = require('./assertEqual')

const tail = function(input) {
  let newArray = Array.from(input);
  newArray.splice(0, 1);
  return newArray;
};

module.exports = tail