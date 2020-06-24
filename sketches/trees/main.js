var tree = new FractalTree(10, 100, 10)

function draw(){

    let off = parseInt($("#off").val());
    let depth = parseInt($("#depth").val());
    tree.set(off, depth);

    tree.draw();
}
