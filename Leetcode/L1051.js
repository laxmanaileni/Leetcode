var heightChecker = function(heights) {
    let expected=[],count=0;
       for(let i=0;i<heights.length;i++){
         expected[i]=heights[i]
      }
      expected.sort((a,b)=>a-b);
      //console.log(expected,heights)
      for(let i=0;i<heights.length;i++){
         if(heights[i] !==expected[i]) {count++}
      }
      return count;
  };