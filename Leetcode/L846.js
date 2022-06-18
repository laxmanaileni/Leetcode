var isNStraightHand = function (hand, groupSize) {
    let map={},res=[];
hand.sort((a,b)=>a-b)
    for(let i=0;i<hand.length;i++){
        if(map[hand[i]]!==undefined){
            map[hand[i]]++;
        }else{
            map[hand[i]]=1;
        }
    }
   console.log(map)
let result=[]
   for(let i=0;i<hand.length;i++){
    if(hand[i]===hand[i+1]){
        continue
    }
    if(map[hand[i]]!==undefined  ){
        result.push(hand[i]);
        map[hand[i]]--;
        if( map[hand[i]]===0){
            delete  map[hand[i]]
        }
    }
   }
   console.log(map,result)
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
