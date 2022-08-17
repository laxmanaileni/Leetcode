var permute = function (nums) {
  let permutations = [],
    result = [],
    numsLength = nums.length;
  permutations.push([]);

  for (let i = 0; i < numsLength; i++) {
    let currentNumber = nums[i];
    let length = permutations.length;
    //console.log(permutations)
    for (let j = 0; j < length; j++) {
      let oldPermutation = permutations.shift();

      for (let k = 0; k < oldPermutation.length + 1; k++) {
        let newPermission = oldPermutation.slice(0); //copy
        newPermission.splice(k, 0, currentNumber);
        //console.log(newPermission);
        if (newPermission.length === nums.length) {
          result.push(newPermission);
        } else {
          permutations.push(newPermission);
        }
      }
    }
  }
  return result;
};

console.log(permute([1, 2, 3]));
