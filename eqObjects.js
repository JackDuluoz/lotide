const eqObjects = function (object1, object2) {
  const inspect = require('util').inspect;
  let message
  let sorted1 = Object.keys(object1)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = object1[key]
      return accumulator
    }, {})
  let sorted2 = Object.keys(object2)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = object2[key]
      return accumulator
    }, {})
  if (inspect(sorted1) === inspect(sorted2)) {
    message = `🟢️ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    message = `🛑️ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
  }
  return message;
};

module.exports = eqObjects

// const ab1 = { a: "1", b: "2" };
// const ab2 = { a: "1", b: "2" };
// const ab3 = { a: "1", b: 2 };

// const bc1 = { b: "1", c: "2" };
// const bc2 = { b: "2", c: "1" };

// const de = { d: "1", e: "2" };
// const ed = { e: "1", d: "2" };

// const fg = { f: "1", g: "2" };
// const gf = { g: "2", f: "1" };

// console.log(eqObjects(ab1, ab2)); // => Pass
// console.log(eqObjects(bc1, bc2)); // => Fail
// console.log("");
// console.log(eqObjects(ab1, ab3)); // => Pass
// console.log("");
// console.log(eqObjects(de, ed)); // => Fail
// console.log(eqObjects(fg, gf)); // => Pass

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const cd2 = { c: "1", d: ["2", 3, 4] };

// console.log("");
// console.log(eqObjects(cd, dc)); // => Pass
// console.log(eqObjects(cd, cd2)); // => Fail