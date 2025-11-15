// Third Task:- 
// Module 2
/*
    1-Import the Employee class.
    2- Create functions to:
        1-Add employee(s) to an array.
        2-Find employee by name.
        3-Increase salary for an employee.
*/

import { Employee, deps } from "./module1.js";

export var myArray = new Array();

export function addEmployees(...emps) {
    myArray.push(...emps);
}

export function searchEmps(name) {
    return myArray.find((ele) => ele.firstName === name);
}

export function raiseSalary(emp, raise) {
    emp.salary += raise;
}

