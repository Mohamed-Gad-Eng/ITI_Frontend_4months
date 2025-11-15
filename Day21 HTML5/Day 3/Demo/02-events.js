var red = document.querySelector(".red")
var green = document.querySelector(".green")
var yellow = document.querySelector(".yellow")


red.addEventListener("click", function (e) {
    // check if the click was directly on this element(not the child)
    // only run if clicked directly on red
    if (e.target === this) {
        alert("iam red")
    }
})

green.addEventListener("click", function (e) {
    e.stopPropagation()
    if (e.target === this) {
        alert("iam green")
    }
})



yellow.addEventListener("click", function (e) {
    e.stopPropagation
    alert("iam yellow")
})