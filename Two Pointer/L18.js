/**   4 SUM Problem
 *
 * @param {Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number} nums
 * @param {*} target
 */

var fourSum = function (nums, target) {
  let result = [];
  nums = nums.sort((a, b) => a - b); //*Sorting Arrays*
  for (let i = 0; i < nums.length; i++) {
    if (i && nums[i] === nums[i - 1]) {
      // *To Avoid Duplication of quadruplets*
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j != i + 1 && nums[j] === nums[j - 1]) {
        // *To Avoid Duplication of quadruplets*
        continue;
      }
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        let sum = nums[left] + nums[right] + nums[i] + nums[j];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          // *To Avoid Duplication of result array*
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          // *END*
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(fourSum([4, 1, 2, -1, 1, -3], 1)); //[-3, -1, 1, 4], [-3, 1, 1, 2]
console.log(fourSum([2, 0, -1, 1, -2, 2], 2)); //[ [ -2, 0, 2, 2 ], [ -1, 0, 1, 2 ] ]
