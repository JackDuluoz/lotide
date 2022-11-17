const eqObjects = function(object1, object2) {
  let message = "Fail";
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
    message = "Pass";
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

console.log(eqObjects(ab1, ab2)); // => true
console.log(eqObjects(bc1, bc2)); // => false
console.log(eqObjects(de, ed)); // => false
console.log(eqObjects(fg, gf)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

console.log("                ");
console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false