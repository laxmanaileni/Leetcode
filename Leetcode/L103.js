var ZigZagLevelOrder = function (root) {
  //O(N)
  if (!root) {
    return [];
  }
  let result = [];
  let queue = [];
  queue.push(root);
  let count = 0;
  while (queue.length) {
    let len = queue.length,
      level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (count % 2 === 0) {
      result.push(level);
      count++;
    } else {
      result.push(level.reverse());
      count++;
    }
  }
  return result; //[ [ 12 ], [ 1, 7 ], [ 9, 10, 5 ], [ 17, 20 ] ]
};

/*
  var ZigZagLevelOrder = function (root) {
    if (!root) {
      return [];
    }
    let result = [];
    let queue = [];
    queue.push(root);
    let count = 0;
    while (queue.length) {
      let len = queue.length,
        level = [];
      for (let i = 0; i < len; i++) {
        let node = queue.shift();
        if (count % 2 === 0) {
          level.push(node.val);
        } else {
          level.unshift(node.val);
        }
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      count++;
      result.push(level);
    }
    return result;//[ [ 12 ], [ 1, 7 ], [ 9, 10, 5 ], [ 17, 20 ] ]
  };
  */
