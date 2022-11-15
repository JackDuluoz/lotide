const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢️🟢️🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 4);

const head = function(array, zero) {
  array.splice(1, array.length - 1);
  for (let a of array) {
    return array[0];
  }
};

console.log("------------------------------------------------------------------");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), "Hello");