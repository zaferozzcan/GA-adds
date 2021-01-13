/* Given a string, find the longest substring without repeating chars */
function longest(S) {
  let longest = [];
  let count = 0;
  let finalCount = 0;
  for (let i = 0; i < S.length; i++) {
    if (!S.length) return 0;
    if (longest.includes(S[i])) {
      finalCount = Math.max(finalCount, count);
      console.log("longest", longest);
      longest = [];
      longest.push(S[i]);
      count = 0;
      count++;
    } else {
      console.log("count", count);
      longest.push(S[i]);
      count++;
    }
  }
  return finalCount;
}

console.log(longest("abccbaa"));
