function twoSum(nums, target) {
  let idx = [];
  let newNums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = newNums[left] + newNums[right];
    if (sum == target) {
      idx.push(newNums[left]);
      idx.push(newNums[right]);
    }
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  console.log(nums);
  console.log(newNums);
  return [nums.indexOf(idx[0]), nums.indexOf(idx[1])];
}

console.log(twoSum([3, 2, 4], 6));
