/* We use naive string searching alorithm while we are looking for subs strings of a string 

For Example, suppose we want to count the number of times a smaller string appears in a longer string
-- a straight forward approach involves checking pairs of characters individually

Pseudo code
--loop over the longer string
--loop over the shortest string
--if the characters do not match,break out of the inner loop
--if the character do match, keep going

CHECK THE EXAMPLE BELOW
*/

function naiveSearch(long, short) {
  var count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lo"));
