class Bird {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  description() {
    console.log(`i am a bird ${this.name} with age ${this.age}`);
  }
  
}

const flying = {
  setIsFlying(flyState) {
    this.flyState = flyState;
  },
  fly() {
    if (this.flyState) {
      console.log("i can Fly!");
    } else {
      console.log("i can not Fly!");
    }
  },
};
const swimming = {
  setIsSwming(swimState) {
    this.swimState = swimState;
  },
  swim() {
    if (this.swimState) {
      console.log("i can SWim!");
    } else {
      console.log("i can not SWim!");
    }
  },
};

Object.assign(Bird.prototype, flying);
Object.assign(Bird.prototype, swimming);
let bird1 = new Bird("bird1", 2);
bird1.setIsFlying(true)
bird1.fly()
// console.log(bird1.name);
