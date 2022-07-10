var maxSubArray = function (nums) {
  let maxSum = nums[0],
    tempSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    tempSum = Math.max(tempSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

