/* Given a string, find the longest substring without repeating chars */

function longest1(s) {
  let longestArr = [];
  let count = 0;
  let finalCount = 0;
  if (!s.length) return 0;
  for (let i = 0; i < s.length; i++) {
    if (longestArr.includes(s[i])) {
      finalCount = Math.max(count, finalCount);
      longestArr = [];
      longestArr.push(s[i]);
      count = 1;
    } else {
      count++;
      longestArr.push(s[i]);
    }
  }
  return count;
}
console.log(longest1("abcbdauc"));

//the one above has a bug

const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {},
      currentLength = 0;

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];

      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }

  return longest;
};
