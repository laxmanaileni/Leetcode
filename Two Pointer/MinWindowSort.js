const shortest_window_sort = (nums) => {
  let beforeSort = [...nums];
  let sortedNums = nums.sort((a, b) => a - b);
  let bLeft = 0,
    bRight = 0;
  let len = sortedNums.length;
  let sRight = len - 1;
  let lCount = 0,
    rCount = 0;
  for (let i = 0; i < len; i++) {
    if (beforeSort[i] !== sortedNums[i] && !lCount) {
      lCount++;
      bLeft = i;
    }
    if (beforeSort[sRight] !== sortedNums[sRight] && !rCount) {
      rCount++;
      bRight = len - 1 - i;
    }
    sRight--;
  }
  if (bRight || bLeft) {
    return bRight - bLeft + 1;
  } else {
    return bRight - bLeft;
  }
};
console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12])); //5
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10])); //5
console.log(shortest_window_sort([1, 2, 3])); //0
console.log(shortest_window_sort([3, 2, 1])); //3
