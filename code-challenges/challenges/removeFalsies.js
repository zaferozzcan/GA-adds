// there are 6 Falsy values in JavaScript
// false, NaN, null, 0, "", undefined

function getTruthies(arr) {
    let truthies = []
    arr.forEach(elem => { if (elem) { truthies.push(elem) } })
    return truthies
}

let myArr = ["apple", "", null, "banana", "grape", true, 7]

console.log(getTruthies(myArr)) //  [ 'apple', 'banana', 'grape', true, 7 ]