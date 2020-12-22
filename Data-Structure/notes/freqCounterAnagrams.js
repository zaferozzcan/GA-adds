/* 
    Given two strings, write a function to determine if the second sring is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema", formed from "icemen"
*/

function validAnagram(str1, str2) {
  let freqCounter1 = {};
  let freqCounter2 = {};
  //   check if the length of string is the same
  if (str1.length !== str2.length) {
    return false;
  }

  for (var char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (var char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
  for (var key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram("cinema", "iceman"));

// SECOND SOLUTION

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // fq1 short for frequencyCounterStr1
  let fq1 = {};
  for (var char of str1) {
    fq1[char] ? (fq1[char] += 1) : (fq1[char] = 1);
  }

  for (var i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!fq1[char]) {
      return false;
    } else {
      fq1[char] -= 1;
    }
  }
  return true;
}

console.log("check", checkAnagram("zafere", "refaza"));
