 class CEO
{
  constructor(name, age, address) {
    if (CEO.instance) {
      return CEO.instance;
    }

    this.name = name;
    this.age = age;
    this.address = address;

    CEO.instance = this;
  }
}

let ceo1 = new CEO("Mohamed Alaa", 25, "Cairo, Egypt");
let ceo2 = new CEO("Mahmoud Hamdy", 30, "Alexandria");

console.log(ceo1 === ceo2);
console.log(ceo1);
console.log(ceo2);