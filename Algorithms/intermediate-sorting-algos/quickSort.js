/*
    This algortym is also eployes recursion.

    to accomplish sort task with quuck sort, we can divide task into two part-- namely having helper function to pivot items and soting part itself


So we're going to write a function that given an array it designates an element as the pivot point and

it should rearrange the elements in the array.

So this is basically what I already said got ahead of myself.

And ahead of the slides.

Surprise surprise.

All values less than the pivot are moved to the left and all values greater than the pivot are moved

to the right.

But the order on either side doesn't matter.

It just needs to be less than the pivot and greater than the pivot on the right side.

But inside the left and right it doesn't matter what order that are in.

So the other really important thing is that this helper should do it in place.

So it should not make a new array and it should return the index of the pivot so it returns the index.

It does everything in place so don't make a new array to do it.

-------

So the first thing to discuss picking a pivot is actually an important decision.

The runtime of quicksort can change depending on where you pick the pivot from.

Ideally it should be chosen to.

It's the median value in the dataset.

If that makes sense if we had to if we could perfectly get it we would pick the middle value of our

sorted data so that the left and right sides would be equal.

---------selecting pivot Pseudo code
So write a function call it pivot or partition and accepts three arguments an array a start index and

an end index.

And I would have to start default to 0 and the end default to array length minus 1.

Then we're just going to pick the pivot from the start of the array remember and we could change it

to be from the middle or the end or a random place.

But for simplicity's sake we're picking from the very beginning and then store the current pivot index

in a variable.

So this is going to keep track of where we're going to swap that pivot to the very end.

So I'm going to walk through on the next in just a second on visual I'll go and show you what I mean.

But we're going to loop through the array from the start until the end and if the pivot is greater than

the element that we're looking at we're going to increment that pivot index variable from a pier and

then swap the current element with the element at the pivot index
*/

//////////////////////////////////////

// PIVOT HELPER IMPLEMENTATION//
// first off all the return of pivot is index --the correct index of an element

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  var pivot = arr[start];
  var swapIndex = 0;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  console.log(swapIndex);
  console.log(arr);
  return swapIndex;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
