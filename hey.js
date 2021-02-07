// picture = ["abc", "ded"];

// // function addBorder(picture) {
// //   let borderLen = picture[0].length + 2;
// //   let top = "*".repeat(borderLen);
// //   let bottom = "*".repeat(borderLen);

function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let diff = inputArray[i] - inputArray[i + 1] + 1;
    inputArray[i + 1] += diff;
    count += diff;
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
