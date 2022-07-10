var merge = function (intervals) {
let result=[],start=0,end=1;
let prev=intervals[0]
result.push(prev)
for(let interval of intervals){
if(interval[start]<=prev[end]){
prev[end]=Math.max(prev[end],interval[end])
}else{
    result.push(interval);
    prev=interval
}
}
return result
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
