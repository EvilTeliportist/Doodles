
function setup(){
  balls = []

  for (i = 0; i < 50; i++){
    balls.push(new Ball(hex()));
  }
}

function draw(){
  console.log(": Frame")
  for (i = 0; i < balls.length; i++){
    balls[i].move();
  }
}
