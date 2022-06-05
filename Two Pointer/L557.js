var reverseWords = function (s) {
  let array = [];
  let string = [];
  let final = "";
  array.push(...s.split(" "));
  for (let i = 0; i < array.length; i++) {
    let left = 0,str = [],
      right = array[i].length - 1;
    while (left <= right) {
      let temp = array[i][left];
      str[left] = array[i][right];
      str[right] = temp;
      left++;
      right--;
    }
    string.push(str.join(""));
  }
  return (final += string.join(" "));
};

console.log(reverseWords("Let's take LeetCode contest"));
// console.log(reverseWords("God Ding"));


