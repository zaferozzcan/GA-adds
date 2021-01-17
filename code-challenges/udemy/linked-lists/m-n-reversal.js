// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class singlyLinkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }
//   print() {
//     var arr = [];
//     var current = this.head;
//     while (current) {
//       arr.push(current.val);
//       current = current.next;
//     }
//     console.log(arr);
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   pop() {
//     if (!this.head) return undefined;
//     current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//   }
// }

// const myList = new singlyLinkedList();

// myList.push(1);
// myList.push(2);
// myList.push(3);
// console.log(myList);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  pop() {
    if (!this.head) return undefined;
    current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
  }
}

let myList = new LinkedList();

myList.push(1);
myList.push(2);
console.log(myList.pop());
