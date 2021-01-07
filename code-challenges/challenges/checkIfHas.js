

// checking an object if it contains a spesific key in it


const myObj = {
    a: 2,
    b: 3,
    c: 7
}

if (myObj.hasOwnProperty("x")) {
    console.log("here it is");
} else {
    console.log("upps not here");
}


// make a object that has words a a key from a string
const strObj = {}
let str = "Hello there there hello hello"

str.split(" ").forEach(item => {
    strObj[item] = 1
})
console.log(strObj);