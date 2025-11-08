const students = [
    { id: 1, name: "Ali", grade: 80, city: "Cairo" },
    { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
    { id: 3, name: "Omar", grade: 74, city: "Giza" },
    { id: 4, name: "Mona", grade: 88, city: "Cairo" }
];


// 1- Create a new array that contains only the names of students using arrow functions.

console.log(students.map((obj) => obj.name));

// 2- Get all students who have a grade greater than or equal to 85.(filter)

console.log(students.filter((ele) => {
    if(ele.grade >= 85)
    return ele;
}));

// 3- Find the student whose name is "Sara".( list object details)

students.filter((ele) => {
    if(ele.name >= "Sara")
    console.log(`id = ${ele.id}, name = ${ele.name}, grade = ${ele.grade}, city = ${ele.city}`);
});

// 4- Calculate the average grade of all students.(reduce)

console.log(students.reduce((accomulator, currentValue) => {
    return accomulator + currentValue.grade;
}, 0)/students.length)


// 5- Sort students by grade (descending) using arrow function in sort.

console.log(students.sort((a, b) => b.grade - a.grade));

// 6- Print Students using forEach arr fun 

students.forEach(ele => {
    console.log(`id = ${ele.id}, name = ${ele.name}, grade = ${ele.grade}, city = ${ele.city}`);
});

// 7- Make a shallow copy of the students array using spread.

subStudents1 = [...students]

// 8- Add a new student object into the array using spread.

subStudents2 = [{ id: 5, name: "Ahmed", grade: 98, city: "Tanta" }, ...students]

// 9- Suppose you have another array of students, merge it with the first array using spread

const _students = [
    { id: 5, name: "Fady", grade: 45, city: "Tanta" },
    { id: 6, name: "Salah", grade: 91, city: "Damietta" }
];

subStudents3 = [..._students, ...students]

// 10- Update "Omar"’s grade to 95 without mutating the original array (use spread inside map).

subStudents4 = students.map((val, index) => {
    if (val.name == "Omar"){
        return { ...val, grade: 95 };
    }
    return val;
})
console.log("***************")
console.log(subStudents4);

// 11- Remove the student with id = 2 using filter + spread.

subStudents5 = students.filter((ele) => {
    if(ele.id !== 2){
        return ele;
    }
})

// 12- Take out the first student and keep the rest in another array using destructuring + spread

let [first, ...rest] = students;

// 13- destruct and Extract the first student into a variable, and keep the rest into another array using rest 



// 14- Skip the first two students and store the third one in a variable.

let [,,third] = students;


// Assignment 2
// Write a function printNames(...names) that accepts any number of student objects  and
// prints their name using spread operator.

function printNames(...names){
    names.forEach(ele =>{
        console.log(`Name = ${ele.name}`)
    })
}

printNames(
    { id: 1, name: "Ali", grade: 80, city: "Cairo" },
    { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
    { id: 3, name: "Omar", grade: 74, city: "Giza" },
    { id: 4, name: "Mona", grade: 88, city: "Cairo" }   
);