// function twoSum(nums, target) {
//   let numObject = {};
//   for (var i = 0; i < nums.length; i++) {
//     let thisNum = nums[i];
//     numObject[thisNum] = i;
//   }
//   for (var i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
//       return [i, numObject[diff]];
//     }
//   }
// }

// console.log(twoSum([3, 3], 6));

function twoSum(nums, target) {
  var myDict = {};

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      myDict[target - nums[i]] = i;
    }
  }
  for (let key in myDict) {
    if (myDict[target - key]) {
      return [myDict[key], myDict[target - key]];
    }
  }
}

console.log(twoSum([3, 3], 6));
