const cyclic_sort = (nums) => {
  let i = 0;
  while (i < nums.length) {
    j = nums[i]-1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  return nums;
};

console.log(cyclic_sort([3, 1, 5, 4, 2]));
console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));

console.log(cyclic_sort([1, 5, 6, 4, 3, 2]));
