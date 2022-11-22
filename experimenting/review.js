const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("🟢️ Assertion Passed");
  } else {
    console.log("🛑️ Assertion Failed");
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }  
  for (let i in array1) {
    let value1 = array1[i]
    let value2 = array2[i]
    //console.log(value1, value2)
    if (value1 !== value2) {
      return false
    }
  }
return true
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => Pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => Fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => Pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => Fail
