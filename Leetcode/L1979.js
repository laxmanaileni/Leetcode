var findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  let small = nums[0];
  let big = nums[nums.length - 1];

  for (let i = small; i > 0; i--) {
    if (small % i === 0 && big % i === 0) {
      return i;
    }
  }
};

console.log(findGCD([2, 5, 6, 9, 10]));
