const assertArraysEqual = function (firstArray, secondArray) {
  const inspect = require('util').inspect;
  if (inspect(firstArray) === inspect(secondArray)) {
    console.log(`🟢️ Assertion Passed: ${inspect(firstArray)} === ${inspect(secondArray)}`)
  } else {
    console.log(`🛑️ Assertion Failed: ${inspect(firstArray)} !== ${inspect(secondArray)}`)
  }
}

module.exports = assertArraysEqual