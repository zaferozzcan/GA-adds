/*  
    Some Patterns
    - Frequency Counter 
    - Multiple Pointers
    - Sliding Window
    - Divide And Conquer
    - Dynamic Programming
    - Greedy Algorithms
    - Backtracking
 */

/*  
    FREQUENCY COUNTING PATTERN 
    This pattern uses objects or sets to collect values/frequncys of values.
    This can often avoid or O(N^2) operations with arrays/strings

    Sample problem: Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency if the values must be the same.
    Solution 👇🏻
 */

function same(arr1, arr2) {
  // check if the two arrays has the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop thru all the elemnts of arr1
  for (let i = 0; i < arr1.length; i++) {
    //get/check index of squared value of arr[i] from arr[2]
    let index = arr2.indexOf(arr1[i] ** 2);
    // return false if arr does not include the value
    if (index === -1) {
      return false;
    }
    //if includes take out the squared value from the array
    arr2.splice(index, 1);
  }
  return true;
}

// console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));

// In the solution above, there are theo loops. First one the one "for of loop" second one is "indexOf". What indexOd does is basicaliy itarating thru array.
// So that make times Complexity of Big O  O(n^2)
// thinking about refactoring the solution, we sould think how to reduce time complexity!

// 📝 TWO SEPERATE LOOPS ARE BETTER THAN TWO NESTED LOOPS!

function theSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (var num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (var num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log("the same", theSame([1, 2, 3, 4], [1, 4, 9, 16]));

function theSame2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }
  return true;
}

console.log(theSame2([], []));
