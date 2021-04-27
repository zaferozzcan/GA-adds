class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length++; //
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current.next;
    while (current.next) {
      var newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail == null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      this.length++;
    }
    return this;
  }
  get(index) {
    if (index < 0 || this.length == 0) return null;
    let counter = 0;
    let current = this.head;
  }
}

let myList = new SinglyLinkList();
myList.push(10);
myList.push(20);
myList.push(30);
myList.push(40);
myList.shift();
myList.unshift(10);
console.log(myList);
