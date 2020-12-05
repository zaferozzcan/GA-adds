/* Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.*/

function addTwoNumbers(l1, l2) {
  num1 = Number(String(l1).split(",").reverse().join(""));
  num2 = Number(String(l1).split(",").reverse().join(""));
  console.log(num1 + num2);
  return String(num1 + num2)
    .split("")
    .reverse()
    .map((i) => Number(i));
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
