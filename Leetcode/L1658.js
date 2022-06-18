var minOperations = function (nums, x) {
  //target=sum of nums array -x

  const sum = nums.reduce((acc, current) => acc + current, 0);
  let target = sum - x;
  if (target < 0) return -1;
  if (!target) return nums.length;
  let start = 0, //Find the maxlen of the target array which is not part of sum of x
    maxLen = -Infinity,
    ArraySum = 0;

  for (let i = 0; i < nums.length; i++) {
    //Apply two sum we need maxLen for target
    ArraySum += nums[i];
    while (ArraySum > target) {
      ArraySum -= nums[start++];
    }
    if (ArraySum === target) {
      maxLen = Math.max(maxLen, i - start + 1);
    }
  }
  return maxLen === -Infinity ? -1 : nums.length - maxLen;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
console.log(minOperations([1, 1], 3));
