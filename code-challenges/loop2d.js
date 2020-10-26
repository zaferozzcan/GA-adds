
const bigArray =
    [[887, -541, -430, -590, 117, 172, -319, -18],
    [-269, 964, 209, 840, -456, 156, 365, -568],
    [289, -41, 488, 198, 240, 124, -427, 214],
    [452, 894, 968, -149, 683, 977, 741, -805],
    [181, -714, -950, 107, 800, 751, -143, 380],
    [152, 493, 707, 914, 37, 356, -625, 608],
    [-345, 906, 83, 676, 723, 381, 557, -183],
    [199, -943, -710, 565, 193, 315, 281, 245]];


function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

const transposed = transpose(bigArray)

var max = 0
bigArray.forEach(item => {
    // console.log(item);
    item.reduce((acc, i) => {
        return max > (acc + i) ? max : max = acc + i
    })
})
console.log(max);