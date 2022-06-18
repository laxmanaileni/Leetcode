var subsets = function (nums) {
  let subSets = [];
  subSets.push([]);
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let length = subSets.length;
    for (let j = 0; j < length; j++) {
      let copy = subSets[j].slice(0); //copy subset
      copy.push(currentNumber);
      subSets.push(copy);
    }
  }
  return subSets;
};

console.log(subsets([1, 2, 3]));

/**
 * [] [1][2]
 */