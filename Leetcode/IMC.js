function isReachable(c, sx, sy, dx, dy) {
  // base case
  if (sx > dx || sy > dy) return false;

  // current point is equal to destination
  if (sx == dx && sy == dy) return true;

  // check for other 2 possibilities
  return (
    isReachable(c, sx + sy, sy, dx, dy) ||
    isReachable(c, sx, sy + sx, dx, dy) ||
    isReachable(c, sx + c, sy + c, dx, dy)
  );
}

// driver program
let source_x = 1,
  source_y = 4;
let dest_x = 7,
  dest_y = 6,
  c = 1;
console.log(isReachable(c, source_x, source_y, dest_x, dest_y));

// if ()
//   document.write("True\n");
// else document.write("False\n");
