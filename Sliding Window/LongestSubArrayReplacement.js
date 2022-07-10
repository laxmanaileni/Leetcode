// const LongArrayReplacement = (array, K) => {
//   let start = 0,
//     maxLen = 0,
//     maxrepeating = 0;
//   let map = {};

//   for (let i = 0; i < array.length; i++) {
//     if (!map[array[i]]) {
//       map[array[i]] = 0;
//     }
//     map[array[i]] += 1;
//     maxrepeating = Math.max(maxrepeating, map[array[i]]);
//     while (i - start + 1 - maxrepeating > K) {
//       map[array[start]] -= 1;
//       start += 1;
//     }
//     maxLen = Math.max(maxLen, i - start + 1);
//   }
//   return maxLen;
// };
//Practice
const LongArrayReplacement = (array, K) => {
  let start = 0,
    maxLen = 0,
    map = {},
    maxRepeatingZeros = 0;

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] === undefined) map[array[i]] = 0;
    map[array[i]]++;

    maxRepeatingZeros = Math.max(maxRepeatingZeros, map[array[i]]);
    if (i - start + 1 - maxRepeatingZeros > K) {
      map[array[start]]--;
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};
console.log(LongArrayReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(LongArrayReplacement([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
