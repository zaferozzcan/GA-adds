/*
It is similar to bubble sort, but isnted of first placing large values into sorted position, it places small values into sorted position.

Psedo
store the first element as a smallest value
compoare this item to the nexxt item in the array until you find a smaller number
if a smaller number is found, designate that the smaller number to be the new minimum and continue until the end of the array.
if the minimum is not the value you initially began with, swap two values.
*/

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
