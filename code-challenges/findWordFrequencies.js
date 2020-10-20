
let string = 'The world is all that is the case'.split(" ");
console.log(string);

var countArray = [];
var countObj = {}
for (let index = 0; index < string.length; index++) {
    countArray.push(string[index])
    countArray.includes(string[index]) ? countObj.string[index]++ : countObj[string[index]] = 1
}
console.log(countArray)