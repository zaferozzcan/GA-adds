/*
Nodes are the fundamental building blocks of many computer science data structures. They form the basis for linked lists, stacks, queues, trees, and more.
It is a data structure contains a head, tail and length property.

-Singly link lists are excellent alternatives to arrays when insertion and deletion at the beginning that are frequently required
-Arrays contain a built in index where as linked lists do not 
-The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Quesues
-

Big o
insertation - O(1)
removal - it depends where we are removing from if removing from beggining O(1), the worst case O(n).
searching O(n)
access O(n)


Both Arrays and Linked List can be used to store linear data of similar types, but they both have some advantages and disadvantages over each other. 


1. An array is the data structure that contains a collection of similar type data elements whereas the Linked list is considered as a non-primitive data structure contains a collection of unordered linked elements known as nodes. 
2. In the array the elements belong to indexes, i.e., if you want to get into the fourth element you have to write the variable name with its index or location within the square bracket while in a linked list though, you have to start from the head and work your way through until you get to the fourth element. 
3. Accessing an element in an array is fast, while Linked list takes linear time, so it is quite a bit slower. 
4. Operations like insertion and deletion in arrays consume a lot of time. On the other hand, the performance of these operations in Linked lists are fast. 
5. Arrays are of fixed size. In contrast, Linked lists are dynamic and flexible and can expand and contract its size. 
6. In an array, memory is assigned during compile time while in a Linked list it is allocated during execution or runtime. 
7. Elements are stored consecutively in arrays whereas it is stored randomly in Linked lists. 
8. The requirement of memory is less due to actual data being stored within the index in the array. As against, there is a need for more memory in Linked Lists due to storage of additional next and previous referencing elements. 
9. In addition memory utilization is inefficient in the array. Conversely, memory utilization is efficient in the linked list. 


Link lists consost of nodes, and each node has a value a nd pointer to another node or null.
to do list for making link list
    -

*/
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
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail === null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var myList = new SinglyLinkList();

myList.push("Hello");
myList.push("Zafer");
myList.push("Ozcan");
myList.set(2, "NewOzcan");
// console.log(myList);

/*

            IMPLEMENTATION

*/
/*
adding PUSH method to singly data structure
This function should accept a value
create new node using the value passed to the function 
if there is no head in the property on the list, set the head and tail to be the newly created node
otherwise set the newly created property on the tail to be the new node and set the tail property on the list to be newly created node
increment length by one

implementation
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
*/

/*
POP METHOD of the linked list
Removing a node from the end of the list
-pseudo
if there are no nodes in the list, return undefined
loop through the list until you reach the tail
set the next property of the second to last node to be null
devrement the lenghth of the list by 1
return the value of the node removed

 pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
*/

/*
  SHIFTING the node at the begining of the list
  if there is no node return undefined 
  sthore the current head property in a variable 
  set the head property to be the current head's next
  property
  decrement the length by 1
  return the value of the node removed
 */

/*
 Unshift
 Adding a new node to the beggining of the Linked List!
 this function should accept a value
 create a nee node 
 if there is no head property on the list, set the head and tail to be the newly created node. 
 otherwise set the newly created nod's next property to be  the current head propert on the list 
 set the head property on the list to be that newly created node 
 increment the length of the list by 1 
 return the linked list
 */

/*
GET Method
Retrieving a node by it's position in the Linked list!
This function should accept an index
if the index less than zero or greater than or equal to the length of the list, return null
Loop through the list until you reach the index and return the node at the spesific index
*/

/*
SET Method
Changing the value of a node based on it's possition in the linked list

This function accepts a value and an index
User get function to find the spesific node
if the node is not found, return false
if the node is found, set the value of that node to be the value passed to the function and return true

*/

/*
INSERT Method
If the index is less than zero or greater  than the length, return false
If the index is the same as th length, push a new node to the end of the list
if the index i 0, unshift a new node to the start of the list
otherwise, using the GET method, access the node at the index -1
set the next property on that node to be new node
set the next property on the new node to be the previous next 
increment the length
return true

 */
/*
 REMOVE Method Pseudo 
 if the index is less than zero or greater than the length return undefined 
 if the index is the same as the length - 1, use POP method
 if the index is 0, shift
 otherwise, using the GET Method, access the node at the index - 1
 set the next property on that node to be the next of the next node
 decrement the length
 return the value of the node removed
  */
/*
REVERSE Method
Swap the head and the tail
create variable called next 
create variable cllled prev
create a variable called node and initialze it to the head property
loop through the list 

*/

// Practices \\

class MyNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Singly {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newValue = new Node(val);
    if (!this.head) {
      this.head = newValue;
      this.tail = this.head;
    } else {
      this.tail.next = newValue;
      this.tail = newValue;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
  }
}

const myList1 = new Singly();

myList1.push(1);
myList1.push(2);
myList1.push(3);
myList1.pop();
console.log(myList1);

class Nodes {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Nodes || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
  }
}

const strawberryNode = new Nodes("Berry Tasty");

const vanillaNode = new Nodes("Vanilla");

const coconutNode = new Nodes("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);

strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

while (currentNode) {
  console.log(currentNode);
  currentNode = currentNode.next;
}

module.exports = Node;
