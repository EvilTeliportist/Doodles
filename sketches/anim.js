
// Gameloop Pause/play
var play = true;
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        e.preventDefault();
        play = !play;
    }
}

// Actual Gameloop
const loop = setInterval(update, 10);
function update(){
  if(play){
    c.clearRect(0, 0, canvas.width, canvas.height);
    draw();
  }
}
