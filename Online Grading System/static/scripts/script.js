const myCanvas = document.getElementById("myCanvas");
const context = myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

context.beginPath();
context.arc(100, 100, 100, 0, 2 * Math.PI);
context.stroke();
