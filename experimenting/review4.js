const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results
    }
    results.push(item)
  }
  return results;
};

const myCallback = function (x) {
  return x > 3;
};

const myCallback2 = function (x) {
  return x === ",";
};

console.log(takeUntil([1, 2, 3, 4, 5], myCallback))

console.log(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], myCallback2));