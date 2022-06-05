var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length; i++) {
    if (i !== nums[i] || nums[i] === undefined) {
      return i;
    }
  }
};

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

console.log(missingNumber([2, 3, 1, 8, 2, 3, 5, 1]));
