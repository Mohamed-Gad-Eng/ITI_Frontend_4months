//1 - Define an array of numbers as numbers=[3,1,2,4,3,5,1]; 
// A - Write a JavaScript code to remove duplicate items from an array.
var arr = [3, 1, 2, 4, 3, 5, 1]

var unique = []
for (var j = 0; j < arr.length; j++) {
    var uni = false;
    for (var i = 0; i < unique.length; i++) {
        if (arr[j] == unique[i]) {
            uni = true;
        }
    }
    if (uni == false) {
        unique.push(arr[j])
    }
}
console.log(unique.join(" "));

// B - Sort them ascending

var subarr = structuredClone(arr)
subarr.sort(function (a, b) {
    return a - b;
})
console.log(subarr.join(" "));

// C - Filter numbers larger than 50
//a- User defined function 
function sortList(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 50) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(sortList(arr).join(" "));

// b- Array built in filter function
var res = arr.filter(function (val){
    if(val > 50){
        return true;
    }
    else if(val <= 50){
        return false;
    }
})

console.log(res.join(" "));

// D - Display Max and Min Numbers
function MinMax1(arr) {
    arr.sort()
    console.log(`Min is :${arr[0]} while Max is ${arr[arr.length - 1]}`)
}

function MinMax2(arr) {
    var min = arr.reduce(function (accumulator, currentValue) {
        if (currentValue < accumulator) {
            return currentValue;
        }
        return accumulator;
    })
    
    var max = arr.reduce(function (accumulator, currentValue) {
        if (currentValue > accumulator) {
            return currentValue;
        }
        return accumulator;
    })
    console.log(`Min is :${min} while Max is ${max}`)
}

function MinMax3(arr) {
    var min = Number.MAX_VALUE, max = Number.MIN_VALUE;
    var minIndex = 0, maxIndex = 0;
    for(var i = 0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            minIndex = i;
        }
        if(max< arr[i]){
            max = arr[i];
            maxIndex = i;
        }
    }
    console.log(`Min is :${min} while Max is ${max}`)
}

MinMax3(arr)


// 2 - Write a JavaScript function to Compute the sum and product of an array
function sumAll1(numbersArray){
    console.log(eval(numbersArray.join("+")));
}
sumAll1([3,1,4,5,2]);

function sumAll2(){
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum);
}
sumAll2(3,1,4,5,2);


/*******************************************************/
//Lab part 2

str = "The quick brown fox jumps over the lazy dog.";

function MyCapitalize(text){
    var myArr = [];
    var word = [];
    myArr = text.split(" ");
    for(var i = 0; i<myArr.length; i++){
        word = myArr[i].split("");
        word[0] = word[0].toUpperCase();
        myArr[i] = word.join("");
    }
    console.log(myArr.join(" "));
}

MyCapitalize(str);



str = "Write a JavaScript code to remove duplicate items from an array"

function MyLongestWord(text){
    var myArr = [];
    var max = 0, index = 0;
    myArr = text.split(" ");
    for(var i = 0; i<myArr.length; i++){
        if(myArr[i].length > max){
            max = myArr[i].length;
            index = i;
        }
    }
    console.log(myArr[index]);
}

MyLongestWord(str);