// Classes
class FloatBall {
  constructor(color){
    this.r = Math.floor(Math.random() * 40)  + 10;
    this.x = Math.floor(Math.random() * (w - (2 * this.r))) + this.r;
    this.y = Math.floor(Math.random() * (h - (2 * this.r))) + this.r;
    this.color = color || "#000000";

    this.vx = (Math.random() * 10) - 5;
    this.vy = (Math.random() * 10) -5;

    circle(this.x, this.y, this.r);
  }

  info(){
    console.log("X: " + this.x);
    console.log("Y: " + this.y)
    console.log("X Velocity: " + this.vx);
    console.log("Y Velocity: " + this.vy);
    console.log("Color: " + this.color)
  }

  move(){
    this.x += this.vx;
    this.y += this.vy;

    if (this.x - this.r <= 0 || this.x + this.r >= w){
      this.vx *= -1;
    }

    if (this.y - this.r <= 0 || this.y + this.r >= h){
      this.vy *= -1;
    }

    circle(this.x, this.y, this.r, this.color, this.color);
  }
}

class GravityBall {
  constructor(mass, color){
    this.r = Math.floor(Math.random() * 40)  + 10;
    this.x = Math.floor(Math.random() * (w - (2 * this.r))) + this.r;
    this.y = Math.floor(Math.random() * (h - (2 * this.r))) + this.r;
    this.color = color || "#000000";
    this.mass = mass;

    this.vx = Math.random() * 3;
    this.vy = 0;

    this.ax = 0;
    this.ay = .3;
    this.bounce = -1;

    circle(this.x, this.y, this.r);
  }

  move(){

    this.vy += this.ay;
    this.vx += this.ax;
    this.y += this.vy;
    this.x += this.vx;

    // Bottom Check
    if (this.y > h - this.r){
        this.vy *= this.bounce;
        this.y = h - this.r;
    }

    // Top Check
    if (this.y < this.r){
        this.vy *= this.bounce;
        this.y = this.r;
    }

    // Left Check
    if (this.x < this.r){
        this.vx *= this.bounce;
        this.x = this.r;
    }

    // Right Check
    if (this.x > w - this.r){
        this.vx *= this.bounce;
        this.x = w - this.r;
    }


    circle(this.x, this.y, this.r, this.color, this.color);
    }
}

class BlackHole {
    constructor(mass, x, y, image){
        this.x = x;
        this.y = y;
        this.r = 15;
        this.mass = mass;
        this.image = image;
    }

    draw(){
        //c.drawImage(this.image, this.x - this.r, this.y - this.r, 2 * this.r, 2 * this.r)
        circle(this.x, this.y, this.r)
    }

    info(){
        return {'x': this.x, 'y': this.y, 'm': this.mass}
    }

    repos(x, y){
        this.x = x;
        this.y = y;
    }
}

class OrbitBall {
    constructor(mass, x, y){
        this.m = mass;
        this.x = x;
        this.y = y;
        this.r = 10;
        this.color = hex();

        this.vx = 5;
        this.vy = 0;

        this.g = .0001;
    }

    move(black_holes){

        this.x += this.vx;
        this.y += this.vy;


        for (var h = 0; h < black_holes.length; h++){
            var info = black_holes[h].info();

            var dx = (this.x - info['x']) / 100;
            var dy = (this.y - info['y']) / 100;
            var dr = dx**2 + dy**2;
            var dr = Math.max(dr, .5);

            var a = -1 * (this.g * info['m']) / dr;

            this.vx += (dx / dr) * a;
            this.vy += (dy / dr) * a;
        }

        this.draw();
    }

    draw(){
        circle(this.x, this.y, this.r, this.color, this.color);
    }
}
