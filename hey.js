function sortMatrixByOccurrences(m) {
  var arr = [];
  var new_arr = [];
  for (let i = 0; i < m.length; i++) {
    m[i].map((item) => arr.push(item));
  }
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = m[0].length;
  // while(right<=arr.length){

  // }
  console.log(arr);
  console.log(arr.slice(3, 6));
}

console.log(
  sortMatrixByOccurrences([
    [1, 4, -2],
    [-2, 3, 4],
    [3, 1, 3],
  ])
);
