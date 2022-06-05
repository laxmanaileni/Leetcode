var firstUniqChar = function (s) {
  let map = {},
  set={}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
        map[s[i]]++;
    } else {
      map[s[i]] = 1;
      set[s[i]]=i
    }
  }

  //console.log(Object.entries(map).length)
  for(let i=0;i<Object.entries(map).length;i++){
    //console.log(Object.entries(map)[i][1]);
   if(Object.entries(map)[i][1]===1){return set[Object.entries(map)[i][0]]}
     // if(Object.keys(map))
  }
  return -1
  
};

console.log(firstUniqChar("leetcode"));///0
console.log(firstUniqChar("loveleetcode"));//2
console.log(firstUniqChar("aabb"));//-1
console.log(firstUniqChar("dddccdbba"));//8