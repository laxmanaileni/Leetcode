//https://leetcode.com/problems/flood-fill/
var floodFill = function (image, sr, sc, color) {
  if (image.length === 0) return image;
  if (image[sr][sc] === color) return image;
  let extraColor = image[sr][sc];
  explore(image, sr, sc, color, extraColor);
  return image;
};

const explore = (image, row, col, color, extraColor) => {
  let rowInbounds = row >= 0 && row < image.length;
  let colInbounds = col >= 0 && col < image[0].length;
  if (!(rowInbounds && colInbounds)) return;
  if (image[row][col] !== extraColor) return;
  image[row][col] = color;
  explore(image, row - 1, col, color, extraColor);
  explore(image, row + 1, col, color, extraColor);
  explore(image, row, col - 1, color, extraColor);
  explore(image, row, col + 1, color, extraColor);
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
