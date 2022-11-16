const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("True");
  } else {
    console.log("False");
  }
};
const eqArrays = function(firstArray, secondArray) {
  let firstTypes = [];
  let secondTypes = [];
  let firstString;
  let secondString;
  let truth;
  for (let fa = 0; fa < firstArray.length; fa++) {
    firstTypes.push(typeof firstArray[fa]);
  }
  for (let sa = 0; sa < secondArray.length; sa++) {
    secondTypes.push(typeof secondArray[sa]);
  }
  let firstTypesString = firstTypes.join(", ");
  let secondTypesString = secondTypes.join(", ");
  if (firstTypesString === secondTypesString) {
    firstString = firstArray.join("");
    secondString = secondArray.join("");
  } else {
    firstString = "one thing";
    secondString = "another thing";
  }
  if (firstString === secondString) {
    truth = true;
  } else {
    truth = false;
  }
  return truth;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false