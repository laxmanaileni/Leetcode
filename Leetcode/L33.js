var search = function (nums, target) {
  let rotated = nums[nums.length - 1] + 1;
  if (target < rotated) {
    let start = nums.length - 1;
    let i = 0;
    while (i < nums.length) {
      if (nums[start] === target) {
        return start;
      }
      start -= 1;
      i += 1;
    }
  } else {
    let start = 0;
    while (start < nums.length) {
      if (nums[start] === target) {
        return start;
      }
      start += 1;
    }
  }
  return -1;
};

/**
 * var search = function (nums, target) {

if(nums[nums.length-1]<target){
    start=nums.length-1
while(start>=0){
    if(nums[start]===target){
        return start;
    }
    start-=1
}
}else{
    start=0
while(start<=nums.length-1){
    if(nums[start]===target){
        return start;
    }
    start+=1
}
}
return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));//4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));//-1
console.log(search([1], 0));//-1
console.log(search([1], 1));//0
console.log(search([1, 3], 3));//1
console.log(search([1, 3, 5], 3));//1
console.log(search([3,5,1],5));//1
 */

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
