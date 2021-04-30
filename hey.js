// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function maxSubArraySum(nums) {
//   let solution = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     solution = Math.max(solution, nums[i]);
//   }
//   return solution;
// }

// function twoSum(nums, target) {
//   let storage = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (storage[nums[i]] !== undefined) return [storage[nums[i]], i];
//     storage[target - nums[i]] = i;
//   }
// }

// // console.log(twoSum([1, 4, 6, 8, 10], 16));

// function dirReduction(dirs) {
//   let solution = [];
//   let opposites = {
//     NORTH: "SOUTH",
//     SOUTH: "NORTH",
//     WEST: "EAST",
//     EAST: "WEST",
//   };

//   dirs.map((d) => {
//     if (solution.length) {
//       let prevDir = solution.pop();
//       if (prevDir !== opposites[d]) {
//         solution.push(prevDir);
//         solution.push(d);
//       }
//     } else {
//       solution.push(d);
//     }
//   });
//   return solution;
// }

// function uniqueGen(arr) {
//   newArr = arr.map((item) => {
//     let itemCharArr = item.split("");
//     let newItem = itemCharArr.sort().join("");
//     return newItem;
//   });

//   let wordFreqCounter = {};
//   for (let i = 0; i < newArr.length; i++) {
//     wordFreqCounter[newArr[i]] = (wordFreqCounter[newArr[i]] || 0) + 1;
//   }
//   let counter = 0;
//   for (let key in wordFreqCounter) {
//     if (wordFreqCounter[key] == 1) counter++;
//   }
//   return console.log(counter);
// }

// let myString = "ABCDE";
// let reqiurements = { bold: [0, 2], italic: [2, 4] };

// function domGenerator(string, reqs) {
//   let output = "";
//   let converter = { bold: ["<b>", "</b>"], italic: ["<em>", "</em>"] };
//   for (let key in reqs) {
//     output += converter[key][0];
//     output += string.substr(reqs[key][0], reqs[key][1]);
//     output += converter[key][1];
//   }
//   return output;
// }

// console.log(domGenerator(myString, reqiurements));

function nextPalindrome(number) {
  if (typeof number) return `This is an error message!`;
  if (!checkPlindrome(number)) {
    findNextPal(number);
  }
  // helper f
  function checkPlindrome(number) {
    num = String(number);
    let ifPalindrome = true;
    var left = 0;
    var right = num.length - 1;
    while (left <= right) {
      if (num[left] !== num[right]) {
        ifPalindrome = false;
      }
      if (!ifPalindrome) {
        break;
      }
      left++;
      right--;
    }
    return ifPalindrome;
  }
  function findNextPal(num) {
    if (num == 0) return 1;
    if (String(num.length) == 1) return num + 1;
  }
}

console.log(nextPalindrome(1002));
