var minOperations = function (nums) {
  let max = nums[0],
    minOperations = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else {
      minOperations += max - nums[i] + 1;
      max = max + 1;
    }
  }
  return minOperations;
};

console.log(minOperations([1, 1, 1]));
console.log(minOperations([1, 5, 2, 4, 1]));
console.log(minOperations([8]));

console.log(minOperations([3, 4, 1, 6, 2]));
