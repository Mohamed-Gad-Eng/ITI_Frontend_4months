// Third Task:- 
// Main File
/*
    1- Import everything from both modules.
    2-Create a few employees, store them in an array.
    3-Print all employees’ info on Document not console.
*/

import { Employee } from "./module1.js"
import * as model2 from "./module2.js"

model2.addEmployees(
    new Employee("ahmed", "shady", 29, 30000),
    new Employee("samy", "ahmed", 33, 7000),
    new Employee("fathy", "mohamed", 23, 12000),
    new Employee("mona", "zaki", 37, 25000)
);

var emp1 = model2.searchEmps("samy");
console.log(emp1.getFullName());

model2.raiseSalary(emp1, 3000);

var MyTable = document.querySelector("#myTable");

model2.myArray.forEach(function (elm) {
    MyTable.children[0].innerHTML += `<tr><td>${elm.firstName}</td>
    <td>${elm.lastName}</td><td>${elm.age}</td><td>${elm.salary}</td></tr>`;
})

