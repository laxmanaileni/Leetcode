var sortString = function (s) {//not solved
  let map = {};
  s = s.split("").sort().join("");

  for (let ch of s) {
    if (map[ch] !== undefined) {
      map[ch]++;
    } else {
      map[ch] = 1;
    }
  }

  let str = "";
  let alternate = false;

  let temp = "";

  while (str.length < s.length) {
    temp = "";
    
    for (let i = 0; i < Object.keys(map).length; i++) {
        console.log(s[i])
      if (map[s[i]] !== 0) {
       
        temp += s[i];
        // map.set(key, val-1);
        map[s[i]]-=1;

      }
   
    }
    console.log(map)
    if (!alternate) str += temp;
    else str += temp.split("").reverse().join("");
    alternate = !alternate;
  }

//console.log("first")
  return str;
};

console.log(sortString("aaaabbbbcccc"));
// console.log(sortString("rat"));
