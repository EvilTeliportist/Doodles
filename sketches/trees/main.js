var tree = new FractalTree(10, 10, 10)

function draw(){

    let off = parseInt($("#off").val());
    let depth = parseInt($("#depth").val());
    let l = parseInt($("#length").val());
    tree.set(off, depth, l);

    tree.draw();
}
