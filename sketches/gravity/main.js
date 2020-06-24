
var image = document.getElementById('blackhole');

black_holes = []
orbits = []

document.addEventListener('mouseup', (e) => {
    if (e.shiftKey){
        black_holes.push(new BlackHole(parseInt($("#mass").val()), e.clientX, e.clientY, image));
    } else {
        if(e.clientX > 200 || e.clientY > 280){
            orbits.push(new OrbitBall(.1, e.clientX, e.clientY, parseInt($("#x").val()), parseInt($("#y").val())));
        }
    }
})

function draw(backwards){
    for (i = 0; i < black_holes.length; i++){
        black_holes[i].draw();
    }

    for (i = 0; i < orbits.length; i++){
        orbits[i].move(black_holes, backwards || false);
    }
}
