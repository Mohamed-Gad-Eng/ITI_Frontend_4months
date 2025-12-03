class ToyDuck {
    constructor(color, price) {
        this.color = color;
        this.price = price;
    }
}

class ToyCar {
    constructor(color, price, name) {
        this.color = color;
        this.price = price;
        this.name = name;
    }
}

class ToyFactory {
    constructor(toyType) {
        this.type = toyType;
    }

    createToy(options) {
        switch (this.type.toLowerCase()) {
            case "duck":
                return new ToyDuck(options.color, options.price);

            case "car":
                return new ToyCar(options.color, options.price, options.name);
        }
    };
}


let duck = new ToyFactory("duck").createToy({
    color: "yellow",
    price: 10
});

let car = new ToyFactory("car").createToy({
    color: "red",
    price: 50,
    name: "Ferrari"
});

console.log(duck);
console.log(car);
