const middle = function(array) {
  let noMiddleIndex = [];
  let middleIndex = [];
  if (array.length <= 2) {
    return noMiddleIndex;
  }
  if (array.length % 2 !== 0) {
    let middle = Math.floor(array.length / 2);
    middleIndex.push(array[middle]);
    return middleIndex;
  }
  if (array.length % 2 === 0) {
    let middle1 = array.length / 2;
    let middle2 = middle1 + 1;
    middleIndex.push(middle1, middle2);
    return middleIndex;
  }
};
console.log(middle([1])); // => []
//console.log("------------------------");
console.log(middle([1, 2])); // => []
//console.log("------------------------");
console.log(middle([1, 2, 3])); // => [2]
//console.log("------------------------");
console.log(middle([1, 2, 3, 4, 5])); // => [3]
//console.log("------------------------");
console.log(middle([1, 2, 3, 4])); // => [2, 3]
//console.log("------------------------");
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]