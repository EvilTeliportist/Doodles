
black_holes = []
orbits = []

a = true;
document.addEventListener('mouseup', (e) => {
    if (a){
        black_holes.push(new BlackHole(10, e.clientX, e.clientY));
        a = false;
    } else {
        orbits.push(new OrbitBall(1, e.clientX, e.clientY));
    }
})



function draw(){
    for (i = 0; i < black_holes.length; i++){
        black_holes[i].draw();
    }

    for (i = 0; i < orbits.length; i++){
        orbits[i].draw();
    }
}
