// Classes
class Ball {
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
