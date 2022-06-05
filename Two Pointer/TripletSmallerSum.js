/** //Leetcode 259
 * 
 * @param {Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

 

Example 1:

Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]
Example 2:

Input: nums = [], target = 0
Output: 0
Example 3:

Input: nums = [0], target = 0
Output: 0} nums 
 * 
 */
var threeSumSmaller = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
      let targetSum=target-nums[i]
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      if ( nums[left] + nums[right] < targetSum) {
        count+=right-left;
        left++;
      }else{
        right--
      }
    }
  }
  return count;
};

console.log(threeSumSmaller([-2, 0, 1, 3], 2));
