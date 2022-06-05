var backspaceCompare = function (s, t) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      array.pop();
    } else {
      array.push(s[i]);
    }
  }
 // console.log(array);
  let tarray = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tarray.pop();
    } else {
      tarray.push(t[i]);
    }
  }
  //console.log(tarray);
  if (array.length !== tarray.length) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === tarray[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(backspaceCompare("ab#c", "ad#c")); //True
console.log(backspaceCompare("a#c", "b")); //False
console.log(backspaceCompare("ab##", "c#d#")); //True
console.log(backspaceCompare("xp#", "xyz##")); //True
console.log(backspaceCompare("xywrrmp", "xywrrmu#p")); //True



