/*
Promise is an Object!


*/

const uno = () => {
  return "One";
};

const dos = () => {
  setTimeout(() => {
    return "Two";
  }, 1000);
};

const tres = () => {
  return "Three";
};

const callMe = () => {
  let valOne = uno();
  console.log(valOne);
  let valTwo = dos();
  console.log(valTwo);
  let valThree = tres();
  console.log(valThree);
};

callMe();
