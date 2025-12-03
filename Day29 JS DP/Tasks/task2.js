class Car {
    constructor(model) {
        this.type = "Car";
        this.model = model;
    }
}

class Truck {
    constructor(model) {
        this.type = "Truck";
        this.model = model;
    }
}

class Motorcycle {
    constructor(model) {
        this.type = "Motorcycle";
        this.model = model;
    }
}


class VehicleFactory {
    constructor(vehicleType) {
        this.type = vehicleType;
    }
    createVehicle(model) {
        switch (this.type.toLowerCase()) {
            case "car":
                return new Car(model);
            case "truck":
                return new Truck(model);
            case "motorcycle":
                return new Motorcycle(model);
        }
    }
}

let v1 = new VehicleFactory("car").createVehicle("Toyota")
let v2 = new VehicleFactory("truck").createVehicle("Ford");
let v3 = new VehicleFactory("motorcycle").createVehicle("Honda");

console.log(v1);
console.log(v2);
console.log(v3);