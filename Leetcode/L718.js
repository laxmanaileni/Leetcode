var findLength = function (nums1, nums2) {
  //Dynamic Programming
  let max = 0;
  let dp = Array(nums1.length + 1)
    .fill(0)
    .map((nums) => Array(nums2.length + 1).fill(0));
  // console.log(dp)
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      } 
    }
  }
  //  console.log(dp)
  return max;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
