var getMinDistance = function (nums, target, start) {
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      min = Math.min(Math.abs(i - start),min);
    }
  }
  return min;
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
