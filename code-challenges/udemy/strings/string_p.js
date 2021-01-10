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
  console.log(cleanS, cleanT);
  if (cleanS.length !== cleanT.length) return false;
  for (let j = 0; j < cleanT.length; j++) {
    if (cleanT[j] !== cleanS[j]) {
      return false;
    }
  }
  return true;
}

console.log(checkSame("z##b", "za#f"));
