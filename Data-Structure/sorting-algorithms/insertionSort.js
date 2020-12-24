/* 

Actually it's pretty similar to the bubble sort.

And two selections sort I mean grips them all together.

However there are a couple of key distinction some some things that insertion sort is actually good

at.

So this isn't one that's just good to know about.

It's not just a good challenge.

There are situations where insertion sort does well and I'll explain that as we go.

But first let's talk about how it works.

So it builds up the sort by gradually creating a larger half of the array which is always sorted.

So instead of going one instead of finding the largest element at a time or finding the smallest element

at a time it takes each element and places it where it should go in the sorted half.

*/

/* 

Pseudo code

But as far as the pseudo code what you do you start by picking the second element in the array because

our sorted portion will be considered the first element at the very beginning.

So we don't need to sort the first element.

So we take the second one and we compare it to the one before it and if necessary we swap them.

Then we continue to the next element and check if it's in the correct spot.

So we iterate through the sorted portion the left.

At this point if we've sorted two of them the left two and we figure out where to put the third one.

And we repeat until the array is sorted and then return that array. */

// implementation
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
