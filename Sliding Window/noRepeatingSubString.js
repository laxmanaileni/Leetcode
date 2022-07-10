//Method 1
// const noRepeatingSubString = (String) => {
//   let map = {};
//   let start = 0,
//     maxLen = 0;
//   for (let i = 0; i < String.length; i++) {

//     if(!map[String[i]]){
//         map[String[i]] =0;
//     }
//     map[String[i]] += 1;

//     while (Object.keys(map).length < i - start + 1) {
//       map[String[start]] -= 1;
//       if (map[String[start]] === 0) {
//         delete map[String[start]];
//       }
//       start += 1;
//     }

//     maxLen = Math.max(maxLen, i - start + 1);
//   }
//   return maxLen;
// };
//Practice
const noRepeatingSubString = (String) => {
  let start = 0,
    map = {},
    maxLen = 0;
  for (let i = 0; i < String.length; i++) {
    if (map[String[i]] === undefined) map[String[i]] = 0;
    map[String[i]]++;
    while (Object.keys(map).length < i - start + 1) {
      map[String[start]]--;
      if (map[String[start]] === 0) delete map[String[start]];
      start += 1;
    }
    maxLen = Math.max(i - start + 1, maxLen);
  }
  return maxLen;
};

console.log(noRepeatingSubString("abccde")); //3
console.log(noRepeatingSubString("abbbb")); //2
console.log(noRepeatingSubString("aabccbb")); //3
console.log(noRepeatingSubString("dvdf")); //3
//* Method 2
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
