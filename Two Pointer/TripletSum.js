//Leetcode 15

var threeSum = function (nums) {
  //let target = 0;
  let result = [];
  nums = nums.sort((a, b) => a - b);

  for (let k = 0; k < nums.length; k++) {
    if (k > 0 && nums[k] === nums[k - 1]) {
      continue;
    }
    left = k + 1;
    let right = nums.length - 1;
    //target = -nums[k];
    while (left < right) {
      let sum = nums[left] + nums[right]+nums[k];
      if (sum === 0) {
        result.push([nums[k], nums[left], nums[right]]);
        left++;
       
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([-2, 0, 0, 2, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
console.log(threeSum([-2, 0, 1, 1, 2]));
