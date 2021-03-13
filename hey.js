// function candies(n, m) {
//   return m - (m % n);
// }

// function phoneCall(min1, min2_10, min11, s) {
//   if (s < min1) return 0;
//   if (s == min1) return 1;
//   if (s - min1 <= min2_10 * 9) return 1 + Math.floor((s - min1) / min2_10);
//   return Math.floor((s - min1 - min2_10 * 9) / min11 + 10);
// }

var maxArea = function (nums) {
  let areas = [];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let h = Math.min(nums[left], nums[right]);
    let w = right - left;
    areas.push(h * w);
    if (nums[left + 1] > Math.min(nums[left], nums[right])) {
      left++;
    } else {
      right--;
    }
  }
  return Math.max(...areas);
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
