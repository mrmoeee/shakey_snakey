const COLORS = ['red', 'blue', 'yellow'];

class Asteroid {
  constructor(options ={}) {
    this.x = options.x;
    this.y = options.y;
    this.xspeed = options.xspeed;
    this.yspeed = options.yspeed;
    this.radius = options.radius;
    this.color = this.generateColor();
  }

  generateColor() {
    let num = Math.floor(Math.random() * 3);
    return COLORS[num];
  }
  update() {
    // this.x = this.x + this.xspeed;
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed * 2;
    if ((this.x <= 500 && this.x >= 0) && (this.y <= 500 && this.y >= 0)) {
      if (this.radius > 0) {
        this.radius = this.radius - 0.5;
      }
    }
  }

  show(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
  }

  
}
module.exports = Asteroid;
