// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Fang",
//   "Fang",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      let count = 0;
      for (let name of allItems) {
        if (name === item) {
          count = count + 1;
        }
      }
      if (count > 0) {
        result[item] = count;
      }
    }
  }
  return result;
};

module.exports = countOnly

// console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Salima": false, "Fang": true, "Agouhanna": true }));