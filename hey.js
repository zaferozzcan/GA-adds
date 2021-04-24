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

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let div = (arr[left] + arr[right]) / 2;
    console.log(div);
    if (div == target) return true;
    else if (div > target) {
      right--;
    } else left++;
  }
  return false;
}

console.log(averagePair([1, 2, 4], 2.5));
