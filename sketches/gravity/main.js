
var image = document.getElementById('blackhole');

black_holes = []
orbits = []

document.addEventListener('mouseup', (e) => {
    if (e.shiftKey){
        black_holes.push(new BlackHole(10000, e.clientX, e.clientY, image));
    } else {
        orbits.push(new OrbitBall(.1, e.clientX, e.clientY));
        console.log(orbits.length)
    }
})

function draw(){
    for (i = 0; i < black_holes.length; i++){
        black_holes[i].draw();
    }

    for (i = 0; i < orbits.length; i++){
        orbits[i].move(black_holes);
    }
}
