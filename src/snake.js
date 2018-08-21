
class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.scl = 20;
    this.height = this.scl;
    this.width = this.scl;
    //eatenfood technically is 1 for the snake head.
    this.size = 0;
    this.tail = [];
  }

  willCollideWall(width, height) {
    const nextXMove = this.x + this.xspeed;
    const nextYMove = this.y + this.yspeed;
    console.log(this.x, 'x', this.y, 'y');
    console.log(this.xspeed, 'xspeed', this.yspeed, 'yspeed');
    if (this.x >= width/20) {
      return true;
    } else if (this.y >= width/20) {
      return true;
    } else if (this.x < 0) {
      return true;
    } else if (this.y < 0) {
      return true;
    } else {
      return false;
    }
  }
  //
  eatFood(food) {
    if ((this.x === food.x) && (this.y === food.y)) {
      this.size++;
      return true;
    } else {
      return false;
    }
  }

  direction(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  update() {
    if (this.tail.length === this.size) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.size -1] = { x: this.x, y: this.y };

    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  show(ctx) {
    ctx.fillStyle = '#b2ffe4';
    for (let i = 0; i < this.tail.length; i++) {
      let currTail = this.tail[i];
      ctx.fillRect(currTail.x * this.scl, currTail.y *
        this.scl, this.scl, this.scl);
    }
    ctx.fillStyle = '#00b273';
    ctx.fillRect(this.x * this.scl, this.y * this.scl, this.scl, this.scl);
  }
}

module.exports = Snake;
