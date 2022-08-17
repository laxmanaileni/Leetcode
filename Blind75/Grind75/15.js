//https://leetcode.com/problems/3sum/

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = {};
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let end = nums.length - 1;
    let target = nums[i];
    while (j < end) {
      let sum = nums[j] + nums[end];
      if (sum + target === 0) {
        if (res[[target, nums[j], nums[end]]] === undefined)
          res[[target, nums[j], nums[end]]] = [target, nums[j], nums[end]];
        j++;
      }

      if (sum + target > 0) {
        end--;
      }
      if (sum + target < 0) j++;
    }
  }
  return Object.values(res)
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
