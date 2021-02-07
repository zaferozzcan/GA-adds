// picture = ["abc", "ded"];

// // function addBorder(picture) {
// //   let borderLen = picture[0].length + 2;
// //   let top = "*".repeat(borderLen);
// //   let bottom = "*".repeat(borderLen);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// rotate 90 deg

let rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      matrix[i][j] ^= matrix[j][i];
      matrix[j][i] ^= matrix[i][j];
      matrix[i][j] ^= matrix[j][i];
    }
  }
  for (let i of matrix) {
    i = i.reverse();
  }
  console.log(matrix);
};

rotate(matrix);
