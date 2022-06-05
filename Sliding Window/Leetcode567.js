var checkInclusion = function (s1, s2) {
  let start = 0;
  let mapPattern = {};
  let mapString = {};

  for (let i = 0; i < s1.length; i++) {
    if (!mapPattern[s1[i]]) {
      mapPattern[s1[i]] = 0;
    }
    mapPattern[s1[i]] += 1;
  }
  for (let i = 0; i < s2.length; i++) {
    if (!mapString[s2[i]]) {
      mapString[s2[i]] = 1;
    } else {
      mapString[s2[i]] += 1;
    }
    while (i - start + 1 > s1.length) {
      if (mapString[s2[start]] === 1) {
        delete mapString[s2[start]];
      } else {
        mapString[s2[start]] -= 1;
      }
      start += 1;
    }
    let mapSortedP = Object.entries(mapPattern).sort();
    let mapSortedS = Object.entries(mapString).sort();
    console.log(JSON.stringify(mapPattern), JSON.stringify(mapSortedP));
    if (JSON.stringify(mapSortedS) === JSON.stringify(mapSortedP)) {
      return true;
    }
  }
  return false;
};

// console.log(checkInclusion("abc", "oidbcaf")); //TRUE
// console.log(checkInclusion("dc", "odicf")); //FALSE
// console.log(checkInclusion("bcdyabcdx", "bcdxabcdy")); //TRUE
// console.log(checkInclusion("abc", "aaacb")); //TRUE
// console.log(checkInclusion("hello", "ooolleoooleh")); //FALSE
// console.log(checkInclusion("adc", "dcda")); //TRUE
// console.log(checkInclusion("ab", "eidboaoo")); //FALSE
//console.log(checkInclusion("ab", "eidbaooo")); //TRUE

const Anagrams = (p, s) => {
  let start = 0,
    count = p.length;
  let map = {};
  for (let i = 0; i < p.length; i++) {
    if (!map[p[i]]) {
      map[p[i]] = 1;
    } else {
      map[p[i]] = map[p[i]] + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > 0) count--;
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]] = map[s[i]] - 1;

    if (count === 0) return true;
    if (i - start + 1 >= p.length) {
      if (map[s[start]] >= 0) count++;
      if (!map[s[start]]) {
        map[s[start]] = 0;
      }
      map[s[start]] += 1;
      start += 1;
    }
  }
  return false;
};

console.log(Anagrams("abc", "oidbcaf")); //TRUE
console.log(Anagrams("dc", "odicf")); //FALSE
console.log(Anagrams("bcdyabcdx", "bcdxabcdy")); //TRUE
console.log(Anagrams("abc", "aaacb")); //TRUE
console.log(Anagrams("hello", "ooolleoooleh")); //FALSE
console.log(Anagrams("adc", "dcda")); //TRUE
console.log(Anagrams("ab", "eidboaoo")); //FALSE
console.log(Anagrams("ab", "eidbaooo")); //TRUE
