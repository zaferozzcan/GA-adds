let str = "abcabcbb";

function lengthOfLongestSubstring(s) {
  let mySet = new Set();
  let left = 0;
  let right = 0;
  let maxSubArrLen = 0;

  while (right < s.length) {
    if (!mySet.has(s.charAt(right))) {
      mySet.add(s.charAt(right));
      maxSubArrLen = Math.max(maxSubArrLen, mySet.size);
      right++;
    } else {
      mySet.delete(s.charAt(left));
      left++;
    }
  }
  return maxSubArrLen;
}
