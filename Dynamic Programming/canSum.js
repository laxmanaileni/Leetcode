const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let nums of numbers) {
    let remainder = targetSum - nums;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};
/*
console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5]));//true
console.log(canSum(300, [7, 14]));//false
*/

const canSumDP = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let nums of numbers) {
    const remainder = targetSum - nums;
    if (canSumDP(remainder, numbers, memo) === true) { 
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSumDP(7, [2, 3])); //true
console.log(canSumDP(7, [5, 3, 4, 7])); //true
console.log(canSumDP(7, [2, 4])); //false
console.log(canSumDP(8, [2, 3, 5])); //true
console.log(canSumDP(300, [7, 14])); //false
