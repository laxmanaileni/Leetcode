var groupAnagrams = function (strs) {
  let map = {},
    x = [];
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort();
    x.push(word.join(""));
  }
  //console.log(x);

  for (let i = 0; i < x.length; i++) {
    if (map[x[i]]) {
      map[x[i]].push(strs[i]);
    } else {
      map[x[i]] = [strs[i]];
    }
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
