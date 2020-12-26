/*
It is a data structure contains a head, tail and length property.

Link lists consost of nodes, and each node has a value a nd pointer to another node or null.


to do list for making link list
    -


*/
class node {
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
}
