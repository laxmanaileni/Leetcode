// Using Dynamic Programming

//Solution: Add the max of first and second to fourth and next second and third to fifth etcc.. This is how we will do untill end and return the max of last one and last but one as the result

var rob = function (nums) {
  //*Base Cases
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};

console.log(rob([1, 2, 3, 1])); //4
console.log(rob([2, 7, 9, 3, 1])); //12
