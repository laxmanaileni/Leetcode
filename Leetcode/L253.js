var minMeetingRooms = function (intervals) {
  if (!intervals) return 0;
  if (intervals.length === 1) return 1;
  let starts = intervals.slice().sort((a, b) => a[0] - b[0]);
  let ends = intervals.sort((a, b) => a[1] - b[1]);
  let rooms = 0,
    end = 0;

  for (let i = 0; i < intervals.length; i++) {
    starts[i][0] < ends[end][1] ? rooms++ : end++;
  }
  return rooms;
};

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
console.log(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ])
);
