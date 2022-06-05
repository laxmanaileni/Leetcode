var minimumTotal = function (triangle) { //not solved
    let Totalmin = 0;
    let index=0;
    for (let i = 0; i < triangle.length; i++) {
      if(triangle[i][index]>triangle[i][index+1]){
          min=triangle[i][index+1]
          index=index+1
      }else{
          min=triangle[i][index]
          index=index
      }
      Totalmin = Totalmin + min;
    }
    return Totalmin;
  };
  
  console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
  console.log(minimumTotal([[-10]]));
  