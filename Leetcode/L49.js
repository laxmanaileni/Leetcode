var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let x = strs[i].split("").sort().join("");
    if (map[x] !== undefined) {
      map[x].push(strs[i]);
    } else {
      map[x] = [strs[i]];
    }
  }
  return Object.values(map);
};

//Method 2
/**
   * var groupAnagrams = function(strs) {
      let map = {},
      x = [];
    for (let i = 0; i < strs.length; i++) {
          let word = strs[i].split("").sort();
      x.push(word.join(""));
      if (map[x[i]]) {
        map[x[i]].push(strs[i]);
      } else {
        map[x[i]] = [strs[i]];
      }
    }
    return Object.values(map); 
  };
   */

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
