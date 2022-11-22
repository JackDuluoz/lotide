const titleCase = function(string) {
  let emptyString = "";
  if (string.length === 0) {
    return emptyString;
  }
  string = string.toLowerCase().split("");
  string[0] = string[0].toUpperCase();
  let spaces = [];
  for (let i in string) {
    if (string[i] === " ") {
      spaces.push(Number(i) + 1);
    }
  }
  for (let i in string) {
    for (let space of spaces) {
      if (Number(i) === space) {
        string[i] = string[i].toUpperCase();
      }
    }
  }
  return string.join("");
};

module.exports = titleCase

