var rearrangeArray = function (nums) {
  let positive = [],
    negative = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      positive.push(nums[i]);
    } else {
      negative.push(nums[i]);
    }
  }
  let start = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    nums[i] = positive[start];
    nums[i + 1] = negative[start];
    start++;
  }
  return nums
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
