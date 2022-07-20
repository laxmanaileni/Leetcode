class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
const BFS=(root)=>{
if(root === null)return [];

let queue=[root],result=[];

while(queue.length>0){
    let current=queue.shift();
    console.log(current.value);
    result.push(current.value)
    if(current.left) queue.push(current.left)
    if(current.right) queue.push(current.right)
}
return result;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(BFS(a));

