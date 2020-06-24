
// Gameloop Pause/play
var play = true;
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        e.preventDefault();
        play = !play;
    }
}

var time = 0;

// Actual Gameloop
const loop = setInterval(update, 1000 / 60);
function update(){
  if(play){
    c.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    time += 1;
  }
}
