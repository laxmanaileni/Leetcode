//Minimum Window Substring

var minWindow = function (s, t) {
  let start = 0,
    left = 0,
    minLen = 0,
    map = {},
    counter = 0;

  for (let i = 0; i < t.length; i++) {
    //Store t in HashMap
    if (map[t[i]] !== undefined) {
      map[t[i]]++;
    } else {
      map[t[i]] = 1;
      counter++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      // Check S in HashMap if found and value is 0 then counter --
      map[s[i]]--;
      if (!map[s[i]]) counter--;
    }
    while (!counter) {
      // If counter is 0 then shrink the window
      if (minLen > i - left + 1 || !minLen) {
        //Caliculate the min length of sub array
        minLen = i - left + 1;
        start = left;
      }
      if (map[s[left]] !== undefined) {
        // Shrink elements are in t HashMap then increase the counter
        if (!map[s[left]]) counter++;
        map[s[left]]++;
      }
      left++;
    }
  }
  return s.slice(start, start + minLen); //Return start to start+MinLength
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
