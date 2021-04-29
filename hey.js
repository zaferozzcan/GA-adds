let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function maxSubArraySum(nums) {
  let solution = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
  }
  return solution;
}

function twoSum(nums, target) {
  // I will have a hashmap where I will hold key valeue
  let checkhash = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - arr[i];
    if (!checkhash[difference]) {
      checkhash[difference] = i;
    } else {
      return [checkhash[difference], i];
    }
  }
  return -1;
}

console.log(twoSum([1, 4, 6, 8, 10], 16));
