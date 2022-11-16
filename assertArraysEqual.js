const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢️🟢️🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (firstArray, secondArray) {
  let firstTypes = []
  let secondTypes = []
  let firstString
  let secondString
  for (let fa = 0; fa < firstArray.length; fa++) {
    firstTypes.push(typeof firstArray[fa])
  }
  for (let sa = 0; sa < secondArray.length; sa++) {
    secondTypes.push(typeof secondArray[sa])
  }
  let firstTypesString = firstTypes.join(", ")
  let secondTypesString = secondTypes.join(", ")
  if (firstTypesString === secondTypesString) {
    firstString = firstArray.join("");
    secondString = secondArray.join("");
  } else {
    firstString = firstTypesString
    secondString = secondTypesString
  }
  return assertEqual(firstString, secondString);
};
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
console.log("----------------------------------------");
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
