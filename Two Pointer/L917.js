var reverseOnlyLetters = function (s) {
  let start = 0,
    end = s.length - 1;
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (start < end) {
      if (checkString(s[start]) && checkString(s[end])) {
        let temp = s[end];
        a[end] = s[start];
        a[start] = temp;
        start++;
        end--;
      } else if (!checkString(s[start]) || !checkString(s[end])) {
        if (!checkString(s[start])) {
          a[start] = s[start];
          start++;
        }
        if (!checkString(s[end])) {
          a[end] = s[end];
          end--;
        }
      }
    } else if (start === end) {
      a[start] = s[start];
    }
  }
  return a.join("");
};
const checkString = (c) => {
  return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z");
};

console.log(reverseOnlyLetters("ab-cd")); // dc-ba
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); //j-Ih-gfE-dCba
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); //Qedo1ct-eeLg=ntse-T!
