// [2,7,11,15] t=9

function twoSum(nums, target) {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
}
console.log([1, 3, 5, 6, 7].entries());
