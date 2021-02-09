let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      matrix[i][j] ^= matrix[j][i];
      matrix[j][i] ^= matrix[i][j];
      matrix[i][j] ^= matrix[j][i];
    }
  }
  for (let i of matrix) {
    console.log(i);
  }
  console.log(matrix);
}

rotate(matrix);
