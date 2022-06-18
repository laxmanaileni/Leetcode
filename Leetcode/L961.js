var repeatedNTimes = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      return nums[i];
    } else {
      map[nums[i]] = 1;
    }
  }
};
