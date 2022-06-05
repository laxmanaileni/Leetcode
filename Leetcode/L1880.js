var isSumEqual = function (firstWord, secondWord, targetWord) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let map = {};
  for (let i = 0; i < 26; i++) {
    map[alphabet[i]] = i;
  }
  let firstArray = [];
  for (let i = 0; i < firstWord.length; i++) {
    if (map[firstWord[i]] !== undefined) {
      firstArray.push(map[firstWord[i]]);
    }
  }
  let secondArray = [];
  for (let i = 0; i < secondWord.length; i++) {
    if (map[secondWord[i]] !== undefined) {
      secondArray.push(map[secondWord[i]]);
    }
  }
  let first = firstArray.join("");
  let second = secondArray.join("");
  let sum = parseInt(first) + parseInt(second);
  let targetArray = [];
  for (let i = 0; i < targetWord.length; i++) {
    if (map[targetWord[i]] !== undefined) {
      targetArray.push(map[targetWord[i]]);
    }
  }
  let target = parseInt(targetArray.join(""));
  if (sum === target) {
    return true;
  } else {
    return false;
  }
};

console.log(isSumEqual("acb", "cba", "cdb"));
console.log(isSumEqual("aaa", "a", "aab"));
