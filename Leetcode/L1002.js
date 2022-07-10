var commonChars = function(A) {
    if (A.length <= 1) return [];
    let res = helper(A[0], A[1]);
    
    for (let i = 2; i < A.length; i++) {
      res = helper(res, A[i]);
    }
    return res.split('');
  };
  
  // Helper function returns character intersecations as a string
  const helper = (str1, str2) => {
    let result = '';
    let map = {};
    
    for (let char of str1) {
      if (!map[char]) {
        map[char] = 1;
      } else {
        map[char]++;
      }
    }
    
    for (let char of str2) {
      if (map[char]) {
        result += char;
        map[char]--;
      }
    }
    return result;
  }

console.log(commonChars(["bella", "label", "roller"]));
