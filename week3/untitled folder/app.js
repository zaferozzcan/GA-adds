var numbers = [1, 2, 3, 4, 5]

const iterator = numbers[Symbol.iterator]();

// console.log(iterator.next().value);
// console.log(iterator.next().value);

let numbers2 = Array.from(numbers)
console.log(numbers)



var numbers3 = Array.of(10, 11, 12)
console.log(numbers3)


var numbers4 = Array.of(...numbers3)
console.log(numbers4)