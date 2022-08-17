// // // const Palin = (s) => {
// // //   let answer = 0;
// // //   let length = s.length;
// // //   let memo = Array(length)
// // //     .fill(0)
// // //     .map((m) => Array(length).fill(0));
// // //   //console.log(memo);

// // //   for (let i = length - 2; i >= 0; --i) {
// // //     for (let j = i + 2; j < length; ++j) {
// // //       memo[i][j] =
// // //         memo[i][j - 1] +
// // //         (memo[i + 1][j] == memo[i + 1][j - 1]
// // //           ? 0
// // //           : memo[i + 1][j] - memo[i + 1][j - 1]);
// // //       if (s.charAt(i) == s.charAt(j)) {
// // //         memo[i][j] += j - i - 1;
// // //       }
// // //     }
// // //   }

// // //   for (let i = 0; i < length; ++i) {
// // //     for (let j = i + 4; j < length; ++j) {
// // //       if (s.charAt(i) == s.charAt(j)) {
// // //         answer += memo[i + 1][j - 1];
// // //       }
// // //     }
// // //   }
// // //   return answer;
// // // };

// // // // console.log(Palin("010110"));
// // // // console.log(Palin("01111"));

// // // // const small_alpha_arr = "01".split("");
// // // var Palindrome = function (s) {
// // //   const charToIndices = {};
// // //   for (let i = 0; i < s.length; i++) {
// // //     const char = s[i];
// // //     if (charToIndices[char]) {
// // //       charToIndices[char].push(i);
// // //     } else {
// // //       charToIndices[char] = [i];
// // //     }
// // //   }

// // //   let count = 0;
// // //   for (const currChar in charToIndices) {
// // //     if (charToIndices[currChar].length < 4) continue;
// // //     const currCharIndices = charToIndices[currChar];
// // //     const firstIndex = currCharIndices[0];
// // //     const lastIndex = currCharIndices[currCharIndices.length - 1];

// // //     for (const char in charToIndices) {
// // //       const indices = charToIndices[char];
// // //       let lo = 0;
// // //       let hi = indices.length;
// // //       while (lo < hi) {
// // //         const mid = (lo + hi) >> 1;
// // //         if (indices[mid] <= firstIndex) {
// // //           lo = mid + 1;
// // //         } else {
// // //           hi = mid;
// // //         }
// // //       }
// // //       if (indices[lo] && indices[lo] < lastIndex) {
// // //         count++;
// // //       }
// // //     }
// // //   }
// // //   return count;
// // // };

// // // const countPalindromicSubsequence = (s) => {
// // //   let tot = 0;
// // //   let mp = {};
// // //   for (let i = 0; i < s.length-2; i++) {
// // //     if (mp[s[i]]) continue;
// // //     let j = i + 1,
// // //       k = s.length - 1;
// // //     let st = [];
// // //     while (j < k) {
// // //       if (s[i] == s[k]) {
// // //         st.push(s[j]);
// // //         j++;
// // //       } else {
// // //         k--;
// // //       }
// // //     }
// // //     mp[s[i]] = true;
// // //     tot += st.length;
// // //   }
// // //   return tot;
// // // };

// // // console.log(countPalindromicSubsequence("010110"));
// // // console.log(countPalindromicSubsequence("01111"));

// // const A = (n, bucketSize, bucket) => {
// //   let res = [];
// //   for (let i = 0; i < bucketSize; i++) {
// //     if (n%bucket[i]=== 0) {
// //     res.push(n/bucket[i]) 
// //     }
// //   }


// // if(res.length===0){
// //   return -1;
// // }
// // return Math.min(...res)
// // };

// // console.log(A(4, 2, [2, 4]));//1
// // console.log(A(6, 2, [3, 5]));//2
// // console.log(A(7, 2, [3, 5]));//-1
// // console.log(A(5, 2, [3, 5]));//1



// const make=(answer)=>{
//   let x=0,add=0;

//   for(let i=0;i<answer.length-1;i++){
//     if(answer[i+1]<answer[i]){
//       x=answer[i]-answer[i+1]
// add+=x
// x=add;
// answer[i+1]=answer[i+1]+add;
//     }else{
//       answer[i]=answer[i]+add
//     }

// console.log(answer)
//   }
// }

// console.log(make([3,4,1,6,2]))


// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



// /*
//  * Complete the 'findNumWaysToSplit' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. STRING categories
//  *  2. INTEGER k
//  */

// function findNumWaysToSplit(categories, k) {
//     /**
//      * Time Complexity: O(n)
//      * Space Complexity:O(n)
//      */
//     let dictL={};
//     let dictR={};
    
//     for(let c of categories){
//         if (dictR[c]===undefined){
//             dictR[c]=0
//         }
//         dictR[c]++;
//     }
//     let distinct_Common=0;
//     let count=0;
//     for(let c of categories){
//         dictR[c]--;
//         if(dictR[c]===0){
//             if(dictL[c]!== undefined){
//                 distinct_Common--;
//             }  
//         }else{
//             if(dictL[c]===undefined){
//                 dictL[c]=1;
//                 distinct_Common++;
//             }else{
//                 dictL[c]++;
//             }
//         }
//         if(distinct_Common>k)count++;
//     }
    
//     return count;
// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const categories = readLine();

//     const k = parseInt(readLine().trim(), 10);

//     const result = findNumWaysToSplit(categories, k);

//     ws.write(result + '\n');

//     ws.end();
// }



// function makePowerNonDecreasing(power) {
//   /**
//    * Time Complexity : O(n)
//    * Space Complexity: O(1)
//    */
//   let currentSum=0;
//   let totalSum=0;
  
//   for(let i=1;i<power.length;i++){
//       if(power[i]>=power[i-1]){
//           currentSum=0;
//           continue;
//       }else{
//           if(power[i-1]+currentSum<=power[i]+currentSum){
//               continue
//           }else{
//               currentSum+=power[i-1]-power[i]
//               totalSum+=power[i-1]-power[i]
//           }
//       }
//   }
// return totalSum
// }


const max=(skill,k)=>{
let array=[];
skill.sort((a,b)=>a-b)
for(let i=0;i<skill.length-1;i++){
  array.push(Math.abs(skill[i]-skill[i+1]))
}
let len=array.length;
console.log(array)
for(let i=1;i<len;i++){
  array.push(array[i]+array[i-1])
}

return array.slice(0,k)
}

console.log(max([3,1,3,5],3))
console.log(max([1,5,2],2))