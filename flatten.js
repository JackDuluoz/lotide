const flatten = function(nestedArrays) {
  let output = [];
  let flattenedArray = Array.from(nestedArrays.toString().replace(/,/g, ""));
  for (let f = 0; f < flattenedArray.length; f++) {
    if (parseInt(flattenedArray[f], 10)) {
      output.push(flattenedArray[f]);
    }
  }
  for (let o = 0; o < output.length; o++) {
    output[o] = parseInt(output[o], 10);
  }
  console.log(output);
};

module.exports = flatten

// flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([1, 2, [3, 4], "five", [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([1, 2, [3, 4], null, [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([1, 2, [3, 4], [null], [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([1, 2, [3, 4], true, [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([1, 2, [3, 4], undefined, [6]]); // => [1, 2, 3, 4, 5, 6]
// flatten([1, 2, [3, 4], "5", [6]]); // => [1, 2, 3, 4, 5, 6]