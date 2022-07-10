const bestSumDP = (targetSum, numbers, memo = {}) => {
  //*Base Cases
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  let resultArray = [];
  for (let num of numbers) {
    let remainder = targetSum - num;
    let resultRemainder = bestSumDP(remainder, numbers, memo);
    if (resultRemainder !== null) {
      let combination = [...resultRemainder, num];
      resultArray = [...resultArray, combination];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  console.log(resultArray);
  memo[targetSum] = shortestCombination;
  return memo[targetSum];
};

console.log(bestSumDP(7, [5, 3, 4, 7])); //[7]
// console.log(bestSumDP(8, [2, 3, 5])); //[3,5]
// console.log(bestSumDP(8, [1, 4, 5])); //[4,4]
// console.log(bestSumDP(100, [1, 2, 5, 25])); //[25,25,25,25]
