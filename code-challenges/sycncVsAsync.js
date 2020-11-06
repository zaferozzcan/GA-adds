// javascript is a single-threaded language. it runs codes line by line, so it does synchronously.

function printMe() {
    console.log("In-Between");
}

console.log("Starts");

printMe()

console.log("Finishes");

// in the terminal we see it print out this: Start -> In-Between -> Finish

console.log("Starts");

printMe()

console.log("Finishes");