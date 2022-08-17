/*
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    }
  }
  let count = 0,
    maxCount = 0;
  let res = Object.keys(map);
  res.sort((a, b) => a - b);
  for (let i = 0; i < res.length; i++) {
    if (
      parseInt(res[i]) + 1 === parseInt(res[i + 1]) ||
      parseInt(res[i]) - 1 === parseInt(res[i + 1])
    ) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  return maxCount + 1;
};
*/

var longestConsecutive = function (nums) {
  let maxLength = 0;
  let set = new Set(nums); //Intialize set with nums array //console.log(set); //{ 100, 4, 200, 1, 3, 2 }
  for (let num of nums) {
    if (set.has(num - 1)) continue; // Not the start of a new consecutive list, so skip.
    let length = 1;
    while (set.has(num + length)) length++; // Build up the length as we find the next consecutive num
    maxLength = Math.max(length, maxLength); // Update max
    console.log(num, maxLength);
  }
  return maxLength;
};

// console.log(longestConsecutive([1, 0, -1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
