// let numbers = [1, 2, 1, 3, 4];

// function isZigzag(numbers) {
//   let final_arr = [];
//   for (let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[i] > numbers[i - 1]) {
//       if (numbers[i] >= numbers[i + 1]) {
//         final_arr.push(1);
//       } else {
//         final_arr.push(0);
//       }
//     } else if (numbers[i] < numbers[i - 1]) {
//       if (numbers[i] <= numbers[i + 1]) {
//         final_arr.push(1);
//       } else {
//         final_arr.push(0);
//       }
//     }else{
//         final_arr.push(0)
//     }
//   }
//   return final_arr;
// }

// console.log(isZigzag(numbers));

function binaryPatternMatching(pattern, s) {
  let vovelList = ["a", "e", "i", "o", "u", "y"];
  let check = true;
  let pattern_index = 0;
  let final_counter = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < pattern.length; j++) {
      console.log(vovelList.includes(s[j]) ? "0" : "1", pattern[pattern_index]);
      if ((vovelList.includes(s[j]) ? "0" : "1") !== pattern[pattern_index]) {
        check = false;
      }
      pattern_index++;
    }
    pattern_index = 0;
    if (check) {
      final_counter++;
    }
  }
  return final_counter;
}

console.log(binaryPatternMatching("010", "amazing"));
