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

class Pendulum {
    constructor(r1, r2, m1, m2, a1, a2){
        this.x = w/2;
        this.y = 100;
        this.r1 = r1;
        this.r2 = r2;
        this.m1 = m1;
        this.m2 = m2;
        this.a1 = a1;
        this.a2 = a2;
        this.a1_v = 0;
        this.a2_v = 0;
        this.g = 1;
    }

    draw() {
        let num1 = -this.g * (2 * this.m1 + this.m2) * Math.sin(this.a1);
        let num2 = -this.m2 * this.g * Math.sin(this.a1 - 2 * this.a2);
        let num3 = -2 * Math.sin(this.a1 - this.a2) * this.m2;
        let num4 = this.a2_v * this.a2_v * this.r2 + this.a1_v * this.a1_v * this.r1 * Math.cos(this.a1 - this.a2);
        let den = this.r1 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 * this.a1 - 2 * this.a2));
        this.a1_a = (num1 + num2 + num3 * num4) / den;

        num1 = 2 * Math.sin(this.a1 - this.a2);
        num2 = this.a1_v * this.a1_v * this.r1 * (this.m1 + this.m2);
        num3 = this.g * (this.m1 + this.m2) * Math.cos(this.a1);
        num4 = this.a2_v * this.a2_v * this.r2 * this.m2 * Math.cos(this.a1 - this.a2);
        den = this.r2 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 * this.a1 - 2 * this.a2));
        this.a2_a = (num1 * (num2 + num3 + num4)) / den;

        let x1 = this.r1 * Math.sin(this.a1) + this.x;
        let y1 = this.r1 * Math.cos(this.a1) + this.y;

        let x2 = x1 + this.r2 * Math.sin(this.a2);
        let y2 = y1 + this.r2 * Math.cos(this.a2);


        line(this.x, this.y, x1, y1);
        circle(x1, y1, this.m1);

        line(x1, y1, x2, y2);
        circle(x2, y2, this.m2);

        this.a1_v += this.a1_a;
        this.a2_v += this.a2_a;
        this.a1 += this.a1_v;
        this.a2 += this.a2_v;
    }
}
