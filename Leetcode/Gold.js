// const Palin = (s) => {
//   let answer = 0;
//   let length = s.length;
//   let memo = Array(length)
//     .fill(0)
//     .map((m) => Array(length).fill(0));
//   //console.log(memo);

//   for (let i = length - 2; i >= 0; --i) {
//     for (let j = i + 2; j < length; ++j) {
//       memo[i][j] =
//         memo[i][j - 1] +
//         (memo[i + 1][j] == memo[i + 1][j - 1]
//           ? 0
//           : memo[i + 1][j] - memo[i + 1][j - 1]);
//       if (s.charAt(i) == s.charAt(j)) {
//         memo[i][j] += j - i - 1;
//       }
//     }
//   }

//   for (let i = 0; i < length; ++i) {
//     for (let j = i + 4; j < length; ++j) {
//       if (s.charAt(i) == s.charAt(j)) {
//         answer += memo[i + 1][j - 1];
//       }
//     }
//   }
//   return answer;
// };

// // console.log(Palin("010110"));
// // console.log(Palin("01111"));

// // const small_alpha_arr = "01".split("");
// var Palindrome = function (s) {
//   const charToIndices = {};
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (charToIndices[char]) {
//       charToIndices[char].push(i);
//     } else {
//       charToIndices[char] = [i];
//     }
//   }

//   let count = 0;
//   for (const currChar in charToIndices) {
//     if (charToIndices[currChar].length < 4) continue;
//     const currCharIndices = charToIndices[currChar];
//     const firstIndex = currCharIndices[0];
//     const lastIndex = currCharIndices[currCharIndices.length - 1];

//     for (const char in charToIndices) {
//       const indices = charToIndices[char];
//       let lo = 0;
//       let hi = indices.length;
//       while (lo < hi) {
//         const mid = (lo + hi) >> 1;
//         if (indices[mid] <= firstIndex) {
//           lo = mid + 1;
//         } else {
//           hi = mid;
//         }
//       }
//       if (indices[lo] && indices[lo] < lastIndex) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// const countPalindromicSubsequence = (s) => {
//   let tot = 0;
//   let mp = {};
//   for (let i = 0; i < s.length-2; i++) {
//     if (mp[s[i]]) continue;
//     let j = i + 1,
//       k = s.length - 1;
//     let st = [];
//     while (j < k) {
//       if (s[i] == s[k]) {
//         st.push(s[j]);
//         j++;
//       } else {
//         k--;
//       }
//     }
//     mp[s[i]] = true;
//     tot += st.length;
//   }
//   return tot;
// };

// console.log(countPalindromicSubsequence("010110"));
// console.log(countPalindromicSubsequence("01111"));

const A = (n, bucketSize, bucket) => {
  let res = [];
  for (let i = 0; i < bucketSize; i++) {
    if (n%bucket[i]=== 0) {
    res.push(n/bucket[i]) 
    }
  }


if(res.length===0){
  return -1;
}
return Math.min(...res)
};

console.log(A(4, 2, [2, 4]));//1
console.log(A(6, 2, [3, 5]));//2
console.log(A(7, 2, [3, 5]));//-1
console.log(A(5, 2, [3, 5]));//1