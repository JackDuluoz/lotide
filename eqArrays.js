const eqArrays = function (firstArray, secondArray) {
  const inspect = require('util').inspect;
  if (inspect(firstArray) === inspect(secondArray)) {
    console.log(`🟢️ Assertion Passed: ${inspect(firstArray)} === ${inspect(secondArray)}`)
  } else {
    console.log(`🛑️ Assertion Failed: ${inspect(firstArray)} !== ${inspect(secondArray)}`)
  }
}
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
console.log("")