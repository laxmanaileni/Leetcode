//https://leetcode.com/problems/subsets/
var subsets = function (nums) {
  let subSet = [];
  subSet.push([]);
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let length = subSet.length;
    for (let j = 0; j < length; j++) {
      let copy = subSet[j].slice(0);
      copy.push(current);
      subSet.push(copy);
    }
  }
  return subSet;
};

console.log(subsets([1, 2, 3]));

/**
 * []
 * [] [1]
 * [] [1] [2] [1 2]
 * [] [1] [2] [1 2] [3] [1 3] [2 3] [1 2 3]
 */
