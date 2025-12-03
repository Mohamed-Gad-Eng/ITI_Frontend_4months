class Brand {}

class Engin {
  constructor( brand) {
    this.brand = brand;
  }
}

class Car {
  constructor(engin) {
    // this.carEngin = new Engin(4000,new Brand());
    this.carEngin = engin;
  }
}

// caller object
let car1 = new Car(new Engin(new Brand()));
//IOC
