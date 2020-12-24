/*
It is a sorting algorithm where the largest values bubble up to the top!

The way that bubble sort works is that as we loop through each item we compare it to the next item the

one in front of it and we check.

Is this one larger than what we're comparing it to.

And if it is we swap.

So swapping is really important to bubble sort is how it works you basically swap if something is larger

and then you compare it to the next one.

Is it larger swap again compared to the next one.


Pseudo
--Start looping with outre loop i 
--have inner loop j
-- if if arr[j] > arr[j+1], swap those walues
-- return the sorted array
*/

let my_arr = [29, 10, 14, 7];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // var temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //es 2015 up
      }
    }
  }
  console.log(arr);
}

console.log(bubbleSort(my_arr));
