

function trncte(str, num) {
    if (str.length > 3) return str.slice(0, num - 3) + "...";
    return str.slice(0, num) + "..."
}

console.log(trncte("hel", 6))


console.log(trncte("hello there how", 10))