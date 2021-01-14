// test case  = A man, a plan, a canal: Panama

//before apply the solution, lets practice on regex
let myString = "aBc--dfg";

myString = myString.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

console.log(myString);
//
var validPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

var validSubPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome("rAce car"));
