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
  //loop thru all teh elemnts of arr1
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

console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
