var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] !== undefined) {
      map[magazine[i]] += 1;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]] === undefined) {
      return false;
    } else {
      map[ransomNote[i]]--;
      if (map[ransomNote[i]] === 0) {
        delete map[ransomNote[i]];
      }
    }
  }
  return true;
};

console.log("a", "b");
console.log("aa", "ab");
console.log("aa", "aab");
