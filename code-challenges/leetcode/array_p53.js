let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let solution = nums[0];
  for (let i = 1; i < arr.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
  }
  return solution;
}

console.log(maxSubArray(arr));
