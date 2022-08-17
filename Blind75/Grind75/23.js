// https://leetcode.com/problems/merge-k-sorted-lists/

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    //Perform merging of two sorted linked lists here
    let merge = mergeTwoLinkedLists(a, b);
    lists.push(merge);
  }
  //All merged to one single linked list
  return lists[0];
};

const mergeTwoLinkedLists = (list1, list2) => {
  let head = new ListNode(null);
  let current = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  return head.next;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
