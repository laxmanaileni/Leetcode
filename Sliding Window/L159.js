//Given a string s, return the length of the longest substring that contains at most two distinct characters.

var lengthOfLongestSubstringTwoDistinct = function(s) {
    let maxLen=0,start=0;
    let map={};
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=0
        }
        map[s[i]]+=1;
        while(Object.keys(map).length >2){
            map[s[start]]-=1;
            if(map[s[start]]===0){
                delete map[s[start]];
            }
            start+=1;
        }
        maxLen=Math.max(maxLen,i-start+1)
    }
    return maxLen;
};

console.log(lengthOfLongestSubstringTwoDistinct("eceba"))
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"))