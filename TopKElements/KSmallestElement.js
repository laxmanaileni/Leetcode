
//Time Complexity O(klogk+(nums.length-k)logk) == O(Nlogk)
const SmallestNumber=(nums,k)=>{
let maxQueue=new MaxPriorityQueue(k);

for(let num of nums){
    if(maxQueue.size()<k){
        maxQueue.enqueue(num)
    }else{
        if(maxQueue.front().element>num){
            maxQueue.dequeue();
            maxQueue.enqueue(num)
        }
    }
}
return maxQueue.dequeue().element;
}

console.log(SmallestNumber([3, 2, 1, 5, 6, 4], 2));