// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


const items = [
    { name: "bike", price: 100 },
    { name: "bike", price: 70 },
    { name: "laptop", price: 30 }
]

const newArr = [10, 20, 30, 40, 50]

let total = newArr.reduce((acc, item) => {
    return acc + item
})

// console.log(total)


function operations(a, b) {
    return [{ "sum": (a + b) }, { "dif": (a - b) }, { "mul": (a * b) }, {
        "div": (a / b)
    }]
}

const myOpArray = operations(3, 4)

// console.log(myOpArray[2]);



const myObject = {
    name: "zafer",
    lastName: "ozcan",
    age: 31
}
const { name, age } = myObject

console.log(zafer);