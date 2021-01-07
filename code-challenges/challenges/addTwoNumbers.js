
//sample
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.



const addTwoNum = (arr1, arr2) => {
    var numArray = []
    let string = String((Number(arr1.reverse().join("")) + Number(arr2.reverse().join("")))).split("");
    string.forEach(n => numArray.push(Number(n)))
    console.log(numArray.reverse());
}

addTwoNum([2, 4, 3], [5, 6, 4])