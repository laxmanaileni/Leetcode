var shortestDistance = function (m, maxTime) {
    let d=[m.length-1, m[0].length-1],s=[0,0]
    console.log(d)
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const map = new Map();
  const q = [[s[0], s[1], 0]]; //position 0
  const res = [];
  while (q.length) {
    const [row, col, posIdx] = q.shift();
    for (let [x, y] of dir) {
      let [r, c, pos] = [row, col, posIdx]; // initial copy, lets no modify the original values
      while (
        r >= 0 &&
        r < m.length &&
        c >= 0 &&
        c < m[r].length &&
        m[r][c] !== "$"
      ) {
        r += y;
        c += x;
        pos++;
      }
      // go back one
      r -= y;
      c -= x;
      pos--;

      if (m[r][c] === "$") continue;
      if (map.has(`r${r}+c${c}`) && map.get(`r${r}+c${c}`) <= pos) continue;
      map.set(`r${r}+c${c}`, pos);
      if (r === d[0] && c === d[1]) {
        res.push(pos);
        break;
      }
      q.push([r, c, pos]);
    }
  }
  let x = Math.min(...res);
  if (x <= maxTime) {
    return true;
  } else {
    return false;
  }

  // return -1
};

// console.log(
//   shortestDistance(
//     [
//       ['.','.','$','$'],["$",".","$",'$'],['$','.','.','.']
//     ],
//     [0, 0],
//     [2, 3]
//   )
// );

console.log(
  shortestDistance(
    [
      [".", "$"],
      ["$", "."],
    ],
   2
  )
);
