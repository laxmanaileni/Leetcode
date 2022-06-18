var SubsetSum = function (nums, target) {
  let dp = [];
  return canPartitionSolve(dp, nums, target, 0);
};

const canPartitionSolve = (dp, nums, target, index) => {
  if (target === 0) return true; //Base case
  if (nums.length === 0 || index >= nums.length) return false;
  dp[index] = dp[index] || [];
  if (dp[index][target] === undefined) {
    if (nums[index] <= target) {
      if (canPartitionSolve(dp, nums, target - nums[index], index + 1)) {
        dp[index][target] = true;
        return true;
      }
    }
    dp[index][target] = canPartitionSolve(dp, nums, target, index + 1);
  }
  return dp[index][target];
};






console.log(SubsetSum([1, 2, 3, 7], 6));
console.log(SubsetSum([1, 2, 7, 1, 5], 10));
console.log(SubsetSum([1, 3, 4, 8], 6));
