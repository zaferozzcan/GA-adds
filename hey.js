function matrixElementsSum(matrix) {
  let gosted_room_index = {};
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        gosted_room_index[j] ? null : (gosted_room_index[j] = 1);
      } else {
        if (!gosted_room_index[j]) {
          total += matrix[i][j];
        }
      }
    }
  }
  return matrix;
}

let matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];
matrixElementsSum(matrix);
