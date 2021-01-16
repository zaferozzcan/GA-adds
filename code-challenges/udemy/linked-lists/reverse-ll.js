/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// // ---- Generate our linked list ----
// const linkedList = [5, 4, 3, 2, 1].reduce(
//   (acc, val) => new ListNode(val, acc),
//   null
// );

// // ---- Generate our linked list ----

// const printList = (head) => {
//   if (!head) {
//     return;
//   }

//   console.log(head.val);
//   printList(head.next);
// };

// // --------- Our solution -----------

// var reverseList = function (head) {
//   let prev = null;
//   let current = head;
//   while (current) {
//     let nextTemp = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextTemp;
//     console.log(current);
//   }
//   return prev;
// };

// printList(linkedList);
// console.log("after reverse");
// printList(reverseList(linkedList));

// create a node takes val and next val

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class myList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      // IF THE HEAD IS EMPTY
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
