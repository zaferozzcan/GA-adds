let s = "aba";
let n = 10;

// function repeatedString(s, n) {
//   if (s.length <= 1) return n;
//   let count = 0;
//   let occurance = 0;
//   while (count < n) {
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] == "a") {
//         occurance++;
//       }
//     }
//     count += s.length;
//   }

//   if (count - n != 0) {
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] == "a") {
//         occurance--;
//       }
//     }
//     let temp_str = s.substring(0, s.length - (count - n));
//     for (let i = 0; i < temp_str.length; i++) {
//       console.log(temp_str);
//       if (temp_str[i] == "a") {
//         occurance++;
//       }
//     }
//   }
//   return occurance + 1;
// }

function repeatedString(s, n) {
  if (!s.includes("a")) return 0;
  if (s.length <= 1) return n;
  let occurance = 0;
  let division = Math.floor(n / s.length);
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a") occurance += division;
  }
  let current_length = s.length * division;
  let needed_string_to_complete_n = n - current_length;
  for (let i = 0; i < needed_string_to_complete_n; i++) {
    if (s[i] == "a") occurance++;
  }
  return occurance;
}

console.log(repeatedString(s, n));
