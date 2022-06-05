var thirdMax = function (nums) {
  let set = new Set(nums);
  let array = [...set];
  array.sort((a, b) => b - a)
  if (array[2] === undefined) {
    return array[0];
  }
  return array[2];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2]));
