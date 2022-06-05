//General Approach
const SquaringArray = (nums) => {
  let squareArray = [];
  for (let i = 0; i < nums.length; i++) {
    squareArray.push(nums[i] * nums[i]);
  }
  return squareArray.sort((a, b) => a - b);
};

console.log(SquaringArray([-2, -1, 0, 2, 3]));
console.log(SquaringArray([-3, -1, 0, 1, 2]));

//Two Pointer Approach

const SquaringSortedArray = (nums) => {
  let start = 0;
  let high = nums.length - 1;
  let end = nums.length - 1;
  let newArray = [];
  while (start <= end) {
    let left = nums[start] * nums[start],
      right = nums[end] * nums[end];
    if (left > right) {
      newArray[high] = left;
      start += 1;
    } else {
      newArray[high] = right;
      right -= 1;
    }
  }
  return newArray;
};

console.log(SquaringSortedArray([-2, -1, 0, 2, 3]));
console.log(SquaringSortedArray([-3, -1, 0, 1, 2]));
