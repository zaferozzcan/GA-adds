// Given an array of integers, return the indecies of numbers that sums up to the target
// example [1,5,3,2,6,7] target thatget 13 so what numbers sums up to 13 return their indecies
// Interviewer whats you to consider about constrains before start off solition, think about them!

// In my first solution, I will try to solve this problem with two nested foor loops, which is a naive solution in terms of time complexity

function findTwoSum(arr, target) {
  if (arr.length < 2) return null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

// console.log(findTwoSum([1, 5, 3, 2, 6, 7], 13));

// the solition above is O^2 time complexity, which is considered a horibble category for a solution, So we can optimize the solution!

function optSumTwo(nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
}

// console.log(optSumTwo([1, 5, 3, 2, 6, 7], 13));

function exercise(arr, target) {
  let allNums = {};
  for (let p = 0; p < arr.length; p++) {
    let currentMapVal = allNums[arr[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      let numberToFind = target - arr[p];
      allNums[numberToFind] = p;
    }
  }
}

console.log(exercise([1, 5, 3, 2, 6, 7], 13));
