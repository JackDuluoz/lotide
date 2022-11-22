
const assert = require('chai').assert;
const tail = require('../tail');

// const assertEqual = require('../assertEqual')

describe("#tail", () => {
  it("returns 2 for .length of [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2)
  })
  it("returns Lighthouse for [0] of [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse")
  })
  it("returns Labs for [1] of [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs")
  })
  it("returns Lighthouse Labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })
})

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// //assertEqual(result, ["Lighthouse", "Labs"]);
// // This will always fail as the contents of arrays cannot be compared in this way.

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!