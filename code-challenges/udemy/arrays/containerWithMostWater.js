//// You are given an array of positive integers where each integer represents the heigth of a vertical line on a chart. FInd two lines which together with x-axis forms a container what would hold the greatest amount of water. Return the area of water it would hold.

function mostWater(arr) {
  let area = 0;
  let loc = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let width = j - i;
      let heigth = Math.min(arr[i], arr[j]);
      if (width * heigth > area) {
        area = width * heigth;
        loc.push(i);
        loc.push(j);
      }
    }
  }
  return loc.slice(loc.length - 2, loc.length);
}
console.log(mostWater([7, 2, 1, 3, 10, 6]));
