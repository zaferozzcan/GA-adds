// Given an array of integers, return the indecies of numbers that sums up to the target
// example [1,5,3,2,6,7] target thatget 13 so what numbers sums up to 13 return their indecies
// Interviewer whats you to consider about constrains before start off solition, think about them!

// In my first solution, I will try to solve this problem with two nested foor loops, which is a naive solution in terms of time complexity

function findTwoSum(arr, target) {
  if (arr.length < 2) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

console.log(findTwoSum([1, 5, 3, 2, 6, 7], 13));
