/*You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 */

//* Method 1
var rotate = function (matrix) {
  let arr = [];
  let length = matrix.length;

  for (let index = 0; index < length; index++) {
    arr = [];
    for (let index2 = length - 1; index2 >= 0; index2--) {
      arr.push(matrix[index2].shift());
    }
    matrix.push(arr);
  }
  for (let index = 0; index < length; index++) {
    matrix.shift();
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

//*Method 2
var rotates = function (matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
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
