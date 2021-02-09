function greeting() {
  return function sayHi() {
    console.log("Hiey");
  };
}

greeting()();
