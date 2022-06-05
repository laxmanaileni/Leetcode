var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  let array = nums;
  //console.log(nums); //[ 1, 1, 3, 4, 5 ]
  count = 0;
  let map = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] - array[i] === k) {
        if (map[array[i]] !== undefined) {
          if (map[array[i]] === array[j]) {
            continue;
          }
          count++;
        } else {
          console.log(array[i], array[j]);
          map[array[i]] = array[j];
          count++;
        }
      }
    }
  }
  return count;
};
// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 3, 1, 5, 4], 0));
// console.log(findPairs([1, 2, 3, 4, 5], 1));
console.log(findPairs([0, 0, 0], 0));
