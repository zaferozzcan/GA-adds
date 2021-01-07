


const arr = ["a", "b", "c", "d", "e", "f"]

function groupArr(arr, size) {
    const grouped = []
    while (arr.length > 0) {
        grouped.push(arr.slice(0, size))
        arr = arr.slice(size)
    }
    return grouped
}


console.log(groupArr(arr, 2))



// reminder slice method returns an array