var removeElement = function (nums, val) { //Stupid Problem, question not clear in leetcode 
  let counter = 0,
    start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[start] = nums[i];
      start++;
    } else {
      counter++;
    }
  }
  nums=nums.slice(0,start)
  // console.log(nums.length, counter);
  // for (let i = nums.length - counter; i < nums.length; i++) {
  //   nums[i] = "_";
  // }
  return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
