function Shape() {
    if (this.constructor == Shape) {
        throw "cannot create object from an abstract constructor"
    }
    this.arr = Array.from(arguments);
}

Shape.prototype.Perimeter = function () {
    return this.arr.reduce((accumulator, currentValue) => {
        return accumulator += currentValue;
    })
}

function Rectangle(width, height) {
        if(Rectangle.instanceCounter > 1){
        throw "you cannot create more than One objects";
    }
    if(this.constructor == Rectangle){
        Rectangle.instanceCounter++;
    }
    
    Rectangle.counter++;
    Shape.call(this, width, width, height, height)
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.Area = function () {
    return this.height * this.width;
}

Rectangle.counter = 0;
Rectangle.instanceCounter = 0;

// Rectangle.prototype.Perimeter = function () {
//     return (this.height + this.width) * 2;
// }

Rectangle.prototype.toString = function () {
    return `The height = ${this.height}, the width = ${this.width}, the perimeter = ${this.Perimeter()} and the area = ${this.Area()}`;
}

Rectangle.GetCountOfInstances = function () {
    return this.counter;
}
Rectangle.GetCountOfInstancesCreatedByRectangle = function () {
    return this.instanceCounter;
}

rec1 = new Rectangle(2, 4);
console.log("****************************")
console.log(rec1.Area())
console.log(rec1.Perimeter())
console.log(rec1.toString())
console.log(Rectangle.GetCountOfInstances())
console.log(Rectangle.GetCountOfInstancesCreatedByRectangle())


////////////////////////////////////



function Square(length){
    if(this.constructor == Square){
        Square.instanceCounter++;
    }
    if(Square.instanceCounter > 1){
        throw "you cannot create more than One objects";
    }
    Rectangle.call(this,length,length);
    // this.length = length;
}

Square.instanceCounter = 0;

Square.GetCountOfInstances = function(){
    return this.counter;
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square;

var sqr1 = new Square(5)
console.log("****************************")
console.log(sqr1.Area())
console.log(sqr1.Perimeter())
console.log(sqr1.toString())

console.log(Rectangle.GetCountOfInstances())
console.log(Rectangle.GetCountOfInstancesCreatedByRectangle())

var sqr2 = new Square(7)