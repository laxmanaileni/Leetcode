var missingNumber = function (nums) {
    let missing=[]
    let i = 0;
    while (i < nums.length) {//Cyclic sort
      j = nums[i]-1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
        i++;
      }
    }
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]!== i+1 ) {
       missing.push(i+1)
      }
    }
    return missing;
  };
  
  console.log(missingNumber([4,3, 0, 1]));
  // console.log(missingNumber([0, 1]));
  // console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
  
  console.log(missingNumber([2, 3, 1, 8, 2, 3, 5, 1]));
  