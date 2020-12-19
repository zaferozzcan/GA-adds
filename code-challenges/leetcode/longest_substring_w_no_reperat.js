// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// go over each string
// concat every item until it repeats one of those before
// try to catch seq

// function getLenSub(s) {
//   let maxSeq = "";
//   let subSeq = "";
//   let maxLen = 0;
//   let mainIndex = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (i == 0) {
//       subSeq = subSeq + s[i];
//       maxLen++;
//     } else {
//       if (s[i] != subSeq[mainIndex]) {
//         console.log(subSeq);
//         subSeq = subSeq + s[i];
//         maxLen++;
//       } else {
//         mainIndex++;
//         maxLen = subSeq.length;
//         subSeq = "";
//       }
//     }
//   }
//   console.log(maxLen);
// }

// getLenSub("abcabk");

console.log(!!!true);
