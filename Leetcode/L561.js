var arrayPairSum = function (nums) {
  let array = nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i = i + 2) {
    sum += array[i];
  }
  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
