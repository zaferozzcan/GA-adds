

function destroyer(arr, num1, num2) {
    let result = []
    for (let item of arr) {
        if (Array.from(arguments).indexOf(item) == -1) {
            result.push(item)
        }
    }
    console.log(result);
}


destroyer([1, 2, 3, 4, 5], 1, 4)