/* Given an numsay of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].  */
function twoSum_On_Best(nums, target) {
  let numObject = {};
  for (var i = 0; i < nums.length; i++) {
    let thisNum = nums[i];
    numObject[thisNum] = i;
  }
  for (var i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
      return [i, numObject[diff]];
    }
  }
}
console.log(twoSum_On_Best([2, 7, 11, 15], 9));
// Output [ 0, 1 ]
