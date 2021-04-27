// Is Every Chat Unique?

function isEveryCharUnique(str) {
  let charSet = new Set(str.split(""));
  return charSet.size == str.length ? true : false;
}

// console.log(isEveryCharUnique("abcdee"));

// ==================================================================================

function checkPerm(first, second) {
  // check if thelength is equal
  if (first.length !== second.length) return false;
  // check the char
  let sortedFirst = first.split("").sort().join("");
  let sortedSecond = second.split("").sort().join("");
  return sortedFirst == sortedSecond ? true : false;
}

function checkPerm1(first, second) {
  let charCodeArr = [];
  if (first.length !== second.length) return false;
  [first, second].map((item) => {
    let sumCharCode = 0;
    for (let i = 0; i < item.length; i++) {
      sumCharCode += item.charCodeAt(i);
    }
    charCodeArr.push(sumCharCode);
  });
  return charCodeArr[0] == charCodeArr[1];
}

// console.log(checkPerm1("aba", "aab"));

// ==================================================================================
