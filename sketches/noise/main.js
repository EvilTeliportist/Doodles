
function draw(){


    for (var x = 0; x < w; x++){
        for (var y = 0; y < h; y++){
            if ((x * y + time) % 67  == 0){
                pixel (x, y, [255,0,0]);
            } else if ((x * y + time) % 27  == 0) {
                pixel (x, y, [0,0,255]);
            } else {
                pixel(x, y, [255, 255, 255])
            }
        }
    }

    c.putImageData(pixels, 0, 0);
}
