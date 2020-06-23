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
    constructor(mass, x, y){
        this.x = x;
        this.y = y;
        this.r = 10;
        this.mass = mass;
        circle(this.x, this.y, this.r);
    }

    draw(){
        circle(this.x, this.y, this.r * 5);
    }

    info(){
        return [this.x, this.y, this.mass]
    }
}

class OrbitBall {
    constructor(mass, x, y){
        this.mass = mass;
        this.x = x;
        this.y = y;
        this.r = mass*10;
        this.color = hex();

        this.vx = 0;
        this.vy = 0;

        //TODO
    }

    move(black_holes){
        info = black_holes[0].info();

        //TODO
    }

    draw(){
        circle(this.x, this.y, this.r, this.color, this.color);
    }
}
