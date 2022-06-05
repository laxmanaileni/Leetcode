var secondHighest = function(s) {
    let map={},array=[]
    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i]) && !map[s[i]]){
            array.push(s[i])
            map[s[i]]=1;
         
        }
    }
    array.sort((a,b)=>b-a)
    if(array.length<=1){
        return -1;
    }
    return array[1];
};

console.log(secondHighest("dfa12321afd"))