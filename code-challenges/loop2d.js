// Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array


let arr = [[10, 20, 30],
[40, 50, 60],
[70, -80, 90]];

function largestSum(arr) {
    let rows = [];
    let columns = [];
    let diagnol = [];
    let sumDiagDown = 0;
    let sumDiagUp = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let j = 0; j < arr[i].length; j++) {
            sumRow += arr[i][j];
            sumCol += arr[j][i];
        }
        sumDiagDown += arr[i][i];
        sumDiagUp += arr[i][arr.length - 1 - i];
        rows.push(sumRow);
        columns.push(sumCol);
    }
    diagnol.push(sumDiagDown);
    diagnol.push(sumDiagUp);

    console.log(rows, columns, diagnol);
    //console.log(Math.max(Math.max(...rows), Math.max(...columns),Math.max(...diagnol)));
    return Math.max(Math.max(...rows), Math.max(...columns), Math.max(...diagnol))

}

console.log(largestSum(arr));













