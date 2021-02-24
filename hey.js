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

// let inputArray = [2, 4, 1, 0];
// function arrayMaximalAdjacentDifference(inputArray) {
//   let max = 0;
//   for (let i = 1; i < inputArray.length; i++) {
//     max = Math.max(max, Math.abs(inputArray[i] - inputArray[i - 1]));
//   }
//   return max;
// }

// console.log(arrayMaximalAdjacentDifference(inputArray));

// function isIPv4Address(inputString) {
//   let splittedInput = inputString.split(".");
//   console.log();
//   for (let i = 0; i < splittedInput.length; i++) {
//     if (splittedInput[i] == "") return false;
//     if (!(Number(splittedInput[i]) >= 0 && Number(splittedInput[i]) <= 255)) {
//       return false;
//     }
//   }
//   return true;
// }

// // console.log(isIPv4Address(".16.254.1"));

// let a = [8, 5, 6, 16, 5];
// let l = 1;
// let r = 3;
// function boundedRatio(a, l, r) {
//   let final_array = [];
//   for (let i = 0; i < a.length; i++) {
//     let number = a[i];
//     let zumber = number / (i + 1);
//     if (zumber % 2 == 0 || zumber % 2 == 1) {
//       if (zumber >= l && zumber <= r) {
//         final_array.push(true);
//       } else {
//         final_array.push(false);
//       }
//     } else {
//       final_array.push(false);
//     }
//   }
//   return final_array;
// }

// console.log(boundedRatio(a, l, r));

// function mostFrequentDigits(a) {
//   let arr = [];
//   let final_arr = [];
//   for (let i = 0; i < a.length; i++) {
//     arr = [...arr, ...String(a[i]).split("")];
//   }
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     freq[arr[i]] = (freq[arr[i]] || 0) + 1;
//   }
//   var max = 0;
//   for (let i in freq) {
//     max = Math.max(freq[i], max);
//   }
//   for (let i in freq) {
//     if (freq[i] == max) {
//       final_arr.push(Number(i));
//     }
//   }
//   return final_arr;
// }

// console.log(mostFrequentDigits([2, 33, 44]));

// function divideArray(a) {
//   let return_array = [];
//   let freq = {};
//   for (let i = 0; i < a.length; i++) {
//     freq[a[i]] = (freq[a[i]] | 0) + 1;
//   }
//   for (let i in freq) {
//     if (freq[i] > 2) {
//       return [];
//     }
//   }
//   let first = [];
//   let second = [];
//   for (let i = 0; i < a.length; i++) {
//     if (first.includes(a[i])) {
//       second.length <= a.length / 2 && second.push(a[i]);
//     } else {
//       first.length <= a.length && first.push(a[i]);
//     }
//   }
//   if (first.length > second.length) {
//     let p = first.pop();
//     second.push(p);
//   }
//   return [first, second];
// }

// console.log(divideArray([2, 1, 2, 3, 3, 4]));

function isIPv4Address(inputString) {
  let splitted = inputString.split(".");

  if (!(splitted.pop() != "0" || splitted.pop() != "1")) return false;

  for (let i = 0; i < splitted.length - 1; i++) {
    if (splitted[i] == "") return false;
    if (Number(splitted[i]) == NaN) return false;
    if (Number(splitted[i]) >= 0 && Number(splitted[i] <= 255)) {
    } else {
      return false;
    }
  }
  return true;
}

console.log(isIPv4Address("1a.254.255.0"));
function isIPv4Address(s) {
  return (
    s.split(".").every((i) => i != "" && Number(i) <= 255 && Number(i) >= 0) &&
    s.split(".").length == 4
  );
}
//  not the complete one
