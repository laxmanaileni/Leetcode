//DP using Tabulation

const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  // console.log(table);
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        let combination = [...table[i], num];
        //If this current combination is shorter than previous then replace
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 5])); //[3,5]
console.log(bestSum(8, [1, 4, 5])); //[4,4]
console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]
