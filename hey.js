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
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let h = Math.min(nums[i], nums[j]);
      let w = j - i;
      areas.push(h * w);
    }
  }
  return Math.max(...areas);
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
