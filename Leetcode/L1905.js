/* Number of Islands */
/*
Run a nested for loop and if you find land then traverse all direction by making note of visited nodes
Time=O(rows*col)=Space
*/

const islandCount = (grid1, grid2) => {
    var m = grid2.length;
    var n = grid2[0].length;
    var subIslands = 0;
    
    function dfs(r,c) {
        if(r<0 || c<0 || r>=m || c>=n || grid2[r][c] !== 1) return;
        grid2[r][c] = 2;
        if(grid1[r][c] !== 1) potentialSub = false;
        dfs(r-1,c);
        dfs(r+1,c);
        dfs(r,c-1);
        dfs(r,c+1);
    }    
    
    for(var r=0; r<m; r++) {
        for(var c=0; c<n; c++) {
            if(grid2[r][c] === 1) {
                var potentialSub = true;
                dfs(r,c);
                if(potentialSub) subIslands++;
            }
        }
    }
    return subIslands;
};

const grid1 = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
];
const grid2 = [
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
];

console.log(islandCount(grid1, grid2)); //3

console.log(
  islandCount(
    [
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
    ],
    [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ]
  )
); //2
