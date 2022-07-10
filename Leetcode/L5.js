//*Expand from Center
/*
var longestPalindrome = function(s) {
   let longest=""
    for(let i=0;i<s.length;i++){
let oddPalindrome=ExpandFromCenter(s,i,i) // For Odd Palindrome aba
let evenPalindrome=ExpandFromCenter(s,i-1,i) // For Even Palindrome abba
if(oddPalindrome.length>longest.length){
    longest=oddPalindrome;
}
if(evenPalindrome.length>longest.length){
    longest=evenPalindrome
}
    }
    return longest;
};

const ExpandFromCenter=(s,left,right)=>{
let start=0;
    while(s[left-start] && s[left-start]===s[right+start]){
        start++
    }
    start--;
    return s.slice(left-start,right+start+1)
}
*/

//* Dynamic Programming
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const dp = Array(s.length + 1)
    .fill(0)
    .map((nums) => Array(s.length + 1).fill(0));

  let lps = "";

  // Base case for 1 character a, b, c
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    lps = s[i];
  }
  // Base case for 2 character aa, bb, cc
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) dp[i][i + 1] = true;
    if (dp[i][i + 1]) lps = s.substring(i, i + 2);
  }
  // Base case for more than 2 characters
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      if (dp[i][j]) lps = lps.length < j - i + 1 ? s.substring(i, j + 1) : lps;
    }
  }
  return lps;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
