//Method1
var flipAndInvertImage = function (image) {
  let resultingArray = [];
  for (let i = 0; i < image.length; i++) {
    let left = 0;
    let subArray = [];
    while (left < image[i].length) {
      if (image[i][left] === 1) {
        subArray.unshift(0);
        left++;
      } else {
        subArray.unshift(1);
        left++;
      }
    }
    resultingArray.push(subArray);
  }
  return resultingArray;
};

//Method2

var flipAndInvertImage = function (image) {
  let resultingArray = [];
  for (let i = 0; i < image.length; i++) {
    let n = image[i].length,
      sub = [];
    for (let j = 0; j < n; j++) {
      sub.unshift(image[i][j] ^ 1);
    }
    resultingArray.push(sub);
  }
  return resultingArray;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
