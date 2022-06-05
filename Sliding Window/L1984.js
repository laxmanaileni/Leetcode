var minimumDifference = function (nums, k) {
  nums = nums.sort((a, b) => a - b); //* [1,4,7,9]
  let min = nums[0],
    max = nums[k - 1];
  let diff = max - min;
  for (let i = k; i < nums.length; i++) {
    diff = Math.min(diff, nums[i] - nums[i - k + 1]);
  }

  return diff;
};

// console.log(minimumDifference([90], 1));
console.log(minimumDifference([9, 4, 1, 7], 2));
