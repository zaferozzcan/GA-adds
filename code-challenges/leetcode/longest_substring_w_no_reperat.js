// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// go over each string
// concat every item until it repeats one of those before
// try to catch seq

function getLenSub(s) {
  let seq = "";
  let goneOver = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (i == 1) {
      seq = seq + s[0];
    }
    if (!goneOver.includes(s[i])) {
      seq = seq + s[i];
      goneOver.push(s[i]);
    }
    console.log(seq);
  }
}
