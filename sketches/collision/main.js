var ball;

document.addEventListener('mouseup', (e) => {
    ball = new CollisionBall(10, 20, -1.001)
    ball.x = e.clientX;
    ball.y = e.clientY;
})

function draw(){
    if (ball){
        ball.move();
    }
}
