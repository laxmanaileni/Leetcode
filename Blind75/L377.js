var combinationSum4 = function (nums, target) {
  if (target === 0) return 1;
  if (target < 0) return 0;
  let result = 0;
  for (let num of nums) {
    let remainder = target - num;
    let numberOfWays = combinationSum4(nums, remainder);
    result += numberOfWays;
  }
  return result;
};

// console.log(combinationSum4([1, 2, 3], 4));
// console.log(combinationSum4([9], 3));

var combinationSum4DP = function (nums, target, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;
  let result = 0;
  for (let num of nums) {
    let remainder = target - num;
    let numberOfWays = combinationSum4DP(nums, remainder, memo);
    result += numberOfWays;
  }
  memo[target] = result;
  return result;
};

console.log(combinationSum4([1, 2, 3], 4));
console.log(combinationSum4([9], 3));
