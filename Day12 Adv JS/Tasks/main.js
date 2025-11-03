// task 1
function sum() {
    if (arguments.length > 2 || arguments.length < 2) {
        throw "Incorrect number of input parameter, Only 2 please"
    }
    console.log(arguments[0] + arguments[1]);
}

//sum(2, 3)
//sum(3)
//sum(2, 3, 7)


// task 2
function sumsUp() {
    arr = Array.from(arguments);
    if (arguments.length == 0) {
        throw "Enter at least one number"
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== Number(arr[i])) {
            throw "Please enter a valid number";
        }
    }
    sum = arr.reduce((accomulator, currentValue) => {
        return accomulator += currentValue;
    })
    console.log(`The sum = ${sum}`)
}

// sumsUp(2,6,7)
// sumsUp()
// sumsUp(2,6,NaN)
// sumsUp("3")

// task 3
function reversed_1() {
    var arr = Array.from(arguments);
    console.log(arr.reverse());
}

reversed_1(1, 2, 3, 4);


function reversed_2(...arg) {

    console.log(arg.reverse());
}

reversed_2(1, 2, 3, 4);

function reversed_3() {
    arg = [...arguments]
    console.log(arg.reverse());
}

reversed_3(1, 2, 3, 4);

// task 4
var myObject = {
    myName: "mohamed",
    myAge: 24,
    myClass: "iti",
    task: "adv_js",
    id: 234,
    getSetGen: function () {
        var mykeys = Object.keys(this);
        mykeys.forEach(ele => {
            if (ele === "getSetGen") {
                return;
            }
            this[`get${ele[0].toUpperCase() + ele.slice(1)}`] = function () {
                return this[ele];
            }
            this[`set${ele[0].toUpperCase() + ele.slice(1)}`] = function (value) {
                this[ele] = value;
            };
        });
    }
}

myObject.getSetGen();

console.log(myObject.getMyAge())

var obj = {
    id: "SD-10",
    location: "SV",
    addr: "123 st.",
    myAge:10
}

myObject.getSetGen.call(obj);
console.log(obj.getLocation())