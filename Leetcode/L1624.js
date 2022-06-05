var maxLengthBetweenEqualCharacters = function(s) {
    let map={},max=-1;
    for(let i=0;i<s.length;i++){
        if(map[s[i]] !== undefined){
                     max=Math.max(max,i-map[s[i]]-1) 
       
        }else{
            map[s[i]]=i
        }
    }
    return max
}

console.log(maxLengthBetweenEqualCharacters("abca"))