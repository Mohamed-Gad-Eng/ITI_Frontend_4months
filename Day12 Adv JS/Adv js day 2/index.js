// function test(x) {
//     console.log(x);

// }


// function test(x, y) {
//     console.log(x + y);
// }


// test(10)

// function test() {
//     for (let i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] != 'number') {
//             throw `one of the arguments is not a number`
//         }
//     }

//     if (arguments.length == 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length == 2) {
//         console.log(arguments[0] + arguments[1]);
//     }
// }

// test(10)
// test(20,30)
// test("mona")

///////////////////////////////////////////////////////////////////////////////////////////
//sync vs  async

// function second() {

//     // setTimeout(function () {
//     //     console.log("two seconds");
//     // }, 2000)

//     // setTimeout(function () {
//     //     console.log("zero");
//     // }, 0)

//     setTimeout(function () {
//         console.log("second");
//     }, 2000)

// }

// function first() {
//     console.log("first");
//     second();
//     console.log("third");
// }


// first()



// let x

// setTimeout(function () {
//     x = 10
//     console.log(x);
// }, 2000)

////////////////////////////////////////////////////////////////////////////////////
//types of functions
//sum , fun

//function statement
//hoisting
// sum(2,3)

// function sum(n1=10, n2=30) {
//     console.log(n1 + n2);
// }

// sum()
// sum(2,3)


//function expression


//anonymous function

// let arr = [10, "mona", function () { console.log("Hello"); }]

// arr[2]()


// let student = {
//     id: 1,
//     name: "ali",
//     display: function () {
//         console.log(this.id, this.name);
//     }
// }

// student.display()

// fun()
// let fun = function() {
//     console.log("Javascript");
// }



//self invoked function   IIFE

// (function(){
//     let str="Hello"
//     console.log(str);
// })();


// (function(){
//     let str=10
//     console.log(str);
// })()


//arrow function
// let fun=x=>x


// console.log(fun(10));


//this , arguments

//rest parameter

// let sum=(...arg)=>{
//     // console.log(arguments);
//     console.log(arg);
// }

// sum(10,20)




// let student = {
//     id: 1,
//     name: "ali",
//     display: ()=>{
//         console.log(this);
//         console.log(this.id, this.name);
//     }
// }

// student.display()




// let emp = {
//     id: 1,
//     name: "nour",
//     salary: 2000,
//     display: function () {
//         setTimeout(function () {
//             console.log(this.id, this.name, this.salary);
//         }, 2000)
//     }
// }

// emp.display()


///////////////////////////////
//x=undefined , y , age , sum=undefined

// console.log(x);
// var x=10
// console.log(x);

// console.log(y);
// let y=20

// console.log(age);
// const age=10


// sum(2,3)
// function sum(x,y){
//     console.log(x+y);
// }


// sum(3,8)
// var sum=(x,y)=>{
//     console.log(x+y);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//callback  ,  higher order function

// setTimeout(()=>{
//   console.log("mona");
// },2000)



// btn.addEventListr("click",function(){

// })


// function outer() {  //higher order
//     let s = 10
//     console.log(s);

//     return function () {
//         console.log("returen fun");
//     }
// }

// outer()()

// let returedFun=outer()
// returedFun()


////////////////////////////////////////////////////////////////

// function displayContent(target,parentEle){
//     if(target!=parentEle){
//        alert(target.textContent)
//     }
// }
////////////////////////////////////////////////////////////////

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () { /*0     1    2   3   4 */
//         console.log(i);
//     }, 2000)
// }
/////////////////////////////////////////////////////////////

//ajax
//1
let xhr = new XMLHttpRequest()

// console.log(xhr);

//2
xhr.open('GET', "https://jsonplaceholder.typicode.com/users")


//3
xhr.send()


//4

// xhr.addEventListener('readystatechange', function () {
//     if (xhr.readyState == 4 && xhr.status==200) {
//         let users=JSON.parse(xhr.response)
//         console.log(users);
//     }
// })


xhr.addEventListener('load', function () {
    if (xhr.status == 200) {
        let users = JSON.parse(xhr.response)
        console.log(users);
    }
})




fun(2,3)

fun(2,8,7)


let student={
    id:1,
    name:"ali",
    getSetGen:function(){

    }
}

student.getSetGen()

student.setId(10)
student.getId()

student.setName("mona")
student.getName()