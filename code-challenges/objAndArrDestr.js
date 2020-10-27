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