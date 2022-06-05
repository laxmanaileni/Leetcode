var hammingDistance = function (x, y) {
  return (x ^ y)
    .toString(2)
    .split("")
    .filter((nums) => nums == 1).length;
};
