// let numbers = [1, 2, 1, 3, 4];

// function isZigzag(numbers) {
//   let final_arr = [];
//   for (let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[i] > numbers[i - 1]) {
//       if (numbers[i] >= numbers[i + 1]) {
//         final_arr.push(1);
//       } else {
//         final_arr.push(0);
//       }
//     } else if (numbers[i] < numbers[i - 1]) {
//       if (numbers[i] <= numbers[i + 1]) {
//         final_arr.push(1);
//       } else {
//         final_arr.push(0);
//       }
//     }else{
//         final_arr.push(0)
//     }
//   }
//   return final_arr;
// }

// console.log(isZigzag(numbers));

// function binaryPatternMatching(pattern, s) {
//   let vovelList = ["a", "e", "i", "o", "u", "y"];
//   let binary_string = "";
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     binary_string += vovelList.includes(s[i]) ? "0" : "1";
//   }
//   let left = 0;
//   let right = pattern.length;
//   while (right <= s.length) {
//     if (pattern == binary_string.slice(left, right)) count++;
//     left++;
//     right++;
//   }
//   return count;
// }

// console.log(binaryPatternMatching("010", "amazing"));

let inputArray = [2, 4, 1, 0];
function arrayMaximalAdjacentDifference(inputArray) {
  let max = 0;
  for (let i = 1; i < inputArray.length; i++) {
    max = Math.max(max, Math.abs(inputArray[i] - inputArray[i - 1]));
  }
  return max;
}

console.log(arrayMaximalAdjacentDifference(inputArray));
