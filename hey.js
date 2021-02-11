function Car(model, make) {
  this.model = model;
  this.make = make;
}

Car.prototype.getInfo = function () {
  console.log(`Make:${this.make} \nModel:${this.model}`);
};

function SportCar(make, model) {
  Car.call(this);
  this.model = model;
  this.make = make;
}

SportCar.prototype = Object.create(Car.prototype);
let myCar = new Car("Camry", "Toyota");
let ferrari = new SportCar("Ferrari", "Italy");

ferrari.getInfo();
