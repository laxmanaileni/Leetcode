var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let lettercount = 0;
    for (j = 0; j < pref.length; j++) {
      if (words[i][j] === pref[j]) {
        lettercount++;
      }
    }
    if (lettercount === pref.length) {
      count++;
    }
  }
  return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));
