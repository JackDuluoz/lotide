const takeUntil = function (array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


const results1 = takeUntil(data1, function(x) {
  for (let datum in data1) {
    if (data1[datum] < 0) {
      data1.splice(datum)
    }
  }  
  return x
});

console.log(results1);

console.log('------------------------------');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, function(x) {
  for (let datum in data2) {
    if (data2[datum] === ",") {
      data2.splice(datum)
    }
  }
  return x
});

console.log(results2);