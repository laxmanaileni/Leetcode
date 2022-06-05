var reversePrefix = function (word, ch) {
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      break;
    }
    index++;
  }
  if (index === word.length) {
    return word;
  }
  let left = 0,
    right = index;
  let array = [];
  while (left <= right) {
    let temp = word[left];
    array[left] = word[right];
    array[right] = temp;
    right--;
    left++;
  }
  let str = array.join("");
  return (str += word.substring(index + 1, word.length));
};

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z"));
