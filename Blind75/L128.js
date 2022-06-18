var longestConsecutive = function (nums) {
  //O(nlogn)
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

console.log(longestConsecutive([1, 0, -1]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
