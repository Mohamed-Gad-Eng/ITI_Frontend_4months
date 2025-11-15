// Third Task:- 
// Module 1
/*
    1-Create a class Employee with properties: firstName, lastName, age, salary.
    2-Add a method to class  getFullName() that returns "FirstName LastName".
    3- out class Export an array departments with some department names (["IT","HR","Finance","Sales"]).
*/

export var deps = ["IT", "HR", "Finance", "Sales"];

export class Employee {
    firstName;
    lastName;
    age;
    salary;

    constructor(fName, lName, age, salary) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.salary = salary;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}