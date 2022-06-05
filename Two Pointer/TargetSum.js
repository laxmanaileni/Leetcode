//Leetcode 16
var twoSum = function (nums, target) { 
  let start = 0;
  let end = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[start] + nums[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      return [start, end];
    }
  }
  return [-1, -1];
};

console.log(twoSum([1, 2, 3, 4, 6], 6));
console.log(twoSum([2, 5, 9, 11], 11));
console.log(twoSum([2, 3, 4], 6));
