
// Gameloop Pause/play
var play = true;
document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        e.preventDefault();
        play = !play;
    }

    if(e.keyCode == 39 && play == false){
        e.preventDefault();
        c.clearRect(0, 0, canvas.width, canvas.height);
        draw();
        time += 1;
    }

        if(e.keyCode == 37 && play == false){
            e.preventDefault();
            c.clearRect(0, 0, canvas.width, canvas.height);
            draw(true);
            time -= 1;
        }
}

// Actual Gameloop
const loop = setInterval(update, 1000 / 60);
function update(){
  if(play){
    c.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    time += 1;
  }
}
