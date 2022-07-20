/*Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.*/

var findRotation = function (mat, target) {
  const equal = (mat, target) => {
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] !== target[i][j]) {
          return false;
        }
      }
    }
    return true;
  };
  if (equal(mat, target)) return true;

  const findRotationEqual = (mat) => {
    let arr = [],
      length = mat.length;

    for (let i = 0; i < length; i++) {
      arr = [];
      for (j = length - 1; j >= 0; j--) {
        arr.push(mat[j].shift());
      }
      mat.push(arr);
    }
    for (let i = 0; i < length; i++) {
      mat.shift();
    }
  };

  //   if(equal(mat,target)) return true
  findRotationEqual(mat);
  if (equal(mat, target)) return true;
  findRotationEqual(mat, target);
  if (equal(mat, target)) return true;
  findRotationEqual(mat, target);
  if (equal(mat, target)) return true;
  findRotationEqual(mat, target);
  if (equal(mat, target)) return true;
  return false;
};

console.log(
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
); //true
console.log(
  findRotation(
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]
  )
); //true

console.log(
  findRotation(
    [
      [0, 1],
      [1, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
); //false
