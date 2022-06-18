var nextGreatestLetter = function (letters, target) {
  if (target >= letters[letters.length - 1] || target < letters[0])
    return letters[0];
  let start = 0,
    end = letters.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (letters[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return letters[start];
};

console.log(["c", "f", "j"], "a");
