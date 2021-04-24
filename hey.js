// function maxSubArraySum(arr, val) {
//   let left = 0;
//   let right = val;
//   var maxSum = 0;
//   while (right < arr.val) {
//     var tempSum = 0;
//     for (let i = left; i < right; i++) {
//       tempSum += arr[i];
//       left++;
//       right++;
//     }
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// console.log(maxSubArraySum([1, 5, 2, 3, 7, 1], 2));

// function longestSubStr(s) {
//   let left = 0;
//   let right = 1;
// }

// function sameFrequency(num1, num2) {
//   num1 = String(num1).split("");
//   num2 = String(num2).split("");
//   function freqMaker(arr) {
//     let freq = {};
//     for (let i = 0; i < arr.length; i++) {
//       freq[arr[i]] = (freq[arr[i]] | 0) + 1;
//     }
//     return freq;
//   }
//   let freq1 = freqMaker(num1);
//   let freq2 = freqMaker(num2);
//   for (let key in freq1) {
//     if (freq1[key] !== freq2[key]) return false;
//   }
//   return true;
// }

// console.log(sameFrequency(123, 331));

// function areThereDuplicates(arr) {
//   let set = new Set(arr);

//   return arr.length > set.size ? true : false;
// }

// console.log(areThereDuplicates(["a", "b", "b"]));

// function averagePair(arr, target) {
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     let otherNum = target * 2 - arr[i];
//     if (freq[otherNum]) {
//       return true;
//     } else {
//       freq[arr[i]] = otherNum;
//     }
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 6], 2.5));

// function averagePair(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let div = (arr[left] + arr[right]) / 2;
//     console.log(div);
//     if (div == target) return true;
//     else if (div > target) {
//       right--;
//     } else left++;
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 4], 2.5));

// function maxSubarraySum(arr, window) {
//   let maxSum = 0;
//   for (var i = 0; i < window; i++) {
//     maxSum += arr[i];
//   }
//   let tempSum = maxSum;
//   for (let i = window; i < arr.length; i++) {
//     tempSum += arr[i] - arr[i - window];
//     maxSum = Math.min(maxSum, tempSum);
//   }
//   console.log(maxSum);
// }

// maxSubarraySum([-1, 1, 2, 3, 4, 5, 6], 2);

// function countDown(num) {
//   if (num <= 0) {
//     console.log("All Done");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(2));

// function faq(num) {
//   if (num == 0) return 1;
//   return num * faq(num - 1);
// }

// console.log(faq(3));

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length == 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
