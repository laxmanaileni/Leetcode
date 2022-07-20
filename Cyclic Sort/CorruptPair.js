const corruptPair = (nums) => {
  //cyclic sort all numbers should be at their indexes
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  //console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 != nums[i]) {
      return [nums[i], i + 1];
    }
  }
  return [-1, -1];
};

console.log(corruptPair([3, 1, 2, 5, 2]));
console.log(corruptPair([3, 1, 2, 3, 6, 4]));
