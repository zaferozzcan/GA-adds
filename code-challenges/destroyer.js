
// code a function that returns an array passed without the values of the other arguments passed.

function destroyer(arr, num1, num2) {
    let result = []
    for (let item of arr) {
        if (Array.from(arguments).indexOf(item) == -1) {
            result.push(item)
        }
    }
    console.log(result);
}


destroyer([1, 2, 3, 4, 5], 1, 4) // [ 2, 3, 5 ]


function filterDestroyer(arr, num1, num2) {
    return arr.filter(item => [num1, num2].indexOf(item) === -1)
}
console.log(filterDestroyer([1, 2, 3, 4, 5], 1, 4)); //[ 2, 3, 5 ]