var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let x = nums[i].toString().length;

    if (x % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
