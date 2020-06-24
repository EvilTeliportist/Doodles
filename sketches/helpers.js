// Program Inits
var canvas = document.querySelector('canvas');
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
canvas.width = w;
canvas.height = h;
var c = canvas.getContext("2d");

// Util Vars
var deg = Math.PI / 180;
var pixels = c.createImageData(w, h);
var time = 0; // Updated in anim.js


// Util functions
function hex(){
  return "#" + Math.random().toString(16).slice(2, 8);
}

// Drawing Functions
function circle(x, y, radius, color, border_color){
  c.strokeStyle = border_color || color || "#000000";
  c.fillStyle = color || "#000000";
  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.stroke();
  c.fill();
  c.fillStyle = "#000000"
  c.strokeStyle = "#000000"
}

function line(x, y, x1, y1, width, color){
    c.strokeStyle = color || "#000000";
    c.lineWidth = width || 1;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x1, y1);
    c.stroke();
    c.lineWidth = 1;
    c.strokeStyle = "#000000";
}

function pixel(x, y, color){
    var index = ((y * w) + x) * 4;
    pixels.data[index] = color[0]; // R value
    pixels.data[index + 1] = color[1]; // G value
    pixels.data[index + 2] = color[2]; // B Value
    pixels.data[index + 3] = color[3] || 255; // A value
}
