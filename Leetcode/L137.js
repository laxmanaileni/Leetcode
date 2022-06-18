var singleNumber = function (nums) {
  let single = 0;
  let double = 0;
  for (let i = 0; i < nums.length; i++) {
    single = ~double & (single ^ nums[i]);
    double = ~single & (double ^ nums[i]);
  }
  return single;
};

console.log(singleNumber([2, 2, 3, 2]));
