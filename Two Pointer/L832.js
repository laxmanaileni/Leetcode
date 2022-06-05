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

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ])
);
