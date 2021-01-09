/* Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero. Hey! the solution set must not contain duplicate triplets. */

function threeSum(nums) {
  if (nums.length < 3 || nums.length > 3000) return [];
  let finalArray = [];
  let checkHash = {};

  for (let i = 0; i < nums.length; i++) {
    let f = i + 1;
    let s = i + 2;
    while (s < nums.length) {
      console.log(nums[i], nums[f], nums[s]);
      if (nums[i] + nums[f] + nums[s] === 0) {
        finalArray.push([nums[i], nums[f], nums[s]]);
      }
      f++;
      s++;
    }
  }
  return finalArray;
}

console.log(threeSum([0, 0, 0, 0]));
