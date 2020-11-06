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



// console.log("Starts");

// function logInUser(email, password) {
//     setTimeout(() => {
//         return { userEmail: email }
//     });
// }

// let user = logInUser("z@gmail.com", "12345")
// console.log(user);

// console.log("Finishes");
// if we run the code as it above, the terminal output is like, Starts -> undefined ->Finishes
// the reason why is that the user variable is called  before its value is given because the value of it is returned in the set time out function. 

//-------------------------------

// we can solve this problem by using call back functions

console.log("Starts");

function logInUser(email, password, callback) {
    setTimeout(() => {
        callback({ userEmail: email })
    });
}

let user = logInUser("z@gmail.com", "12345", (user) => {
    console.log(user);
})

console.log("Finishes");

// in sum-up, with the idea of the callback function, we can get get/call the data before the execution finishes. In the previous example, since we did not tell the call stack that we have call back wait before finish execution, it finished before the data is obtained from the source. 