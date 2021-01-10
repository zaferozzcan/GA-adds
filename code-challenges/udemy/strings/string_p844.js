//  Given two strings s AND t, return if they equal when both are typed out. Any, "#" that appears in the string counts as backspace

function checkSame(s, t) {
  if (typeof s !== "string" || typeof t !== "string") return false;
  let cleanS = "";
  let cleanT = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "#") {
      cleanS = cleanS.slice(0, -1);
    } else {
      cleanS += s[i];
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "#") {
      cleanT = cleanT.slice(0, -1);
    } else {
      cleanT += t[i];
    }
  }
  cleanT = cleanT.toLowerCase();
  cleanS = cleanS.toLowerCase();
  console.log(cleanS, cleanT);
  if (cleanS.length !== cleanT.length) return false;
  for (let j = 0; j < cleanT.length; j++) {
    if (cleanT[j] !== cleanS[j]) {
      return false;
    }
  }
  return true;
}

console.log(checkSame("zA#f", "Za#f"));

// sticking to DRY Principle more

const buildString = function (string) {
  const builtString = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      builtString.push(string[p]);
    } else {
      builtString.pop();
    }
  }

  return builtString;
};

var backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }

  return true;
};

console.log(backspaceCompare(string1, string2));

// OPTIMIZE SOLUTION

const string1 = "ab#z";
const string2 = "az#z";

var backspaceCompareOptim = function (S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p1--;
          backCount--;

          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }

      if (T[p2] === "#") {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;

          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};

console.log(backspaceCompareOptim(string1, string2));
