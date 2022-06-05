//Two Pointer Approach
// var removeDuplicates = function (nums) {
//   let counter = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       counter++;
//     }
//   }
//   return counter;
// };

var removeDuplicates = function (nums) {
  let counter = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[counter - 1] !== nums[i]) {
      nums[counter] = nums[i];
      counter += 1;
    }
  }
  return counter;
};

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));

/**
 * 
 * Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Example 1:

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
 */

const removeElement = (nums, key) => {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== key) {
      newArray.push(nums[i]);
    }
  }
  return newArray.length;
};
console.log(removeElement([3, 2, 3, 6, 3, 10, 9, 3], 3));
console.log(removeElement([2, 11, 2, 2, 1], 2));

//Two Pointer Approach
const removeElements = (nums, key) => {
  let duplicate = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== key) {
      nums[duplicate] = nums[i];
      duplicate++;
    }
  }
  return duplicate;
};
console.log(removeElements([3, 2, 3, 6, 3, 10, 9, 3], 3));
console.log(removeElements([2, 11, 2, 2, 1], 2));

var removeDuplicatesArray = function (nums) {
  let end = 1;
  let index = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1] && !index) {
      end++;
      index = i + 1;
    } else if (nums[i] === nums[i + 1] && index) {
      end++;
    } else if (nums[i] !== nums[i + 1] && index) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = null;
  }
  nums = nums.splice(0, index);
  return nums;
};

console.log(removeDuplicatesArray([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicatesArray([2, 2, 2, 11]));
console.log(removeDuplicatesArray([1, 1, 2]));
