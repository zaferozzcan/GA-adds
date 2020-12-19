// Data structure allows up to talk about how the runtime of an algorithm grows  as the imput grows

function addUp(n) {
  var total = 0;
  for (var i = 0; i < n; i++) {
    total = +i;
  }
  return total;
}

// we sat that an algorithm if O(f(n)) if the number of simple operations the computer has to di is eventually less than a constant times f(n) as n increases!
// -- (fn) could be linear --(fn)=n, quadratic (fn)==n2, constant (fn)==1
