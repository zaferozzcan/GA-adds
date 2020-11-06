// javascript is a single-threaded language. it runs codes line by line, so it does synchronously.

// function printMe() {
//     console.log("In-Between");
// }

// console.log("Starts");

// printMe()

// console.log("Finishes");

// in the terminal we see it print out this: Start -> In-Between -> Finish


/*
console.log("Starts");

setTimeout(() => {
    // do this after a given time
    console.log("In-between")
}, 1000)
// setTimeout is sent to web apis in the browser to be taken care of, when it is time it is gotten back to the call stack to execute. that is why the codes are not blocked(not to be waited untill the five seconds is up in the setTimeout)
console.log("Finishes");

*/


// some problems arise from the synchronous behavior of JavaScript like the following.



console.log("Starts");

function logInUser(email, password) {
    setTimeout(() => {
        return { userEmail: email }
    });
}

let user = logInUser("z@gmail.com", "12345")
console.log(user);

console.log("Finishes");
// if we run the code as it above, the terminal output is like, Starts -> undefined ->Finishes
// the reason why is that the user variable is called  before its value is given because the value of it is returned in the set time out function. 

