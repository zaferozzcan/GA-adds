// let string1 = "I like t";
// let string2 = "e turtle";
// let count = 0;
// let finalString = "";

// string1.split("").forEach((item) => {

// });

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)

  let stringM = String(N);
  let stringN = N > 0 ? String(N) : String(N).slice(1);
  if (stringM.length == 1) {
    if (N >= 0) {
      return Number("5" + stringM);
    } else {
      return Number(stringM + "5") * -1;
    }
  }

  let first = Number("5" + stringN);

  let result = [first];
  for (let i = 1; i < stringN.length; i++) {
    let slice1 = stringN.slice(0, i);
    let slice2 = stringN.slice(i);
    Number(slice1 + "5" + slice2) && result.push(Number(slice1 + "5" + slice2));
  }

  return N > 0 ? Math.max(...result) : Math.min(...result) * -1;
}

console.log(solution(-999));
