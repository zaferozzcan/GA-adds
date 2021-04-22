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

// let str = "abcabcbb";

// function lengthOfLongestSubstring(s) {
//   let set = new Set();
//   let left = 0;
//   let right = 0;
//   let maxSubArrLen = 0;

//   while (right < s.length) {
//     if (!set.has(s.charAt(right))) {
//       set.add(s.charAt(right));
//       right++;
//       maxSubArrLen = Math.max(maxSubArrLen, set.size);
//     } else {
//       set.delete(s.charAt(left));
//       left++;
//     }
//   }
//   return maxSubArrLen;
// }

// console.log(lengthOfLongestSubstring(str));

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

// const getMaxWaterContainer = function (heights) {
//   let p1 = 0,
//     p2 = heights.length - 1,
//     maxArea = 0;

//   while (p1 < p2) {
//     const height = Math.min(heights[p1], heights[p2]);
//     const width = p2 - p1;
//     const area = height * width;
//     maxArea = Math.max(maxArea, area);
//     if (heights[p1] <= heights[p2]) {
//       p1++;
//     } else {
//       p2--;
//     }
//   }
//   return maxArea;
// };

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// console.log(getMaxWaterContainer(height));

// function threeSum(nums) {
//   if (nums.length < 3 || nums.length > 3000) return [];
//   let finalArray = [];
//   let checkHash = {};

//   for (let i = 0; i < nums.length; i++) {
//     let f = i + 1;
//     let s = i + 2;
//     while (s < nums.length) {
//       if (nums[i] + nums[f] + nums[s] === 0) {
//         if (checkHash[(nums[i], nums[f], nums[s])])
//           finalArray.push([nums[i], nums[f], nums[s]]);
//       }
//       f++;
//       s++;
//     }
//   }
//   return finalArray;
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function maxSubArray(nums) {
//   let solution = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     solution = Math.max(nums[i], solution);
//   }
//   return solution;
// }
// console.log(maxSubArray(arr));

// let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
// function dirReduction(directions) {
//   let solution = [];
//   let opposites = {
//     NORTH: "SOUTH",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//     EAST: "WEST",
//   };
//   directions.map((item) => {
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

// console.log(dirReduction(directions));

let str = "abcabcdbb";

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let leng = 0;

  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      leng = Math.max(set.size, leng);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return leng;
}

console.log(lengthOfLongestSubstring(str));
