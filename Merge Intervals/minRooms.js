const minRooms = (meetings) => {
  if (!meetings) return 0;
  if (meetings.length === 1) return 1;
  var starts = meetings.slice().sort((a, b) => a[0] - b[0]);
  var ends = meetings.sort((a, b) => a[1] - b[1]);
  var rooms = 0;
  var end = 0;
  for (var i = 0; i < meetings.length; i++) {
    starts[i][0] < ends[end][1] ? rooms++ : end++;
  }
  return rooms;
};
console.log(
  minRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
// console.log(
//   minRooms([
//     [1, 4],
//     [2, 5],
//     [7, 9],
//   ])
// );
// console.log(
//   minRooms([
//     [6, 7],
//     [2, 4],
//     [8, 12],
//   ])
// );
// console.log(
//   minRooms([
//     [1, 4],
//     [2, 3],
//     [3, 6],
//   ])
// );
// console.log(
//   minRooms([
//     [4, 5],
//     [2, 3],
//     [2, 4],
//     [3, 5],
//   ])
// );
