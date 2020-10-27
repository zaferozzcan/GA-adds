
// the given string's ending is the same with target

function confirmEnding(str, target) {
    return str[str.length - 1] === target ? true : false
}



console.log(confirmEnding("helololol", "m")) //false

console.log(confirmEnding("helololol", "l")) // true