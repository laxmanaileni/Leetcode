var firstMissingPositive = function (nums) {
  let i = 0,
    n = nums.length;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1])); //2
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
