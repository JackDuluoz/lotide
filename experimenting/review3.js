const without = function (source, itemsToRemove) {  
  const results = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      results.push(item)
    }
  }
  return results;
};

console.log(without([1, 2, 3, 4], [2, 4]))