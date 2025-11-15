 export let fname="doaa"
  export let age=25;
 let std={name:"aly",grade:90}
  export let colors=["red","yellow","orange","cyan","magenta"]
  export  default class Student{
    constructor(_id,_name){
        this.id=_id;
        this.name=_name   
     }

     print(){
        console.log(`Name : ${this.name}  ID : ${this.id}  `)
     }
 }

  export function  double(num){
    return num*2
 }

 function toUpper(str){
return str.toUpperCase();
 }

 //export{fname,colors, Student,double}