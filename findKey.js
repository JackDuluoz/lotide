const findKey = function (object, callback) {
  let result = (callback())
  console.log(result)
};

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}

findKey(object1, function (findSystem) {
  let system = undefined
  for (let object in object1) {
    if (object1[object].stars === 2) {
      system = object
      return system
    }
  }
  return system
})
