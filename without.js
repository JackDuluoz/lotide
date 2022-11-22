const without = function(source, itemsToRemove) {
  let sameInput = [];
  let output = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let s = 0; s < source.length; s++) {
      if ((typeof itemsToRemove[i] === typeof source[s]) && (itemsToRemove[i] === source[s])) {
        sameInput.push(itemsToRemove[i]);
      }
    }
  }
  for (let si = 0; si < sameInput.length; si++) {
    for (let s = 0; s < source.length; s++) {
      if (source[s] !== sameInput[si]) {
        output.push(source[s]);
      }
    }
  }
  // console.log("Source:", source);
  // console.log("Items to Remove:", itemsToRemove);
  // console.log("Shared Inputs:", sameInput);
  return "Without Shared Inputs:", output;
  // console.log("Confirm Source Unchanged:", source);
};

module.exports = without

// console.log(without([1, 2, 3], [1]));
// console.log("");
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log("");
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));