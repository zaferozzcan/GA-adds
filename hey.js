let numbers = [1, 2, 1, 3, 4];

function isZigzag(numbers) {
  let final_arr = [];
  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i - 1]) {
      if (numbers[i] >= numbers[i + 1]) {
        final_arr.push(1);
      } else {
        final_arr.push(0);
      }
    } else if (numbers[i] < numbers[i - 1]) {
      if (numbers[i] =< numbers[i + 1]) {
        final_arr.push(1);
      } else {
        final_arr.push(0);
      }
    }
  }
  return final_arr;
}

console.log(isZigzag(numbers));
