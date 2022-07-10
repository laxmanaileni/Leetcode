class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//* Instances of Node
const a = new Node(1);
const b = new Node(2);
const c = new Node(4);
const d = new Node(1);
const e = new Node(3);
const f = new Node(4);
//list1
a.next = b;
b.next = c;
//list2
d.next = e;
e.next = f;

var mergeKLists = function (lists) {
  //* Iterate two linked list at a time to MergeTwoLinkedLists
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    const merge = mergeTwoLists(a, b);
    lists.push(merge);
  }
  return lists[0];
};

var mergeTwoLists = function (list1, list2) {
  //* Merge two linked list
  let head = new Node(null); // Empty List
  let current = head;
  while (list1 && list2) {
    // If two list are not null
    if (list1.val < list2.val) {
      // If list1 has less value then add to list and increment list1
      current.next = list1;
      list1 = list1.next;
    } else {
      // If list2 has less or equal value then add to list and increment list2
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next; // Increment main list
  }
  current.next = list1 || list2; // Add the remaining list
  return head.next;
};
/**
     * [[1,4,5],[1,3,4],[2,6]]
       []
       [[]]
       [[0,2,5]]
     * 
     */
