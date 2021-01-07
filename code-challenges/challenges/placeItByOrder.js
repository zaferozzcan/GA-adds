

function placeItIn(arr, num) {
    // arr must be sorted
    let sorted = arr.sort((a, b) => {
        return a - b
    })

    for (let i = 0; i < arr.length; i++) {
        if (num < sorted[i]) {
            return i
        }
    }
    return sorted.length
}


console.log(placeItIn([3, 5, 1, 2, 6, 8], 4));

