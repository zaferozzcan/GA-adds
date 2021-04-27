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

// URLlify

function urlify(str) {
  let output = "";
  str
    .trim()
    .split("")
    .map((item) => {
      if (item == " ") {
        output += "%20";
      } else output += item;
    });
  return output;
}

// console.log(urlify("Sai Charan P"));

// ===================================================================================
function palinPerm(str) {
  str = str.split(" ").join("").toLowerCase();
  console.log(str);
  let freq = {};

  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] | 0) + 1;
  }
  let count = 0;
  for (let key in freq) {
    if (freq[key] % 2 !== 0) {
      if (count > 0) return false;
      count++;
    }
  }
  return true;
}
// console.log(palinPerm("Tact Coa"));

// =================================================================================================

function oneAway(str1, str2) {
  let differenceCounter = 0;
  function freqCounter(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
      freq[str[i]] = (freq[str[i]] | 0) + 1;
    }
    return freq;
  }
  let freqStr1 = freqCounter(str1);
  let freqStr2 = freqCounter(str2);
  for (let key in freqStr1) {
    if (freqStr1[key] !== freqStr2[key]) {
      differenceCounter++;
      if (differenceCounter > 1) return false;
    }
  }
  return true;
}

// console.log(oneAway("pale", "bale"));
// console.log(oneAway("pale", "bake"));

// =================================================================================================

function strComp(str) {
  let output = "";
  let freqCounter = 1;
  let currentChar = str[0];
  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] !== currentChar) {
      output += `${currentChar}${freqCounter}`;
      freqCounter = 1;
      currentChar = str[i];
    } else {
      freqCounter++;
    }
  }
  return output;
}

// console.log("aabcccccaaa", strComp("aabcccccaaa"), "a2b1c5a3");

// =================================================================================================

// Remove Dups
function remDups(arr) {
  let set = new Set(arr);
  return [...set];
}

console.log(remDups("hello there hello hello".split(" ")));
