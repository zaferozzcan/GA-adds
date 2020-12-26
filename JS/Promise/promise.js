/*
Promise is an Object!
*/

const uno = () => {
  return "One";
};

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Two");
    }, 1000);
  });
};

const tres = () => {
  return "Three";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);
  let valTwo = await dos();
  console.log(valTwo);
  let valThree = tres();
  console.log(valThree);
};

// callMe();

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
