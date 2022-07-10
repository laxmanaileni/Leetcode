//Using the Longest Common technique using Dynamic programming using Tabulation
//Ref https://www.youtube.com/watch?v=sSno9rV8Rhg

var longestCommonSubsequence = function (text1, text2) {
  let LCS = Array(text1.length + 1)
    .fill(0)
    .map((m) => Array(text2.length + 1).fill(0));
  // console.log(LCS);

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        //    console.log(text1[i], text2[j],i,j);
        LCS[i][j] = 1 + LCS[i - 1][j - 1];
      } else {
        LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
      }
    }
  }
  //   console.log(LCS)
  return LCS[text1.length][text2.length];
};

console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("abc", "abc"));
console.log(longestCommonSubsequence("abc", "def"));
