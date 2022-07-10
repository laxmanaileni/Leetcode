var canAttendMeetings = function (intervals) {
  if (!intervals || intervals.length === 1) return true;
  let start = 0,
    end = 1,
    i = 0;
  intervals.sort((a, b) => a[start] - b[start]);
  while (i < intervals.length - 1) {
    if (intervals[i][end] > intervals[i + 1][start]) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  canAttendMeetings([
    [7, 10],
    [2, 4],
  ])
);
