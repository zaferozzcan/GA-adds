// test case  = A man, a plan, a canal: Panama

//before apply the solution, lets practice on regex
let myString = "aBc--dfg";

myString = myString.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

console.log(myString);
