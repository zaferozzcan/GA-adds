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

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let solution = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
  }
  return solution;
}

console.log(maxSubArray(arr));
