//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i];
    if (map[sub] !== undefined) {
      return [map[sub], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return -1;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
