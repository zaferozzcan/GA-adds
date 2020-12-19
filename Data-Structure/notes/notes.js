// Data structure allows up to talk about how the runtime of an algorithm grows  as the imput grows (Big O's Time  complexity) -- i will touch on Space coplexity below!

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

function addUpUp() {
  for (var i = 0; i < n; i++) {
    for (let j = n - 1; j > 0; j--) {
      console.log("downward"); // notice this here if n grows number of operation grow in the rate of n^2
    }
  }
}

// When we are analyzing the Big O, we are not spesificatly looking at number of operations, --are anly looking at the general trend
// O(2n) = trend is still O(n)
// O(500) = trend is still O(1)
//  O(13n^2) = trend is still O(n^2)
// O(n^2 + 5n + 8 ) trend is still n^2

////////////////////////////////////////////
////////// Space Complexity/////////////////
////////////////////////////////////////////

// We can use Big O to measure space complexity of an algorithm as we did for the time comlexity
// We will focus on the term-- "auxiliary space complexity" to refer to space required by the algorithm, ot including space taken up by the inputs.

//////-------------------////////
//Rule of thumps
// Most primitives like booleans, numbers, undefined, null are constant space O(1) space
// String require O(n) space(where n is the string length)
// Reference types are generally O(n) space, where n is the length of for arrays, or the number of the keys of an objects
