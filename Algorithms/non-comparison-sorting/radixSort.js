/*
Different than basic sorting algorithms--bubble sort, selection sort and insertion sort, and intermediate sorting algorithms -- merge sort, quick sort, Radix Sort does not do comparison between elements!

It exploits the fact that information about the size of the number is encoded in the number of digits.

/*
in order to implement radix sort, it is helpful to build a few helper function first.

getDigit(num, place)- returns the digit in a num at the given place value
*/

function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

// helper  for figuring out the max digits!

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(2121213));

// finding most digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/*
    Pseudo Code 

    Define a function that accepts list of numbers
    Figure out how many digits the largets number has
    Loop from k=0 up to this largest number of digits 
    For each iteration of the loop
        Create bucket for each digit  from 0 to 9 
        place each number in the corresponding bucket base on its kth digit!
    replace our existing array with values in out bucket, starting with 0 and going up to 9
    return list at the end
*/

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
