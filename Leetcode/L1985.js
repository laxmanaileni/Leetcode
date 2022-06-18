var kthLargestNumber = function (nums, k) {
  let l = BigInt;
  nums = nums.map(l);

  nums.sort((x, y) => {
    if (x > y) {
      return -1;
    } else if (x < y) {
      return 1;
    } else {
      return 0;
    }
  });

  return nums[k - 1].toString();
};

console.log(kthLargestNumber(["3", "6", "7", "10"], 4));
