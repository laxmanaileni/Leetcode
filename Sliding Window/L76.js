// var minWindow = function (s, t) {
//     const freq = {};
//     let counter = 0; // remoaining matching count
//     let minLen = 0, start = 0; // substring len, start idx
//     let l = 0, r = 0; // 2 pointers

//     for(let c of t) {
//         if(!freq[c]) {
//             counter++;
//             freq[c] = 1;
//         } else freq[c]++;
//     }

//     while(r < s.length) {
//         if(freq[s[r]] !== undefined) {
//             freq[s[r]]--;
//             if(!freq[s[r]]) counter--;
//         }
//         console.log(freq)
//          when valid substr shrink the window
//         while(!counter) {
//             if(!minLen || r-l+1 < minLen) {
//                 minLen = r-l+1;
//                 start = l;
//             }
//             if(freq[s[l]] !== undefined) {
//                 if(!freq[s[l]]) counter++; // becomes invalid
//                 freq[s[l]]++;
//             }
//             l++;
//         }
//         r++;
//     }
//     return s.slice(start, start+minLen);
// };

// console.log(minWindow("ADOBECODEBANC", "ABC")); //BANC
// console.log(minWindow("a", "a"));//a
// console.log(minWindow("a", "aa"));//

/*
var minWindow = function (s, t) {
    const freq = {};
    let counter = 0; // remoaining matching count
    let minLen = 0, start = 0; // substring len, start idx
    let l = 0, i = 0; // 2 pointers

    for(let i=0;i<t.length;i++) {
        if(!freq[t[i]]) {
            counter++;
            freq[t[i]] = 1;
        } else freq[t[i]]++;
    }
    // console.log(freq)
    
   for(let i=0;i<s.length;i++){
       if(freq[s[i]] !== undefined){
           freq[s[i]]--;
           if(!freq[s[i]]) counter--;
       }
       console.log(counter)
       while(!counter){ //when counter=0
           if(!minLen || i-l+1<minLen){
               minLen = i-l+1;
               start=l;
           }
           if(freq[s[l]] !== undefined){
               if(!freq[s[l]]) counter++;       
            freq[s[l]]++
               
           }
           l++
       }
   }
    return s.slice(start,start+minLen)
};
*/

//Practice
//*TODO Tough revise once again
var minWindow = function (s, t) {
  let map = {},
    count = 0,
    minLen = 0,
    start = 0,
    left = 0;

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      map[t[i]] = 0;
      count++;
    }
    map[t[i]]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]]--;
      if (map[s[i]] === 0) count--;
    }

    //Shrink
    while (!count) {
      if (!minLen || minLen > i - left + 1) {
        minLen = i - left + 1;
        start = left;
      }
      if (map[s[left]] !== undefined) {
        if (map[s[left]] === 0) count++;
        map[s[left]]++;
      }
      left++;
    }
  }
  return s.slice(start, start + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC")); //BANC
console.log(minWindow("a", "a")); //a
console.log(minWindow("a", "aa")); //
