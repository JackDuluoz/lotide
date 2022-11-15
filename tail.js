const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢️🟢️🟢️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("Lighthouse Labs", "Lighthouse Labs");
//assertEqual(1, 4);
//console.log("------------------------------------------------------------------");

const tail = function(input) {
  let newArray = Array.from(input);
  newArray.splice(0, 1);
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

console.log("------------------------------------------------------------------");

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

console.log("------------------------------------------------------------------");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log("------------------------------------------------------------------");

let scenario = tail(["Hello"]);
console.log(scenario);
scenario = tail([]);
console.log(scenario);