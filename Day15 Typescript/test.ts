class Student { }

let std1: Student = {};

interface Iflyable { }
let bird: Iflyable;

enum Color { }
let carColor: Color;

// Any
let changing: any = "John";

const greetings = (name: string): string => "Hello Mohamed Alaa"


// Generic 

function genericIdentity<T>(arg: T): T {
    return arg;
}
const o4 = genericIdentity<boolean>(true);
const o5 = genericIdentity<string>("true");

// Enum
enum VColor { Red = "r", Green = "g", Blue = "b" }
const col: VColor = VColor.Red;

// Interface
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

let person1: IPerson = {
    firstName: "Mohamed",
    lastName: "Gad",
    sayHi: () => "Hola"
}

// Class
class Car {
    // Fields
    color: VColor;
    engine: string;

    // Constructor
    constructor(color: VColor, engine: string) {
        this.color = color;
        this.engine = engine;
    }

    // Function

}

// Notice the following:-
// 1) Initialize at declaration
class Car1 {
    color: VColor = VColor.Red;
}

// 2) Initialize in constructor
class Car2 {
    color: VColor;
    constructor(color: VColor) { this.color = color; }
}

// 3) Definite assignment assertion (tell TS you will assign it)
class Car3 {
    color!: VColor;
    constructor() { /* assign later */ }
}

// 4) Allow undefined / optional
class Car4 {
    color?: VColor;
}

const hundai: Car = new Car(VColor.Blue, "v12")

class BMW extends Car{
    id: string;
    constructor(id:string, color:VColor, engine: string){
        super(color, engine);      // Parent Constructor
        this.id = id;
    }
}

// Interface implementation in class

interface IBase {
    getType(): string;
    prop: string;
}

class BaseClass implements IBase {
    getType(): string {
        throw new Error("Method not implemented.");
    }
    prop!: string;
}

// Static Method

class Utilities {
    getLength(arr: any[]) {
        return arr.length;
    }

    static prop1: any;

    static getFirstElement(arr: any[]){
        return arr ? arr[0] : null;
    }
}

Utilities.getFirstElement([5, 4, 2]);