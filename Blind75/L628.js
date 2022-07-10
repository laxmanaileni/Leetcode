var maximumProduct = function (nums) {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1]
  );
};
console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 2, 3, 4]));
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
console.log(maximumProduct([-1, -2, -3]));
console.log(maximumProduct([-100, -2, -3, 1]));
