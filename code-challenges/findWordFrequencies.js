
let string = 'The world is all that is the case'.split(" ");
console.log(string);

class Words {
    constructor(word, count) {
        this.word = word
        this.count = count
    }
}

var countArray = [];
for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < countArray.length; j++) {
        if (string[i] === countArray[j].word) {
            countArray.push(new Words(string[i], 0))
        } else {
            countArray
        }
    }
}
console.log(countArray);