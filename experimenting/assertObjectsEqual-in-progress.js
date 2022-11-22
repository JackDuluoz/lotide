const assertObjectsEqual = function (message) {
  if (message === "Pass") {
    console.log("🟢️ Assertion Passed: o1 === o2 ");
  } else {
    console.log("🛑️ Assertion Failed: o1 !== o2");
  }
};

console.log("                ");
assertObjectsEqual(eqObjects(ab1, ab2));
assertObjectsEqual(eqObjects(bc1, bc2));
assertObjectsEqual(eqObjects(de, ed));
assertObjectsEqual(eqObjects(fg, gf));
console.log("                ");
assertObjectsEqual(eqObjects(cd, dc));
assertObjectsEqual(eqObjects(cd, cd2));