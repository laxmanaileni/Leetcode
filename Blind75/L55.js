var canJump = function (nums) {
  //TODO
  let i = 0;
  for (let reach = 0; i < nums.length && i <= reach; ++i)
    reach = Math.max(i + nums[i], reach);
  return i == nums.length;
};

console.log(canJump([2, 3, 1, 1, 4])); //true
console.log(canJump([3, 2, 1, 0, 4])); //false
console.log(canJump([1])); //true
console.log(canJump([2, 0])); //true
console.log(canJump([2, 5, 0, 0])); //true
