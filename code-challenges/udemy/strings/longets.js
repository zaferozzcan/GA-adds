/* Given a string, find the longest substring without repeating chars */

function longest1(s) {
  let longestArr = [];
  let count = 0;
  let finalCount = 0;
  if (!s.length) return 0;
  for (let i = 0; i < s.length; i++) {
    if (longestArr.includes(s[i])) {
      console.log(finalCount);
      finalCount = Math.max(count, finalCount);
      longestArr = [];
      longestArr.push(s[i]);
      count = 1;
    } else {
      count++;
      longestArr.push(s[i]);
    }
  }
  return finalCount;
}

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
//time(o(n^2))
//space(o(1))

// OPTIMIZATION

const lengthOfLongestSubstringOptim = function (s) {
  if (s.length <= 1) return s.length;

  const seen = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];

    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

// console.log(lengthOfLongestSubstringOptim(string));
