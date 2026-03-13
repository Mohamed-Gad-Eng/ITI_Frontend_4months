document.getElementById('startBtn').onclick = function(){
    var counter =0
    timer = setInterval(()=>{
        counter++
        document.getElementById('timer').innerHTML += counter+','
    },1000)
}

document.getElementById('stopBtn').onclick = function(){
    clearInterval(timer)
}

var myworker = new Worker('anotherScript.js')

document.getElementById('addBtn').onclick = function(){
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    myworker.postMessage([num1,num2])
}

myworker.onmessage
 = function(event){
    document.getElementById('result').innerHTML = event.data[0]
}