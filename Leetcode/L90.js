var subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let subSets = [];
  let map = {};
  subSets.push([]);
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let length = subSets.length;
    for (let j = 0; j < length; j++) {
      let copy = subSets[j].slice(0); //copy subset
      copy.push(currentNumber);
      if (map[copy] === undefined) {
        map[copy] = 1;
        subSets.push(copy);
      }
    }
  }
  return subSets;
};

console.log(subsetsWithDup([1, 2, 2]));
