//closure
// function outerFun() {

//     let s = 1
//     return function () {
//         s++
//         console.log(s);

//     }
// }


// let fun=outerFun()
// fun()

////////////////////////////////////////////////////////////////////////////////////
//data descriptor , accesor descriptor

//data descriptor
// let student={}

// Object.defineProperties(student,{
//     id:{
//         value:1,
//         writable:true,
//         configurable:false,
//         enumerable:false
//     },
//     name:{
//         value:"Nour",
//         writable:false,
//         configurable:true,
//         enumerable:true
//     }
// })

// console.log(student);
// student.id=10
// student.name="Ali"
// console.log(student);

// delete student.id
// delete student.name
// console.log(student);

// for(let k in student){
//     console.log(k);
// }


//accessor
// let employee={}

// let empName="Ali"

// Object.defineProperties(employee,{
//     name:{
//         set:function(val){
//           if(typeof val =='string' && val.length>=3 && val.length<=10){
//             empName=val
//           }
//         },
//         get:function(){
//          return empName
//         },
//         configurable:false,
//         enumerable:true
//     }
// })
//////////////////////////////////////////////////////////////////
//for in   for of

// let student={
//     id:1,
//     name:"mona"
// }

// for(let k in student){
//     console.log(k , student[k]);
// }

// let arr=[10,50,60,90]
// for(let e in arr){
//     console.log(e , arr[e]);
// }


//for of  >> array


// let arr=[10,50,60,90]
// for(let e of arr){
//     console.log(e);
// }


// let student={
//     id:1,
//     name:"mona"
// }

// for(let k of student){ ///xxxxxxxxxxxxxxxxxx
//     console.log(k);
// }

/////////////////////////////////////////////////////////////////////////

// let student={
//     id:1,
//     name:"mona"
// }

// Object.seal(student)

// student.id=10
// student.name="Nour"

// delete student.id
// delete student.name

// student.age=12

// Object.freeze(student)

// student.id=10
// student.name="Nour"

// delete student.id
// delete student.name

// student.age=12

///////////////////////////////////////////////////////////

// let mySet=new Set([10,20,30,"mona",10])
// let arr=[...mySet]
// mySet.add(10)
// mySet.add(20)
// mySet.add(30)
// mySet.add("mona")
// mySet.add(10)
// console.log(mySet.has(20));
// mySet.delete("mona")
// mySet.clear()

// for(let ele of mySet){
//     console.log(ele);
// }

//////////////////////////////////////////////////////////////

// let obj={id:1,category:"action"}

// let myMap=new Map([
//     [obj,"Movie Name"],
//     [["action","romance"],22],
//     [obj,"Movie Name"],
//     [20,"mona"],
//     [20,"nour"]
// ])
// console.log(myMap);
// myMap.set({id:1,category:"action"},"Movie Name")
// myMap.set(["action","romance"],22)
// myMap.clear()
// myMap.has(obj)
// myMap.delete(obj)


// for(let k of myMap){
//     console.log(k[0],k[1]);
// }
///////////////////////////////////////////////////////////////////////////////
//custom event
//creation
// let h3=document.querySelector('h3')
// let newEvent=new Event('randomColor')

// //handling the event
// h3.addEventListener('randomColor',function(){
//    let r=Math.trunc(Math.random()*255);
//    let g=Math.trunc(Math.random()*255)
//    let b=Math.trunc(Math.random()*255)

//     this.style.backgroundColor=`rgb(${r},${g},${b})`
// })

// setInterval(function(){
//     //fire event
//   h3.dispatchEvent(newEvent)
// },3000)
///////////////////////////////////////////////////////////////////

// let err=new ReferenceError("this is an error msg")
// throw err

// let err =new TypeError("this is a type error")
// throw err

// let err=new RangeError()

// let err=new SyntaxError()

//EvalError

//handling error

// try {
//     aalert("Hello world")
// } catch (err) {
//    console.logaa(err.message);
// //    if(err instanceof ReferenceError){

// //    }else if(err instanceof TypeError){

// //    }
   
// }finally{
//     console.log("finally");  
// }

// console.log("after catch");



// export let x=10

// export  let x=10

// export default function Employee(id,name){
//     this.id=id;
//     this.name=name
// }


// export {x,Employee}



////////////////////////////////////////////////

// function sum(n1,n2){

//     return n1+n2
// }

// console.log(sum(2,5));
 


// let name="mona"

///////////////////////////////////////////////////////////////////
//browser storage
//localStorage   ,  sessionStorage   , cookies


// document.forms[0].addEventListener('submit',function(evt){
//   evt.preventDefault()
//   let inputs=this.elements
//   let name=inputs[0].value;
//   let email=inputs[1].value

// //   localStorage.setItem("name",name)
// //   localStorage.setItem("email",email)

//   sessionStorage.setItem("name",name)
//   sessionStorage.setItem("email",email)
  
// })


// document.getElementsByTagName('button')[0].addEventListener('click',function(){

//     sessionStorage.clear()
//     // localStorage.removeItem("name")
// })


// document.getElementsByTagName('button')[1].addEventListener('click',function(){

//    let name=sessionStorage.getItem('name')
//    let email=sessionStorage.getItem('email')
//    alert(name + " " + email)
// })




document.forms[0].addEventListener('submit',function(evt){
  evt.preventDefault()
  let inputs=this.elements
  let name=inputs[0].value;
  let email=inputs[1].value
  console.log(name,email);
   let d=new Date()
   d.setMonth(d.getMonth()+3)
   
    document.cookie = `userName=${name};expires=${d}`;
  document.cookie = `email=${email};expires=${d}`
})


//document.cookie



document.getElementsByTagName('button')[0].addEventListener('click',function(){
    
  document.cookie=`userName=;email=;expires=1/1/2025`
})