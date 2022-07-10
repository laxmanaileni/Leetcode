var eraseOverlapIntervals = function (intervals) {
// sort by earliest finish time
intervals.sort((a, b) => a[1] - b[1]);
let prev = intervals[0], remove = 0;

for(let i = 1; i < intervals.length; i++) {
    if(intervals[i][0] < prev[1]) remove++;
    else prev = intervals[i];
}
return remove;

};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
