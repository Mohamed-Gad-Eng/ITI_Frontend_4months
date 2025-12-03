// class Coffe {
//   constructor(type, cup, size, suger, topings, orderState, condition) {
//     this.type = type;
//     this.cup = cup;
//     this.size = size;
//     this.suger = suger;
//     this.topings = topings;
//     this.orderState = orderState;
//     this.condition = condition;
//   }
// }
class Coffe {
  constructor(type) {
    this.type = type;
  }
}
// let coffee1=new Coffe('Espresso','meduem',1,0,['vanilla'],'outdoor','hot')

class CoffeeBuilder {
  constructor(type) {
    this.coffiee = new Coffe(type);
  }

  setSize(size) {
    this.coffiee.size = size;
    return this;
  }
  setSuger(suger) {
    this.coffiee.suger = suger;
    return this;
  }
  setToppings(toppings) {
    this.coffiee.toppings = toppings;
    return this;
  }
  setOrderState(orderState) {
    this.coffiee.orderState = orderState;
    return this;
  }

  build() {
    return this.coffiee;
  }
}

let coffieBuilder = new CoffeeBuilder("Espresso");
let myCoffie =coffieBuilder
  .setSize(2)
  .setSuger(0)
  .setToppings(["vanilla"])
  .setOrderState("outDoor").build()
  

