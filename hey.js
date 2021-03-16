// function candies(n, m) {
//   return m - (m % n);
// }

// function phoneCall(min1, min2_10, min11, s) {
//   if (s < min1) return 0;
//   if (s == min1) return 1;
//   if (s - min1 <= min2_10 * 9) return 1 + Math.floor((s - min1) / min2_10);
//   return Math.floor((s - min1 - min2_10 * 9) / min11 + 10);
// }

// var maxArea = function (nums) {
//   let areas = [];
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let h = Math.min(nums[left], nums[right]);
//     let w = right - left;
//     areas.push(h * w);
//     if (nums[left + 1] > Math.min(nums[left], nums[right])) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return Math.max(...areas);
// };
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
//

function isIPv4Address(s) {
  let s_arr = s.split(".");
  let ret = true;

  if (s_arr.length < 4) {
    ret = false;
  }
  if (s_arr.includes("")) {
    ret = false;
  }

  if (s_arr.pop() != "0") {
    if (s_arr.pop() != "1") {
      ret = false;
    }
  }
  s_arr.map((item) => {
    if (Number(item >= 0) && Number(item <= 255)) {
    } else {
      ret = false;
    }
  });
  return ret;
}

console.log(isIPv4Address("172.16.254.10"));
