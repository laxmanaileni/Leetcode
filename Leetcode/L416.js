var canPartition = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum += nums[i];

  if (sum % 2 !== 0) return false;
  let dp = [];

  return canPartitionSolve(dp, nums, sum / 2, 0);
};

const canPartitionSolve = (dp, nums, sum, index) => {
  if (sum === 0) return true; //Base case
  if (nums.length === 0 || index >= nums.length) return false;
  dp[index] = dp[index] || [];
  if (dp[index][sum] === undefined) {
    if (nums[index] <= sum) {
      if (canPartitionSolve(dp, nums, sum - nums[index], index + 1)) {
        dp[index][sum] = true;
        return true;
      }
    }
    dp[index][sum] = canPartitionSolve(dp, nums, sum, index + 1);
  }
  return dp[index][sum];
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 4]));
console.log(canPartition([2, 3, 4, 6]));
