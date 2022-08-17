//https://leetcode.com/problems/ransom-note/
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] === undefined) map[magazine[i]] = 0;
    map[magazine[i]]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]] === undefined) {
      return false;
    }else{
        map[ransomNote[i]]--;
        if( map[ransomNote[i]]===0)delete  map[ransomNote[i]];
    }
  }
  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
