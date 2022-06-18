var permuteUnique = function (nums) {
  let map = {};
  let permutations = [],
    result = [],
    numsLength = nums.length;
  permutations.push([]);
  for (let i = 0; i < numsLength; i++) {
    let currentNumber = nums[i];
    let length = permutations.length;
    for (let j = 0; j < length; j++) {
      let oldPermutation = permutations.shift();

      for (let k = 0; k < oldPermutation.length + 1; k++) {
        let newPermission = oldPermutation.slice(0); //copy
        newPermission.splice(k, 0, currentNumber);

        if (newPermission.length === nums.length) {
          if (map[newPermission] === undefined) {
            map[newPermission] = 1;
            result.push(newPermission);
          }
        } else {
          permutations.push(newPermission);
        }
      }
    }
  }
  return result;
};
