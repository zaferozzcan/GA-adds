// function directionReduction(directions) {
//   let clear_path = [];
//   //   helper
//   function findOpposite(direction) {
//     if (direction == "NORTH") return "SOUTH";
//     if (direction == "SOUTH") return "NORTH";
//     if (direction == "WEST") return "EAST";
//     if (direction == "EAST") return "WEST";
//   }

//   for (let i = 0; i < directions.length; i++) {
//     let current = directions[i];
//     let next = directions[i + 1];

//     if (findOpposite(current) == next) {
//       directions.splice(i, 1);
//       directions.splice(i, 1);
//       console.log(directions);
//       //recursion

//       directionReduction(directions);
//     } else {
//       clear_path.push(directions[i]);
//     }
//   }
//   return clear_path;
// }

// console.log(
//   directionReduction([
//     "NORTH",
//     "EAST",
//     "WEST",
//     "SOUTH",
//     "WEST",
//     "SOUTH",
//     "NORTH",
//     "WEST",
//   ])
// );

// function mutateTheArray(n, a) {
//   let new_array = [];
//   for (let i = 0; i < a.length; i++) {
//     new_array[i] = (a[i - 1] ? a[i - 1] : 0) + a[i] + (a[i + 1] ? a[i + 1] : 0);
//   }
//   return new_array;
// }

// console.log(mutateTheArray(5, [4, 0, 1, -2, 3]));

let a = [1, 2, 3];
let b = [1, 2, 3];

function countTinyPairs(a, b, k) {
  let tiny_count = 0;
  let concat_array = [...a, ...b];
  let left = 0;
  let right = concat_array.length - 1;
  for (let i = 0; i < a.length; i++) {
    let left_number = concat_array[left];
    let right_number = concat_array[right];
    let concated_numbers = Number(String(left_number) + String(right_number));
    left++;
    right--;
    if (concated_numbers < k) {
      tiny_count++;
    }
  }
  return tiny_count;
}
console.log(countTinyPairs(a, b, 31));
