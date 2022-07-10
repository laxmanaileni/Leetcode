var merge = function (intervals) {
  if (!intervals) return [];
  if (intervals.length < 2) return intervals;
  let start = 0,
    end = 1;
  intervals.sort((a, b) => a[start] - b[start]);
  let prev = intervals[0];
  let mergeIntervals = [prev];
  for (let current of intervals) {
    if (current[start] <= prev[end]) {
      prev[end] = Math.max(prev[end], current[end]);
    } else {
      mergeIntervals.push(current);
      prev = current;
    }
  }
  return mergeIntervals;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); //[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); //[ [ 1, 5 ] ]
