class Shape {
  draw() {}
}

class Star extends Shape {
  draw() {
    console.log("I Draw Star");
  }
}
class Rectangel extends Shape {
  draw() {
    console.log("I Draw Rectangel");
  }
}
class Circle extends Shape {
  draw() {
    console.log("I Draw Circle");
  }
}
class Traingle extends Shape {
  draw() {
    console.log("I Draw Traingle");
  }
}

class ShapeFactory {
  constructor(shapeType) {
    this.type = shapeType;
  }
  constructShape() {
    switch (this.type) {
      case "Circle":
        return new Circle();
      case "Traingle":
        return new Traingle();
      case "Rectangel":
        return new Rectangel();
      case "Star":
        return new Star();
    }
  }
}


let shape=new ShapeFactory('Star')
let myShape=shape.constructShape()
myShape.draw()