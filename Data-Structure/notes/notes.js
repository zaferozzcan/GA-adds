// Data structure allows up to talk about how the runtime of an algorithm grows  as the imput grows

// we sat that an algorithm if O(f(n)) if the number of simple operations the computer has to di is eventually less than a constant times f(n) as n increases!
// -- (fn) could be linear --(fn)=n, quadratic (fn)==n2, constant (fn)==1

//  when we talk about Big o we always talk about the worst time senerio!

function add(n) {
  return (n + 1) / 2; // there will be always 3 operations regardless number of n//
  //O(1)
}

function addUp(n) {
  var total = 0;
  for (var i = 0; i < n; i++) {
    // however in this function, while n grow, number of operation grows so, there is linear relationsip! O(n)
    total = +i;
  }
  return total;
}

function addUpUp() {
  for (var i = 0; i < n; i++) {
    console.log("going up");
  }
  for (let j = n - 1; j > 0; j--) {
    // notice that number of  as n grows fist loop grows, as well as second loop grows so ther are two O(n) has to be considered!
    console.log("downward");
  }
}
