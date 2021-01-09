//// You are given an array of positive integers where each integer represents the heigth of a vertical line on a chart. FInd two lines which together with x-axis forms a container what would hold the greatest amount of water. Return the area of water it would hold.

function mostWater(arr) {
  let area = 0;
  let loc = [];
  if (arr.length <= 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let width = j - i;
      let heigth = Math.min(arr[i], arr[j]);
      area = Math.max(area, width * heigth);
    }
  }
  return area;
}
console.log(mostWater([1, 7, 4, 2]));

// OPTIMAL SOLUTION \\
