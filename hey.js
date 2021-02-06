// picture = ["abc", "ded"];

// // function addBorder(picture) {
// //   let borderLen = picture[0].length + 2;
// //   let top = "*".repeat(borderLen);
// //   let bottom = "*".repeat(borderLen);

function arrayChange(inputArray) {
  let count = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      let diff = inputArray[i - 1] - inputArray[i] + 1;
      inputArray[i] += diff;
      count += diff;
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
