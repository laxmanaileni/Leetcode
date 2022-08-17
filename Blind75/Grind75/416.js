// https://leetcode.com/problems/partition-equal-subset-sum/

//*Not solved

var canPartition = function (nums) {
  let sum = 0;

  nums.map((s) => (sum += s));

  if (sum % 2 !== 0) return false;

  let memo = [];
  return canPartitionSolve(memo, sum / 2, nums, 0);
};

const canPartitionSolve = (memo, sum, nums, index) => {
  if (sum === 0) return true;

  if (nums.length === 0 || index >= nums.length) return false;

  dp[index] = dp[index] || [];
};

console.log(canPartition([1, 5, 11, 5]));
