const assertEqual = require('./assertEqual')

const head = function(array) {
  array.splice(1);
  return array[0];  
};

module.exports = head