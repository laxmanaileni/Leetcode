var findMaxValueOfEquation = function(points, k) {
   // console.log(points[0][0],points[0][1])
   let max = 0;
   let count=0;
    for(let i=0;i<points.length-1;i++){
        let [xa,ya]=points[i];
         let [xb,yb]=points[i+1];
         
         let diffAbs=Math.abs(xa-xb)
         //console.log(xa,ya,xb,yb,diffAbs)
         if(diffAbs<=k){
            if(count===0){
                max=ya+yb+diffAbs
                console.log(max)
                count++;
            }else{
                max=Math.max(max,ya+yb+diffAbs);
                console.log(max)
            }
             
         }
       
    }
    return max;
};

// console.log(findMaxValueOfEquation([[1,3],[2,0],[5,10],[6,-10]],1))
// console.log(findMaxValueOfEquation([[0,0],[3,0],[9,2]],3))
// console.log(findMaxValueOfEquation([[-19,9],[-15,-19],[-5,-8]],10))//-6
// console.log(findMaxValueOfEquation([[-17,5],[-10,-8],[-5,-13],[-2,7],[8,-14]],4)) //-3
console.log(findMaxValueOfEquation([[-19,-12],[-13,-18],[-12,18],[-11,-8],[-8,2],[-7,12],[-5,16],[-3,9],[1,-7],[5,-4],[6,-20],[10,4],[16,4],[19,-9],[20,19]],6)) //35