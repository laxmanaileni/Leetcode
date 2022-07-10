const emp = (meet) => {
  let result = [];
  for (let i = 0; i < meet.length; i++) {
    result.push(...merge(meet[i]));
  }
  let array = merge(result);
  console.log(array); //[ [ 1, 3 ], [ 5, 8 ] ]
  let res = [];
  for (let i = 0; i < array.length - 1; i++) {
    res.push([array[i][1], array[i + 1][0]]);
  }

  return res;
};

const merge = (intervals) => {
  if (!intervals) return [];
  if (intervals.length < 2) return intervals;
  let start = 0,
    end = 1;
  intervals.sort((a, b) => a[start] - b[start]); //*Sort by start time
  let prev = intervals[0];
  let mergeIntervals = [prev];

  for (let current of intervals) {
    if (current[start] <= prev[end]) {
      //* Overlap
      prev[end] = Math.max(prev[end], current[end]);
    } else {
      //* No Overlap
      mergeIntervals.push(current);
      prev = current;
    }
  }
  return mergeIntervals;
};

// console.log(
//   emp([
//     [
//       [1, 3],
//       [5, 6],
//     ],
//     [
//       [2, 3],
//       [6, 8],
//     ],
//   ])
// );
// console.log(
//   emp([
//     [
//       [1, 3],
//       [9, 12],
//     ],
//     [[2, 4]],
//     [[6, 8]],
//   ])
// );

// console.log(
//   emp([
//     [[1, 3]],
//     [[2, 4]],
//     [
//       [3, 5],
//       [7, 9],
//     ],
//   ])
// );

console.log(
  emp([
    [
      [1, 2],
      [5, 6],
    ],
    [[1, 3]],
    [[4, 10]],
  ])
);
