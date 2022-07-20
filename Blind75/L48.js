/*You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 */

var rotate = function (matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
/** [[7,4,1],[8,5,2],[9,6,3]] */

var rotates = function (matrix) {
  let arr = [],
    length = matrix.length;
  for (let i = 0; i < length; i++) {
    arr = [];
    for (let j = length - 1; j >= 0; j--) {
      arr.push(matrix[j].shift());
    }
    matrix.push(arr);
  }
  for (let i = 0; i < length; i++) {
    matrix.shift();
  }
  return matrix;
};

console.log(
  rotates([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
/** [[7,4,1],[8,5,2],[9,6,3]] */
