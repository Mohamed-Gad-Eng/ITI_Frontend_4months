console.log(this)
console.log('hiiiiiiiiiii')
onmessage = function(event){
    console.log(event)
    var sum = parseInt(event.data[0])+parseInt(event.data[1])
    this.postMessage([sum])
}