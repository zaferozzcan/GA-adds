let char = "zafer";

// char = 20; //cannot reassign to a number. type script does type check
// this check helps developer reduce the error

let myArray = ["charmender", "balbasaur"];

//myArray.push(2); // gives an error Argument of type 'number' is not assignable to parameter of type 'string'
myArray.push("NEW POKEMON"); // This is ok!

//if you define the array that contains strings and numbers only then you can push number or any type in it

let mixedArray = [1, "one", 2, "two"];
mixedArray.push(3);
mixedArray.push("three");

//same rule applies for the objects as well

let myInfo = {
  name: "zafer",
  lastName: "ozcan",
  age: 30,
};

myInfo.age = 29; /// ththis is fine
// myInfo.age = "thirty"; // this invalid

let mixed: (String | Number)[] = []; // this enables us to initialize an empty array then we can push string and number types

mixed.push("hello");
mixed.push(20);
// mixed.push(true); // this is not allowed
