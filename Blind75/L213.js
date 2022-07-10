var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  //case 1, don't consider the last house;
  var secondLast = nums[0];
  var last = Math.max(nums[0], nums[1]);
  var result1 = last;
  for (var i = 2; i < nums.length - 1; i++) {
    result1 = Math.max(last, secondLast + nums[i]);
    secondLast = last;
    last = result1;
  }
  //case 2, don't consider the first house;
  secondLast = nums[1];
  last = Math.max(nums[1], nums[2]);
  var result2 = last;
  for (var i = 3; i < nums.length; i++) {
    result2 = Math.max(last, secondLast + nums[i]);
    secondLast = last;
    last = result2;
  }
  return Math.max(result1, result2);
};
