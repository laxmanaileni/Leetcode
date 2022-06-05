var duplicateNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    //Cyclic sort
    j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  //console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return nums[i];
    }
  }
};

console.log(duplicateNumber([1, 4, 4, 3, 2]));
console.log(duplicateNumber([2, 1, 3, 3, 5, 4]));
console.log(duplicateNumber([2, 4, 1, 4, 4]));
