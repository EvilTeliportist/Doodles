// Program Inits
var canvas = document.querySelector('canvas');
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
canvas.width = w;
canvas.height = h;
var c = canvas.getContext("2d");


// Util functions
function hex(){
  return "#" + Math.random().toString(16).slice(2, 8);
}

// Drawing Functions
function circle(x, y, radius, color, border_color){
  c.strokeStyle = border_color || "#000000";
  c.fillStyle = color || "#000000";
  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.stroke();
  c.fill();
  c.fillStyle = "#000000"
  c.strokeStyle = "#000000"
}