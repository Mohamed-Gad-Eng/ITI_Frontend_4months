var canvas = document.querySelector("canvas");


// get the 2D drawing context ,all we can draw
var ctx = canvas.getContext("2d");

// set fill color
ctx.fillStyle = "red";


// draw a filled rectangle at(50,50) , with width = 100 , and height = 150
ctx.fillRect(50, 50, 100, 150);

// draw another filled rectangle (square)
ctx.fillRect(150, 200, 100, 100)


// start draw with path
ctx.moveTo(200, 50) // move to starting point
ctx.lineTo(250, 150) // draw line to this point
ctx.lineTo(350, 70)  //draw line to this point
ctx.stroke();  //actually draw path


// start new path
ctx.beginPath();

ctx.lineTo(0, 0) // draw line to this point
ctx.lineTo(500, 120)
ctx.stroke();  //actually draw path
