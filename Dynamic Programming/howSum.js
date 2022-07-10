const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    let resultRemainder = howSum(remainder, numbers);
    if (resultRemainder !== null) {
      return [...resultRemainder, num]; //num is edge
    }
  }
  return null;
};

// console.log(howSum(7, [2, 3])); //[ 3, 2, 2 ]
// console.log(howSum(7, [5, 3, 4, 7])); ///[ 4, 3 ]
// console.log(howSum(7, [2, 4])); //null
// console.log(howSum(8, [2, 3, 5])); //[ 2, 2, 2, 2 ]
// console.log(howSum(300, [7, 14])); //null

const howSumDP = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    let resultRemainder = howSumDP(remainder, numbers, memo);
    if (resultRemainder !== null) {
      memo[targetSum] = [...resultRemainder, num];
       return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSumDP(7, [2, 3])); //[ 3, 2, 2 ]
console.log(howSumDP(7, [5, 3, 4, 7])); //[ 4, 3 ]
console.log(howSumDP(7, [2, 4])); //null
console.log(howSumDP(8, [2, 3, 5])); //[ 2, 2, 2, 2 ]
console.log(howSumDP(300, [7, 14])); //null
