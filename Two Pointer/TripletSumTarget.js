var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let minTarget = Infinity;
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === target) {
        return target;
      } else if (
        minTarget > Math.abs(target - (nums[i] + nums[left] + nums[right]))
      ) {
        minTarget = Math.abs(target - (nums[i] + nums[left] + nums[right]));
        result = nums[i] + nums[left] + nums[right];
      }
      if (nums[i] + nums[right] + nums[left] > target) { //Two Sum concept
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
