const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let message = "";
  let array1 = [];
  let array2 = [];
  for (const [key, value] of Object.entries(object1)) {
    array1.push(`${key}: ${value}`);
  }
  for (const [key, value] of Object.entries(object2)) {
    array2.push(`${key}: ${value}`);
  }
  array1 = array1.sort();
  array2 = array2.sort();
  if (array1.toString() === array2.toString()) {
    message = `🟢️ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    message = `🛑️ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
  return message;
};

const ab1 = { a: "1", b: "2" };
const ab2 = { a: "1", b: "2" };

const bc1 = { b: "1", c: "2" };
const bc2 = { b: "2", c: "1" };

const de = { d: "1", e: "2" };
const ed = { e: "1", d: "2" };

const fg = { f: "1", g: "2" };
const gf = { g: "2", f: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

console.log("                ");
console.log(assertObjectsEqual(ab1, ab2));
console.log(assertObjectsEqual(bc1, bc2));
console.log(assertObjectsEqual(de, ed));
console.log(assertObjectsEqual(fg, gf));
console.log("                ");
console.log(assertObjectsEqual(cd, dc));
console.log(assertObjectsEqual(cd, cd2));