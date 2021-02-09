/*
Given an integer n and an array a of length n, your task is to apply the following mutation to a:

Array a mutates into a new array b of length n.
For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].
*/
function alternatingSort(a) {
  let new_array = [];
  let left = 0;
  let right = a.length - 1;
  while (left <= right) {
    new_array.push(a[left]);
    new_array.push(a[right]);
    left++;
    right--;
  }
  new_array.pop();
  console.log(new_array);
  for (let i = 0; i < new_array.length; i++) {
    if (new_array[i + 1] <= new_array[i]) return false;
  }

  return true;
}
console.log(
  alternatingSort([-92, -23, 0, 45, 89, 96, 99, 95, 89, 41, -17, -48])
);
