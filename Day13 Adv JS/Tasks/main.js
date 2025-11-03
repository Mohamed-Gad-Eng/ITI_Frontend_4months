var myForm = document.querySelector("form");
var myEmail = document.querySelector("#email");
var myPass = document.querySelector("#pass");

var subButton = document.querySelector("#submit");

var myEvent = new Event("timeout")

var clicked = false;

myForm.addEventListener("timeout", function (e) {
    e.preventDefault();
    alert("time out");
})

setTimeout(function () {
    if (clicked == false) {
        myForm.dispatchEvent(myEvent);
    }
}, 10000)

subButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (myEmail.value == "mohamed@gmail.com" && myPass.value == "1234") {
        clicked = true;
    }
})


//////////////////////////////////////////////

// createcounter here returns a function which depend on a variable was declared and initialled in the main body of the createcounter
// so closure here takes place and the (i) is not cleared after the method is executed.
function createcounter() {
    let i = 0;
    return function () {
        i++;
        return i;
    }
}

let increasel = createcounter()
let increase2 = createcounter()

console.log(increasel())        //1
console.log(increasel())        //2
//different caller is calling the method which creates its own scope with different i value
console.log(increase2())        //1
console.log(increase2())        //2


/////////////////////////////////////////////////

// setTimeout is considered to be an asyncronous method so what happens here it that the for loop is a syncronized operation
// the setTimeout operations is pushed to the callback queue then to the call stack after the for loop is executed
console.log("*****************************")
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0)
}
// 5, 5, 5, 5, 5

////////////////////////////////////////////////

// (a) here is a global variable
var a = 10;

function foo() {
    console.log("*****************************")
    console.log(a)
}

foo()

//////////////////////////////////////////////

// foo is overriding on the value of (a) which is the (30) with the (20)
var a = 10

function foo() {
    var a = 20
    console.log("*****************************")
    console.log(a)
}

a = 30

foo()


//////////////////////////////////////////////

// the closure happens when a variable is still used from a method in another nested scope of another method so the (a) is not
// cleared from memory
function outerFunc() {
    let a = 10;
    function innerFunc() {
        console.log("*****************************")
        console.log(a);
    }
    return innerFunc;
}

let innerFunc = outerFunc();
innerFunc()


//////////////////////////////////////////////

// the (a) scope in the bar() is local so it isn't overriding the global value (10)
var a = 10

function foo() {
    console.log("******fdsgdgs***********************")
    console.log(a)
}

function bar() {
    var a = 20
    foo()
}

bar()

