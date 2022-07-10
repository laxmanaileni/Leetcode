var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let start = i+1,
      end = nums.length - 1;

    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        res.push([nums[i], nums[start], nums[end]]);
        start++;
        while (nums[start] === nums[start - 1] && start < end) {
          start++;
        }
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
