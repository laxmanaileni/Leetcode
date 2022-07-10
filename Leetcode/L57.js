var insert = function (intervals, newInterval) {
    //* Base Cases
  if (!intervals && !newInterval) return [];
  if (!intervals && newInterval) return newInterval;
  if (!newInterval) return intervals;

  let result = [];
  let start = 0,
    end = 1;
  let i = 0;
  //* Intervals upto no overlapping
  while (i < intervals.length && intervals[i][end] < newInterval[start]) {
    result.push(intervals[i]);
    i += 1;
  }

  //* Find the new interval end >= interval start
  while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
    newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
    newInterval[end] = Math.max(intervals[i][end], newInterval[end]);
    i += 1;
  }
  result.push(newInterval);

  //* Intervals after overlapping
  while (i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }
  return result;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
