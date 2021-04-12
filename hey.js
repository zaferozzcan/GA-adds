// let a = [1, 2, 3];
// let b = [10, 20, 30, 40];
// let v = 42;

// function sumOfTwo(a, b, v) {
//   function diffObj(arr, target) {
//     let freq = {};
//     for (let i = 0; i < arr.length; i++) {
//       freq[target - arr[i]] = (freq[target - arr[i]] | 0) + 1;
//     }
//     return freq;
//   }
//   let freq1 = diffObj(a, v);

//   return b.some((item) => freq1[item] != undefined);
// }

// console.log(sumOfTwo(a, b, v));

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maxSubArray(nums) {
//   let solution = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     solution = Math.max(solution, nums[i]);
//   }
//   return solution;
// }

// console.log(maxSubArray(arr));

// let str = "abcabcbb";

// function lengthOfLongestSubstring(s) {
//   let mySet = new Set();
//   let left = 0;
//   let right = 0;
//   let maxSumArrLen = 0;

//   while (right < s.length) {
//     if (!mySet.has(s.charAt(right))) {
//       mySet.add(s.charAt(right));
//       maxSumArrLen = Math.max(maxSumArrLen, mySet.size);
//       right++;
//     } else {
//       mySet.delete(s.charAt(left));
//       left++;
//     }
//   }
//   return maxSumArrLen;
// }

// console.log(lengthOfLongestSubstring(str));

// let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

// let dir2 = [
//   "EAST",
//   "EAST",
//   "WEST",
//   "NORTH",
//   "WEST",
//   "EAST",
//   "EAST",
//   "SOUTH",
//   "NORTH",
//   "WEST",
// ];

// function dirReduc(dirs) {
//   let solution = [];
//   let opposites = {
//     NORTH: "SOUTH",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//     EAST: "WEST",
//   };

//   dirs.map((item) => {
//     if (solution.length) {
//       let prevItem = solution.pop();
//       if (prevItem !== opposites[item]) {
//         solution.push(prevItem);
//         solution.push(item);
//       }
//     } else {
//       solution.push(item);
//     }
//   });
//   return solution;
// }

// console.log(dirReduc(dir2));

// let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

// function dirReduc(dirs) {
//   let solution = [];
//   let opposites = {
//     NORTH: "SOUTH",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//     EAST: "WEST",
//   };
//   dirs.map((item) => {
//     if (solution.length) {
//       let lastItem = solution.pop();
//       if (lastItem !== opposites[item]) {
//         solution.push(lastItem);
//         solution.push(item);
//       }
//     } else {
//       solution.push(item);
//     }
//   });
//   return solution;
// }

// console.log(dirReduc(directions));

let str = "abcabcbb";

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxSubArrLen = 0;

  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      right++;
      maxSubArrLen = Math.max(maxSubArrLen, set.size);
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxSubArrLen;
}

console.log(lengthOfLongestSubstring(str));
