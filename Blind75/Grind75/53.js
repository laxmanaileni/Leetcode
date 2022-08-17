//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  let max = nums[0];
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    temp = Math.max(nums[i], temp + nums[i]);
    max = Math.max(max, temp);
  }
  return max;
};

const maxSub=(nums)=>{

}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

