let inputArray = ["aba", "aa", "ad", "vcd", "aba"];

function allLongestStrings(inputArray) {
  let longestStringArray = [];
  let longestLength = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestStringArray = [];
      longestLength = inputArray[i].length;
      longestStringArray.push(inputArray[i]);
    } else if (inputArray[i].length == longestLength) {
      longestStringArray.push(inputArray[i]);
    }
  }
  return longestStringArray;
}

console.log(allLongestStrings(inputArray));
