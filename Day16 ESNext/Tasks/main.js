// First Task:-
/*
    1- Create a base class Person with properties: name and age.
    2-Create a subclass Teacher with property subject and method teach().
    3-Create a subclass Student with property major and method study().
    4-Create objects of Teacher and Student, then call their methods.
    5-override a method introduce() in both Teacher and Student.
*/
class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`my name is: ${this.name} and I have ${this.age} years`);
    }
}

class Teacher extends Person {
    subject;

    constructor(name, age, subj) {
        super(name, age)
        this.subject = subj;
    }

    teach() {
        console.log(`I teach ${this.subject}`);
    }

    introduce() {
        console.log(`I am a teacher, my name is: ${this.name}, I have ${this.age} years and I teach ${this.subject}`);
    }
}

class Student extends Person {
    major;

    constructor(name, age, major) {
        super(name, age)
        this.major = major;
    }

    study() {
        console.log(`I study ${this.major}`);
    }

    introduce() {
        console.log(`I am a student, my name is: ${this.name}, I have ${this.age} years and I study ${this.major}`);
    }
}

var t1 = new Teacher("Ahmed", 35, "Math");
t1.introduce();

var s1 = new Student("Wael", 12, "Science");
s1.introduce();

// Second Task:-
/*
    1-Create a base class Shape with a method calcArea().
    2-Create subclasses Rectangle and Circle, and override the calcArea() method in each.
    3-Create an array of different shapes (both rectangles and circles).
    4-Loop through the array and calculate the area  shapes.
*/

class Shape {
    calcArea() {
        throw "only to be overridden (abstract method)";
    }
}

class Rectangle extends Shape {
    length;
    width;

    constructor(l, w) {
        super();
        this.length = l;
        this.width = w;
    }

    calcArea() {
        return this.width * this.length;
    }
}

class Circle extends Shape {
    radius;

    static pi = 3.14;

    constructor(r) {
        super();
        this.radius = r;
    }

    calcArea() {
        return Circle.pi * this.radius * this.radius;
    }
}

var array = new Array(new Rectangle(3, 5), new Circle(5), new Rectangle(5, 8), new Circle(3));
array.forEach((ele) => {
    console.log(ele.calcArea());
})

