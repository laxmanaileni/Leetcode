//Method 1
const noRepeatingSubString = (String) => {
  let map = {};
  let start = 0,
    maxLen = 0;
  for (let i = 0; i < String.length; i++) {

    if(!map[String[i]]){
        map[String[i]] =0;
    }
    map[String[i]] += 1;

    
    while (Object.keys(map).length < i - start + 1) {
      map[String[start]] -= 1;
      if (map[String[start]] === 0) {
        delete map[String[start]];
      }
      start += 1;
    }
   
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};
console.log(noRepeatingSubString("abccde"));
console.log(noRepeatingSubString("abbbb"));
console.log(noRepeatingSubString("aabccbb"));
console.log(noRepeatingSubString("dvdf"));
// //Method 2
// const noRe = (String) => {
//   let map = {};
//   let start = 0,
//     maxLen = 0;

//   for (let i = 0; i < String.length; i++) {
//     if (map[String[i]]) {
//       start = Math.max(start, map[String[i]] + 1);
//     }
//     map[String[i]] = i;
//     maxLen = Math.max(maxLen, i - start + 1);
//   }
//   return maxLen;
// };

// console.log(noRe("abccde"));
// console.log(noRe("abbbb"));
// console.log(noRe("aabccbb"));
