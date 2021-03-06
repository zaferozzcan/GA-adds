/* 


Big O of Merge Sort is O(nlog n)


So the idea behind it it's really a combination of two things merging and sorting.

And actually you can say it's really a combination of three things splitting up sorting and merging

all three things take place.

So it exploits the fact that arrays of zero or one element one element are already sorted.

So if you're asked to sort an array that just consists of the number one and that's it you know it's

sorted or it's just number nine it's sorted or it's empty it's sorted.

So merge so it takes advantage of that fact it works by decomposing an array into smaller arrays.

So that's something known as a divide and conquer algorithm a divide and conquer approach.

We split up the larger array we're trying to sort into smaller sub arrays all the way down.

We keep doing it until we get to zero or one element arrays.

So we would take an eight element array and split it and then split it and then split it until we end

up with eight single element arrays and then we merge them back together.
*/

// HOW TO MERGE TWO SORTED ARRAYS!

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

/*
Ok, so far I can merge sorted arrays. here below, I will focus on how to sort a chunk of array. 

Pseudo of sort implementatuon

--Break up the array nto two halves until you have arrays that area empty or have one element
-- Onece you have smaller sorted arrays, merge those aarrays with other sorted arrays until you rae back at the full length of the array
-- once the array has been merged back together, return the merged and sorted array!

sorting an array



*/

function mergeSort(arr) {
  var count = 1;
  console.log(`megerSort${count}`);
  count++;
  if (arr.length <= 1) return arr;
  //   divide the array into two
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 45, 2, 43, 56, 77, 85, 34, 22, 12]));



10 24 76 73