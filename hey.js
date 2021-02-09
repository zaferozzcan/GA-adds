
function Horse(name, breed) {
  this.name = name;
  this.breed = breed
}

Horse.prototype.getDetails = function(){
  console.log(`Name:${this.name}   Breed:${this.breed}`);
}

const horse1 = new Horse("Grand Ekinoks", "Throghbreed");

horse1.getDetails();
